import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {getSession} from 'components/lib/auth';
import {setUser} from 'components/lib/session';

import Loader from 'components/loader';


let redirectCounter = 0;

export default (BaseComponent) => {

	class Restricted extends Component {
		constructor (props) {
			super (props);

			this.state = {
				authenticated: false
			};
		}

		componentDidMount () {
			this._mounted = true;
		}

		componentWillUnmount () {
			this._mounted = false;
		}

		componentWillMount () {
			this.checkAuthentication (this.props);
		}

		componentWillReceiveProps (nextProps) {
			if (nextProps.location !== this.props.location) {
				this.checkAuthentication (nextProps);
			}
		}

		checkAuthentication (params) {
			const {history} = params;

			getSession ()
				.then (setUser)
				.then (() => {
					if (this._mounted) {
						this.setState ({
							authenticated: true
						});
					}
				})
				.catch (({message}) => {
					redirectCounter++;

					if (redirectCounter < 3) {
						history.replace ({
							pathname: '/login'
						});

						if (message !== 'Invalid Credentials') {
							throw new Error (message);
						}
					} else {
						redirectCounter = 0;

						console.error ('too much redirects', message);
					}
				});
		}

		render () {
			return this.state.authenticated ? (
				<BaseComponent {...this.props}/>
			) : <Loader/>;
		}
	}

	return withRouter (Restricted);
}
