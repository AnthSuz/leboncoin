import React from "react";
import Photo from "../images/image1.png";

const Card = () => {
  return (
    <div className="card">
      <div className="wrapper">
        <div className="card--inside">
          <img src={Photo} alt="photo annonce" />
          <p>Peugeot 308 Allure SetS 130 CV EAT 6</p>
          <p>17 500€</p>
          <p>13/11/2019 à 18:10</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
