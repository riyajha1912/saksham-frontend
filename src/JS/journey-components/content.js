import React from "react";
import { Picture } from "./picture";
import $ from "jquery";
import { isScrolledIntoView } from "./isScrolledIntoView";

export const Content = (props) => {
  const { id, heading, content, icon } = props;
  $(window).on("scroll", function () {
    $(".content-item").each(function () {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("animate__slideInRight");
      } else {
        $(this).removeClass("animate__slideInRight");
      }
    });
  });
  return (
    <>
      <div className="content-item animate__animated">
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
