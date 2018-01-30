import User, {toJSON} from '../../../models/user';


export default async (profile) => {
	const picture = profile.profileImage.url;
	const username = profile.username;
	const data = {picture, pinterestId: profile.id};

	let [user] = await User.find ({username});

	user = user
		? await User.update (user._id, data)
		: await User.create ({username, ...data});

	return toJSON (user);
}