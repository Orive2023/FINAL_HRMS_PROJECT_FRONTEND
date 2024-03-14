import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import LoginSignup from "../../components/LoginSignup";
import CandidateView from "./Candidate/Mainfile/CandidateView";
import InterviewView from "./Interview/Mainfile/InterviewView";
import TalentView from "./Talent/Mainfile/TalentView";
import UserView from "./User/Mainfile/UserView";

const routesData = [
  { path: "/hr/recruitment/candidate", element: <CandidateView /> },
  { path: "/hr/recruitment/interview", element: <InterviewView /> },
  { path: "/hr/recruitment/talent", element: <TalentView /> },
  { path: "/hr/recruitment/user", element: <UserView /> },

 
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
