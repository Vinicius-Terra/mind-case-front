import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import CoursePage from "./components/CoursePage";
import CoursesContext from "./contexts/CoursesContext";
import SignIn from "./components/Forms/Sing-In";
import SingUp  from "./components/Forms/Sing-Up";
import { CourseFormCreate } from "./components/CourseFormCreate";
import {useState} from 'react';



function App() {

  const [coursesContext, setCoursesContext] = useState([]);

  return (
    <CoursesContext.Provider value={{ coursesContext, setCoursesContext }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CourseFormCreate />} />
              <Route path="course/:courseId" element={<CoursePage />} />
              <Route path="login" element={<SignIn />} />
              <Route path="signup" element={<SingUp />} />
            </Routes>
          </BrowserRouter>
    </CoursesContext.Provider>
  );
}

export default App;
