import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from 'components/header';
import Home from 'components/content/home';
import NotFound from 'components/content/not-found';


export default ({history}) =>
	<div className="app">
		<Header history={history}/>

		<div className="app-content pb-5">
			<Switch>
				<Route
					exact
					path="/"
					component={Home}/>

				<Route
					exact
					path="*"
					component={NotFound}/>
			</Switch>
		</div>
	</div>
