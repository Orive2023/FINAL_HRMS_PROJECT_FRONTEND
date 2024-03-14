import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayrollLogo from "../../asset/24px/Payroll.png";

const PayrollFile = () => {
  const [payDropdown, setPayDropdown] = useState("org-dropdown");
  const handlePayclick = () => {
    if (payDropdown === "org-dropdown") {
      setPayDropdown("org-open");
    } else {
      setPayDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handlePayclick}>
        <span></span>
        <img src={PayrollLogo} alt="Payroll" />
        <p id="dropdown">
          Payroll<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handlePayclick}>
        <span></span>
        <img src={PayrollLogo} alt="Payroll" />
      </div>
      <div className={payDropdown}>
        <p onClick={() => navigation("/hr/payroll/salary-template")}>
          Payroll Templates
        </p>
        <p onClick={() => navigation("/hr/payroll/advance-Salary")}>
          Advance Salary
        </p>
        <p onClick={() => navigation("/hr/payroll/payslip-generator")}>
          Payslip Generator
        </p>
      </div>
    </div>
  );
};

export default PayrollFile;
