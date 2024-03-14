import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loan from "../../asset/24px/Loan.png";
const LoanFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/loan")}
      >
        <span></span>
        <img src={Loan} alt="Dashboard" />
        <p>Loan</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/loan")}
      >
        <span></span>
        <img src={Loan} alt="JobVacancy" />
      </div>
    </div>
  );
};

export default LoanFile;
