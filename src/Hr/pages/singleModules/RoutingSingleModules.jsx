import React from "react";
import { Route, Routes } from "react-router-dom";
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


const routesData = [
  { path: "/hr/bank/add-bank", element: <AddBank /> },
  { path: "/bank/edit-bank/:id", element: <EditBank /> },
  { path: "/bank/add-bank-profile/:id", element: <BankProfile /> },
  { path: "/hr/loan/grant-loan", element: <GrantLoanView /> },
  { path: "/loan/edit-grant-loan/:id", element: <EditGrantLoan /> },
  { path: "/loan/grant-loan-profile/:id", element: <GrantLoanProfile /> },
  { path: "/worksheet/edit-worksheet/:id", element: <EditWorksheet /> },
  { path: "/hr/project", element: <ProjectView /> },
  { path: "/Project-profile/:id", element: <ProjectProfile /> },
  { path: "/edit-project/:id", element: <ProjectEdit /> },
  { path: "/edit-ticket/:id", element: <EditTicket /> },
  { path: "/ticket-profile/:id", element: <TicketProfile /> },
  { path: "/hr/ticket", element: <TicketView /> },
  { path: "/hr/trainer", element: <TrainerView /> },
  { path: "/trainer/trainer-profile/:id", element: <TrainerProfile/> },
  { path: "/edit-trainer/:id", element: <EditTrainer /> },
  { path: "/hr/worksheets", element: <WorkSheetView /> },
  { path: "/worksheet/worksheet-profile/:id", element: <WorkSheetProfile /> },

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