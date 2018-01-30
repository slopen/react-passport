import config from 'components/config';
import request from 'components/lib/request';

const {apiBase} = config;


export const login = (username, password) =>
	request ({
		uri: `${apiBase}/session`,
		method: 'POST',
		body: {
			username,
			password
		}
	});

export const logout = () =>
	request ({
		uri: `${apiBase}/session`,
		method: 'DELETE'
	})
		.then (() =>
			window.location.href = '/'
		);


export const getSession = () =>
	request ({
		uri: `${apiBase}/session`
	});