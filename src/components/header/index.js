import React from 'react';

import {
	Nav,
	NavLink,
	NavItem,
	Navbar,
	NavbarBrand
} from 'reactstrap';

import {logout} from 'components/lib/auth';

const onHomeNavigate = (e, history) => {
	history.push ('/');
	e.preventDefault ();
}

export default ({history}) =>
	<Navbar
		className="app-header"
		color="light"
		fixed="fixed">

		<NavbarBrand
			onClick={(e) => onHomeNavigate (e, history)}
			href="/">
			Home
		</NavbarBrand>

		<Nav>
			<NavItem>
				<NavLink
					href="#"
					onClick={(e) => {
						logout ();
						e.preventDefault ();
					}}>Sign Out</NavLink>
			</NavItem>
		</Nav>
	</Navbar>