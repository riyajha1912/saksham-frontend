import { React } from "react";
import slider1 from "./static/images/slider1.jpg";
import slider2 from "./static/images/slider2.jpg";
import slider3 from "./static/images/slider3.jpg";

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

export default Slider;
