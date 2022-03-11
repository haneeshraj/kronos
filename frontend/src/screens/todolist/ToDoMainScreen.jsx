import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./ToDoMainScreen.css";

const ToDoMainScreen = () => {
  const navigate = useNavigate();

  const [taskList, setTaskList] = useState(["Testing x"]);

  function addHandler() {
    setTaskList([...taskList, "Testing 2"]);
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
        {taskList.map((name, i) => (
          <div className='todo-ms-box'>
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
        ))}
      </div>
      <div className='todo-ms-add-btn' onClick={addHandler}>
        <i className='material-icons todo-ms-add-icon'>add</i>
      </div>
    </>
  );
};

export default ToDoMainScreen;
