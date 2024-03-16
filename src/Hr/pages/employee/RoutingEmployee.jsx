import React from "react";
import { Route, Routes } from "react-router-dom";
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

const routesData = [
  { path: "/hr/employee/awards", element: <AwardsView /> },
  { path: "/employee/edit-awards/:id", element: <EditAward /> },
  { path: "/employee/awards-profile/:id", element: <AwardPofile /> },
  { path: "/hr/employee/complaints", element: <ComplaintView /> },
  { path: "/employee/edit-complaints/:id", element: <EditComplaint /> },
  { path: "/hr/employee/employee-exit", element: <EmployeeExitView /> },
  { path: "/employee/edit-employee-exit/:id", element: <EditEmployeeExit /> },
  { path: "/employee/employee-exit-profile/:id", element: <EmployeeExitPofile /> },
  { path: "/hr/employee/employee", element: <EmployeeView /> },
  { path: "/employee/edit-employee/:id", element: <Editemployee /> },
  { path: "/employee/employee-profile/:id", element: <EmployeeProfile /> },
  { path: "/hr/employee/promotions", element: <PromotionView /> },
  { path: "/employee/edit-promotions/:id", element: <EditPromotion /> },
  { path: "/hr/employee/resignation", element: <ResignationView /> },
  { path: "/employee/edit-resignation/:id", element: <EditResignation /> },
  { path: "/employee/resignation-profile/:id", element: <ResignationPofile/> },
  { path: "/hr/employee/termination", element: <TerminationView /> },
  { path: "/employee/edit-termination/:id", element: <EditTermination /> },
  { path: "/employee/termination-profile/:id", element: <TerminationProfile /> },
  { path: "/hr/employee/transfer", element: <TransferView /> },
  { path: "/employee/edit-transfer/:id", element: <EditTransfer /> },
  { path: "/employee/transfer-profile/:id", element: <TransferProfile /> },
  { path: "/hr/employee/travel", element: <TravelView /> },
  { path: "/employee/edit-travel/:id", element: <EditTravel /> },
  { path: "/hr/employee/warning", element: <WarningView /> },
  { path: "/employee/edit-warning/:id", element: <EditWarning /> },
  { path: "/employee/warning-pofile/:id", element: <WarningPofile /> },
  { path: "/hr/employee/certificate", element: <Certificate /> },
  { path: "/hr/employee/experience", element: <ExperienceLetter /> },
  { path: "/hr/employee/joining", element: <JoiningLetterExp /> },
  { path: "/hr/employee/intern", element: <JoiningLetterIntern /> },
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
