import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ToDoListScreen from "./screens/ToDoListScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/todolist' element={<ToDoListScreen />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
