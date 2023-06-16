import React from 'react'
import { Link } from 'react-router-dom';
import "./LoginFrom.css"
import { useFormik } from 'formik';
import * as Yup from "yup";

function LoginFrom() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
    }),
    onSubmit: (values) => {
      window.alert("Form submitted");
      console.log(values);
    },
  });

    return (
        <section>
            <header>Login</header>
            <form className="infoform" onSubmit={formik.handleSubmit}>
            <label> Email address </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        {formik.errors.email && (
          <p className="errorMsg"> {formik.errors.email} </p>
        )}
        <label> Password </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.password && (
          <p className="errorMsg"> {formik.errors.password} </p>
        )}

                <button type="submit">Login</button>
                    <h3 className='text'><Link to="/forgotpassword">Forgot password?</Link></h3>
                <h3 className='text'>Don't have an account? <Link to="/signup">Sign Up</Link></h3>
                
            </form>
        </section> 
    )
}

export default LoginFrom;