import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class RegisterInput extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			email: '',
			password: '',
		}

		this.onNameChange = this.onNameChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onNameChange(event) {
		this.setState(() => {
			return {
				name: event.target.value,
			};
		});
	}

	onEmailChange(event) {
		this.setState(() => {
			return {
				email: event.target.value
			};
		});
	}

	onPasswordChange(event) {
		this.setState(() => {
			return {
				password: event.target.value
			};
		})
	}

	onSubmitHandler(event) {
		event.preventDefault();

		this.props.register({
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		});
	}

	render() {
		return (
			<form onSubmit={this.onSubmitHandler} className='login-input'>
				<div className="input">
					<input type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange} size="30"/>
					<input type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange} size="30"/>
					<input type="password" placeholder="Password" autoComplete = 'current-password' value={this.state.password} onChange={this.onPasswordChange} size="30"/>
					<button className="button_masuk">Register</button>
					<p>Back to <Link to="/">Login Page</Link></p>
				</div>

			</form>
		)
	}
}

RegisterInput.propTypes = {
	register: PropTypes.func.isRequired,
};

export default RegisterInput;