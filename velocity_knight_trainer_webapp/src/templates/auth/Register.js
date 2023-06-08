import '../../styles/Forms.css';
import '../../styles/Const.css';
import { useState, useEffect } from 'react';
import { initial_registration_form_data } from '../../dataSchema/schemas.js';
import { displayHandler, displaySwitch } from '../../functions/ConstFunctions';
import { resolve } from '../../functions/ConstVars';

export default function Register({ auth_stat }) {
    const display_handler = new displayHandler()
    const display_switch = new displaySwitch()
    let [auth_state, setfirst] = useState(auth_stat)

    const [formdata, setFormData] = useState(initial_registration_form_data);
    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    function inputErrorHighlight(error_selector) {
        let _inputs = document.querySelectorAll(`.${error_selector}`)
        _inputs.forEach(el =>
            el.style.boxShadow = "1.5px 1.5px 1px rgba(220,22,11,.6),-1.5px -1.5px 1px rgba(220,22,11,.6)")
    }
    const handleSubmit = async (_formdata) => {
        fetch(`${resolve}/velocity_knight_trainer/register/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(_formdata)
        }).then(res => res.json())
            .then(async res => {
                await res.success ?

                    await display_switch.displaySuccessMessage('reg-success', 'reg-form', 'reg-form-cont')
                    :
                    console.log(res)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className='reg-form-cont fill center-content'>

            <div className='reg-success center-content'>
                <p className='text-center bg-success center-content'>
                    You have successfully registered.
                </p>
            </div>
            <form className='reg-form flex-col center-content' method="post">
                <a className='reg-form-collapse h-100 center-content  b-none bg-none'
                    onClick={(e) => {
                        e.preventDefault()
                        display_handler.displayNone('reg-form-cont')
                    }}>X</a>
                <p className='fill d-flex center-content m-auto fw-bold'>Register</p>
                <div className='fill flex-col center-content'>
                    <input type='text' minLength={3} onChange={handleChange} name='reg_user_name'
                        className='reg_user_name b-none' placeholder='UserName' required></input>
                    <input type='email' minLength={5} onChange={handleChange} name='reg_email'
                        className='reg_email b-none' placeholder='Email' required></input>
                    <input type='password' onChange={handleChange} name='reg_password'
                        className='reg_password err_password b-none' placeholder='Password' required></input>
                    <input type='password' onChange={handleChange} name='reg_con_password'
                        className='reg_con_password err_password b-none' placeholder='Confirm password' required></input>
                </div>
                <div className='fill center-content d-flex'>
                    <button className='register-button b-none fw-bold' onClick={(e) => {
                        e.preventDefault()
                        formdata.reg_con_password === formdata.reg_password ?
                            handleSubmit(formdata) :
                            inputErrorHighlight('err_password')
                    }}>Register</button>
                </div>
                <a href='' className='links fill center-content'
                    onClick={(e) => {
                        e.preventDefault()
                        display_handler.displayNone('reg-form-cont')
                        display_handler.displayFlex('login-form-cont')

                    }}>Login</a>

            </form>

        </div>
    )
}  