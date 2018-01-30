import React from 'react';
import config from 'components/config';

const {apiAuth} = config;

export default () =>
	<div className="social-links mb-4">
		<a href={`${apiAuth}/auth/facebook`}>
			<i className="fa fa-facebook"/>
		</a>
		<a href={`${apiAuth}/auth/twitter`}>
			<i className="fa fa-twitter"/>
		</a>
		<a href={`${apiAuth}/auth/instagram`}>
			<i className="fa fa-instagram"/>
		</a>
		<a href={`${apiAuth}/auth/linkedin`}>
			<i className="fa fa-linkedin"/>
		</a>
		<a href={`${apiAuth}/auth/vkontakte`}>
			<i className="fa fa-vk"/>
		</a>
		<a href={`${apiAuth}/auth/reddit`}>
			<i className="fa fa-reddit"/>
		</a>
		<a href={`${apiAuth}/auth/flickr`}>
			<i className="fa fa-flickr"/>
		</a>
		<a href={`${apiAuth}/auth/pinterest`}>
			<i className="fa fa-pinterest"/>
		</a>
		<a href={`${apiAuth}/auth/stackexchange`}>
			<i className="fa fa-stack-exchange"/>
		</a>
		<a href={`${apiAuth}/auth/github`}>
			<i className="fa fa-github"/>
		</a>
		<a href={`${apiAuth}/auth/google`}>
			<i className="fa fa-google"/>
		</a>
		<a href={`${apiAuth}/auth/dropbox`}>
			<i className="fa fa-dropbox"/>
		</a>
	</div>;