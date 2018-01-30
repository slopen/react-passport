import mongoose from 'mongoose';

import config from '../../../config';

const {name, mongodb} = config;
const {connstr, options} = mongodb;

let connection = null;

mongoose.Promise = global.Promise;

mongoose
	.connection
	.on ('connecting', () => {
		console.log (`* ${name} connecting to mongodb`);
	})
	.on ('error', ({message}) => {
		console.error ('* error in mongodb:', message);

		setTimeout (() => mongoose.disconnect ());
	})
	.on ('connected', () => {
		console.log (`* ${name} mongodb connected`);
	})
	.once ('open', () => {
		console.log (`* ${name} mongodb connection opened`);
	})
	.on ('reconnected', () => {
		console.log (`* ${name} mongodb reconnected`);
	})
	.on ('disconnected', () => {
		console.log (`* ${name} mongodb disconnected`);

		setTimeout (() =>
			connection = mongoose.connect (connstr, options)
		);
	});

connection = mongoose.connect (connstr, options);

export default connection;