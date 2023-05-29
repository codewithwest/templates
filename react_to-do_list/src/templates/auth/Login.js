import '../../styles/Home.css';
import '../../styles/Const.css';
import '../../styles/Login.css';
import '../../styles/Forms.css';

import { useState, useEffect } from 'react';
import { initial_login_form_data } from '../../dataSchema/schemas.js';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    // const navigate = useNavigate();
    // <button className="btn" onClick={() => navigate('order-summary')}>
    //       Place Order
    //    </button>
    let [first, setfirst] = useState(0)
    function IncNum(first) {
        setfirst(first + 1)
    }
    setInterval(() => IncNum(first), 1000)

    const [formdata, setFormData] = useState(initial_login_form_data);
    const [login_response, setLoginResponse] = useState();
    const display = () => console.log(formdata)
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

    const handleSubmit = async (_formdata) => {
        display()
        await fetch('http://localhost:3070/velocity_knight_trainer/login/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(_formdata)
        })
            .then(res => res.json())
            .then(data =>
                {
                data['success']?setLoginResponse(data['success']):setLoginResponse(data['failure'])
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="login-cont d-flex center-content">
            {/* <div className='login-form-cont center-content'> */}
                <form className='login-form fill ' method="post">
                <div className='login-header'>
                    <p className='fill center-content fw-bold'>LOGIN</p>
                </div>
                <div className='  login-inputs flex-col center-content'>
                    <input type='email' minLength={5} onChange={handleChange} name='login_email'
                        className='login_email login_err b-none m-auto' placeholder='Email' required></input>
                    <input type='password' onChange={handleChange} name='login_password'
                        className='login_password login_err b-none m-auto' placeholder='Password' required></input>
                        </div>
                       <div className='center-content fill login-button'>
                    <button className='b-none fw-bold' onClick={(e) => {
                        e.preventDefault()
                        formdata.login_email.length>0 && formdata.login_password.length>0 ?
                            handleSubmit(formdata) :
                            inputErrorHighlight('login_err')
                    }}>Login</button>
                     </div>
                </form>
            {/* </div> */}
        </div>
    )
}  