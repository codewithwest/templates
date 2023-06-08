// import '../../styles/Home.css';
import '../../styles/Const.css';
// import '../../styles/Login.css';
import '../../styles/Forms.css';

import { useState, useEffect } from 'react';
import { initial_login_form_data } from '../../dataSchema/schemas.js';
import { displayHandler, displaySwitch } from '../../functions/ConstFunctions';
import { resolve } from '../../functions/ConstVars';

export default function Login(props) {
    const display_handler = new displayHandler()
    const display_switch = new displaySwitch();
    function handleLoginState(val) {
        props.onChange(!val);
    }
    const [formdata, setFormData] = useState(initial_login_form_data);
    const [response_message, setLoginRespenseMessage] = useState()
    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    function inputErrorHighlight(error_selector) {
        let _inputs = document.querySelectorAll(`.${error_selector}`)
        _inputs.forEach(el =>
            el.style.boxShadow = "1.5px 1.5px 1px rgba(220,22,11,.6),-1.5px -1.5px 1px rgba(220,22,11,.6)")
    }

    const HandleSubmit = async (_formdata) => {
        // useEffect(() => {
        fetch(`${resolve}/velocity_knight_trainer/login/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(_formdata)
        })
            .then(res => res.json())
            .then(async res => {
                await res.token ?
                    loginMessage(res) :
                    loginMessage(res)
            })
            .catch((err) => console.log(err))
        // }, [])
    }
    function loginMessage(login_response) {
        if (login_response.token) {
            sessionStorage.setItem("token", login_response.token)
            setLoginRespenseMessage('Successfully Logged In')
            display_switch.displaySuccessMessage('login-success', 'login-form', 'login-form-cont')
            props.onChange()
            document.location.reload()

        } else {
            console.log(login_response.failure)
            setLoginRespenseMessage(login_response.failure)
            display_switch.displaySuccessMessage('login-success', 'login-form', 'login-form-cont')
            setTimeout(() =>
                display_handler.displayFlex('login-form-cont'), 1000)
        }
    }
    return (
        <div className="login-form-cont fill center-content">
            <div className='login-success center-content'>
                <p className='text-center bg-success center-content'>
                    {response_message}
                </p>
            </div>
            <h1>{props.value}</h1>
            <form className='login-form flex-col' method="post">
                <a className='login-form-collapse fw-bold h-100 center-content b-none bg-none'
                    onClick={(e) => {
                        e.preventDefault()
                        display_handler.displayNone('login-form-cont')
                    }}>X</a>
                <h1 className='fill m-0 center-content fw-bold'>
                    LOGIN
                </h1>
                <input onChange={handleChange} type='email' minLength={5} name='login_email'
                    className='login_email login_err m-auto-hor b-none  ' placeholder='Email' required></input>
                <input onChange={handleChange} type='password' name='login_password'
                    className='login_password m-auto-hor d-flex login_err b-none ' placeholder='Password' required></input>
                <button className='b-none fw-bold login-button 
                    center-content m-auto-hor'
                    onClick={(e) => {
                        e.preventDefault()
                        formdata.login_email.length > 3 && formdata.login_password.length > 3 ?
                            HandleSubmit(formdata) :
                            inputErrorHighlight('login_err')
                    }}
                >Login</button>
                <a href='' className='links fill center-content'
                    onClick={(e) => {
                        e.preventDefault()
                        display_handler.displayNone('login-form-cont')
                        display_handler.displayFlex('reg-form-cont')
                    }}>Register</a>
            </form>
            {/* </div> */}
        </div>
    )
}  