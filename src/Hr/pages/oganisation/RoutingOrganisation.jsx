import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import CompanyView from "./company/Mainfile/CompanyView";
import LocationView from "./location/Mainfile/LocationView";
import LocationPofile from "./location/Mainfile/LocationProfile";
import EditLocation from "./location/Mainfile/EditLocation";

import DepartmentView from "./department/Mainfile/DepartmentView";
import DesignationView from "./designation/Mainfile/DesignationView";
import DesignationProfile from "./designation/Mainfile/DesignationProfile";
import EditDesignation from "./designation/Mainfile/EditDesignation";

import PoliciesView from "./Policies/Mainfile/PoliciesView";
import AnnouncementsView from "./announcements/Mainfile/AnnouncementsView";
import ExpensesView from "./expences/Mainfile/ExpensesView";
import DepartmentProfile from "./department/Mainfile/DepartmentProfile";
import EditDepartment from "./department/Mainfile/EditDepartment";
import EditExpenses from "./expences/Mainfile/EditExpenses";
import ExpensesProfile from "./expences/Mainfile/ExpensesProfile";
import EditPolicies from "./Policies/Mainfile/EditPolicies";
import PoliciesProfile from "./Policies/Mainfile/PoliciesProfile";
import EditAnnouncements from "./announcements/Mainfile/EditAnnnouncements";
import AnnouncementsProfile from "./announcements/Mainfile/AnnouncementsProfile";
import EditCompany from "./company/Mainfile/EditCompany";
import CompanyPofile from "./company/Mainfile/CompanyPofile";
import LoginSignup from "../../components/LoginSignup";
// import DesignationProfile from "./designation/Mainfile/DesignationProfile";
// import Landingfile from "../../components/Landingfile";

const routesData = [
  { path: "/HRDashboard", element: <Dashboard /> },
  // { path: "/HRMS", element: <Dashboard /> },
  { path: "/", element: <LoginSignup /> },
  { path: "/hr/organisation/company", element: <CompanyView /> },
  { path: "/organisation/company-profile/:id", element: <CompanyPofile /> },
  { path: "/organisation/edit-company/:id", element: <EditCompany /> },
  {
    path: "/organisation/department-profile/:id",
    element: <DepartmentProfile />,
  },
  { path: "/organisation/edit-department/:id", element: <EditDepartment /> },
  { path: "/hr/organisation/location", element: <LocationView /> },
  { path: "/organisation/edit-location/:id", element: <EditLocation /> },
  { path: "/organisation/location-profile/:id", element: <LocationPofile /> },
  { path: "/hr/organisation/department", element: <DepartmentView /> },
  { path: "/hr/organisation/designation/", element: <DesignationView /> },
  { path: "/hr/organisation/policies", element: <PoliciesView /> },
  { path: "/hr/organisation/announcements", element: <AnnouncementsView /> },
  { path: "/hr/organisation/expences", element: <ExpensesView /> },
  {
    path: "/organisation/edit-designation/:id",
    element: <EditDesignation />,
  },
  // { path: "/organisation/designation-profile/:id", element: <DesignationProfile /> },
  { path: "/organisation/edit-expences/:id", element: <EditExpenses /> },
  {
    path: "/organisation/expences-profile/:id",
    element: <ExpensesProfile />,
  },
  {
    path: "/organisation/policies-profile/:id",
    element: <PoliciesProfile />,
  },
  { path: "/organisation/edit-policies/:id", element: <EditPolicies /> },
  {
    path: "/organisation/edit-announcements/:id",
    element: <EditAnnouncements />,
  },
  {
    path: "/organisation/designation-profile/:id",
    element: <DesignationProfile />,
  },
  {
    path: "/organisation/announcements-profile/:id",
    element: <AnnouncementsProfile />,
  },
];

const RoutingOrganisation = () => {
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

export default RoutingOrganisation;
