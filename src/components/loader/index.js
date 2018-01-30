import React from 'react';

export default ({className}) =>
	<div className={'loader' +
		(className ? ' ' + className : '')
	}>
		<i className="fa fa-spinner fa-spin"/>
	</div>
