import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginFrom.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function LoginFrom() {
	const [item, setItem] = useState(null);
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		validationSchema: Yup.object({
			username: Yup.string().required('Required'),
			password: Yup.string().required('Required')
			// 		// .matches(
			// 		// 	/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
			// 		// 	'Password must be 7-19 characters and contain at least one letter, one number and a special character'
			// 		// )
		}),
		onSubmit: (values) => {
			const getAuth = async () => {
				try {
					const response = await axios.post(
						`https://localhost:7250/api/Auth?username=${values.username}&password=${values.password}`
					);
					setItem(response?.data?.result);
				} catch (error) {
					console.error(error);
				}
			};
			getAuth();
		}
	});
	console.log('LOGGGGGGGGGGGGGGGGGGGGGGGGGGGGG');
	const navigation = () => {
		switch (item?.roleid) {
			case '1':
				navigate('/admin/*');
				break;
			case '2':
				navigate('/');
				break;
			case '3':
				navigate('/');
				break;
			default:
				break;
		}
	};
	useEffect(() => {
		localStorage.setItem('accessToken', JSON.stringify(item?.token?.accessToken));
		navigation();
	});
	return (
		<section>
			<header>Login</header>
			<form className="infoform" onSubmit={formik.handleSubmit}>
				<label> UserName </label>
				<input
					type="username"
					id="username"
					name="username"
					value={formik.values.username}
					onChange={formik.handleChange}
					placeholder="Enter your username"
				/>
				{formik.errors.username && <p className="errorMsg"> {formik.errors.username} </p>}
				<label> Password </label>
				<input
					type="password"
					id="password"
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					placeholder="Enter your password"
				/>
				{formik.errors.password && <p className="errorMsg"> {formik.errors.password} </p>}

				<button type="submit">Login</button>
				<h3 className="text">
					<Link to="/forgotpassword">Forgot password?</Link>
				</h3>
				<h3 className="text">
					Don't have an account? <Link to="/signup">Sign Up</Link>
				</h3>
			</form>
		</section>
	);
}

export default LoginFrom;
