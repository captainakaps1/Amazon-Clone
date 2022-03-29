import React, { ReactEventHandler, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase'
import "./styles/Login.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const signIn = (event) => {
    event.preventDefault()

    auth.signInWithEmailAndPassword(email,password).then((auth) =>{
      if(auth){
        navigate("/")
      }
    }).catch(error => alert(error.message))
  }

  const register = (event ) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email,password).then((auth) => {
      if(auth){
        navigate('/')
      }
    }).catch(err => alert(err.message))
  }

  return (
    <div className='login'>
        <Link to="/">
            <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo" />
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>Email</h5>
                <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>

                <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button> 
            </form>
            <p>By signing-in you agree to the AMAZON FAKE CLONE Condtions of Use & Sale. Please see our Privacy Notice, or Cookies Notice and our Interest-Based Ads Notice.</p>
            <button onClick={register} className='login_registerButton'>Create your Amazon account</button>
        </div>
    </div>
  ) 
}

export default Login