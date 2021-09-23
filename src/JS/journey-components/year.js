import React from "react";

export const Year = (props) => {
  const { year } = props;
  return (
    <div>
      <div className="year-item animate__animated animate__slideInLeft">
        <div key={1} className="example-year">
          {year}
        </div>
      </div>
    </div>
  );
};
