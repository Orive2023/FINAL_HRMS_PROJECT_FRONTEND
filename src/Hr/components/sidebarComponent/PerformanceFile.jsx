import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PerformanceLogo from "../../asset/24px/Performance.png";
const PerformanceFile = () => {
  const [perDropdown, setPerDropdown] = useState("org-dropdown");
  const handlePerclick = () => {
    if (perDropdown === "org-dropdown") {
      setPerDropdown("org-open");
    } else {
      setPerDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handlePerclick}>
        <span></span>
        <img src={PerformanceLogo} alt="Performance" />
        <p id="dropdown">
          Performance<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handlePerclick}>
        <span></span>
        <img src={PerformanceLogo} alt="Performance" />
      </div>
      <div className={perDropdown}>
        <p onClick={() => navigation("/hr/performance/Performance-Appraisal")}>
          Appraisal
        </p>
      </div>
    </div>
  );
};

export default PerformanceFile;
