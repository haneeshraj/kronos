import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ToDoListScreen from "../src/screens/todolist/ToDoListScreen";
import LoginScreen from "../src/screens/login/LoginScreen";
import RegisterScreen from "../src/screens/register/RegisterScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/todolist' element={<ToDoListScreen />}></Route>
          <Route path='/login' element={<LoginScreen />}></Route>
          <Route path='/register' element={<RegisterScreen />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
