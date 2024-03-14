import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PerformanceLogo from "../../asset/24px/Performance.png";
const PerformanceFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/performance")}
      >
        <span></span>
        <img src={PerformanceLogo} alt="Dashboard" />
        <p>Performance</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/performance")}
      >
        <span></span>
        <img src={PerformanceLogo} alt="Performance" />
      </div>
    </div>
  );
};

export default PerformanceFile;
