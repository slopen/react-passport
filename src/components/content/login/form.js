import React, {Component} from 'react';

import {
	Button,
	Input,
	Form,
	FormGroup
} from 'reactstrap';


export default class LoginForm extends Component {

	constructor (props) {
		super (props);

		this.state = {
			values: {
				username: '',
				password: ''
			}
		};

		// autobinds
		this.onAccept = this.onAccept.bind (this);
		this.onInputChange = this.onInputChange.bind (this);
	}

	onInputChange ({target}) {
		const {name, value} = target;
		const {values} = this.state;
		const data = {[name]: value};

		this.setState ({values: {
			...values,
			...data
		}});
	}

	onAccept (e) {
		const {values = {}} = this.state;

		this.props.onAccept (values);
		e.preventDefault ();
	}

	render () {
		const {
			values
		} = this.state;

		return (
			<Form onSubmit={this.onAccept}>

				<FormGroup>
					<Input
						required
						name="username"
						value={values.username}
						onChange={this.onInputChange}
						placeholder="username"/>
				</FormGroup>

				<FormGroup>
					<Input
						required
						type="password"
						name="password"
						value={values.password}
						onChange={this.onInputChange}
						placeholder="password"/>
				</FormGroup>

				<FormGroup>
					<Button
						block
						color="primary"
						type="submit">
						log in
					</Button>
				</FormGroup>
			</Form>
		);
	}
}
