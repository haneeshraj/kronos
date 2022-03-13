import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./ToDoMainScreen.css";

const ToDoMainScreen = () => {
  const navigate = useNavigate();

  const [taskList, setTaskList] = useState(["Testing x"]);

  function addHandler() {
    setTaskList([...taskList, "Testing 2"]);
    // navigate("/todolist/new"); // Navigates to the screen where the name of the list is given
  }

  function deleteHandler(id) {
    setTaskList(taskList.filter((task, i) => id !== i));
  }

  return (
    <>
      <Navbar />
      <div className='todo-ms-header'>
        <h3>To-Dos</h3>
      </div>
      <div className='todo-ms-container'>
        {taskList.length !== 0 ? (
          taskList.map((name, i) => (
            <div className='todo-ms-box' key={i}>
              <div className='todo-ms-box-text'>{name}</div>
              <i
                className='material-icons todo-ms-icon'
                id='tdms-delete'
                onClick={() => deleteHandler(i)}
              >
                delete
              </i>
              <i
                className='material-icons todo-ms-icon'
                id='tdms-edit'
                onClick={() => navigate("/todolist/tasks")}
              >
                edit
              </i>
            </div>
          ))
        ) : (
          <div className='no-todos-container'>
            <p>
              Please click on the <strong>+</strong> button on the bottom right
              to create a To-Do List
            </p>{" "}
          </div>
        )}
        <div className='todo-ms-add-btn' onClick={addHandler}>
          <i className='material-icons todo-ms-add-icon'>add</i>
        </div>
      </div>
    </>
  );
};

export default ToDoMainScreen;
