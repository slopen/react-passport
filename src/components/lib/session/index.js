export const getUser = () => {
	try {
		return JSON.parse (
			sessionStorage.getItem ('user')
		);
	} catch (e) {
		return null;
	}
};

export const getSession = () => {
	try {
		return JSON.parse (
			sessionStorage.getItem ('session')
		);
	} catch (e) {
		return null;
	}
};

export const setUser = (user) =>
	sessionStorage.setItem ('user', JSON.stringify (user));

export const removeUser = () =>
	sessionStorage.removeItem ('user');


export const setSession = (session) =>
	sessionStorage.setItem ('session', JSON.stringify (session));

export const removeSession = () =>
	sessionStorage.removeItem ('user');