import React, { useState } from "react";
import "./StickiesScreen.css";
import Navbar from "../../components/Navbar";
import Sticky from "../../components/Sticky";

const userName = "Haneesh";

// LIMIT CONTENT TO ONLY 200 CHARACTERS WHILE DISPLAYING (SUBSTRNG)

const StickiesScreen = () => {
  const [stickies, setStickies] = useState([
    {
      title: "Testing Title 1",
      content:
        "Description one two three what the fuck ok pls work three what the fuckok pls work three what the fuck ok pls work three what the fuck ok plswork....ok pls work....ok pls work....ok pls work....ok p....",
    },
    {
      title: "Testing Title 2",
      content:
        "Description one two three what the fuck ok pls work three what the fuckok pls work three what the fuck ok pls work three what the fuck ok plswork....ok pls work....ok pls work....ok pls work....ok p....",
    },
  ]);
  function deleteHandler(id) {
    setStickies(
      stickies.filter((sticky, index) => {
        return index !== id;
      })
    );
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
            />
          );
        })}
      </div>
      <div className='sticky-add-btn'>
        <i className='material-icons sticky-add-icon'>add</i>
      </div>
    </>
  );
};

export default StickiesScreen;
