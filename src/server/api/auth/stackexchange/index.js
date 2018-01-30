import passport from 'passport';
import {Strategy} from 'passport-stack-exchange';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.stackexchange;

export const authenticate =
	passport.authenticate ('stack-exchange');

export const callback = [
	passport.authenticate ('stack-exchange', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (token, tokenSecret, profile, cb) =>
		cb (null, await verify (profile))
	);