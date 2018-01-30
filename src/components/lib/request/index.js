const stringify = (body) =>
	typeof body === 'object'
		? JSON.stringify (body)
		: null;

export default ({
	uri,
	method = 'GET',
	headers,
	body
}) =>
	fetch (uri, {
		method,
		headers: {
			...headers,
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		cache: 'default',
		body: stringify (body),
		credentials: 'include',
		mode: 'cors'
	})
		.catch (() => {
			throw new Error (`cannot fetch ${uri}`);
		})
		.then ((res) => {
			if (res.ok) {
				return res.json ();
			} else if (res.status === 401) {
				throw new Error ('Invalid Credentials');
			}

			return res.json ()
				.then ((res) => {
					throw new Error (res.message || res.error || res);
				});
		});