import passport from 'passport';
import {Strategy} from 'passport-flickr';

import verify from './verify';
import config from '../../../../../config';


const options = config.auth.flickr;

export const authenticate =
	passport.authenticate ('flickr');

export const callback = [
	passport.authenticate ('flickr', {failureRedirect: '/login'}),
	(req, res) => res.redirect('/')
];

export default new Strategy (options,
	async (token, tokenSecret, profile, cb) =>
		cb (null, await verify (profile))
	);