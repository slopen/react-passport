import passport from 'passport';

import localStrategy from './local';
import facebookStrategy from './facebook';
import twitterStrategy from './twitter';
import instagramStrategy from './instagram';
import githubStrategy from './github';
import linkedinStrategy from './linkedin';
import flickrStrategy from './flickr';
import pinterestStrategy from './pinterest';
import redditStrategy from './reddit';
import stackexchangeStrategy from './stackexchange';
import googleStrategy from './google';
import vkontakteStrategy from './vkontakte';
import dropboxStrategy from './dropbox';


passport
	.serializeUser ((user, cb) =>
		cb (null, user)
	);

passport
	.deserializeUser ((user, cb) =>
		cb (null, user)
	);

passport
	.use (localStrategy)
	.use (facebookStrategy)
	.use (twitterStrategy)
	.use (instagramStrategy)
	.use (githubStrategy)
	.use (linkedinStrategy)
	.use (flickrStrategy)
	.use (pinterestStrategy)
	.use (redditStrategy)
	.use (stackexchangeStrategy)
	.use (googleStrategy)
	.use (vkontakteStrategy)
	.use (dropboxStrategy);


export default passport;