import passport from 'passport';
import {Strategy} from 'passport-dropbox-oauth2';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.dropbox;

export const authenticate =
	passport.authenticate ('dropbox-oauth2');

export const callback = [
	passport.authenticate ('dropbox-oauth2', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (token, tokenSecret, profile, cb) =>
		cb (null, await verify (profile))
	);