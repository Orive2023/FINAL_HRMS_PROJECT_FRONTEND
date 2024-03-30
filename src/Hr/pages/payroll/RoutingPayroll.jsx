import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AdvanceSalaryView from "../payroll/AdvanceSalary/Mainfile/AdvanceSalaryView";
import AdvanceSalaryEdit from "../payroll/AdvanceSalary/Mainfile/AdvanceSalaryEdit";
import SalaryTemplateView from "../payroll/Salarytemplate/Mainfile/SalaryTemplateView";
import EditSalaryTemplate from "./Salarytemplate/Mainfile/EditSalaryTemplate";
import PayslipGenerator from './PayslipGenerator/Mainfile/PayslipGeneratorView'
import Payslip from "../../pages/payroll/PayslipGenerator/Payslip"
import PayslipProfile from "./PayslipGenerator/Mainfile/PayslipProfile";
import AdvanceProfile from "./AdvanceSalary/Mainfile/AdvanceProfile";
import PayslipGeneratorView from "./PayslipGenerator/Mainfile/PayslipGeneratorView";
import Login from '../../../Login'

const RoutingProject = () => {
  return (
    <div>
      <div className="App">
        <Routes>
        <Route
            path="/payslip-download/:id"
            exact
            element={localStorage.getItem("Role")==="ADMIN"?<Payslip />:<Navigate to='/'/>}
          />

          <Route
            path="/hr/payroll/advance-Salary"
            exact
            element={localStorage.getItem("Role")==="ADMIN"?<AdvanceSalaryView />:<Navigate to='/'/>}
          />
           <Route
            path="/hr/payroll/advance-profile/:id"
            exact
            element={localStorage.getItem("Role")==="ADMIN"?<AdvanceProfile />:<Navigate to='/'/>}
          />
          <Route
            path="/payroll/edit-advance-salary/:id"
            exact
            element={localStorage.getItem("Role")==="ADMIN"?<AdvanceSalaryEdit />:<Navigate to='/'/>}
          />
          <Route
            path="/payroll/payslip-profile/:id"
            exact
            element={localStorage.getItem("Role")==="ADMIN"?<PayslipProfile />:<Navigate to='/'/>}
          />
          <Route
            path="/hr/payroll/salary-template"
            exact
            element={localStorage.getItem("Role")==="ADMIN"?<SalaryTemplateView />:<Navigate to='/'/>}
          />
          <Route
            path="/payroll/edit-salary-template/:id"
            exact
            element={localStorage.getItem("Role")==="ADMIN"?<EditSalaryTemplate />:<Navigate to='/'/>}
          />
          <Route
            path="/hr/payroll/payslip-generator"
            exact
            element={localStorage.getItem("Role")==="ADMIN"?<PayslipGenerator />:<Navigate to='/'/>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default RoutingProject;
