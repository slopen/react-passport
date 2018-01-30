import mongoose from 'mongoose';

const {Schema} = mongoose;

export default new Schema ({

	username: {
		type: String,
		unique: true
	},

	picture: {
		type: String
	},

	// local

	passwordHash: {
		type: String
	},

	passwordSalt: {
		type: String
	},


	// social auth

	facebookId: {
		type: String
	},

	twitterId: {
		type: String
	},

	instagramId: {
		type: String
	},

	githubId: {
		type: String
	},

	linkedinId: {
		type: String
	},

	flickrId: {
		type: String
	},

	pinterestId: {
		type: String
	},

	redditId: {
		type: String
	},

	stackexchangeId: {
		type: String
	},

	googleId: {
		type: String
	},

	vkontakteId: {
		type: String
	},

	dropboxId: {
		type: String
	}

});
