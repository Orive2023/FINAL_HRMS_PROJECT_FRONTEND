import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AddBank from "../singleModules/Bank/addbank/AddBank";
import EditBank from "../singleModules/Bank/addbank/EditBank";
import GrantLoanView from "../singleModules/Loan/grantloan/GrantLoanView";
import EditGrantLoan from "../singleModules/Loan/grantloan/EditGrantLoan";
import GrantLoanProfile from "../singleModules/Loan/grantloan/GrantLoanProfile";
import ProjectView from "./project/Mainfile/ProjectView";
import ProjectEdit from "./project/Mainfile/ProjectEdit";
import TicketView from "./tickets/mainfile/TicketView";
import EditTicket from "./tickets/mainfile/EditTicket";
import TrainerView from "./trainer/mainfile/TrainerView";
import EditTrainer from "./trainer/mainfile/EditTrainer";
import TrainerProfile from "./trainer/mainfile/TrainerProfile";
import WorkSheetView from "./worksheet/Mainfile/WorkSheetView";
import EditWorksheet from './worksheet/Mainfile/WorsksheetEdit';
import TicketProfile from "./tickets/mainfile/TicketProfile";
import ProjectProfile from "./project/Mainfile/ProjectProfile";
import BankProfile from "./Bank/addbank/BankProfile";
import WorkSheetProfile from "./worksheet/Mainfile/WorkSheetProfile";
import Login from '../../../Login'


const routesData = [
  { path: "/hr/bank/add-bank", element: localStorage.getItem("Role")==="ADMIN"?<AddBank />:<Navigate to='/'/> },
  { path: "/bank/edit-bank/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditBank />:<Navigate to='/'/> },
  { path: "/bank/add-bank-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<BankProfile />:<Navigate to='/'/> },
  { path: "/hr/loan/grant-loan", element: localStorage.getItem("Role")==="ADMIN"?<GrantLoanView />:<Navigate to='/'/> },
  { path: "/loan/edit-grant-loan/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditGrantLoan />:<Navigate to='/'/> },
  { path: "/loan/grant-loan-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<GrantLoanProfile />:<Navigate to='/'/> },
  { path: "/worksheet/edit-worksheet/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditWorksheet />:<Navigate to='/'/> },
  { path: "/hr/project", element: localStorage.getItem("Role")==="ADMIN"?<ProjectView />:<Navigate to='/'/> },
  { path: "/Project-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<ProjectProfile />:<Navigate to='/'/> },
  { path: "/edit-project/:id", element: localStorage.getItem("Role")==="ADMIN"?<ProjectEdit />:<Navigate to='/'/> },
  { path: "/edit-ticket/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditTicket />:<Navigate to='/'/> },
  { path: "/ticket-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<TicketProfile />:<Navigate to='/'/> },
  { path: "/hr/ticket", element: localStorage.getItem("Role")==="ADMIN"?<TicketView />:<Navigate to='/'/> },
  { path: "/hr/trainer", element: localStorage.getItem("Role")==="ADMIN"?<TrainerView />:<Navigate to='/'/> },
  { path: "/trainer/trainer-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<TrainerProfile/>:<Navigate to='/'/> },
  { path: "/edit-trainer/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditTrainer />:<Navigate to='/'/> },
  { path: "/hr/worksheets", element: localStorage.getItem("Role")==="ADMIN"?<WorkSheetView />:<Navigate to='/'/> },
  { path: "/worksheet/worksheet-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<WorkSheetProfile />:<Navigate to='/'/> },

];

const RoutingSingleModules = () => {
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

export default RoutingSingleModules;