import React from "react";
import "./Task.css";

function Task({ text, id, onFinished, color }) {
  return (
    <>
      <div
        className='task'
        onClick={() => {
          return onFinished(id);
        }}
      >
        <div className='todo-btnText'>{text}</div>
      </div>
    </>
  );
}

export default Task;
