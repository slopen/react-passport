import express from 'express';

import {
	callback as callbackFacebook,
	authenticate as authenticateFacebook
} from './facebook';

import {
	callback as callbackTwitter,
	authenticate as authenticateTwitter
} from './twitter';

import {
	callback as callbackInstagram,
	authenticate as authenticateInstagram
} from './instagram';

import {
	callback as callbackGithub,
	authenticate as authenticateGithub
} from './github';

import {
	callback as callbackLinkedin,
	authenticate as authenticateLinkedin
} from './linkedin';

import {
	callback as callbackFlickr,
	authenticate as authenticateFlickr
} from './flickr';

import {
	callback as callbackPinterest,
	authenticate as authenticatePinterest
} from './pinterest';

import {
	callback as callbackReddit,
	authenticate as authenticateReddit
} from './reddit';

import {
	callback as callbackStackexchange,
	authenticate as authenticateStackexchange
} from './stackexchange';

import {
	callback as callbackGoogle,
	authenticate as authenticateGoogle
} from './google';

import {
	callback as callbackVkontakte,
	authenticate as authenticateVkontakte
} from './vkontakte';

import {
	callback as callbackDropbox,
	authenticate as authenticateDropbox
} from './dropbox';


export default express.Router ()

	.get ('/facebook', authenticateFacebook)
	.get ('/facebook/callback', callbackFacebook)

	.get ('/twitter', authenticateTwitter)
	.get ('/twitter/callback', callbackTwitter)

	.get ('/instagram', authenticateInstagram)
	.get ('/instagram/callback', callbackInstagram)

	.get ('/github', authenticateGithub)
	.get ('/github/callback', callbackGithub)

	.get ('/linkedin', authenticateLinkedin)
	.get ('/linkedin/callback', callbackLinkedin)

	.get ('/flickr', authenticateFlickr)
	.get ('/flickr/callback', callbackFlickr)

	.get ('/pinterest', authenticatePinterest)
	.get ('/pinterest/callback', callbackPinterest)

	.get ('/reddit', authenticateReddit)
	.get ('/reddit/callback', callbackReddit)

	.get ('/stackexchange', authenticateStackexchange)
	.get ('/stackexchange/callback', callbackStackexchange)

	.get ('/google', authenticateGoogle)
	.get ('/google/callback', callbackGoogle)

	.get ('/vkontakte', authenticateVkontakte)
	.get ('/vkontakte/callback', callbackVkontakte)

	.get ('/dropbox', authenticateDropbox)
	.get ('/dropbox/callback', callbackDropbox);