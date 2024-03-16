import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/Project.png";

const ComplaintFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/complaint")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Profile" />
        <p>Complaint</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/complaint")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Profile" />
      </div>
    </div>
  );
};

export default ComplaintFile;
