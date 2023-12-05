import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import Authentication from "./Authentication";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
  
    const Auth = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          navigate('/home');
        })
        .catch((error) => {
          console.log(error);
          alert("Email not found")
        });
    };
    
    return (
      <div className="sign-in-container">
        <form className="login-form" onSubmit={Auth}>
          <h1 className="head">Login</h1>
          <input
            className="input-field"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="input-field"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p></p>
          <button className="submit-button"  type="submit">Log In</button>
          <p className="create-account-link">Don't have an account?  <Link to="/signup">Create Your Account</Link> </p>
          
        </form>
      </div>
    );
  };

export default Login