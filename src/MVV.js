//import react and useState from dependencies

import React from "react";
import { useState } from "react";

//use export default to export the function to the desired file, use any name in that destination file to import
//MVV is the component
export default function MVV() {
  //create an array called motive and a function setMotive to change the array contents, use useState as hook.
  const [motive, setMotive] = useState({
    //define any number of required variables inside the array but making it an object.
    c_btn: "mission",
    sub_head: "Always Open",
    heading: "For Those Who Need Help",
    desc: "Work as a catalyst in bringing sustainable change in the lives of\nunderprivileged children, youth and women, with a life-cycle\napproach of development. Enable the civil society across the world\nto engage proactively in the change process through the philosophy\nof civic driven change. Adopt highest standards of governance to\nemerge as a leading knowledge and technology driven, innovative\nand scalable international development organization.",
  });

  //anything that is to be printed on screen is written inside return function.
  return (
    <div className="row mvv">
      <div className="col-sm-5 col-md-6 mvv-col-1">
        <p>
          {/* change values if mission button is clicked. */}
          <button
            className="btn btn-primary mvv-button"
            //short-hand for function is used here.
            //changes the value of people using setPeople() when the button is clicked.
            onClick={() => {
              setMotive({
                //spread operator used, makes exact copy of the array(people).
                ...motive,

                //change the variable you want to.
                sub_head: "Always Open",
                heading: "For Those Who Need Help",
                desc: "Work as a catalyst in bringing sustainable change in the lives of\nunderprivileged children, youth and women, with a life-cycle\napproach of development. Enable the civil society across the world\nto engage proactively in the change process through the philosophy\nof civic driven change. Adopt highest standards of governance to\nemerge as a leading knowledge and technology driven, innovative\nand scalable international development organization.",
              });

              //return the new array.
              return motive;
            }}
          >
            MISSION
          </button>

          {/* change values if value button is clicked. */}
          <button
            className="btn btn-primary mvv-button"
            type="button"
            onClick={() => {
              setMotive({
                ...motive,
                c_btn: "value",
                sub_head: "How We Help",
                heading: "Give Hope For A Better Future",
                desc: "Our work aims to eliminate the vicious circle of poverty and\nsocial isolation and to revive hope for a far better future. We\nbelieve that every person has the proper to access resources and\nopportunities so as to measure and develop with dignity and to\nbecome a lively and contributing member of our society.",
              });
              return motive;
            }}
          >
            VALUE
          </button>

          {/* change values if vision button is clicked. */}
          <button
            className="btn btn-primary mvv-button"
            type="button"
            onClick={() => {
              setMotive({
                ...motive,
                c_btn: "vision",
                sub_head: "We+Saksham",
                heading: "Integrity and Humanity Together",
                desc: "Integrity in everything we do.\nServe with passion Empathy for All\n\n\nShiksha-Ak Nayi Ummed",
              });
              return motive;
            }}
          >
            VISION
          </button>
        </p>
        <div id="value_id">
          <div className=" mvv-content">
            {/* to call a specific variable from the array, write <array.variable>. */}
            <h5 className="mvv-sub-heading">{motive.sub_head}</h5>
            <h3 className="mvv-heading">{motive.heading}</h3>
            <p>{motive.desc}</p>
            <button className="btn btn-primary donate">Donate Now</button>
          </div>
        </div>
      </div>
      <div className="col-sm-5 col-md-6 mvv-col-2">
        <img
          src="https://sakshamhelpinghand.org/wp-content/uploads/2021/08/saksham-2-scaled.jpg"
          alt="kids"
        />
      </div>
    </div>
  );
}
