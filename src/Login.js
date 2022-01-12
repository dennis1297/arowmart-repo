import React, {useState} from 'react';
import "../src/Login.css";
import pic from "./img/syedanees_transparen.png";
import { Link } from "react-router-dom";

function Login () {
    

    return (
        <div className='login'>
        <Link to = "/">
        <img className='login__logo' src={pic} alt='' />
        </Link>
       <div className='login__container'>
           <h1>Sign-in</h1>
        <form>
           <h5>E-mail</h5>
           <input type='text'/>
           <h5>Password</h5>
           <input type='password'/>
           <button className='login__signInButton'>Sign-in</button>
        </form>
        
        
        <p>
        By continuing, you agree to Arowmart's Conditions of Use and Privacy Notice.
        </p>
        <button className='login__registerButton'>Create your Arowmart Account</button>
       </div>
     </div>
    )
}

export default Login
