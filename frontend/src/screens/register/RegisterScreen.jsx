import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const LoginScreen = () => {
  const [name, setName] = useState("");
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
        <h3>Register</h3>
        <form className='form-form' onSubmit={submitHandler}>
          <label htmlFor='name'>Name</label>
          <input
            autoComplete='off'
            placeholder='Enter name'
            type='text'
            id='form-name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            name='name'
          />
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
            type='password'
            id='form-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name='password'
          />
          <button id='form-btn' type='submit'>
            Register
          </button>
        </form>
        <div className='form-bottom-text'>
          Already a user?{" "}
          <Link to={"/login"} style={{ color: "black" }}>
            <strong>Login</strong>
          </Link>{" "}
          here.
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
