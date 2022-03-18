import React from 'react';
import './App.css';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Checkout from './sections/Checkout/Checkout';
import Login from './sections/Login/Login';

function App() {
  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<><Header/> <Home/></>}/> 
          <Route path='/checkout' element={<><Header/> <Checkout/></>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
