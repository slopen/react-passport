const env = require ('process-env');
const PRODUCTION = env.get ('NODE_ENV') === 'production';
const {name, port} = require ('./defaults.json');

const auth = PRODUCTION
	? require ('./auth.prod.json')
	: require ('./auth.dev.json');

// eslint-disable-next-line no-process-env
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


module.exports = {

	name,
	port,

	PRODUCTION,

	devPort: 4010,

	contentBase: PRODUCTION
		? '../client'
		: '../',

	mongodb: {
		connstr: 'mongodb://localhost:27017/' + name,

		options: {
			useMongoClient: true,
			autoReconnect: true,
			reconnectInterval: 1000
		}
	},

	auth
};