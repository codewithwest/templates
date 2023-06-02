import logo from './logo.svg';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
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

  const [initial_login_state, set_initial_login_state] = useState()
  // initial_login_state_call()
  useEffect(() => {
    const handleClick = () => {
      //do something when we click
      fetch(`${resolve}/velocity_knight_trainer/`)
        .then(async res => await res.json())
        .then(data => data.hasOwnProperty('userid')
          ? set_initial_login_state(true) : set_initial_login_state(false))
    };
    const getSession = () => sessionStorage.getItem('token')
      ? set_initial_login_state(true) : set_initial_login_state(false)


    // document.addEventListener('mousedown', handleClick);
    return () => {
      getSession()
      console.log(initial_login_state)
    };
  }, [])
  // return
  // }

  const [login_state, loginState] = useState(initial_login_state)
  function handleLoginState() {
    // Here, we invoke the callback with the new value
    loginState(!login_state);
  }

  return (
    <div className="main">
      <button className='login-state border'
        onClick={() => login_state ?
          display_handler.displayFlex('profile-form-cont') :
          display_handler.displayFlex('login-form-cont')}>
        {login_state ? logged_in_icon : logged_out_icon}
      </button>
      <nav className='nav-cont'>
        <div className='nav'>
          <a className='main_nav_link' onClick={() => navigate('.main_nav_link', 0)}>HOME</a>
          <a className='main_nav_link' onClick={() => navigate('.main_nav_link', 1)}>GALLERY</a>
          <a className='main_nav_link' onClick={() => navigate('.main_nav_link', 2)}>MORE</a>
        </div>
      </nav>

      <section className='main-cont'>
        <h1 className='bg-success'>{`${login_state}`}</h1>
        <Login onChange={handleLoginState} />
        <Register />
        <Profile onChange={handleLoginState} />
        <div className='home body-cont'></div>
        <div className='register body-cont'></div>
        <div className='more body-cont'>white cont</div>
      </section>
    </div>
    // <>
    //  <Suspense fallback={<div className="container">Loading...</div>}>
    //       <Routes>
    //   <Route path='/' element={<Home/>} />
    //   <Route path='/login' element={<Login/>} />
    //   {/* <Route path='/' element={<Register/>} /> */}
    //   {/* <Route path='*' element={<NoMatch/>} /> */}
    // </Routes>
    // </Suspense>
    // </>

  );
}

export default App;
