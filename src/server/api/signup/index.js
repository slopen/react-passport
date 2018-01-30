import express from 'express';

import User, {toJSON} from '../../models/user';

export default express.Router ()

	.use ('/', async (req, res) => {
		try {
			res.json (
				toJSON (
					await User.signup (req.body)
				)
			);
		} catch ({message}) {
			res.status (500).json ({
				error: '400',
				message
			})
		}
	});