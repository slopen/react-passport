import passport from 'passport';
import {Strategy} from 'passport-pinterest';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.pinterest;

export const authenticate =
	passport.authenticate ('pinterest');

export const callback = [
	passport.authenticate ('pinterest', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (token, tokenSecret, profile, cb) =>
		cb (null, await verify (profile))
	);