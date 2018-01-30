import reconnect from './reconnect';

export default async () =>
	new Promise (async (resolve, reject) => {
		try {
			resolve (await reconnect);
		} catch (error) {
			reject (error);
		}
	});
