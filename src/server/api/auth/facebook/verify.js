import User, {toJSON} from '../../../models/user';


export default async (profile) => {
	const picture = profile.photos [0].value;
	const username = profile.emails [0].value;
	const data = {picture, facebookId: profile.id};

	let [user] = await User.find ({username});

	user = user
		? await User.update (user._id, data)
		: await User.create ({username, ...data});

	return toJSON (user);
}