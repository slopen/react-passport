import passport from 'passport';
import {Strategy} from 'passport-vkontakte';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.vkontakte;

export const authenticate =
	passport.authenticate ('vkontakte');

export const callback = [
	passport.authenticate ('vkontakte', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (accessToken, refreshToken, params, profile, cb) => {
		if (params.email) {
			profile.emails = [{value: params.email}];
		}
		cb (null, await verify (profile))
	});