import React from "react";
import ReactDOM from "react-dom";

//import css file to activate css.
import "./css/index.css";

import Journey from "./JS/Journey-components/Journey";
//import all the components to render it inside the html.
import Sidebar from "./JS/Sidebar-components/Sidebar";
import Slider from "./JS/Slider";
import Objectives from "./JS/Objectives";
import MisVisVal from "./JS/MVV";
import Messages from "./JS/Messages-components/mainMessages";

//Main component created.
function Main() {
  return (
    <>
      {/*have to put the styling for sidebar here because it needs to be fixed to the side,
     and doesnt happen if i put it in a file. If you can fix that, please do.*/}
      <div
        className="sidebar"
        style={{
          position: "fixed",
          top: "0px",
          left: "0",
          zIndex: "100",
        }}
      >
        {/* <Sidebar /> */}
      </div>
      <div className="mainpage">
        <Slider />
        {/* <Objectives />
      <MisVisVal /> */}
        <Messages />
        <Journey />
      </div>
    </>
  );
}

//render the Main component inside the div element with id 'root'.
ReactDOM.render(<Main />, document.querySelector("#root"));
