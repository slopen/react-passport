import React from 'react';

export default ({message, className}) =>
	<div className={'error' +
		(className ? ' ' + className : '')
	}>
		<i className="fa fa-exclamation-triangle"/>
		{' ' + (message || 'error')}
	</div>
