import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountLogo from "../../asset/24px/Account.png";

const ExperienceLetter = () => {
  const [attendanceDropdown, setAttendanceDropdown] = useState("org-dropdown");
  const handleAttendanceclick = () => {
    if (attendanceDropdown === "org-dropdown") {
      setAttendanceDropdown("org-open");
    } else {
      setAttendanceDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handleAttendanceclick}>
        <span></span>
        <img src={AccountLogo} alt="Account" />
        <p id="dropdown">
        Experience Category<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleAttendanceclick}>
        <span></span>
        <img src={AccountLogo} alt="Account" />
      </div>
      <div className={attendanceDropdown}>
        <p onClick={() => navigation("/employee/experience-letter")}>
          Experience Letter
        </p>
      </div>
      <div className={attendanceDropdown}>
        <p onClick={() => navigation("/employee/joining-letter")}>
         Experience Joining letter
        </p>
      </div>
      <div className={attendanceDropdown}>
        <p onClick={() => navigation("/employee/int-letter")}>
         INT Joining Letter
        </p>
      </div>
     
    </div>
  );
};

export default ExperienceLetter;
