import React from "react";

export const Picture = (props) => {
  return (
    <div key={1} className="pic">
      <img src={props.icon} alt="..." />
    </div>
  );
};
