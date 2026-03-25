import React from "react";
// import logo from './logo.svg';
import "./App.scss";
import Circle from "../Circle/Circle";
import { dotsCount, circleRadius } from "../../data";

function App() {
  // const dotsCount = 4;
  // const dotRadius = 30;
  // const circleRadius = 300;
  return (
    <div className="App">
      <Circle
        dotsCount={dotsCount}
        // dotRadius={dotRadius}
        circleRadius={circleRadius}
      />
    </div>
  );
}

export default App;
