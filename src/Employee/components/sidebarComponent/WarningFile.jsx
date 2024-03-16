import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/exclamation.png";

const WarningFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/warning")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Warning" />
        <p>Warning</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/warning")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Warning" />
      </div>
    </div>
  );
};

export default WarningFile;
