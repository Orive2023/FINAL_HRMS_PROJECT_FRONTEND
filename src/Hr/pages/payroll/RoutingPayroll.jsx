import React from "react";
import { Route, Routes } from "react-router-dom";
import AdvanceSalaryView from "../payroll/AdvanceSalary/Mainfile/AdvanceSalaryView";
import AdvanceSalaryEdit from "../payroll/AdvanceSalary/Mainfile/AdvanceSalaryEdit";
import SalaryTemplateView from "../payroll/Salarytemplate/Mainfile/SalaryTemplateView";
import EditSalaryTemplate from "./Salarytemplate/Mainfile/EditSalaryTemplate";
import PayslipGenerator from './PayslipGenerator/Mainfile/PayslipGeneratorView'
import PayslipProfile from "./PayslipGenerator/Mainfile/PayslipProfile";
import AdvanceProfile from "./AdvanceSalary/Mainfile/AdvanceProfile";
const RoutingProject = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route
            path="/hr/payroll/advance-Salary"
            exact
            element={<AdvanceSalaryView />}
          />
           <Route
            path="/hr/payroll/advance-profile/:id"
            exact
            element={<AdvanceProfile />}
          />
          <Route
            path="/payroll/edit-advance-salary/:id"
            exact
            element={<AdvanceSalaryEdit />}
          />
          <Route
            path="/payroll/payslip-profile/:id"
            exact
            element={<PayslipProfile />}
          />
          <Route
            path="/hr/payroll/salary-template"
            exact
            element={<SalaryTemplateView />}
          />
          <Route
            path="/payroll/edit-salary-template/:id"
            exact
            element={<EditSalaryTemplate />}
          />
          <Route
            path="/hr/payroll/payslip-generator"
            exact
            element={<PayslipGenerator />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default RoutingProject;
