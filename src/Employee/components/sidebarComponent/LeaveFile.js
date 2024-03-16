import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/logout.png";

const LeaveFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/leave")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Policies" />
        <p>Leave</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/leave")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Policies" />
      </div>
    </div>
  );
};

export default LeaveFile;
