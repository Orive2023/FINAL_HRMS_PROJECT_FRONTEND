import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/termination.png";

const TerminationFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/termination")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Termination" />
        <p>Termination</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/termination")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Termination" />
      </div>
    </div>
  );
};

export default TerminationFile;
