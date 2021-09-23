import React from "react";
import { isScrolledIntoView } from "./isScrolledIntoView";
import $ from "jquery";

export const Year = (props) => {
  const { id, year } = props;

  $(window).on("scroll", function () {
    $(".year-item").each(function () {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("animate__slideInLeft");
      } else {
        $(this).removeClass("animate__slideInLeft");
      }
    });
  });

  return (
    <div>
      <div key={id} className="year-item animate__animated">
        <div className="example-year">{year}</div>
      </div>
    </div>
  );
};
