import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import objective1 from "./objective1.png";
import objective2 from "./objective2.png";
import objective3 from "./objective3.png";
import objective4 from "./objective4.png";

function Main() {
  return (
    <div className="container-fluid">
      <Slider />
      <Objectives />
      <MisVisVal />
    </div>
  );
}

function Slider() {
  return (
    <>
      <div id="saksham-home" className="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={slider1}
              className="d-block w-100 flex-column p-5"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="slider-content">WE ARE ALWAYS OPEN FOR CHILDREN</p>
              <h5 className="slider-heading">
                Give A Helping Hand To Those Who Need It.
              </h5>
              <button className="btn" onClick="#">
                Learn More
              </button>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src={slider2}
              class="d-block w-100 flex-column p-5"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="slider-content">
                WE ARE CREATING A BRIGHTER TOMORROW
              </p>
              <h5 className="slider-heading">
                Make Someone's Life By Your Giving.
              </h5>
              <button className="btn" onClick="#">
                Learn More
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={slider3}
              className="d-block w-100 flex-column p-5"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="slider-content">REBUILDING LIVES FOR FUTURE</p>
              <h5 className="slider-heading">
                There Is No Big Thing Than Your Concern.
              </h5>
              <button className="btn" onClick="#">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#saksham-home"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#saksham-home"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

function Objectives() {
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

function MisVisVal() {
  return (
    <div class="row mvv">
      <div class="col-sm-5 col-md-6 mvv-col-1">
        <p>
          <a
            className="btn btn-primary mvv-button"
            data-bs-toggle="collapse"
            href="#mission_id"
            role="button"
            aria-expanded="false"
            aria-controls="mission_id"
          >
            MISSION
          </a>
          <button
            className="btn btn-primary mvv-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#value_id"
            aria-expanded="false"
            aria-controls="value_id"
          >
            VALUE
          </button>
          <button
            className="btn btn-primary mvv-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#vision_id"
            aria-expanded="false"
            aria-controls="vision_id"
          >
            VISION
          </button>
        </p>
        <div className="active" id="mission_id">
          <div className="card card-body mvv-content">
            <h5 className="mvv-sub-heading">Always Open</h5>
            <h3 className="mvv-heading">For those who need help</h3>
            <p>
              Work as a catalyst in bringing sustainable change in the lives of
              underprivileged children, youth and women, with a life-cycle
              approach of development. Enable the civil society across the world
              to engage proactively in the change process through the philosophy
              of civic driven change. Adopt highest standards of governance to
              emerge as a leading knowledge and technology driven, innovative
              and scalable international development organization.
            </p>
            <button className="btn btn-primary donate" onClick>
              Donate Now
            </button>
          </div>
        </div>
        <div className="collapse" id="value_id">
          <div className="card card-body mvv-content">
            <h5 className="mvv-sub-heading">HOW WE HELP</h5>
            <h3 className="mvv-heading">Give Hope for a Better Future</h3>
            <p>
              Our work aims to eliminate the vicious circle of poverty and
              social isolation and to revive hope for a far better future. We
              believe that every person has the proper to access resources and
              opportunities so as to measure and develop with dignity and to
              become a lively and contributing member of our society.
            </p>
            <button className="btn btn-primary donate" onClick>
              Donate Now
            </button>
          </div>
        </div>
        <div className="collapse" id="vision_id">
          <div className="card card-body mvv-content">
            <h5 className="mvv-sub-heading">WE + SAKSHAM</h5>
            <h3 className="mvv-heading">Integrity and Humanity Together</h3>
            <p>
              Integrity in everything we do. <br /> <br />
              Serve with passion Empathy for All <br /> <br />
              Shiksha-Ak Nayi Ummed
              <br />
              <br />
            </p>
            <button className="btn btn-primary donate" onClick>
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-5 col-md-6 mvv-col-2">
        <img
          src="https://sakshamhelpinghand.org/wp-content/uploads/2021/08/saksham-2-scaled.jpg"
          alt="kids"
        />
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.querySelector("#root"));
