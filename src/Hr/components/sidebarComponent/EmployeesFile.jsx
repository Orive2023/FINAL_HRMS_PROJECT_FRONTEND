import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeLogo from "../../asset/24px/Employees.png";

const EmployeesFile = () => {
  const [empDropdown, setEmpDropdown] = useState("org-dropdown");
  const handleEmpclick = () => {
    if (empDropdown === "org-dropdown") {
      setEmpDropdown("org-open");
    } else {
      setEmpDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handleEmpclick}>
        <span></span>
        <img src={EmployeeLogo} alt="Employee" />
        <p id="dropdown">
          Employees<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleEmpclick}>
        <span></span>
        <img src={EmployeeLogo} alt="Employee" />
      </div>
      <div className={empDropdown}>
        <p onClick={() => navigation("/hr/employee/employee")}>Employees</p>

        <p onClick={() => navigation("/hr/employee/awards")}>Awards</p>

        <p onClick={() => navigation("/hr/employee/transfer")}>Transfers</p>

        <p onClick={() => navigation("/hr/employee/resignation")}>
          Resignation
        </p>

        <p onClick={() => navigation("/hr/employee/travel")}>Travels</p>

        <p onClick={() => navigation("/hr/employee/promotions")}>Promotions</p>

        <p onClick={() => navigation("/hr/employee/complaints")}>Complaints</p>

        <p onClick={() => navigation("/hr/employee/warning")}>Warnings</p>

        <p onClick={() => navigation("/hr/employee/termination")}>
          Termination
        </p>

        <p onClick={() => navigation("/hr/employee/employee-exit")}>
          Employee Exit
        </p>

        <p onClick={() => navigation("/hr/employee/certificate")}>
          Certificate
        </p>

        <p onClick={() => navigation("/hr/employee/experience")}>
          Experience Letter
        </p>

        <p onClick={() => navigation("/hr/employee/joining")}>
          EXP Joining Letter 
        </p>

        <p onClick={() => navigation("/hr/employee/intern")}>
          INT Joining Letter
        </p>


        


        

      </div>
    </div>
  );
};

export default EmployeesFile;
