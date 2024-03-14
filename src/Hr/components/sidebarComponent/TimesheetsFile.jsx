import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimesheetLogo from "../../asset/24px/Timesheets.png";

const TimesheetsFile = () => {
  const [timeDropdown, setTimeDropdown] = useState("org-dropdown");

  const handleTimeclick = () => {
    if (timeDropdown === "org-dropdown") {
      setTimeDropdown("org-open");
    } else {
      setTimeDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handleTimeclick}>
        <span></span>
        <img src={TimesheetLogo} alt="Timesheet" />
        <p id="dropdown">
          Timesheets<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleTimeclick}>
        <span></span>
        <img src={TimesheetLogo} alt="Timesheet" />
      </div>
      <div className={timeDropdown}>
        <p onClick={() => navigation("/hr/timesheets/attendance")}>Attendance</p>
        <p onClick={() => navigation("/hr/timesheets/leaves")}>Leaves</p>
        <p onClick={() => navigation("/hr/timesheets/holiday")}>Holidays</p>
        <p onClick={() => navigation("/hr/timesheets/officeshift")}>OfficeShift</p>
      </div>
    </div>
  );
};

export default TimesheetsFile;
