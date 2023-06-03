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

  const [login_state, loginState] = useState()
  const [user_data, setUserData] = useState()
  // initial_login_state_call()
  const getPrivateData = () => {
    //do something when we click
    fetch(`${resolve}/user/data`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        loginState(true)
        setUserData(data.authorizedData.user)
        // console.log(data.authorizedData)

      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    const getSession = () => sessionStorage.getItem('token')
    document.querySelector('.get-data').addEventListener('mousedown', getPrivateData);
    return () => {
      getSession() ? getPrivateData() : loginState(false)
    };
  }, [])



  function handleLoginState() {
    // Here, we invoke the callback with the new value
    loginState(!login_state);
    getPrivateData()
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
        <h1 className='bg-success'>{login_state ? `${login_state}` : 'Loading. . . '}</h1>
        <Login onChange={handleLoginState} />
        <Register />
        <Profile onChange={handleLoginState} value={user_data ? user_data : '...'} />
        <div className='home body-cont'></div>
        <div className='register body-cont'></div>
        <div className='more body-cont'>white cont</div>

        <button className='get-data'>
          Request Route
        </button>
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
