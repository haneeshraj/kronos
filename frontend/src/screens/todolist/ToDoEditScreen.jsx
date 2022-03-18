import React from "react";
import Navbar from "../../components/Navbar";
import "./ToDoEditScreen.css";
import { useNavigate } from "react-router-dom";

const ToDoEditScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className='tde-container'>
        <div className='tde-box'>
          <h1 style={{ textAlign: "center" }}>New List</h1>
          <input className='tde-input' />
          <button
            className='tde-btn'
            id='tde-create'
            onClick={() => navigate("/todolist")} // adds this list to the main scren
          >
            Create
          </button>
          <button
            className='tde-btn'
            id='tde-cancel'
            onClick={() => navigate("/todolist")}
          >
            {" "}
            {/* Doesnt add to the list but navigates to the main screen */}
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoEditScreen;
