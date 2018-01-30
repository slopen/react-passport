import React from 'react';

import {
	Container,
	Card,
	CardImg,
	CardBody,
	CardTitle
} from 'reactstrap';

import {getUser} from 'components/lib/session';

const Picture = ({src}) =>
	src ? <CardImg top src={src}/> : null;

export default () =>
	<Container className="mt-5 text-center">
		<Card className="m-auto w-50">
			<Picture src={getUser ().picture}/>

			<CardBody>
				<CardTitle>{getUser ().username}</CardTitle>
			</CardBody>
		</Card>
	</Container>;