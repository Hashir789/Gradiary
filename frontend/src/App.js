import React from "react";
import AppBarr from './components/AppBarr'
import SubjectDetails from "./components/SubjectDetails";
import GradeState from "./context/GradeState";
import Settings from "./components/Settings";
import SubjectIteration from "./components/SubjectIteration";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import './App.css'

function App() {

  return (
    <>
    <GradeState>
      <Router>
      <AppBarr/>
          <Routes>
            <Route exact path="/" element={<Main/>}></Route>
            <Route exact path="/home" element={<Settings/>}></Route>
            <Route exact path="/subjectdetails" element={<SubjectDetails/>}></Route>
            <Route exact path="/subjectiterations" element={<SubjectIteration/>}></Route>
            <Route exact path="/login" element={<SignIn/>}></Route>
            <Route exact path="/signup" element={<SignUp/>}></Route>
          </Routes>
      </Router>
    </GradeState>
    </>
    );
}

export default App;
