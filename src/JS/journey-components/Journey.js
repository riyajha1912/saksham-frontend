import React from "react";
import "../../css/journey.css";
import { Content } from "./content";
import { Year } from "./year";
import icon from "../../static/images/slider1.jpg";

const Journey = () => {
  document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", function () {
      var element = document.getElementById("container-example");
      var position = element.getBoundingClientRect();
      // checking whether fully visible
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add("animate__animated");
      } else {
        element.classList.remove("animate__animated");
      }
    });
  });

  return (
    <>
      <div className="container">
        <span className="vertical" />
        <div className="container-example ">
          <div
            className="item-container animate__animated animate__slideInRight"
            id="container-example"
          >
            <Year year={"2011"} />
            <Content
              id={1}
              heading={"Saksham"}
              icon={icon}
              content={
                "'Saksham- A Helping Hand Foundation' is a Non-Profit body founded in 2011 when its founder Mrs. Namita Gaur pitched in by offering small help to the underprivileged children."
              }
            />
          </div>
          <div className="item-container">
            <Year year={"2012"} />
            <Content
              id={2}
              heading={"Significant Efforts Made In 1 Year"}
              content={
                "Within one year of establishment saksham has made significant efforts for the needy ones in order to make them saksham for themselves and the country too."
              }
            />
          </div>
          <div className="item-container">
            <Year year={"2013"} />
            <Content
              id={3}
              heading={"Brought Better change in society"}
              content={
                "Founded 2 years ago saksham is trying to bring a better change in the society with all the resources it has for the benefit of those who need it."
              }
            />
          </div>
          <div className="item-container">
            <Year year={"2014"} />
            <Content
              id={4}
              heading={"Emerging helping hand"}
              content={
                "Started with a small WhatsApp group saksham is now all new emerging brand in the society known for its helping nature towards everyone in need."
              }
            />
          </div>
          <div className="item-container">
            <Year year={"2015"} />
            <Content
              id={5}
              heading={"Humanity Together Programme"}
              content={
                "Saksham works in all the field, from food to education. Here at saksham we don't discriminate in helping. The foundation is ready to go in every direction where there are still the need of it."
              }
            />
          </div>
          <div className="item-container">
            <Year year={"2016"} />
            <Content
              id={6}
              heading={"Growing Network"}
              content={
                "By helping more than 1000+ people saksham never stops. Mrs Namitha gaur, the founder has made sure that the foundation only rise for those who actually need it."
              }
            />
          </div>
          <div className="item-container">
            <Year year={"2017"} />
            <Content
              id={7}
              heading={"We Are Ready To Help"}
              content={
                "saksham has so far helped people from all the ages and in all the possible field. With the help of many public authorities & officers, saksham brought the change that was needed. And looking forward to do it over and over again."
              }
            />
          </div>
          <div className="item-container">
            <Year year={"2018"} />
            <Content
              id={8}
              heading={"Established As Emerging NGO"}
              content={
                "With the aim of making people saksham for themselves the founder Mrs. Namita gaur started this initiative few years back & now saksham is known everywhere for the work it has done."
              }
            />
          </div>
          <div className="item-container">
            <Year year={"2019"} />
            <Content
              id={9}
              heading={"Support in COVID-19"}
              content={
                "Saksham” has fought the pandemic with India, for India. Helped around 1000 people to get a hospital bed, oxygen, medicine, treatments and food."
              }
            />
          </div>
          <div className="item-container">
            <Year year={"2020"} />
            <Content
              id={10}
              heading={"Completed 10 Years Of Glorious Journey"}
              content={
                "2000+ active people who are working with her on making India “Saksham”. Aims that one-day India will get its true Independence, by being free from Hunger, Poverty and Lack of education."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
