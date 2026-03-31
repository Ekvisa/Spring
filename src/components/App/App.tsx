import React from "react";
// import logo from './logo.svg';
import "./App.scss";
import Circle from "../Circle/Circle";
import { dotsCount, circleRadius } from "../../data";
import { Route, Routes } from "react-router-dom";
import Problems from "../Problems/Problems";
import Tests from "../Tests/Tests";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import About from "../About/About";
import Problem from "../Problem/Problem";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/circle"
          element={<Circle dotsCount={dotsCount} circleRadius={circleRadius} />}
        />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:id" element={<Problem />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
