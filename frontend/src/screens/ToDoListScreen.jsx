import React, { useState } from "react";
import Task from "../components/Task";

function App() {
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState([
    "Type the task you want to add",
    "Click the add button to add the task",
  ]);

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

  let color = "#8f9ee2";

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
      <div className='center'>
        <div className='box'>
          <div className='detailsSection'>
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
            <div className='container'>
              <span id='month'>{months[date.getMonth()]}</span>
              <span id='numTasks'>
                <strong>{numTasks}</strong> Tasks
              </span>
            </div>
          </div>
          <hr />
          <input
            type='text'
            id='taskInput'
            placeholder='Enter a task here'
            value={userInput}
            onChange={textHandler}
          />
          <div
            className='btn'
            onClick={userInput === "" ? undefined : submitHandler}
          >
            <div className='btnText'>Add</div>
          </div>
          <hr />
          {numTasks === 0 ? (
            <div className='error'>
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
                  color={color}
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
