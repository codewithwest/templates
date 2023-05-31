import '../../styles/Home.css';
import '../../styles/Const.css';
import '../../styles/Login.css';
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
    const [login_response, setLoginResponse] = useState();
    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    function inputErrorHighlight(error_selector) {
        let _inputs = document.querySelectorAll(`.${error_selector}`)
        _inputs.forEach(el =>
            el.style.boxShadow = "1.5px 1.5px 1px rgba(220,22,11,.6),-1.5px -1.5px 1px rgba(220,22,11,.6)")
    }
    // let  PostRegData= () =>

    // useEffect(() => {

    // }, [])
    async function loginSuccess() {
        await display_switch.displaySuccessMessage('login-success', 'login-form', 'login-form-cont')
        props.onChange()
    }

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
                await res['success'] ?
                    await loginSuccess() :
                    console.log(res['failure'])
            })
            .catch((err) => console.log(err))
    }


    return (
        <div className="login-form-cont d-flex center-content">
            <button className='login-form-collapse b-none bg-none'
                onClick={(e) => display_handler.displayNone('login-form-cont')}>X</button>
            {/* <div className='login-form-cont center-content'> */}

            <div className='login-success center-content'>
                <p className='text-center bg-success center-content'>
                    You Have successfully logged In
                </p>
            </div>
            <h1>{props.value}</h1>
            <form className='login-form' method="post">
                <div className='login-header fill center-content'>
                    <p className='fill center-content fw-bold'>
                        LOGIN
                    </p>
                </div>
                <div className='login-inputs flex-col center-content'>
                    <input type='email' minLength={5} onChange={handleChange} name='login_email'
                        className='login_email login_err b-none m-auto' placeholder='Email' required></input>
                    <input type='password' onChange={handleChange} name='login_password'
                        className='login_password login_err b-none m-auto' placeholder='Password' required></input>
                </div>
                <div className='center-content fill login-button  '>
                    <button className='b-none fw-bold' onClick={(e) => {
                        e.preventDefault()
                        formdata.login_email.length > 0 && formdata.login_password.length > 0 ?
                            handleSubmit(formdata) :
                            inputErrorHighlight('login_err')
                    }}>Login</button>
                </div>
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