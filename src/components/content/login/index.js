import React, {Component} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {
	Alert,
	Container
} from 'reactstrap';

import config from 'components/config';

import Loader from 'components/loader';
import ErrorMessage from 'components/error';
import Form from './form';
import SocialLogin from '../social';

import {login, getSession} from 'components/lib/auth'

export default class Login extends Component {

	static propTypes = {
		history: propTypes.object.isRequired
	}

	constructor (props) {
		super (props);

		this.state = {};

		// autobinds
		this.onError = this.onError.bind (this);
		this.onAccept = this.onAccept.bind (this);
		this.onAuthenticated = this.onAuthenticated.bind (this);
	}

	componentWillUnmount () {
		this._mounted = false;
	}

	componentDidMount () {
		this._mounted = true;

		getSession ()
			.then (this.onAuthenticated)
			.catch (() =>
				console.log ('not logged in')
			);
	}

	onError ({message}) {
		this.setState ({
			error: message,
			loading: false
		});
	}

	onAccept (values) {
		const {username, password} = values;

		this.setState ({
			loading: true,
			error: null
		});

		login (username, password)
			.then (this.onAuthenticated)
			.catch (this.onError);
	}

	onAuthenticated () {
		this.props.history.push (
			config.defaultPage
		);
	}

	render () {
		const {
			error,
			loading
		} = this.state;

		return (
			<div className="entry-form login">
				<Container className="login-container">

					<SocialLogin/>

					{loading ? (
						<Loader/>
					) : null}

					{error ? (
						<Alert color="danger" className="text-center">
							<ErrorMessage message={error}/>
						</Alert>
					) : null}

					<Form onAccept={this.onAccept}/>

					<div className="mt-2 text-center text-capitalize">
						<Link to="/signup">
							sign up
						</Link>
					</div>

				</Container>
			</div>
		);
	}
}