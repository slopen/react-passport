import passport from 'passport';
import Strategy from 'passport-twitter';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.twitter;

export const authenticate =
	passport.authenticate ('twitter');

export const callback = [
	passport.authenticate ('twitter', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (token, tokenSecret, profile, cb) =>
		cb (null, await verify (profile))
	);