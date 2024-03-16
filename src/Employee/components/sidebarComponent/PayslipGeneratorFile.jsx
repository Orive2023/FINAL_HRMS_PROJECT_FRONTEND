import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/memo.png";

const PayslipGeneratorFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/payslip")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Payslip" />
        <p>Payslip</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/payslip")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Payslip" />
      </div>
    </div>
  );
};

export default PayslipGeneratorFile;
