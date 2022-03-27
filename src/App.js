import React, { useEffect } from 'react';
import './App.css';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Checkout from './sections/Checkout/Checkout';
import Login from './sections/Login/Login';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log(authUser)

      if(authUser){
        //  user logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        // user is logged out
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
  },[])


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
