import logo from './logo.svg';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(()=>import('./templates/Home'))
const Login = lazy(()=>import('./templates/auth/Login'))
// const Register = lazy(()=>import('./templates/auth/Register'))


// function navigate(_nav_link_div, _ind) {
//   let links = document.querySelectorAll(_nav_link_div)
//   let _divs = document.querySelectorAll('.body-cont')
//   let tap_divs = document.querySelectorAll('.body-cont')
//   links.forEach((element, tap_divs) => {
//     if (_ind == tap_divs) {
//       _divs[tap_divs].style.display = 'flex'
//     } else {
//       _divs[tap_divs].style.display = 'none'
//     }
//   });
// }
function App() {
  return (

    // <div className="main">
    //   <nav className='nav-cont'>
    //     <div className='nav'>
    //       <a className='main_nav_link' onClick={() => navigate('.main_nav_link', 0)}>HOME</a>
    //       <a className='main_nav_link' onClick={() => navigate('.main_nav_link', 1)}>GALLERY</a>
    //       <a className='main_nav_link' onClick={() => navigate('.main_nav_link', 2)}>MORE</a>
    //     </div>
    //   </nav >

    //   <section className='body'>
        <div className='home body-cont'><Login /></div>
    //     <div className='gallery body-cont'><Gallery /></div>
    //     <div className='more body-cont'>white cont</div>
    //   </section>


    // </div >
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
