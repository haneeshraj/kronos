import React, { useState } from "react";
import "./StickiesScreen.css";
import Navbar from "../../components/Navbar";
import Sticky from "../../components/Sticky";
import { useNavigate } from "react-router-dom";

const userName = "Haneesh";

// LIMIT CONTENT TO ONLY 200 CHARACTERS WHILE DISPLAYING (SUBSTRNG)

const StickiesScreen = () => {
  const [stickies, setStickies] = useState([
    {
      title: "Edit Notes",
      content:
        "Click on the edit button and delete all the content and start taking notes!",
    },
    {
      title: "Delete Notes",
      content: "You can click on delete button to delete a note!",
    },
  ]);

  const navigate = useNavigate();

  const defaultSticky = {
    title: "New Note",
    content: "This is a template content notes.",
  };

  function deleteHandler(id) {
    setStickies(
      stickies.filter((sticky, index) => {
        return index !== id;
      })
    );
  }

  function addHandler() {
    setStickies([...stickies, defaultSticky]);
  }

  function editHandler(id) {
    navigate("/stickies/edit");
    console.log(id);
  }

  return (
    <>
      <Navbar />
      <div className='stickies-header'>
        <h3>stickies</h3>
        <p>Welcome, {userName}!</p>
      </div>
      <div className='stickies-container'>
        {stickies.map(({ title, content }, index) => {
          return (
            <Sticky
              key={index}
              id={index}
              content={content}
              title={title}
              onDelete={deleteHandler}
              onEdit={editHandler}
            />
          );
        })}
      </div>
      <div className='sticky-add-btn' onClick={addHandler}>
        <i className='material-icons sticky-add-icon'>add</i>
      </div>
    </>
  );
};

export default StickiesScreen;
