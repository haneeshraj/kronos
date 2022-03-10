import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ToDoListScreen from "../src/screens/todolist/ToDoListScreen";
import LoginScreen from "../src/screens/login/LoginScreen";
import RegisterScreen from "../src/screens/register/RegisterScreen";
import HomeScreen from "./screens/home/HomeScreen";
import ToDoMainScreen from "./screens/todolist/ToDoMainScreen";
import StickiesScreen from "./screens/stickies/StickiesScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/todolist' element={<ToDoListScreen />} />
          <Route path='/todolistms' element={<ToDoMainScreen />} />
          <Route path='/stickies' element={<StickiesScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
