import React from "react";
import IconPlus from "./svg/IconPlus";
import Wen from "./svg/Wen";
import Person from "./svg/Person";
import Logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="left--header">
          <img src={Logo} alt="logo leboncoin" className="logo" />
          <button className="publish--button">
            <span className="iconPlus">
              <IconPlus />
            </span>
            Déposer une annonce
          </button>
          <button className="search--button">
            <Wen /> Rechercher
          </button>
        </div>
        <div className="right--header">
          <button className="person--button">
            <Person /> Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
