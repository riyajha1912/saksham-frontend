import React from "react";
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

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
  return (
    <div>
      <div key={id} className="year-item animate__animated">
        <div className="example-year">{year}</div>
      </div>
    </div>
  );
};
