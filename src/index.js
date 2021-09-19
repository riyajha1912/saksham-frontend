import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./Nav";
import Slider from "./Slider";
import Objectives from "./Objectives";
import MisVisVal from "./MVV";

function Main() {
  return (
    <div className="container-fluid">
      <Nav />
      <Slider />
      <Objectives />
      <MisVisVal />
    </div>
  );
}

ReactDOM.render(<Main />, document.querySelector("#root"));
