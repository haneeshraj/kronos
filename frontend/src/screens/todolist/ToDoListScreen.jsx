import React, { useState } from "react";
import "./ToDoListScreen.css";
import Task from "../../components/Task";
import { listStarter } from "../../data";
import Navbar from "../../components/Navbar";

function App() {
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState(listStarter);

  const date = new Date();
  const today = date.getDate();

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [numTasks, setNumTasks] = useState(tasks.length);

  function textHandler(event) {
    setUserInput(event.target.value);
  }

  function submitHandler(event) {
    setNumTasks(tasks.length + 1);
    setTasks((prev) => {
      return [...prev, userInput];
    });
    setUserInput("");
  }
  function deleteHandler(id) {
    setTasks(
      tasks.filter((task, index) => {
        return index !== id;
      })
    );
    setNumTasks(numTasks - 1);
  }
  return (
    <>
      <Navbar />
      <div className='todo-center'>
        <div className='todo-box'>
          <div className='todo-detailsSection'>
            <h2>
              {weekDays[date.getDay()]}, {`${today}`}
              {today === 1 || today === 21 || today === 31
                ? "st"
                : today === 2 || today === 22
                ? "nd"
                : today === 3 || today === 23
                ? "rd"
                : "th"}
            </h2>
            <div className='todo-container'>
              <span id='todo-month'>{months[date.getMonth()]}</span>
              <span id='todo-numTasks'>
                <strong>{numTasks}</strong> Tasks
              </span>
            </div>
          </div>
          <hr className='todo-hr' />
          <input
            type='text'
            id='todo-taskInput'
            placeholder='Enter a task here'
            value={userInput}
            onChange={textHandler}
          />
          <div
            className='todo-btn'
            onClick={userInput === "" ? undefined : submitHandler}
          >
            <div className='todo-btnText'>Add</div>
          </div>
          <hr className='todo-hr' />
          {numTasks === 0 ? (
            <div className='todo-error'>
              <h2>Oops..</h2>
              <p>
                You have no tasks. Make a new task by entering a task above!
              </p>
            </div>
          ) : (
            tasks.map((task, index) => {
              return (
                <Task
                  id={index}
                  onFinished={deleteHandler}
                  key={index}
                  text={task}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
