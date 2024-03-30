import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AwardsView from "./awards/Mainfile/AwardView";
import EditAward from "./awards/Mainfile/EditAward";
import AwardPofile from "./awards/Mainfile/AwardPofile";
import ComplaintView from "./complaints/Mainfile/ComplaintView";
import EmployeeExitView from "./employeeexit/Mainfile/EmployeeExitView";
import EditEmployeeExit from "./employeeexit/Mainfile/EditEmployeeExit";
import EmployeeExitPofile from "./employeeexit/Mainfile/EmployeeExitPofile";
import EmployeeView from "./employees/Mainfile/EmployeeView";
import PromotionView from "./promotions/Mainfile/PromotionView";
import ResignationView from "./resignation/mainfile/ResignationView";
import EditResignation from "./resignation/mainfile/EditResignation";
import ResignationPofile from "./resignation/mainfile/ResignationPofile";
import TerminationView from "./termination/mainfile/TerminationView";
import TerminationProfile from "./termination/mainfile/TerminationPofile";
import EditTermination from "./termination/mainfile/EditTermination";
import TransferView from "./transfers/mainfile/TransferView";
import EditTransfer from "./transfers/mainfile/EditTransfer";
import TravelView from "./travels/mainfile/TravelView";
import WarningPofile from "./warnings/Mainfile/WarningPofile";
import WarningView from "./warnings/Mainfile/WarningView";
import EditComplaint from "./complaints/Mainfile/EditComplaint";
import Editemployee from "./employees/Mainfile/EditEmployee";
import EditTravel from "./travels/mainfile/EditTravel";
import EmployeeProfile from "./employees/Mainfile/EmployeeProfile";
import TransferProfile from "./transfers/mainfile/TransferPofile";
import EditPromotion from "./promotions/Mainfile/EditPromotion";
import EditWarning from "./warnings/Mainfile/EditWarning";
import Certificate from './Letter/certificate format/CertificateForm';
import ExperienceLetter from './Letter/experience-letter/ShowExLetter';
import JoiningLetterExp from './Letter/Joining letter exp/JoiningExperienceLetter';
import JoiningLetterIntern from './Letter/joining-letter intr/ShowJoiningLetter';
import Login from '../../../Login'

const routesData = [
  { path: "/hr/employee/awards", element: localStorage.getItem("Role")==="ADMIN"?<AwardsView />:<Navigate to='/'/> },
  { path: "/employee/edit-awards/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditAward />:<Navigate to='/'/> },
  { path: "/employee/awards-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<AwardPofile />:<Navigate to='/'/> },
  { path: "/hr/employee/complaints", element: localStorage.getItem("Role")==="ADMIN"?<ComplaintView />:<Navigate to='/'/> },
  { path: "/employee/edit-complaints/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditComplaint />:<Navigate to='/'/> },
  { path: "/hr/employee/employee-exit", element: localStorage.getItem("Role")==="ADMIN"?<EmployeeExitView />:<Navigate to='/'/> },
  { path: "/employee/edit-employee-exit/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditEmployeeExit />:<Navigate to='/'/> },
  { path: "/employee/employee-exit-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<EmployeeExitPofile />:<Navigate to='/'/> },
  { path: "/hr/employee/employee", element: localStorage.getItem("Role")==="ADMIN"?<EmployeeView />:<Navigate to='/'/> },
  { path: "/employee/edit-employee/:id", element: localStorage.getItem("Role")==="ADMIN"?<Editemployee />:<Navigate to='/'/> },
  { path: "/employee/employee-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<EmployeeProfile />:<Navigate to='/'/> },
  { path: "/hr/employee/promotions", element: localStorage.getItem("Role")==="ADMIN"?<PromotionView />:<Navigate to='/'/> },
  { path: "/employee/edit-promotions/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditPromotion />:<Navigate to='/'/> },
  { path: "/hr/employee/resignation", element: localStorage.getItem("Role")==="ADMIN"?<ResignationView />:<Navigate to='/'/> },
  { path: "/employee/edit-resignation/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditResignation />:<Navigate to='/'/> },
  { path: "/employee/resignation-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<ResignationPofile/>:<Navigate to='/'/> },
  { path: "/hr/employee/termination", element: localStorage.getItem("Role")==="ADMIN"?<TerminationView />:<Navigate to='/'/> },
  { path: "/employee/edit-termination/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditTermination />:<Navigate to='/'/> },
  { path: "/employee/termination-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<TerminationProfile />:<Navigate to='/'/> },
  { path: "/hr/employee/transfer", element: localStorage.getItem("Role")==="ADMIN"?<TransferView />:<Navigate to='/'/> },
  { path: "/employee/edit-transfer/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditTransfer />:<Navigate to='/'/> },
  { path: "/employee/transfer-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<TransferProfile />:<Navigate to='/'/> },
  { path: "/hr/employee/travel", element: localStorage.getItem("Role")==="ADMIN"?<TravelView />:<Navigate to='/'/> },
  { path: "/employee/edit-travel/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditTravel />:<Navigate to='/'/> },
  { path: "/hr/employee/warning", element: localStorage.getItem("Role")==="ADMIN"?<WarningView />:<Navigate to='/'/> },
  { path: "/employee/edit-warning/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditWarning />:<Navigate to='/'/> },
  { path: "/employee/warning-pofile/:id", element: localStorage.getItem("Role")==="ADMIN"?<WarningPofile />:<Navigate to='/'/> },
  { path: "/hr/employee/certificate", element: localStorage.getItem("Role")==="ADMIN"?<Certificate />:<Navigate to='/'/> },
  { path: "/hr/employee/experience", element: localStorage.getItem("Role")==="ADMIN"?<ExperienceLetter />:<Navigate to='/'/> },
  { path: "/hr/employee/joining", element: localStorage.getItem("Role")==="ADMIN"?<JoiningLetterExp />:<Navigate to='/'/> },
  { path: "/hr/employee/intern", element: localStorage.getItem("Role")==="ADMIN"?<JoiningLetterIntern />:<Navigate to='/'/> },
];

const RoutingOrganisation = () => {
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

export default RoutingOrganisation;
