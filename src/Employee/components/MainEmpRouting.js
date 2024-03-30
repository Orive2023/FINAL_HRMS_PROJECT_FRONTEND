import React from "react";
// import RoutingEvent from "../pages/cardCode/RoutingEvent";
import RoutingEmployee from "../pages/RoutingEmployee";
import RoutingProjects from "../pages/projects/RoutingProjects";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles.css";
import Login from '../../Login'
import {Routes, Route} from 'react-router-dom'

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
      {/* <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes> */}
      <RoutingEmployee />
      <RoutingProjects />
      {/* <RoutingEvent /> */}
    </div>
    </ThemeProvider>
  );
};

export default MainRouting;
