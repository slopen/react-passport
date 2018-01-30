import crypto from 'crypto';
import passport from 'passport';
import {Strategy} from 'passport-reddit';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.reddit;

export const authenticate = (req, res, next) => {
	req.session.state = crypto
		.randomBytes (32)
		.toString ('hex');

	passport.authenticate ('reddit', {
		state: req.session.state,
		duration: 'permanent'
	}) (req, res, next);
};

export const callback = (req, res, next) => {
	if (req.query.state === req.session.state) {

		passport.authenticate ('reddit', {
			successRedirect: '/',
			failureRedirect: '/login'
		}) (req, res, next);

	} else {
		next (new Error (403));
	}
}

export default new Strategy (options,
	async (token, tokenSecret, profile, cb) =>
		cb (null, await verify (profile))
	);