import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLogo from "../../asset/24px/Dashboard.png";

const DashboardFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={() => navigation("/HRDashboard")}>
        <span></span>
        <img src={DashboardLogo} alt="Dashboard" />
        <p> Dashboard</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/HRDashboard")}
      >
        <span></span>
        <img src={DashboardLogo} alt="Dashboard" />
      </div>
    </div>
  );
};

export default DashboardFile;
