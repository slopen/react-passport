import passport from 'passport';
import Strategy from 'passport-instagram';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.instagram;

export const authenticate =
	passport.authenticate ('instagram', {scope: ['basic']});

export const callback = [
	passport.authenticate ('instagram', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (token, tokenSecret, profile, cb) =>
		cb (null, await verify (profile))
	);