import React from "react";
import profilePhoto from "./assets/Photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faCircleCheck,
  faMugHot,
  faBicycle,
  faPhoneVolume,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const Card = () => {
  return (
    <div className="card">
      <div className="blank"></div>
      <div className="logo-container">
        <div className="logo">
          <FontAwesomeIcon
            icon={faReceipt}
            style={{ fontSize: 25, color: "#C1FF33" }}
          />
        </div>
        <span className="dotA"></span>
        <span className="dotA"></span>
        <span className="dotA"></span>
        <span className="dotA"></span>
        <div className="logo">
          <FontAwesomeIcon
            icon={faMugHot}
            style={{ fontSize: 25, color: "#C1FF33" }}
          />
        </div>
        <span className="dotA"></span>
        <span className="dotA"></span>
        <span className="dotA"></span>
        <span className="dotA"></span>
        <div className="logo">
          <FontAwesomeIcon
            icon={faBicycle}
            style={{ fontSize: 25, color: "#C1FF33" }}
          />
        </div>
        <span className="dotB"></span>
        <span className="dotB"></span>
        <span className="dotB"></span>
        <span className="dotB"></span>
        <div className="logoB">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ fontSize: 25, color: "#ffff" }}
          />
        </div>
      </div>
      <div className="profile">
        <div className="single">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
          <div className="profile-details">
            <p className="profile-name">Akshat</p>
            <p className="profession">Courier</p>
          </div>
        </div>
        <div className="actions">
          <FontAwesomeIcon
            icon={faPhoneVolume}
            style={{ fontSize: 25, paddingRight: "10px", color: "#ffff" }}
          />
          <FontAwesomeIcon
            icon={faComment}
            style={{ fontSize: 25, color: "#ffff" }}
          />
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Card;
