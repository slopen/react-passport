import passport from 'passport';
import Strategy from 'passport-github';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.github;

export const authenticate =
	passport.authenticate ('github');

export const callback = [
	passport.authenticate ('github', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (token, tokenSecret, profile, cb) =>
		cb (null, await verify (profile))
	);