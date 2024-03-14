import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import Projects from "./Projects";
import ProjectLand from "./ProjectLand";

const routesData = [
  { path: "/employee/project", element: <ProjectLand /> },
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
