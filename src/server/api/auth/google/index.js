import passport from 'passport';
import {Strategy} from 'passport-google-oauth20';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.google;

export const authenticate =
	passport.authenticate ('google');

export const callback = [
	passport.authenticate ('google', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (token, tokenSecret, profile, cb) =>
		cb (null, await verify (profile))
	);