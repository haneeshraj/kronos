import React from "react";
import "./StickiesEditScreen.css";
import Navbar from "../../components/Navbar";

const StickiesEditScreen = () => {
  return (
    <>
      <Navbar />
      <div className='sticky-edit-body'>
        <div className='sticky-edit-container'>
          <div className='sticky-edit-box'>
            <input type='text' id='sticky-edit-title' spellCheck='false' />

            <textarea id='sticky-edit-content' spellCheck='false' />
            <div className='sticky-edit-save-btn'>
              <i className='material-icons edit-save-btn'>save</i>
            </div>
            <div className='sticky-edit-delete-btn'>
              <i className='material-icons edit-delete-btn'>delete</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickiesEditScreen;
