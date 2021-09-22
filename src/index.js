import React from "react";
import ReactDOM from "react-dom";

//import css file to activate css.
import "./css/index.css";

import Journey from "./JS/Journey";
//import all the components to render it inside the html.
import Nav from "./JS/Nav";
import Slider from "./JS/Slider";
import Objectives from "./JS/Objectives";
import MisVisVal from "./JS/MVV";

//Main component created.
function Main() {
  return (
    <div className="container-fluid">
      {/* <Journey /> */}
      <div className="wrapper">
        <div className="box sidebar">
          <Nav />
        </div>
        <div className="box content">
          <div className="slider">
            <Slider />
          </div>
          <div>
            <Objectives />
          </div>
          <div>
            <MisVisVal />
          </div>
        </div>
      </div>
    </div>
  );
}

//render the Main component inside the div element with id 'root'.
ReactDOM.render(<Main />, document.querySelector("#root"));
