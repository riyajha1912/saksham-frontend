import React from "react";
import { Picture } from "./picture";

export const Content = (props) => {
  const { id, heading, content, icon } = props;
  return (
    <>
      <div className="content-item animate__animated animate__slideInRight">
        <div className="content-whole">
          <Picture icon={icon} />
          <div key={id} className="example-content">
            <div className="heading">{heading}</div>
            <div className="content">{content}</div>
          </div>
        </div>
      </div>
    </>
  );
};
