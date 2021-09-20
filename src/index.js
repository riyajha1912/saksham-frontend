import React from "react";
import ReactDOM from "react-dom";

//import css file to activate css.
import "./index.css";

//import all the components to render it inside the html.
import Nav from "./Nav";
import Slider from "./Slider";
import Objectives from "./Objectives";
import MisVisVal from "./MVV";

//Main component created.
function Main() {
  return (
    <div className="container-fluid">
      <div>
        {/* Nav component called to be rendered. */}
        <Nav />
      </div>
      <div>
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
  );
}

//render the Main component inside the div element with id 'root'.
ReactDOM.render(<Main />, document.querySelector("#root"));
