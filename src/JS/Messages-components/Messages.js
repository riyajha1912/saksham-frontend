import React from "react";
import "../../css/messages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from "../../static/images/slider1.jpg";

const Messages = () => {
  return (
    <>
      <div className="container-messages">
        <div className="item-messages">
          <div className="item-pic"></div>
          <div
            className="bg-picture"
            style={{ backgroundImage: `url(${slider1})` }}
          ></div>
          <div className="msg">
            <div className="content"></div>
            <div className="buttons">
              <button className="btn">FOLLOW</button>
              <button className="btn">MORE INFO</button>
            </div>
          </div>
        </div>
        <div className="item-messages">
          <div className="item-pic"></div>
          <div className="bg-picture"></div>
          <div className="msg">
            <div className="content"></div>
            <div className="buttons">
              <button className="btn ">FOLLOW</button>
              <button className="btn">MORE INFO</button>
            </div>
          </div>
        </div>
        <div className="item-messages">
          <div className="item-pic"></div>
          <div className="bg-picture"></div>
          <div className="msg">
            <div className="content"></div>
            <div className="buttons">
              <button className="btn">FOLLOW</button>
              <button className="btn">MORE INFO</button>
            </div>
          </div>
        </div>
        <div className="item-messages">
          <div className="item-pic"></div>
          <div className="bg-picture"></div>
          <div className="msg">
            <div className="content"></div>
            <div className="buttons">
              <button className="btn">FOLLOW</button>
              <button className="btn">MORE INFO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
