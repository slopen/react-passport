import passport from 'passport';
import {Strategy} from 'passport-local';
import verify from './verify';

export const authenticate = (req, res, next) =>
	passport.authenticate ('local', (err, user, info) => {
		if (err || !user) {
			return res
				.status (401)
				.json (info);
		}

		req.login (user, () =>
			res.json ({user})
		);

	}) (req, res, next);

export default new Strategy ({
		usernameField: 'username',
		passwordField: 'password'
	}, async (username, password, cb) => {
		const user = await verify (username, password);

		if (user) {
			return cb (null, user);
		}

		cb (null, false, {
			error: '400',
			message: 'invalid credentials'
		});
	});