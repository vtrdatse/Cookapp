import React from 'react'
import SignUpForm from "./SignUpForm"
import "./Form.css";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import LoginFrom from './LoginFrom';
import ForgotPassWord from './ForgotPassWord';

function Form() {
    return (
        <div className='App'>        
                <Routes>
                    <Route path='/login' element ={<LoginFrom/>}></Route>
                    <Route path='/signup' element = {<SignUpForm/>}></Route>
                    <Route path='/forgotpassword' element={<ForgotPassWord/>}></Route>
                </Routes>
           
         
        </div>
    )
}

export default Form;