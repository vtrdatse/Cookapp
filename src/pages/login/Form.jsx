import React from 'react';
import SignUpForm from './SignUpForm';
import './Form.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginFrom from './LoginFrom';

function Form() {
	return (
		<div className="App">
			<Routes>
				<Route path="/account/login" element={<LoginFrom />}></Route>
				<Route path="/account/signup" element={<SignUpForm />}></Route>
			</Routes>
		</div>
	);
}

export default Form;
