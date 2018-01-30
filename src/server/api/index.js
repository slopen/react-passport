import express from 'express';

import status from './status';
import session from './session';
import signup from './signup';


export default express.Router ()

	.use ('/status', status)
	.use ('/session', session)
	.use ('/signup', signup)

	.use ('*', (req, res) => {
		res.status (404).json ({
			error: '404',
			message: `${req.originalUrl} not found`
		});
	});