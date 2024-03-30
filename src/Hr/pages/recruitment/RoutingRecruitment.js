import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import LoginSignup from "../../components/LoginSignup";
import CandidateView from "./Candidate/Mainfile/CandidateView";
import InterviewView from "./Interview/Mainfile/InterviewView";
import TalentView from "./Talent/Mainfile/TalentView";
import UserView from "./User/Mainfile/UserView";
import Login from "../../../Login";

const routesData = [
  { path: "/hr/recruitment/candidate", element:localStorage.getItem("Role")==="ADMIN"? <CandidateView />:<Navigate to='/'/> },
  { path: "/hr/recruitment/interview", element:localStorage.getItem("Role")==="ADMIN"? <InterviewView />:<Navigate to='/'/> },
  { path: "/hr/recruitment/talent", element: localStorage.getItem("Role")==="ADMIN"?<TalentView />:<Navigate to='/'/> },
  { path: "/hr/recruitment/user", element: localStorage.getItem("Role")==="ADMIN"?<UserView /> :<Navigate to='/'/>},

 
];

const RoutingRecruitment = () => {
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

export default RoutingRecruitment;
