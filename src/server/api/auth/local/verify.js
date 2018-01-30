import crypto from 'crypto';
import User, {toJSON} from '../../../models/user';

import config from '../../../../../config';


const options = config.auth.local;

export default async (username, password) => {
	const [user] = await User.find ({username});

	if (!user) {
		return null;
	}

	const passwordHash = crypto
		.createHmac (options.algorythm, user.passwordSalt)
		.update (password)
		.digest ('hex');

	return passwordHash === user.passwordHash
		? toJSON (user)
		: null;
}