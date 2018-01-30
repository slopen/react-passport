import passport from 'passport';
import Strategy from 'passport-linkedin';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.linkedin;

export const authenticate =
	passport.authenticate ('linkedin');

export const callback = [
	passport.authenticate ('linkedin', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (token, tokenSecret, profile, cb) =>
		cb (null, await verify (profile))
	);