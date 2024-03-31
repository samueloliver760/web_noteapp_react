import React from "react";
import PropTypes from 'prop-types';
import {LocaleConsumer} from ".././context/LocaleContext"
import { Link } from "react-router-dom";

class LoginInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};

		this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
		this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onEmailChangeHandler(event) {
		this.setState(() => {
			return {
				email: event.target.value
			}
		})
	}

	onPasswordChangeHandler(event) {
		this.setState(() => {
			return {
				password: event.target.value
			};
		});
	}

	onSubmitHandler(event) {
		event.preventDefault();

		this.props.login({
			email: this.state.email,
			password: this.state.password,
		});
	}

	render() {
		return (
			<LocaleConsumer>
				{
					({ locale }) => {
						return (
							<form onSubmit={this.onSubmitHandler} className='login-input'>
								<div className="input">
									<input type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChangeHandler} size="30"/> <br/>
									<input type="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChangeHandler} size="30" /> <br/>
									<button className="button_masuk">{locale === 'id' ? 'Masuk' : 'Log in'}</button>									
									<p> <Link to="/register">{locale === 'id' ? 'Tidak punya akun ? Klik ini !' : 'Do not have account ? Click here !'}</Link></p>
								</div>

							</form>
						)
					}
				}
			</LocaleConsumer>

		);
	}
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired,
}

export default LoginInput;