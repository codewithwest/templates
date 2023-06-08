import './App.css';
import { Suspense, lazy, useEffect, useState } from 'react';
import { displayHandler } from './functions/ConstFunctions';
import { logged_in_icon, logged_out_icon } from './functions/ConstIcons';
import { resolve } from './functions/ConstVars';

const Home = lazy(() => import('./templates/Home'))
const Login = lazy(() => import('./templates/auth/Login'))
const Register = lazy(() => import('./templates/auth/Register'))
const Profile = lazy(() => import('./templates/Profile'))


const display_handler = new displayHandler()

function navigate(_nav_link_div, _ind) {
  let links = document.querySelectorAll(_nav_link_div)
  let _divs = document.querySelectorAll('.body-cont')
  let tap_divs = document.querySelectorAll('.body-cont')
  links.forEach((element, tap_divs) => {
    if (_ind === tap_divs) {
      display_handler.displayFlex(_divs[tap_divs].className.split(' ')[1])
    } else {
      display_handler.displayNone(_divs[tap_divs].className.split(' ')[1])
    }
  });
}


function App() {
  var session_token = sessionStorage.getItem('token')
  const [initial_login_state, set_initial_login_state] = useState()
  const [login_data, setLoginData] = useState()
  useEffect(() => {
    session_token
      ? set_initial_login_state(true) : set_initial_login_state(false)
    const getLoginState = () => {
      const headers = {
        mode: 'cors',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
      //do something when we click
      fetch(`${resolve}/velocity_knight_trainer/data`, { headers })
        .then(async res => await res.json())
        .then(data => {
          if (data.message) {
            set_initial_login_state(true)
            setLoginData(data.authorizedData.user)
          } else
            set_initial_login_state(false)
        })
        .catch(e => console.log(e))
    };

    return () => {
      session_token == null ? console.log('No Session Available') :
        getLoginState()

    };

  }, [])
  const [login_state, loginState] = useState(initial_login_state)
  function handleLoginState() {
    // Here, we invoke the callback with the new value
    loginState(!login_state)
    set_initial_login_state(!initial_login_state)

  }

  return (
    <div className="main d-flex center-content">
      <button className='login-state b-none  pos-abs'
        onClick={() => initial_login_state ?
          display_handler.displayFlex('profile-form-cont') :
          display_handler.displayFlex('login-form-cont')}>
        {initial_login_state ? logged_in_icon : logged_out_icon}
      </button>
      <nav className='nav-cont center-content d-flex'>
        <div className='nav flex-col fill border'>
          <a className='main_nav_link d-flex fill center-content'
            onClick={() => navigate('.main_nav_link', 0)}>INFO</a>
          <a className='main_nav_link d-flex fill center-content'
            onClick={() => navigate('.main_nav_link', 1)}>CREATE SESSION</a>
          <a className='main_nav_link d-flex fill center-content'
            onClick={() => navigate('.main_nav_link', 2)}>VIEW SESSIONS</a>
        </div>
      </nav>
      <section className='main-cont'>
        {/* <h1 className='bg-success pos-abs top-0 left-0'>{`${login_state}`}</h1> */}
        <Login onChange={handleLoginState}
        />
        <Register />
        <Profile onChange={handleLoginState}
          value={initial_login_state ? login_data : ""} />
        <div className='home body-cont'></div>
        <div className='register body-cont'></div>
        <div className='more body-cont'>white cont</div>
      </section>
    </div>
  );
}

export default App;
