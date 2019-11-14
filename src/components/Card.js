import React from "react";
import Photo from "../images/image1.png";

const Card = () => {
  return (
    <div className="card">
      <div className="wrapper">
        <div className="card--inside">
          <div className="card--img">
            <img src={Photo} alt="photo annonce" />
          </div>
          <div className="card--txt">
            <div className="card--txt--top">
              <span className="card--title">
                Peugeot 308 Allure SetS 130 CV EAT 6
              </span>
              <span className="card--price">17 500€</span>
            </div>
            <div classname="card--txt--bottom">
              <span className="card--date">13/11/2019 à 18:10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
