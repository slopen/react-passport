import User, {toJSON} from '../../../models/user';


export default async (profile) => {
	const picture = profile._json.profile_photo_url;
	const username = profile.emails [0].value;
	const data = {picture, dropboxId: profile.id};

	let [user] = await User.find ({username});

	user = user
		? await User.update (user._id, data)
		: await User.create ({username, ...data});

	return toJSON (user);
}