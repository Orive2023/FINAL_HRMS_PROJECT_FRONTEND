import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PerformanceIndicatorView from "./PerformanceIndicator/PerformanceIndicatorView";
import PerformancesAppraisalView from "./PerformanceAppraisal/Mainfile/PerformancesAppraisalView";
import PerformanceappraisalProfile from "./PerformanceAppraisal/Mainfile/PerformanceappraisalProfile";
import Login from '../../../Login'

const performanceRoutesData = [
  {
    path: "/hr/performance/Performance-Indicator",
    element: localStorage.getItem("Role")==="ADMIN"?<PerformanceIndicatorView />:<Navigate to='/'/>,
  },
  {
    path: "/hr/performance/Performance-Appraisal",
    element: localStorage.getItem("Role")==="ADMIN"?<PerformancesAppraisalView />:<Navigate to='/'/>,
  },
  {
    path: "/hr/performance/Performance-Appraisal-profile/:id",
    element: localStorage.getItem("Role")==="ADMIN"?<PerformanceappraisalProfile />:<Navigate to='/'/>,
  },
];

const RoutingPerformance = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          {performanceRoutesData.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default RoutingPerformance;
