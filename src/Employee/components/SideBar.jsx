import React, { useEffect, useState } from "react";
import Keycloak from "keycloak-js";
import DashboardFile from "./sidebarComponent/DashboardFile";
import PerformanceFile from "./sidebarComponent/PerformanceFile";
import ProjectsFile from "./sidebarComponent/ProjectsFile";
import TicketsFile from "./sidebarComponent/TicketsFile";
import Trainingfile from "./sidebarComponent/Trainingfile";
import AttendanceFile from "./sidebarComponent/AttendanceFile";
import MyFinanceFile from "./sidebarComponent/MyFinanceFile";
import EmployeeDetails from "./sidebarComponent/EmployeeDetails";
import JobVacancyFile from "./sidebarComponent/JobVacancyFile";
import Loanfile from "../components/sidebarComponent/LoanFile";
import AwardFile from "./sidebarComponent/AwardFile";
import TravelFile from "./sidebarComponent/TravelFile";
import WarningFile from "./sidebarComponent/WarningFile";
import PromotionFile from "./sidebarComponent/PromotionFile";
import TerminationFile from "./sidebarComponent/TerminationFile";
import OfficeshiftFile from "./sidebarComponent/Officeshift";
import HolidayFile from "./sidebarComponent/HolidayFile";
import PayslipGeneratorFile from "./sidebarComponent/PayslipGeneratorFile";
import TransferFile from "../components/sidebarComponent/TransferFile";
import PoliciesFile from  "../components/sidebarComponent/PoliciesFile";
import AnnouncementFile from "../components/sidebarComponent/AnnouncementFile";
import ProfileFile from "../components/sidebarComponent/ProfileFile";
import ExperienceLetter from "./sidebarComponent/ExperienceLetter";

import ResignationFile from './sidebarComponent/ResignationFile '
import ComplaintFile from './sidebarComponent/ComplaintFile'
import LeaveFile from './sidebarComponent/LeaveFile'
import WorksheetsFile from "./sidebarComponent/WorksheetsFile";
import { useNavigate } from "react-router-dom/dist";

const SideBar = ({ menu }) => {
  const nav = useNavigate();
  const [empData, setEmpData] = useState([]);

  console.log(EmployeeDetails().employeeData[0]);
  return (
    <>
      <div className="sidebar-btn-container" style={{zIndex:'11'}}>
        <div className="sidebar-container">
          <DashboardFile />
          <AttendanceFile />
          <ProjectsFile />
          <TicketsFile />
          <WorksheetsFile />
          <PerformanceFile />
          <JobVacancyFile/>
          <Loanfile/>
          <AwardFile/>
          <TravelFile/>
          <PromotionFile/>
          <WarningFile/>
          <TerminationFile/>
          <OfficeshiftFile/>
          <HolidayFile/>
          <PayslipGeneratorFile/>
          <AnnouncementFile/>
          <ProfileFile/>
          <PoliciesFile/>
          <TransferFile/>
          <ExperienceLetter/>
          <ResignationFile />
          <ComplaintFile />

          <LeaveFile />

        
          
          

          {/* <Trainingfile /> */}
        </div>
        <button id="logout-hrms-btn" onClick={()=>{localStorage.removeItem("AuthToken"); localStorage.removeItem("Role"); nav('/'); window.location.reload();}}>
        Logout<i class="bx bx-log-out"></i>
      </button>
      </div>
    </>
  );
};

export default SideBar;





// import React, { useEffect, useState } from "react";

// import DashboardFile from "./sidebarComponent/DashboardFile";
// import PerformanceFile from "./sidebarComponent/PerformanceFile";
// import ProjectsFile from "./sidebarComponent/ProjectsFile";
// import TicketsFile from "./sidebarComponent/TicketsFile";
// import WorksheetsFile from "./sidebarComponent/Worksheetsfile";
// import Trainingfile from "./sidebarComponent/Trainingfile";
// import AttendanceFile from "./sidebarComponent/AttendanceFile";
// import MyFinanceFile from "./sidebarComponent/MyFinanceFile";
// import { useNavigate } from "react-router-dom";
// import EmployeeDetails from "./sidebarComponent/EmployeeDetails";

// const SideBar = ({menu}) => {
//   const classBtnName = menu ? "mobile-sidebar-container" : "";
//   const classSidebarName = menu ? "mobile-sidebar" : "";
//   const [empData, setEmpData] = useState([]);
//   // const loadEmployee = async () => {
//   //   try {
//   //     const result = await api.loadEmployee();
//   //     setEmpData(result.data);
//   //   } catch (error) {
//   //     console.error("Error loading employee data:", error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   loadEmployee();
//   // }, []);

//   console.log(EmployeeDetails().employeeData[0]);
//   return (
//     <>
//       <div className={`sidebar-btn-container ${classBtnName}`}>
//         <div className={`sidebar-container ${classSidebarName}`}>
//           <DashboardFile />
//           <AttendanceFile />
//           <ProjectsFile />
//           <TicketsFile />
//           <WorksheetsFile />
//           <PerformanceFile />
//           <MyFinanceFile />
//           {/* <Trainingfile /> */}
//         </div>
//         <div
//           id="logout-hrms-btn"
//           className="logout-hrms-btn"
//           style={{
//             background: "rgba(111, 111, 111, 0.1)",
//             cursor: "pointer",
//             padding: "10px",
//             width: "100%",
//           }}
//         >
//           {/* <button id="logout-hrms-btn" onClick={() => navigation("/")}>Logout<i class='bx bx-log-out'></i></button>
//           <button id="icon-logout-hrms-btn" onClick={() => navigation("/")}><i class='bx bx-log-out'></i></button> */}
//           <img src={""} alt="Profile" />

//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
//               {"Praveen"}
//             </h3>
//             <p style={{ fontSize: "14px", fontWeight: "400" }}>{"Developer"}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideBar;
