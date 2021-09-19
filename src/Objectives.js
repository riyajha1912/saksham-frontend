import React from "react";
import objective1 from "./static/images/objective1.png";
import objective2 from "./static/images/objective2.png";
import objective3 from "./static/images/objective3.png";
import objective4 from "./static/images/objective4.png";

export default function Objectives() {
  return (
    <div className="container overflow-hidden objective">
      <div className="row g-4 ">
        <div className="col-2 objective-blue img">
          <div className="p-3">
            <img src={objective1} alt="hunger"></img>
          </div>
        </div>
        <div className="col-4 objective-blue desc">
          <div className="p-3 objective-parent">
            <h4 className="objective-heading">Hunger</h4> <br />
            We help the hunger people around we are. Everyone has a right to
            healthy meal.
          </div>
        </div>
        <div className="col-2 objective-white img">
          <div className="p-3 ">
            <img src={objective2} alt="edu" />
          </div>
        </div>
        <div className="col-4 objective-white desc">
          <div className="p-3 objective-parent">
            <h4 className="objective-heading">Education</h4> <br />
            We helped many children in completing their education and help them
            rise.
          </div>
        </div>
        <div className="col-2 objective-white img">
          <div className="p-3">
            <img src={objective3} alt="med" />
          </div>
        </div>
        <div className="col-4 objective-white desc">
          <div className="p-3 objective-parent">
            <h4 className="objective-heading">Medical Help</h4> <br />
            We helped lots of people to get their medical treatment on time and
            saved their lives.
          </div>
        </div>
        <div className="col-2 objective-blue img">
          <div className="p-3 ">
            <img src={objective4} alt="women" />
          </div>
        </div>
        <div className="col-4 objective-blue desc">
          <div className="p-3 objective-parent">
            <h4 className="objective-heading">Women Empowerment</h4> <br />
            We helped lots of people to get their medical treatment on time and
            save their lifes.
          </div>
        </div>
      </div>
    </div>
  );
}
