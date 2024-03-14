import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import CommitteeView from "./committee/Mainfile/CommitteeView";
import EditCommittee from "./committe/Mainfile/EditCommitte";
import UnitView from "./unit/Mainfile/UnitView";
import UnitProfile from "./Mainfile/UnitProfile";
const routesData = [
  { path: "/HRMS", element: <Dashboard /> },
  // { path: "/HRMS", element: <Dashboard /> },
  // { path: "/", element: <LoginSignup /> },
  { path: "/hr/procurement/committee", element: <CommitteeView /> },
  { path: "/procurement/edit-committee/:id", element: <EditCommittee/> },
  { path: "/hr/procurement/unit", element: <UnitView/> },
  { path: "/unit-profile/:id", element: <UnitProfile/> },

];

const RoutingProcurement = () => {
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

export default RoutingProcurement;
