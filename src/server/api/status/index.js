import express from 'express';
import connectDb from '../../db';

export default express.Router ()

	.use ('/', async (req, res) => {
		try {
			const {name} = await connectDb ();

			res.json ({
				status: 'ok',
				name
			});
		} catch ({message}) {
			res.status (500).json ({
				error: '500',
				message
			})
		}
	});