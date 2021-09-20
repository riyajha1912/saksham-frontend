import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Nav from "./Nav";
import Slider from "./Slider";
import Objectives from "./Objectives";
import MisVisVal from "./MVV";
//import { ObjectivesData } from "./data";

function Main() {
  return (
    <div className="container-fluid">
      {/* <div>
        <Nav />
      </div> */}
      <div>
        <Slider />
      </div>
      <div>
        <Objectives />
      </div>
      <div>
        <MisVisVal />
      </div>
    </div>
  );
  // {
  //   ObjectivesData.map((objective) => {
  //     const { id, sub_head, heading, desc } = objective;
  //     return <MisVisVal objective={objective} />;
  //   });
  // }
}

ReactDOM.render(<Main />, document.querySelector("#root"));
