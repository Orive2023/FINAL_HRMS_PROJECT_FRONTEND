import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/award.png";

const AwardFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/award")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Award" />
        <p>Award</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/award")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Award" />
      </div>
    </div>
  );
};

export default AwardFile;
