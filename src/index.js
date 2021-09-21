import React from "react";
import ReactDOM from "react-dom";

//import css file to activate css.
import "./css/index.css";

//import all the components to render it inside the html.
import Nav from "./JS/Nav";
import Slider from "./JS/Slider";
import Objectives from "./JS/Objectives";
import MisVisVal from "./JS/MVV";

//Main component created.
function Main() {
  return (
    <div className="container-fluid">
      <div className="wrapper">
        <div
          className="box sidebar"
          style={{
            height: "auto",
            position: "fixed",

            top: "50px",

            left: "0",

            zIndex: "100",
          }}
        >
          {/* Nav component called to be rendered. */}
          <Nav />
        </div>
        <div className="box content">
          <div className="slider">
            {/* slider component to be rendered. */}
            <Slider />
          </div>
          <div>
            {/* Objectives component to be rendered. */}
            <Objectives />
          </div>
          <div>
            {/* MisVisVal component to be rendered. */}
            <MisVisVal />
          </div>
        </div>
      </div>
    </div>
  );
}

//render the Main component inside the div element with id 'root'.
ReactDOM.render(<Main />, document.querySelector("#root"));
