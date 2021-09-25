import React from "react";
import "../../css/Sidebar.css";
import { handleCollapse } from "./handleCollapse";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faFemale } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { faInstitution } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faDonate } from "@fortawesome/free-solid-svg-icons";
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";
import { faHouseCrack } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  return (
    <div class="container-sidebar">
      <div
        id="sidebar"
        className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar"
        style={{
          width: "280px",
          height: "100vh",
          borderRadius: "1rem",
          fontFamily: "Quicksand, sans-serif",
          padding: "1rem",
        }}
      >
        <button
          className="collapse-sidebar"
          id="cButton"
          onClick={handleCollapse}
        >
          <span className="cButton">
            <FontAwesomeIcon icon={faBackward} size={70} />
          </span>
        </button>
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            {/* <use xlink:href="#bootstrap" /> */}
          </svg>
          <span className="fs-4 saksham change animate__animated animate__bounceInDown ">
            Saksham
          </span>
        </a>
        <hr />
        <ul className="list-unstyled ps-0 ">
          <li className="mb-1">
            <button
              className="btn align-items-center rounded sidebar-item"
              href="#"
            >
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className="text change animate__animated animate__bounceInDown item-home">
                Home
              </span>
            </button>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed sidebar-item"
              data-bs-toggle="collapse"
              data-bs-target="#about-us"
              aria-expanded="false"
            >
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon icon={faCompass} />
              </span>
              <span className="text change animate__animated animate__bounceInDown">
                About Us
              </span>
            </button>
            <div className="collapse" id="about-us">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                    Mission, Vision & Core Values
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faRoad} />
                    </span>
                    Journey of 10 years
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed sidebar-item"
              data-bs-toggle="collapse"
              data-bs-target="#our-works"
              aria-expanded="false"
            >
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon icon={faCompass} />
              </span>
              <span className="text change animate__animated animate__bounceInDown">
                Our Works
              </span>
            </button>
            <div className="collapse" id="our-works">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faUtensils} />
                    </span>
                    Hunger
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    <span style={{ paddingRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faHandHoldingUsd} />
                    </span>
                    Poverty
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faBriefcaseMedical} />
                    </span>
                    Health
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faBookOpenReader} />
                    </span>
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faFemale} />
                    </span>
                    Women Empowerment
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faChild} />
                    </span>
                    Privileged Child
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faHouseCrack} />
                    </span>
                    Disaster Response
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faUsers} />
                    </span>
                    General Awareness
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed sidebar-item"
              data-bs-toggle="collapse"
              data-bs-target="#campaign"
              aria-expanded="false"
            >
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon icon={faRoad} />
              </span>
              <span className="text change animate__animated animate__bounceInDown">
                Campaign
              </span>
            </button>
            <div className="collapse" id="campaign">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded sidebar-item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faSchool} />
                    </span>
                    Shiksha Ek Nayi Ummeed
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded sidebar-item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faUtensilSpoon} />
                    </span>
                    Koi Bhukha Na Rah Jaaye
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded sidebar-item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faDonate} />
                    </span>
                    Little Help Can Make A Big Difference
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed sidebar-item"
              data-bs-toggle="collapse"
              data-bs-target="#join-together"
              aria-expanded="false"
            >
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon icon={faHandBackFist} />
              </span>
              <span className="text change animate__animated animate__bounceInDown">
                Join Together
              </span>
            </button>
            <div className="collapse" id="join-together">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-dark rounded sidebar-item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faPerson} />
                    </span>
                    Individual
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded sidebar-item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faBusinessTime} />
                    </span>
                    Corporate
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded sidebar-item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faInstitution} />
                    </span>
                    Institutional Alliance
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded sidebar-item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faUniversity} />
                    </span>
                    School/College
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded sidebar-item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faHandsHelping} />
                    </span>
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="link-dark rounded sidebar-item">
                    <span style={{ paddingRight: "5px" }}>
                      <FontAwesomeIcon icon={faNetworkWired} />
                    </span>
                    Internship
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="main-content"></div>
    </div>
  );
}

export default Sidebar;
