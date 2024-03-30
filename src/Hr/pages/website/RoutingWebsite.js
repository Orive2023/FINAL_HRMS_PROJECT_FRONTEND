import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import CareerView from '../website/career/Mainfile/CareerView';
 import JournalView from '../website/journal/Mainfile/JournalView';
 import LandingView  from '../website/landing/Mainfile/LandingView';
 import ReachusView  from '../website/reachus/Mainfile/ReachusView';
import Login from '../../../Login';
const routesData=[
  
    { path: "/hr/website/career", element:localStorage.getItem("Role")==="ADMIN"? <CareerView/>:<Navigate to='/'/> },
     { path: "/hr/website/journal", element:localStorage.getItem("Role")==="ADMIN"? <JournalView/>:<Navigate to='/'/> },
     { path: "/hr/website/landing", element:localStorage.getItem("Role")==="ADMIN"? <LandingView />:<Navigate to='/'/> },
     { path: "/hr/website/reachus", element:localStorage.getItem("Role")==="ADMIN"? <ReachusView />:<Navigate to='/'/> },


]

const RoutingWebsite = () => {
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
}

export default RoutingWebsite;






