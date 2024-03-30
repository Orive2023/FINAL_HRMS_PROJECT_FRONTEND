import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
import Login from "../../../Login";
// import DesignationProfile from "./designation/Mainfile/DesignationProfile";
// import Landingfile from "../../components/Landingfile";

const routesData = [
  { path: "/HRDashboard", element: localStorage.getItem("Role")==="ADMIN"?<Dashboard />:<Navigate to='/'/> },
  // { path: "/HRMS", element: localStorage.getItem("Role")==="ADMIN"?<Dashboard />:<Navigate to='/'/> },
  // { path: "/", element: localStorage.getItem("Role")==="ADMIN"?<LoginSignup />:<Navigate to='/'/> },
  { path: "/hr/organisation/company", element: localStorage.getItem("Role")==="ADMIN"?<CompanyView />:<Navigate to='/'/> },
  { path: "/organisation/company-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<CompanyPofile />:<Navigate to='/'/> },
  { path: "/organisation/edit-company/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditCompany />:<Navigate to='/'/> },
  {
    path: "/organisation/department-profile/:id",
    element: localStorage.getItem("Role")==="ADMIN"?<DepartmentProfile />:<Navigate to='/'/>,
  },
  { path: "/organisation/edit-department/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditDepartment />:<Navigate to='/'/> },
  { path: "/hr/organisation/location", element: localStorage.getItem("Role")==="ADMIN"?<LocationView />:<Navigate to='/'/> },
  { path: "/organisation/edit-location/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditLocation />:<Navigate to='/'/> },
  { path: "/organisation/location-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<LocationPofile />:<Navigate to='/'/> },
  { path: "/hr/organisation/department", element: localStorage.getItem("Role")==="ADMIN"?<DepartmentView />:<Navigate to='/'/> },
  { path: "/hr/organisation/designation/", element: localStorage.getItem("Role")==="ADMIN"?<DesignationView />:<Navigate to='/'/> },
  { path: "/hr/organisation/policies", element: localStorage.getItem("Role")==="ADMIN"?<PoliciesView />:<Navigate to='/'/> },
  { path: "/hr/organisation/announcements", element: localStorage.getItem("Role")==="ADMIN"?<AnnouncementsView />:<Navigate to='/'/> },
  { path: "/hr/organisation/expences", element: localStorage.getItem("Role")==="ADMIN"?<ExpensesView />:<Navigate to='/'/> },
  {
    path: "/organisation/edit-designation/:id",
    element: localStorage.getItem("Role")==="ADMIN"?<EditDesignation />:<Navigate to='/'/>,
  },
  // { path: "/organisation/designation-profile/:id", element: localStorage.getItem("Role")==="ADMIN"?<DesignationProfile />:<Navigate to='/'/> },
  { path: "/organisation/edit-expences/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditExpenses />:<Navigate to='/'/> },
  {
    path: "/organisation/expences-profile/:id",
    element: localStorage.getItem("Role")==="ADMIN"?<ExpensesProfile />:<Navigate to='/'/>,
  },
  {
    path: "/organisation/policies-profile/:id",
    element: localStorage.getItem("Role")==="ADMIN"?<PoliciesProfile />:<Navigate to='/'/>,
  },
  { path: "/organisation/edit-policies/:id", element: localStorage.getItem("Role")==="ADMIN"?<EditPolicies />:<Navigate to='/'/> },
  {
    path: "/organisation/edit-announcements/:id",
    element: localStorage.getItem("Role")==="ADMIN"?<EditAnnouncements />:<Navigate to='/'/>,
  },
  {
    path: "/organisation/designation-profile/:id",
    element: localStorage.getItem("Role")==="ADMIN"?<DesignationProfile />:<Navigate to='/'/>,
  },
  {
    path: "/organisation/announcements-profile/:id",
    element: localStorage.getItem("Role")==="ADMIN"?<AnnouncementsProfile />:<Navigate to='/'/>,
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
