import React from "react";

const Sticky = ({ title, content, onDelete, id, onEdit }) => {
  return (
    <div className='stickies-box'>
      <div className='stickies-title'>{title}</div>
      <div className='stickies-content'>{content}</div>
      <div className='stickies-btns'>
        <div id='stickies-edit-icon' onClick={() => onEdit(id)}>
          <i className='material-icons' style={{ fontSize: "15px" }}>
            edit
          </i>
        </div>
        <div id='stickies-delete-icon' onClick={() => onDelete(id)}>
          <i className='material-icons' style={{ fontSize: "15px" }}>
            delete
          </i>
        </div>
      </div>
    </div>
  );
};

export default Sticky;
