import React from "react";
import "./ToDoMainScreen.css";
import Navbar from "../../components/Navbar";

const items = ["Testing 1", "Testing 2", "Testing 3"];

const ToDoMainScreen = () => {
  return (
    <>
      <Navbar />
      <div className='tdms-header'>
        <h1>To-Dos</h1>
      </div>
      <div className='tdms-list-container'>
        <div className='tdms-list-box-container'>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className='tdms-box'
                onClick={() => console.log("Clicked")}
              >
                <div className='tdms-text'>{item}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='tdms-add-btn'>
        <i className='material-icons tdms-add-icon'>add</i>
      </div>
    </>
  );
};

export default ToDoMainScreen;
