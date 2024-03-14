import React from "react";
import PerformanceIndicatorView from "./PerformanceIndicatorView";
import { Route, Routes } from "react-router-dom";

const RoutePerformanceIndicator = () => {
  return (
    <div>
      <Routes>
        <Route path={"/performance/PerformanceIndicator"} element={<PerformanceIndicatorView />} />
      </Routes>
    </div>
  );
};

export default RoutePerformanceIndicator;
