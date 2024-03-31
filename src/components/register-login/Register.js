import React from "react";
import {useNavigate } from "react-router-dom";
import RegisterInput from "./RegisterInput";
import { register } from "../../utils/network-data";

function Register() {
	const navigate = useNavigate();

	async function onRegisterHandler(user) {
		const {error} = await register(user);
		if (!error) {
			navigate('/');
		}
	}

	return (
		<div className="wrapper">
			<section className="login-page">
			<h2>Register Account</h2>
			<RegisterInput register={onRegisterHandler}/>
		</section>		
		</div>

	)
}

export default Register;