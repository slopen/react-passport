import React from 'react';

import {createBrowserHistory} from 'history';
import {Route, Router, Switch} from 'react-router-dom';

import App from 'components/routes/app';
import Login from 'components/content/login';
import Signup from 'components/content/signup';

import restricted from './restricted';


const history = createBrowserHistory ();

export default () =>
	<Router
		history={history}>

		<Switch>
			<Route
				exact
				path="/login"
				component={Login}/>

			<Route
				exact
				path="/signup"
				component={Signup}/>

			<Route
				component={restricted (App)}/>
		</Switch>
	</Router>

