import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RequirementLogo from "../../asset/24px/Recruitment.png";

const Recuitmentfile = () => {
  const [reqDropdown, setReqDropdown] = useState("org-dropdown");
  const handleReqclick = () => {
    if (reqDropdown === "org-dropdown") {
      setReqDropdown("org-open");
    } else {
      setReqDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handleReqclick}>
        <span></span>
        <img src={RequirementLogo} alt="Requirement" />
        <p id="dropdown">
          Interview Scheduler<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleReqclick}>
        <span></span>
        <img src={RequirementLogo} alt="Requirement" />
      </div>
      <div className={reqDropdown}>
        <p onClick={() => navigation("/hr/recruitment/candidate")}>
          Candidates
        </p>
        <p onClick={() => navigation("/hr/recruitment/interview")}>Interview</p>
        <p onClick={() => navigation("/hr/recruitment/talent")}>Talent</p>
        <p onClick={() => navigation("/hr/recruitment/user")}>Users</p>
      </div>
    </div>
  );
};

export default Recuitmentfile;
