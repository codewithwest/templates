// import '../../styles/Home.css';
import '../../styles/Const.css';
// import '../../styles/Login.css';
import '../../styles/Forms.css';

import { useState, useEffect } from 'react';
import { initial_login_form_data } from '../../dataSchema/schemas.js';
import { useNavigate } from 'react-router-dom';
import { displayHandler, displaySwitch } from '../../functions/ConstFunctions';
import { resolve } from '../../functions/ConstVars';

export default function Login(props) {
    const display_handler = new displayHandler()
    const display_switch = new displaySwitch();
    function handleLoginState(val) {
        props.onChange(!val);
    }
    let [first, setfirst] = useState(0)
    function IncNum(first) {
        setfirst(first + 1)
    }
    setInterval(() => IncNum(first), 1000)
    const [formdata, setFormData] = useState(initial_login_form_data);
    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    function inputErrorHighlight(error_selector) {
        let _inputs = document.querySelectorAll(`.${error_selector}`)
        _inputs.forEach(el =>
            el.style.boxShadow = "1.5px 1.5px 1px rgba(220,22,11,.6),-1.5px -1.5px 1px rgba(220,22,11,.6)")
    }
    // let  PostRegData= () =>

    const handleSubmit = async (_formdata) => {
        await fetch(`${resolve}/velocity_knight_trainer/login/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(_formdata)
        })
            .then(res => res.json())
            .then(async res => {
                await res ?
                    loginSuccess(res) :
                    console.log(res)
            })
            .catch((err) => console.log(err))
    }

    function loginSuccess(_session_token) {
        display_switch.displaySuccessMessage('login-success', 'login-form', 'login-form-cont')
        sessionStorage.setItem("token", _session_token['token'])
        props.onChange()
        // document.location.reload()
    }
    return (
        <div className="login-form-cont d-flex center-content">
            <div className='login-success center-content'>
                <p className='text-center bg-success center-content'>
                    You Have successfully logged In
                </p>
            </div>
            <h1>{props.value}</h1>
            <form className='login-form flex-col' method="post">
                <button className='login-form-collapse b-none bg-none'
                    onClick={(e) => {
                        e.preventDefault()
                        display_handler.displayNone('login-form-cont')
                    }}>X</button>
                {/* <div className='login-header fill center-content'> */}
                <h1 className='fill m-0 center-content fw-bold'>
                    LOGIN
                </h1>
                {/* </div> */}
                {/* <div className='login-inputs flex-col center-content'> */}
                <input onChange={handleChange} type='email' minLength={5} name='login_email'
                    className='login_email login_err m-auto-hor b-none  ' placeholder='Email' required></input>
                <input onChange={handleChange} type='password' name='login_password'
                    className='login_password m-auto-hor d-flex login_err b-none ' placeholder='Password' required></input>
                {/* </div> */}
                {/* <div className='center-content fill login-button'> */}
                <button className='b-none fw-bold login-button 
                    center-content m-auto-hor'
                    onClick={(e) => {
                        e.preventDefault()
                        formdata.login_email.length > 3 && formdata.login_password.length > 3 ?
                            handleSubmit(formdata) :
                            inputErrorHighlight('login_err')
                    }}
                >Login</button>
                {/* </div> */}
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