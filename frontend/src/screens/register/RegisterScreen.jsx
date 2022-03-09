import React, { useState, useEffect } from "react";
import OTPInput from "otp-input-react";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showOtp, setShowOtp] = useState(true);
  const [Otp, setOtp] = useState(0);

  useEffect(() => {
    // CHECK IF LOGGED IN
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    // DISPATCH NEW USER ACTION
  };

  return (
    <div className='register-container'>
      <h1>Kronos</h1>
      <div className='register-box'>
        {showOtp ? (
          <>
            <h3>OTP</h3>
            <OTPInput
              value={Otp}
              onChange={setOtp}
              autoFocus
              OTPLength={4}
              otpType='number'
              inputStyles={{ fontFamily: `"Nunito", sans-serif` }}
              style={{
                marginLeft: "8%",
              }}
            />
            <p id='otp-text'>
              The OTP is sent to your mail. Please check your mail
            </p>
            <button id='register-btn' type='submit'>
              Submit
            </button>
          </>
        ) : (
          <>
            <h3>Register</h3>
            <form onSubmit={submitHandler}>
              <label htmlFor='name'>Name</label>
              <input
                autoComplete='off'
                placeholder='Enter name'
                type='text'
                id='register-name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                name='name'
              />
              <label htmlFor='email'>Email</label>
              <input
                autoComplete='off'
                placeholder='Enter Email'
                type='email'
                id='register-email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name='email'
              />

              <label htmlFor='password'>Password</label>
              <input
                placeholder='Enter Password'
                type='password'
                id='register-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name='password'
              />
              <button id='register-btn' type='submit'>
                Register
              </button>
            </form>
            <div className='register-bottom-text'>
              Already a user?{" "}
              <Link to={"/login"} style={{ color: "black" }}>
                <strong>Login</strong>
              </Link>{" "}
              here.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
