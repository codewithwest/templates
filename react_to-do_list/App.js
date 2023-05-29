import logo from './logo.svg';
import './App.css';
import Home from './templates/Home';
import Gallery from './templates/Gallery';


function navigate(_nav_link_div, _ind) {
  let links = document.querySelectorAll(_nav_link_div)
  let _divs = document.querySelectorAll('.body-cont')
  let tap_divs = document.querySelectorAll('.body-cont')
  links.forEach((element, tap_divs) => {
    if (_ind == tap_divs) {
      _divs[tap_divs].style.display = 'flex'
    } else {
      _divs[tap_divs].style.display = 'none'
    }
  });
}
function App() {
  return (

    <div className="main">
      <nav className='nav-cont'>
        <div className='nav'>
          <a className='main_nav_link' onClick={() => navigate('.main_nav_link', 0)}>HOME</a>
          <a className='main_nav_link' onClick={() => navigate('.main_nav_link', 1)}>GALLERY</a>
          <a className='main_nav_link' onClick={() => navigate('.main_nav_link', 2)}>MORE</a>
        </div>
      </nav >

      <section className='body'>
        <div className='home body-cont'><Home /></div>
        <div className='gallery body-cont'><Gallery /></div>
        <div className='more body-cont'>white cont</div>
      </section>


    </div >


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
