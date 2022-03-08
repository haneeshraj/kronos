import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // CHECK IF LOGGED IN
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    // DISPATCH NEW USER ACTION
  };

  return (
    <div className='form-container'>
      <h1>Kronos</h1>
      <div className='form-box'>
        <h3>Sign In</h3>
        <form className='form-form' onSubmit={submitHandler}>
          <label htmlFor='email'>Email</label>
          <input
            autoComplete='off'
            placeholder='Enter Email'
            type='email'
            id='form-email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name='email'
          />
          <label htmlFor='password'>Password</label>
          <input
            placeholder='Enter Password'
            autoComplete='off'
            type='password'
            id='form-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name='password'
          />
          <button id='form-btn' type='submit'>
            Login
          </button>
          <div className='form-bottom-text'>
            New user?{" "}
            <Link to={"/register"} style={{ color: "black" }}>
              <strong>Register</strong>
            </Link>{" "}
            here.
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
