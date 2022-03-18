import React from 'react';
import './App.css';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Checkout from './sections/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
