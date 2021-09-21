import React from "react";
import "../css/Nav.css";
function Nav() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark navigation"
        style={{ width: "280px", height: "100vh", borderRadius: "1rem" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            {/* <use xlink:href="#bootstrap" /> */}
          </svg>
          <span className="fs-4">Saksham</span>
        </a>
        <hr />
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button className="btn align-items-center rounded item" href="#">
              Home
            </button>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed item"
              data-bs-toggle="collapse"
              data-bs-target="#about-us"
              aria-expanded="false"
            >
              About Us
            </button>
            <div className="collapse" id="about-us">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded item">
                    Mission, Vision \& Core Values
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Journey of 10 years
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed item"
              data-bs-toggle="collapse"
              data-bs-target="#our-works"
              aria-expanded="false"
            >
              Our Works
            </button>
            <div className="collapse" id="our-works">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded item">
                    Hunger
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Poverty
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Health
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Women Empowerment
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Privileged Child
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Disaster Response
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    General Awareness
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed item"
              data-bs-toggle="collapse"
              data-bs-target="#campaign"
              aria-expanded="false"
            >
              Campaign
            </button>
            <div className="collapse" id="campaign">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded item">
                    Shiksha Ek Nayi Ummeed
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Koi Bhukha Na Rah Jaaye
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Little Help Can Make A Big Difference
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed item"
              data-bs-toggle="collapse"
              data-bs-target="#join-together"
              aria-expanded="false"
            >
              Join Together
            </button>
            <div className="collapse" id="join-together">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded item">
                    Individual
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Corporate
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Institutional Alliance
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    School/College
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    Internship
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
