import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProcurementLogo from "../../asset/24px/Procurement.png";

const ProcurementFile = () => {
  const [procurementDropdown, setProcurementDropdown] =
    useState("org-dropdown");

  const handleProcurementclick = () => {
    if (procurementDropdown === "org-dropdown") {
      setProcurementDropdown("org-open");
    } else {
      setProcurementDropdown("org-dropdown");
    }
  };
  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handleProcurementclick}>
        <span></span>
        <img src={ProcurementLogo} alt="Procurement" />
        <p id="dropdown">
          Procurement<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleProcurementclick}>
        <span></span>
        <img src={ProcurementLogo} alt="Procurement" />
      </div>
      <div className={procurementDropdown}>
        <p onClick={() => navigation("/hr/procurement/bidAnalysis")}>
          Bid Analysis
        </p>
        <p onClick={() => navigation("/hr/procurement/committee")}>Commitee</p>

        <p onClick={() => navigation("/hr/procurement/purchase-order")}>
          Purchase Order
        </p>
        <p onClick={() => navigation("/hr/procurement/request")}>Request</p>
        <p onClick={() => navigation("/hr/procurement/unit")}>Units</p>
        <p onClick={() => navigation("/hr/procurement/vendor")}>Vendor</p>
      </div>
    </div>
  );
};

export default ProcurementFile;
