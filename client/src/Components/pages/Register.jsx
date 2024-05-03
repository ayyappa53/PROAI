import React, { useState,useContext } from 'react';
import axios from 'axios';
import './CSS/Register.css'
import { store } from '../../App';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
  const[token,setToken]=useContext(store);
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const changehandler= e =>{
    e.preventDefault();
    setData({...data,[e.target.name]:e.target.value})
  }
   const submithandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/register',data).then(
            res => {alert(res.data);setData({
                username:'',
                email:'',
                password:'',
                confirmpassword:''
            })}
        )

    }

    
    return (
        <div>
            <center className='contains'>
            <div className="form_main">
                <form onSubmit={submithandler} autocomplete="off">
                    <p className="heading">Register</p>
                <div className="inputContainer">
                        
                    <input type="text" name="username" onChange={changehandler}  placeholder="Name" className="inputField" />
                </div>
        <div className="inputContainer">
                    
            <input type="email" name="email" onChange={changehandler} placeholder="Email" className="inputField"/>
        </div>
        <div className='inputContainer'>
                
        <input type="password" name="password" onChange={changehandler} placeholder="Password" className="inputField"/>
        </div>
        <div className='inputContainer'>
                
        
                    <input type="password" name="confirmpassword" onChange={changehandler} placeholder="Confirm Password" className="inputField"/>
                    </div>
                    <button id="button">Sign Up</button>
                    <div class="signupContainer">
                    <p>Already have an account</p>
                    <a><Link style={{textDecoration: 'none'}} to='/login'>Login</Link></a>
                </div>
                </form>
            </div>
            </center>
        </div>
    )
}

export default Register