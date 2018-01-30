import passport from 'passport';
import Strategy from 'passport-facebook';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.facebook;

export const authenticate =
	passport.authenticate ('facebook');

export const callback = [
	passport.authenticate ('facebook', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (accessToken, refreshToken, profile, cb) =>
		cb (null, await verify (profile))
	);