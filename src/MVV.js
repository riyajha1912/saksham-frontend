import React from "react";
import { useState } from "react";

export default function MVV() {
  const [people, setPeople] = useState({
    c_btn: "mission",
    sub_head: "Always Open",
    heading: "For Those Who Need Help",
    desc: "Work as a catalyst in bringing sustainable change in the lives of\nunderprivileged children, youth and women, with a life-cycle\napproach of development. Enable the civil society across the world\nto engage proactively in the change process through the philosophy\nof civic driven change. Adopt highest standards of governance to\nemerge as a leading knowledge and technology driven, innovative\nand scalable international development organization.",
  });

  return (
    <div className="row mvv">
      <div className="col-sm-5 col-md-6 mvv-col-1">
        <p>
          <button
            className="btn btn-primary mvv-button"
            onClick={() => {
              setPeople({
                ...people,
                sub_head: "Always Open",
                heading: "For Those Who Need Help",
                desc: "Work as a catalyst in bringing sustainable change in the lives of\nunderprivileged children, youth and women, with a life-cycle\napproach of development. Enable the civil society across the world\nto engage proactively in the change process through the philosophy\nof civic driven change. Adopt highest standards of governance to\nemerge as a leading knowledge and technology driven, innovative\nand scalable international development organization.",
              });

              return people;
            }}
          >
            MISSION
          </button>
          <button
            className="btn btn-primary mvv-button"
            type="button"
            onClick={() => {
              setPeople({
                ...people,
                c_btn: "value",
                sub_head: "How We Help",
                heading: "Give Hope For A Better Future",
                desc: "Our work aims to eliminate the vicious circle of poverty and\nsocial isolation and to revive hope for a far better future. We\nbelieve that every person has the proper to access resources and\nopportunities so as to measure and develop with dignity and to\nbecome a lively and contributing member of our society.",
              });
              return people;
            }}
          >
            VALUE
          </button>
          <button
            className="btn btn-primary mvv-button"
            type="button"
            onClick={() => {
              setPeople({
                ...people,
                c_btn: "vision",
                sub_head: "We+Saksham",
                heading: "Integrity and Humanity Together",
                desc: "Integrity in everything we do.\nServe with passion Empathy for All\n\n\nShiksha-Ak Nayi Ummed",
              });
              return people;
            }}
          >
            VISION
          </button>
        </p>
        <div id="value_id">
          <div className=" mvv-content">
            <h5 className="mvv-sub-heading">{people.sub_head}</h5>
            <h3 className="mvv-heading">{people.heading}</h3>
            <p>{people.desc}</p>
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
