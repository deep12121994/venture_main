import React from 'react';
import './App.css';
//import {Browser, Switch, Route} from "react-router-dom";
//import axios from "axios";
import HomePage from './HomePage';
import LogIn from "./LogIn";

function App() {
  return (
    <div className="App">
      <HomePage/>
      <LogIn/>
    </div>
  );
}

export default App;
