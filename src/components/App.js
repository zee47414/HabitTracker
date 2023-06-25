//Import required libraries
import React from "react";
import { Route, Routes } from "react-router-dom";

//Import required files
import Home from "./Home";
import WeekView from "./WeekView";

const App = () => {
  
  
  return (
    //Using routes to redering home and weekview pages
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/week-view" element={<WeekView/>}/>
    </Routes>
    </>
  );
};

export default App;