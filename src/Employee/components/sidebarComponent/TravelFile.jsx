import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/flight.png";

const TravelFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/travel")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Travel" />
        <p>Travel</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/travel")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Travel" />
      </div>
    </div>
  );
};

export default TravelFile;
