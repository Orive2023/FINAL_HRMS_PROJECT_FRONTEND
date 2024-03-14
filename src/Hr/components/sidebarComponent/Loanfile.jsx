import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoanLogo from "../../asset/24px/Loan.png";

const Loanfile = () => {
  const [loanDropdown, setLoanDropdown] = useState("org-dropdown");
  const handleLoanclick = () => {
    if (loanDropdown === "org-dropdown") {
      setLoanDropdown("org-open");
    } else {
      setLoanDropdown("org-dropdown");
    }
  };
  const navigation = useNavigate();

  return (
    <div>
      <div className="logo-text-p" onClick={handleLoanclick}>
        <span></span>
        <img src={LoanLogo} alt="Loan" />
        <p id="dropdown">
          Loan<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleLoanclick}>
        <span></span>
        <img src={LoanLogo} alt="Loan" />
      </div>
      <div className={loanDropdown}>
        <p onClick={() => navigation("/hr/loan/grant-loan")}>Grant Loan</p>
      </div>
    </div>
  );
};

export default Loanfile;
