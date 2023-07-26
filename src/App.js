import React,{useState} from "react";

import logo from './logo.svg';

// import Demo from './mui';
import {Login} from "./Login";
import {Register} from "./Register";

import './App.css';

function App() {
  const [currentForm,setCurrentForm]=useState('login');

  const toggleForm=(formName)=> {
    setCurrentForm(formName);
  }

  return (
    
    <div className="App">

{/* <Demo/> */}
      {
        currentForm=== 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }

    </div>
  );
}

export default App;
