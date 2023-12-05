import {createUserWithEmailAndPassword} from "firebase/auth";
import React,{useState} from "react";
import {auth} from "../firebase";
import "./Signup.css";
import {Link, useNavigate} from "react-router-dom";


const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const check = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then(userCredential => {
            console.log(userCredential);
            navigate('/home');
        })
        .catch((error) => {
            console.log(error);
            alert("Something went wrong");
        })
    };
    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={check}>
                <h1 className="signup">SignUp</h1>
                <input
                 className="input-field"
                 type="email"
                 placeholder="Type your email"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                >
                </input>
                <input
                 className="input-field"
                 type="password"
                 placeholder="Type your password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                >
                </input>
                <p></p>
                <button className="submit-button" type="submit">Sign Up</button>
                <p className="login-link">Already have an account? <Link to="/">Login</Link></p>
                
            </form>
        </div>
    )
}
export default Signup;
