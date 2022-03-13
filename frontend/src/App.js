import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ToDoListScreen from "../src/screens/todolist/ToDoListScreen";
import LoginScreen from "../src/screens/login/LoginScreen";
import RegisterScreen from "../src/screens/register/RegisterScreen";
import HomeScreen from "./screens/home/HomeScreen";
import ToDoMainScreen from "./screens/todolist/ToDoMainScreen";
import StickiesScreen from "./screens/stickies/StickiesScreen";
import StickiesEditScreen from "./screens/stickies/StickiesEditScreen";
import PomodoroScreen from "./screens/pomodoro/PomodoroScreen";
import HydrationScreen from "./screens/hydration-tracker/HydrationScreen";
import ToDoEditScreen from "./screens/todolist/ToDoEditScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/todolist' element={<ToDoMainScreen />} />
          <Route path='/todolist/tasks' element={<ToDoListScreen />} />
          <Route path='/todolist/new' element={<ToDoEditScreen />} />
          <Route path='/stickies' element={<StickiesScreen />} />
          <Route path='/stickies/edit' element={<StickiesEditScreen />} />
          <Route path='/pomodoro' element={<PomodoroScreen />} />
          <Route path='/hydration-tracker' element={<HydrationScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
