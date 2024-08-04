import React from "react";
import backgroundImage from "./../assets/4709950.jpg";
import search from "./../assets/search.png";
import secondBackground from "./../assets/secondary-background.svg";

const MainContent = () => {
  return (
    <div className="mainContent-wrapper">
      <div className="left-portion">
        <img src={backgroundImage} alt="" className="backgroundImage" />
      </div>
      <div className="right-portion">
        <img src={secondBackground} alt="" className="secondBackground" />
        <div className="searchBox-wrapper">
          <span>Download your video in an easy way</span>
          <div className="input-wrapper">
            <input
              type="search"
              name=""
              id=""
              placeholder="Paste your video URL here..."
              className="search-box"
            />
            <div className="search-icon-wrapper">
              <img src={search} alt="" srcset="" className="search-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
