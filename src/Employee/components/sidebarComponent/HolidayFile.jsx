import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loan from "../../asset/24px/umbrella.png";
const HolidayFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/holiday")}
      >
        <span></span>
        <img src={Loan} alt="Dashboard" />
        <p>Holiday</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/holiday")}
      >
        <span></span>
        <img src={Loan} alt="JobVacancy" />
      </div>
    </div>
  );
};

export default HolidayFile;
