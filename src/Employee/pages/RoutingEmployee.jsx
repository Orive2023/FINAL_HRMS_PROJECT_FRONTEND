import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Tickets from "../pages/tickets/Ticket";
import Attendance from "../pages/attendance/Attendance";
import Performance from "./performance/Performance";
import LeaveView from "../../Hr/pages/timesheets/leave/Mainfile/LeaveView";
import EventCalender from "./cardCode/events/EventCalender";
import JobVacancyTable from "../pages/jobvacancy/JobVacancyTable";
import Award from "../pages/award/Award";
import AwardProfile from "../pages/award/AwardProfile";
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
import AnnouncementProfile from "./announcement/AnnouncementProfile";
import Profile from "./profile/Profile";
import Policies from "../pages/policies/Policies";
import PolicyProfile from "./policies/policyProfile";
import Transfer from "../pages/transfer/Transfer";
import TransferProfile from "../pages/transfer/TransferProfile";
import ExpJoiningLetter from "../pages/experienceletter/ExpJoiningLetter";
import Expletter from "../pages/experienceletter/Expletter";
import IntJoiningLetter from "../pages/experienceletter/IntJoiningLetter";
import TerminationProfile from "../pages/termination/TerminationProfile";
import ResignationView from "./resignation/mainfile/ResignationView";
import ResignationEdit from "./resignation/mainfile/ResignationEdit";
import ResignationProfile from "./resignation/mainfile/ResignationProfile";
import ComplaintEdit from "./complaint/mainfile/ComplaintEdit";
import Complaint from "./complaint/mainfile/Complaint";
import LeaveProfile from "./leave/mainfile/LeaveProfile";
import LeaveEdit from "./leave/mainfile/LeaveEdit";
import Leave from "./leave/mainfile/Leave";
import Worksheets from "../pages/worksheets/Worksheets";
import Payslip from '../pages/payslip/Payslip'
import Login from '../../Login'

const routesData = [
  { path: "/Employee-Dashboard", element: localStorage.getItem("Role")==="USER"?<Dashboard />:<Navigate to='/'/> },
  { path: "/employee/tickets", element: localStorage.getItem("Role")==="USER"?<Tickets />:<Navigate to='/'/> },
  { path: "/employee/attendance-log", element: localStorage.getItem("Role")==="USER"?<Attendance />:<Navigate to='/'/> },
  { path: "/employee/performance", element: localStorage.getItem("Role")==="USER"?<Performance />:<Navigate to='/'/> },
  { path: "/employee/leave", element: localStorage.getItem("Role")==="USER"?<LeaveView />:<Navigate to='/'/> },
  { path: "/employee/events", element: localStorage.getItem("Role")==="USER"?<EventCalender />:<Navigate to='/'/> },
  { path: "/employee/job-vacancy", element: localStorage.getItem("Role")==="USER"?<JobVacancyTable />:<Navigate to='/'/> },
  { path: "/employee/loan", element: localStorage.getItem("Role")==="USER"?<LoanFile />:<Navigate to='/'/> },
  { path: "/employee/award", element: localStorage.getItem("Role")==="USER"?<Award />:<Navigate to='/'/> },
  { path: "/employee/award-profile/:id", element: localStorage.getItem("Role")==="USER"?<AwardProfile />:<Navigate to='/'/> },
  { path: "/employee/termination-profile/:id", element: localStorage.getItem("Role")==="USER"?<TerminationProfile />:<Navigate to='/'/> },
  { path: "/employee/travel", element: localStorage.getItem("Role")==="USER"?<Travel />:<Navigate to='/'/> },
  { path: "/employee/travel-profile/:id", element: localStorage.getItem("Role")==="USER"?<TravelProfile />:<Navigate to='/'/> },
  { path: "/employee/promotion", element: localStorage.getItem("Role")==="USER"?<Promotion />:<Navigate to='/'/> },
  { path: "/employee/promotion-profile/:id", element: localStorage.getItem("Role")==="USER"?<PromotionProfile />:<Navigate to='/'/> },
  { path: "/employee/warning", element: localStorage.getItem("Role")==="USER"?<Warning />:<Navigate to='/'/> },
  { path: "/employee/warning-profile/:id", element: localStorage.getItem("Role")==="USER"?<WarningProfile />:<Navigate to='/'/> },
  { path: "/employee/termination", element: localStorage.getItem("Role")==="USER"?<Termination />:<Navigate to='/'/> },
  { path: "/employee/officeshift", element: localStorage.getItem("Role")==="USER"?<Officeshift />:<Navigate to='/'/> },
  { path: "/employee/holiday", element: localStorage.getItem("Role")==="USER"?<Holiday />:<Navigate to='/'/> },
  { path: "/employee/announcement", element: localStorage.getItem("Role")==="USER"?<Announcement />:<Navigate to='/'/> },

  {
    path: "/employee/announcement-profile/:id",
    element: localStorage.getItem("Role")==="USER"?<AnnouncementProfile />:<Navigate to='/'/>,
  },
  { path: "/employee/profile", element: localStorage.getItem("Role")==="USER"?<Profile />:<Navigate to='/'/> },
  { path: "/employee/policies", element: localStorage.getItem("Role")==="USER"?<Policies />:<Navigate to='/'/> },
  { path: "/employee/policies-profile/:id", element: localStorage.getItem("Role")==="USER"?<PolicyProfile />:<Navigate to='/'/> },
  { path: "/employee/payslip", element: localStorage.getItem("Role")==="USER"?<PaySlipGenerator />:<Navigate to='/'/> },
  {
    path: "/employee/payslip-profile/:id",
    element: localStorage.getItem("Role")==="USER"?<PayslipGeneratorProfile />:<Navigate to='/'/>,
  },
  { path: "/employee/transfer", element: localStorage.getItem("Role")==="USER"?<Transfer />:<Navigate to='/'/> },
  { path: "/employee/transfer-profile/:id", element: localStorage.getItem("Role")==="USER"?<TransferProfile />:<Navigate to='/'/> },
  { path: "/employee/experience-letter", element: localStorage.getItem("Role")==="USER"?<Expletter />:<Navigate to='/'/> },
  { path: "/employee/joining-letter", element: localStorage.getItem("Role")==="USER"?<ExpJoiningLetter />:<Navigate to='/'/> },
  { path: "/employee/int-letter", element: localStorage.getItem("Role")==="USER"?<IntJoiningLetter />:<Navigate to='/'/> },

  { path: "/transfer-profile/:id", element: localStorage.getItem("Role")==="USER"?<TransferProfile />:<Navigate to='/'/> },
  { path: "/employee/resignation", element: localStorage.getItem("Role")==="USER"?<ResignationView />:<Navigate to='/'/> },
  { path: "/edit-resignation/:id", element: localStorage.getItem("Role")==="USER"?<ResignationEdit />:<Navigate to='/'/> },
  { path: "/resignation-profile/:id", element: localStorage.getItem("Role")==="USER"?<ResignationProfile />:<Navigate to='/'/> },
  { path: "/employee/complaint", element: localStorage.getItem("Role")==="USER"?<Complaint />:<Navigate to='/'/> },
  { path: "/complaint-edit/:id", element: localStorage.getItem("Role")==="USER"?<ComplaintEdit />:<Navigate to='/'/> },
  { path: "/leave", element: localStorage.getItem("Role")==="USER"?<Leave />:<Navigate to='/'/> },
  { path: "/leave-edit/:id", element: localStorage.getItem("Role")==="USER"?<LeaveEdit />:<Navigate to='/'/> },
  { path: "/leaves-profile/:id", element: localStorage.getItem("Role")==="USER"?<LeaveProfile />:<Navigate to='/'/> },
  { path: "/employee/worksheets", element: localStorage.getItem("Role")==="USER"?<Worksheets />:<Navigate to='/'/> },
  { path: "/payslip/:id", element: localStorage.getItem("Role")==="USER"?<Payslip />:<Navigate to='/'/> },
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
