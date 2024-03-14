import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountLogo from "../../asset/24px/Account.png";

const Accountfile = () => {
  const [accountDropdown, setAccountDropdown] = useState("org-dropdown");
  const handleAccountclick = () => {
    if (accountDropdown === "org-dropdown") {
      setAccountDropdown("org-open");
    } else {
      setAccountDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handleAccountclick}>
        <span></span>
        <img src={AccountLogo} alt="Account" />
        <p id="dropdown">
          Account<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleAccountclick}>
        <span></span>
        <img src={AccountLogo} alt="Account" />
      </div>
      <div className={accountDropdown}>
        <p onClick={() => navigation("/hr/account/account-balance")}>
          Account Balance
        </p>
        <p onClick={() => navigation("/hr/account/sub-type")}>Sub Type</p>
        <p onClick={() => navigation("/hr/account/debit")}>Debit Voucher</p>
        <p onClick={() => navigation("/hr/account/credit-voucher")}>
          Credit Voucher
        </p>
        <p onClick={() => navigation("/hr/account/financial-year")}>
          Finacial Year
        </p>
        <p onClick={() => navigation("/hr/account/contra-voucher")}>
          Contra Voucher
        </p>
        <p onClick={() => navigation("/hr/account/opening-balance")}>
          Opening Balance
        </p>
        {/* <p onClick={() => navigation("/hr/account/debit-voucher")}>Contra Voucher</p> */}
      </div>
    </div>
  );
};

export default Accountfile;
