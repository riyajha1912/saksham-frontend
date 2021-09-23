import React from "react";
import ReactDOM from "react-dom";

//import css file to activate css.
import "./css/index.css";

import Journey from "./JS/journey-components/Journey";
//import all the components to render it inside the html.
import Sidebar from "./JS/Sidebar/Sidebar";
import Slider from "./JS/Slider";
import Objectives from "./JS/Objectives";
import MisVisVal from "./JS/MVV";

//Main component created.
function Main() {
  return (
    <>
      {/* <div
        className="sidebar"
        style={{
          position: "fixed",
          top: "0px",
          left: "0",
          zIndex: "100",
        }}
      >
        <Sidebar />
      </div> */}
      {/* <Slider />
      <Objectives />
      <MisVisVal /> */}
      {/* <div className="container">
        <Journey />
      </div> */}
    </>
  );
}

//render the Main component inside the div element with id 'root'.
ReactDOM.render(<Main />, document.querySelector("#root"));
