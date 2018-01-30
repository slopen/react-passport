// eslint-disable-next-line no-process-env
const PRODUCTION = process.env.NODE_ENV === 'production';
const apiBase = '/api';

export default {

	PRODUCTION,

	apiBase,

	apiAuth: `${apiBase}/session`,

	defaultPage: '/',

	commonResponseError: 'something went wrong'
}