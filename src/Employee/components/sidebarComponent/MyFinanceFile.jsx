import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BankLogo from "../../asset/24px/Bank.png";

const Bankfile = () => {
  const [bankDropdown, setBankDropdown] = useState("org-dropdown");
  const handleBankclick = () => {
    if (bankDropdown === "org-dropdown") {
      setBankDropdown("org-open");
    } else {
      setBankDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handleBankclick}>
        <span></span>
        <img src={BankLogo} alt="Bank" />
        <p id="dropdown">
          My Finance<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleBankclick}>
        <span></span>
        <img src={BankLogo} alt="Bank" />
      </div>
      <div className={bankDropdown}>
        <p onClick={() => navigation("/employee/bank/add-bank")}>Add Banks</p>
      </div>
    </div>
  );
};

export default Bankfile;
