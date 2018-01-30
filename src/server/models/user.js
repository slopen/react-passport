import crypto from 'crypto';

import BaseModel from './model';
import Schema from '../schemas/user';

import config from '../../../config';


const Name = 'User';
const options = config.auth.local;

const genRandomString = (length) =>
	crypto
		.randomBytes (Math.ceil (length / 2))
		.toString ('hex')
		.slice (0, length);

const sha256 = (password, passwordSalt) => {
	const passwordHash = crypto
		.createHmac (options.algorythm, passwordSalt)
		.update (password)
		.digest ('hex');

	return {
		passwordSalt,
		passwordHash
	};
};

const saltHashPassword = (password) =>
	sha256 (password, genRandomString (options.saltLength));

const user2JSON = (model) => {
	const data = BaseModel.toJSON (model)

	delete data.passwordHash;
	delete data.passwordSalt;

	return data;
};

class User extends BaseModel {

	static toJSON (model) {
		if (Array.isArray (model)) {
			return model.map ((item) =>
				user2JSON (item)
			);
		} else {
			return user2JSON (model);
		}
	}

	async signup ({username, password}) {
		if (!username || !password) {
			throw new Error ('username and password are required');
		}

		const [existing] = await super.find ({username});

		if (existing) {
			throw new Error ('username taken');
		}

		const model = await super.create ({
			username,
			...saltHashPassword (password)
		});

		return await model.save ();
	}

}

export const toJSON = User.toJSON;
export default new User ({Name, Schema});