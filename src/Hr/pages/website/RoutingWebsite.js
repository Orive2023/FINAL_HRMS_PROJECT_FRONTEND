import React from 'react';
import { Route, Routes } from "react-router-dom";
import CareerView from '../website/career/Mainfile/CareerView';
 import JournalView from '../website/journal/Mainfile/JournalView';
 import LandingView  from '../website/landing/Mainfile/LandingView';
 import ReachusView  from '../website/reachus/Mainfile/ReachusView';
const routesData=[
  
    { path: "/hr/website/career", element: <CareerView/> },
     { path: "/hr/website/journal", element: <JournalView/> },
     { path: "/hr/website/landing", element: <LandingView /> },
     { path: "/hr/website/reachus", element: <ReachusView /> },


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






