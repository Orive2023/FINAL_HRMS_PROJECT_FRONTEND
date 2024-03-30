import React from "react";
import RoutingOrganisation from "../pages/oganisation/RoutingOrganisation";
import RoutingPerformance from "../pages/performance/RoutingPerformance";
import RoutingSingleModules from "../pages/singleModules/RoutingSingleModules";
import RoutingPayroll from "../pages/payroll/RoutingPayroll";
import RoutingEmployee from "../pages/employee/RoutingEmployee";
import RoutingTimesheets from "../pages/timesheets/RoutingTimesheets";
import RoutingRecruitment from "../pages/recruitment/RoutingRecruitment";
import RoutingAccount from "../pages/account/RoutingAccount";
import RoutingProcurement from "../pages/procurement/RoutingProcurement";
import RoutingSales from "../pages/Sales/RoutingSales";
import RoutingWebsite from "../pages/website/RoutingWebsite";
import "../styles.css";
import {Routes, Route} from 'react-router-dom'
import Login from '../../Login'
import Register from '../../Register'

import { ThemeProvider, createTheme } from "@mui/material/styles";

const MainRouting = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F76C24",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="main-container">
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
        <RoutingOrganisation />
        <RoutingPerformance />
        <RoutingSingleModules />
        <RoutingPayroll />
        <RoutingEmployee />
        <RoutingTimesheets />
        <RoutingRecruitment />
        <RoutingAccount />
        <RoutingProcurement />
        <RoutingSales/>
        <RoutingWebsite />
      </div>
    </ThemeProvider>
  );
};

export default MainRouting;
