import path from 'path';
import http from 'http';

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import compression from 'compression';

import config from '../../config';

import connectDb from './db';
import html from './html';
import api from './api';

const {
	name: NAME,
	port: PORT,
	contentBase
} = config;

const PUBLIC_PATH = path.resolve (__dirname, contentBase);
const MongoStore = connectMongo (session);

(async () => {

	const mongooseConnection = await connectDb ();

	// express server
	const app = express ()

		.all ('*', (req, res, next) => {

			// disable cors
			res.header ('Access-Control-Allow-Credentials', true);
			res.header ('Access-Control-Allow-Origin', req.headers.origin || '*');
			res.header ('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
			res.header ('Access-Control-Allow-Headers', 'X-Requested-With,X-HTTP-Method-Override,Content-Type,Accept');

			if (req.method === 'OPTIONS') {
				return res.send (200);
			}

			next ();
		})

		.use (session ({
			resave: true,
			saveUninitialized: true,
			secret: 'secret do not tell',
			store: new MongoStore ({
				mongooseConnection
			})
		}))

		.use (cookieParser ())

		.use (compression ())
		.use (express.static (PUBLIC_PATH))

		.use (bodyParser.urlencoded ({
			extended: true
		}))

		.use (bodyParser.json ())
		.use (methodOverride ())

		.use ('/api', api)

		.get ('*', (req, res) => {
			res.send (html ({NAME}))
		});

	http
		.createServer (app)
		.listen (PORT, async () => {
			const {name, port} = mongooseConnection;

			console.log (`* ${NAME} server started on port ${PORT}`);
			console.log (`* ${NAME} mongoose connected to ${port}/${name}`);
		});
}) ();