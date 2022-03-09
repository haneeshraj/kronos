import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#000",
  };

  const [loggedIn, setLoggedIn] = useState(true); // DELETE THIS FROM HERE
  const logOutHandler = (e) => {
    setLoggedIn(false);
  };
  const logInHandler = (e) => {
    setLoggedIn(true);
  }; // TILL HERE

  return (
    <>
      <div className='nav-sidebar'>
        <div className='nav-item-container'>
          <Link style={linkStyle} to='/'>
            <div className='nav-home'>
              <i className='material-icons nav-icon'>home</i>
              <div className='nav-item-label'>Kronos</div>
            </div>
          </Link>
          <hr />
          <Link style={linkStyle} to='/todolist'>
            <div className='nav-item' id='nav-todolist'>
              <i className='material-icons nav-icon'>check</i>
              <div className='nav-item-label'>To-Dos</div>
            </div>
          </Link>
          <Link style={linkStyle} to='/stickies'>
            <div className='nav-item' id='nav-stickies'>
              <i className='material-icons nav-icon'>edit</i>
              <div className='nav-item-label'>Stickies</div>
            </div>
          </Link>
          <Link style={linkStyle} to='/pomodoro'>
            <div className='nav-item' id='nav-pomodoro'>
              <i className='material-icons nav-icon'>watch</i>
              <div className='nav-item-label'>Pomodoro</div>
            </div>
          </Link>
          <Link style={linkStyle} to='/diary'>
            <div className='nav-item' id='nav-diary'>
              <i className='material-icons nav-icon'>book</i>
              <div className='nav-item-label'>Diary</div>
            </div>
          </Link>
          <Link style={linkStyle} to='/hydration-tracker'>
            <div className='nav-item' id='nav-hydration'>
              <i className='material-icons nav-icon'>water</i>
              <div className='nav-item-label'>Hydration Tracker</div>
            </div>
          </Link>
          <hr />
          {loggedIn ? (
            <div
              className='nav-item'
              aria-label='loggedIn'
              id='nav-log-button'
              onClick={logOutHandler}
            >
              <i className='material-icons nav-icon'>power</i>
              <div className='nav-item-label'>Log Out</div>
            </div>
          ) : (
            <div
              className='nav-item'
              aria-label='loggedOut'
              id='nav-log-button'
              onClick={logInHandler}
            >
              <i className='material-icons nav-icon'>dashboard</i>
              <div className='nav-item-label'>Log In</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
