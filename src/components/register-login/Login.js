import React from "react";
import PropTypes from 'prop-types';
import LoginInput from "./LoginInput";
import { login } from "../../utils/network-data";
import { LocaleConsumer } from ".././context/LocaleContext"

function Login({ loginSuccess }) {
	async function onLogin({ email, password }) {
		const { error, data } = await login({ email, password });

		if (!error) {
			loginSuccess(data);
		}
	}

	return (
		<LocaleConsumer>
			{
				({ locale }) => {
					return (
						<div className="wrapper">
							<section className="login-page">
								<h2>{locale === 'id' ? 'Mohon log in terlebih dahulu' : 'Please login first'}</h2>
								<LoginInput login={onLogin} />
							</section>

						</div>
					)
				}
			}
		</LocaleConsumer>

	);
}

Login.propTypes = {
	loginSuccess: PropTypes.func.isRequired,
}

export default Login;