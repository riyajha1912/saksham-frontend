import React from "react";

export default function MVV() {
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
