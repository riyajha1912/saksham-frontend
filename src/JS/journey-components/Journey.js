import React from "react";
import "../../css/journey.css";
import "react-vertical-timeline-component/style.min.css";
import elements from "./Elements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
const Journey = () => {
  return (
    <>
      <div className=""></div>
      <div>
        <div className="heading">
          <img className="head-image" src="" alt="journey" />
          <h1 className="title">JOURNEY</h1>
        </div>
        <VerticalTimeline>
          {elements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
              >
                <div className="content">
                  <div className="text-content">
                    <div className="image">
                      <img src={element.icon} alt="icon"></img>
                    </div>
                    <h3 className="vertical-timeline-element-title">
                      {element.title}
                    </h3>
                  </div>

                  <p id="description">{element.description}</p>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Journey;
