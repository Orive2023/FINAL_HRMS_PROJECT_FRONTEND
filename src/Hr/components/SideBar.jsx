import React, { useState,useRef } from "react";
import Keycloak from "keycloak-js";

import DashboardFile from "./sidebarComponent/DashboardFile";
import Organisationfile from "./sidebarComponent/Organisationfile";
import EmployeesFile from "./sidebarComponent/EmployeesFile";
import PerformanceFile from "./sidebarComponent/PerformanceFile";
import TimesheetsFile from "./sidebarComponent/TimesheetsFile";
import PayrollFile from "./sidebarComponent/PayrollFile";
import ProjectsFile from "./sidebarComponent/ProjectsFile";
import TicketsFile from "./sidebarComponent/TicketsFile";
import WorksheetsFile from "./sidebarComponent/Worksheetsfile";
import Bankfile from "./sidebarComponent/Bankfile";
import Loanfile from "./sidebarComponent/Loanfile";
import Accountfile from "./sidebarComponent/Accountfile";
import ProcurementFile from "./sidebarComponent/ProcurementFile";
import Recuitmentfile from "./sidebarComponent/Recuitmentfile";
import Trainingfile from "./sidebarComponent/Trainingfile";
import Salesfile from "./sidebarComponent/Salesfile";
import WebsiteFile from "./sidebarComponent/WebsiteFile";
import Whatsapp from "./sidebarComponent/Whatsapp";
import { useNavigate } from "react-router-dom/dist"; 
import { WhatsApp } from "@material-ui/icons";

const SideBar = ({ menu }) => {
  const nav = useNavigate();
  const classBtnName = menu ? "mobile-sidebar-container" : "";
  const classSidebarName = menu ? "mobile-sidebar" : "";

  return (
    <>
      <div className={`sidebar-btn-container ${classBtnName}`} style={{zIndex:'11'}}>
        <div className={`sidebar-container ${classSidebarName}`}>
          <DashboardFile  />
          <Organisationfile  />
          <EmployeesFile  />
          <PerformanceFile  />
          <TimesheetsFile />
          <PayrollFile  />
          <ProjectsFile  />
          <TicketsFile  />
          <WorksheetsFile />
          <Bankfile />
          <Loanfile />
          <Accountfile />
          <ProcurementFile />
          <Recuitmentfile />
          <Trainingfile />
          <Salesfile/>
          <WebsiteFile/>
          <Whatsapp/>
        </div>
        <button id="logout-hrms-btn" onClick={()=>{localStorage.removeItem("AuthToken"); localStorage.removeItem("Role");nav('/'); window.location.reload();}}>
          Logout<i class="bx bx-log-out"></i>
        </button>
      </div>
    </>
  );
};

export default SideBar;


