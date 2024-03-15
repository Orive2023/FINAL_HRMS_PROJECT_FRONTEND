import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Tickets from "../pages/tickets/Ticket";
import Attendance from "../pages/attendance/Attendance";
import Worksheets from "../pages/worksheets/Worksheets";
import Performance from "./performance/Performance";
import LeaveView from "../../Hr/pages/timesheets/leave/Mainfile/LeaveView";
import EventCalender from "./cardCode/events/EventCalender";
import JobVacancyTable from "../pages/jobvacancy/JobVacancyTable"
import Award from "../pages/award/Award"
import AwardProfile from "../pages/award/AwardProfile"
import LoanFile from "../pages/loan/LoanFile";
import Travel from "../pages/travel/Travel";
import TravelProfile from "../pages/travel/TravelProfile";
import Promotion from "../pages/promotion/Promotion";
import PromotionProfile from "../pages/promotion/PromotionProfile";
import Warning from "../pages/warning/Warning";
import WarningProfile from "../pages/warning/WarningProfile";
import Termination from "../pages/termination/Termination";
import Officeshift from "../pages/officeshift/Officeshift";
import Holiday from "../pages/holiday/Holiday";
import PaySlipGenerator from "../pages/payslip/PaySlipGenerator";
import PayslipGeneratorProfile from "../pages/payslip/PayslipGeneratorProfile";
import Announcement from "./announcement/Announcement";
import Policies from "../pages/policies/Policies";
import PoliciesProfile from "../pages/policies/policyProfile";
import Transfer from "../pages/transfer/Transfer";
import TransferProfile from "../pages/transfer/TransferProfile"
import ExpJoiningLetter from "../pages/experienceletter/ExpJoiningLetter";
import Expletter from "../pages/experienceletter/Expletter";
import IntJoiningLetter from "../pages/experienceletter/IntJoiningLetter";
import Profile from "../pages/profile/Profile";
import Resignation from "../pages/resignation/mainfile/ResignationView";
import Complaint from "../pages/complaint/mainfile/Complaint";



const routesData = [
  { path: "/Employee-Dashboard", element: <Dashboard /> },
  { path: "/employee/worksheets", element: <Worksheets /> },
  { path: "/employee/tickets", element: <Tickets /> },
  { path: "/employee/attendance-log", element: <Attendance /> },
  { path: "/employee/performance", element: <Performance /> },
  { path: "/employee/leave", element: <LeaveView /> },
  { path: "/employee/events", element: <EventCalender /> },
  { path: "/employee/job-vacancy", element: <JobVacancyTable /> },
  { path: "/employee/loan", element: <LoanFile /> },
  { path: "/employee/award", element: <Award /> },
  { path: "/employee/award-profile/:id", element: <AwardProfile /> },
  { path: "/employee/travel", element: <Travel /> },
  { path: "/employee/travel-profile/:id", element: <TravelProfile /> },
  { path: "/employee/promotion", element: <Promotion /> },
  { path: "/employee/promotion-profile/:id", element: <PromotionProfile /> },
  { path: "/employee/warning", element: <Warning /> },
  { path: "/employee/warning-profile/:id", element: <WarningProfile /> },
  { path: "/employee/termination", element: <Termination /> },
  { path: "/employee/officeshift", element: <Officeshift /> },
  { path: "/employee/holiday", element: <Holiday /> },
  { path: "/employee/announcement", element: <Announcement /> },
  { path: "/employee/policies", element: <Policies /> },
  { path: "/employee/policies-profile/:id", element: <policyProfile /> },
  { path: "/employee/payslip", element: <PaySlipGenerator /> },
  { path: "/employee/payslip-profile/:id", element: <PayslipGeneratorProfile /> },
  { path: "/employee/transfer", element: <Transfer /> },
  { path: "/employee/experience-letter", element: <Expletter /> },
  { path: "/employee/joining-letter", element: <ExpJoiningLetter /> },
  { path: "/employee/int-letter", element: <IntJoiningLetter /> },
  { path: "/employee/transfer-profile/:id", element: <TransferProfile /> },
  { path: "/employee/profile", element: <Profile /> },
  { path: "/employee/resignation", element: <Resignation /> },
  { path: "/employee/complaint", element: <Complaint /> },

];

const RoutingEmployee = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          {routesData.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};
export default RoutingEmployee;
