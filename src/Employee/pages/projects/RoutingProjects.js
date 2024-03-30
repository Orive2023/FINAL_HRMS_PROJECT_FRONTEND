import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import Projects from "./Projects";
import ProjectLand from "./ProjectLand";
import Login from '../../../Login'

const routesData = [
  { path: "/employee/project", element:localStorage.getItem("Role")==="USER"?<ProjectLand />:<Navigate to='/'/> },
  // { path: "/employee/project/profile/:id", element: <Projects /> },
];

const RoutingProjects = () => {
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

export default RoutingProjects;
