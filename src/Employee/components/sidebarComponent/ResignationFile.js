import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/Project.png";

const ResignationFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/resignation")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Resignation" />
        <p>Resignation</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/resignation")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Resignation" />
      </div>
    </div>
  );
};

export default ResignationFile;
