import express from 'express';

import auth from '../auth';
import passport from '../auth/passport';
import {authenticate as authenticateLocal} from '../auth/local';


export default express.Router ()

	.use (passport.initialize ())
	.use (passport.session ())

	.use ('/auth', auth)

	.post ('/', authenticateLocal)

	.get ('/', async (req, res) => {
		if (req.isAuthenticated ()) {
			res.json (req.session.passport.user);
		} else {
			res.status (401).json ({
				error: '401',
				message: 'Authentication required'
			});
		}
	})

	.delete ('/', (req, res) => {
		req.logout ();

		res.json ({
			signout: true
		});
	});