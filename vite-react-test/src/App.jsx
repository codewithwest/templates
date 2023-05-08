import { useState, setState, React } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
 
function App() {
  
  const [count , setCount] = useState([])

 function counter(){
   
   setCount(count.push(<p>10</p>))
 }

  return (
     
      
      <div className="container">
        <div className="appBar">
        <p>GROOT</p>
        </div>
        <div className="bodyCont">
          <div className="leftDiv">
            <div className="counter" onClick={counter}>
              <p>10</p>
            </div>
            <div className="counter" onClick={counter}>
              <p>100</p>
              </div>
            <div className="counter"><p>1000</p></div>
            <div className="counter"><p>2000</p></div>
            <div className="counter"><p>15 000</p></div>
            <div className="counter"><p>30 000</p></div>
          </div>
          <div className="midDiv">
            <div className="center">
              <p>{count.length}</p>
            </div>
              
          </div>
          <div className="rightDiv"></div>
        </div>
      </div>
    
   
    
  )
}

export default App
