import React from 'react'
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../utilities/AuthContext";
import './register.css';
import axios from 'axios';

export const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = async (event) => {

        event.preventDefault();
        const user = { username, email, country,city,phone, password };
        try {
          const response = await axios.post('/auth/register', user);
          console.log(response.data);
          alert('Registration successful!');
        } catch (error) {
          console.log(error);
          alert('Registration failed!');
        }
      };
  return (
    <div>
        <div className="register-form">
            <h3>Register Details</h3>
            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="username">Username :</label>
                    <input type="text" name="username" onChange={(e)=>{
                        setUsername(e.target.value)
                    }} placeholder='Enter username' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Email :</label>
                    <input type="email" name="email" onChange={(e)=>{
                        setEmail(e.target.value)
                    }} placeholder='Enter Email' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Country :</label>
                    <input type="text" name="country" onChange={(e)=>{
                        setCountry(e.target.value)
                    }} placeholder='Enter Country' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">City :</label>
                    <input type="text" name="city" onChange={(e)=>{
                        setCity(e.target.value)
                    }} placeholder='Enter City' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Phone :</label>
                    <input type="tel" name="mobile" onChange={(e)=>{
                        setPhone(e.target.value)
                    }} placeholder='Enter Phone' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Password :</label>
                    <input type="password" name="password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} placeholder='Enter Password' required />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register" id='register' onClick={handleClick}/>
                </div>
            </form>
            <p>Already have an account? <span><a href="/login" id='link'>Login</a></span></p>
        </div>
    </div>
  )
}
