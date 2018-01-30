import config from 'components/config';
import request from 'components/lib/request';

const {apiBase} = config;


export const signup = (username, password) =>
	request ({
		uri: `${apiBase}/signup`,
		method: 'POST',
		body: {
			username,
			password
		}
	});