import React from "react";
import Wen from "../components/svg/Wen";

const Search = () => {
  return (
    <div className="search">
      <div className="wrapper">
        <div className="search--inside">
          <div className="search--search">
            <div className="wen">
              <Wen />
            </div>

            <input type="text" placeholder="Que recherchez-vous ?" size="25" />
          </div>
          <button className="search--search--button">Rechercher</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
