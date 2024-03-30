import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CommitteeView from "./committee/Mainfile/CommitteeView";
import EditCommittee from "./committee/Mainfile/EditCommitte";
import UnitView from "./unit/Mainfile/UnitView";
import VendorView from "./vendor/Mainfile/VendorView";
import RequestView from "./request/Mainfile/RequestView";
import BidAnalysis from "./bidAnalysis/mainfile/BidAnalysisView";
import PurchaseOrder from "./purchase/Mainfile/PurchaseOrderView";
import VendorProfile from "./vendor/Mainfile/VendorProfile";
import UnitProfile from "./unit/Mainfile/UnitProfile";
import RequestProfile from "./request/Mainfile/RequestProfile";
import PurchaseOrderProfile from "./purchase/Mainfile/PurchaseOrderProfile";
import EditVendor from "./vendor/Mainfile/EditVendor";
import Login from "../../../Login";

const routesData = [
  { path: "/hr/procurement/committee", element:localStorage.getItem("Role")==="ADMIN"? <CommitteeView />:<Navigate to='/'/> },
  { path: "/procurement/edit-committee/:id", element:localStorage.getItem("Role")==="ADMIN"? <EditCommittee />:<Navigate to='/'/> },
  { path: "/hr/procurement/unit", element:localStorage.getItem("Role")==="ADMIN"? <UnitView />:<Navigate to='/'/> },
  { path: "/unit-profile/:id", element:localStorage.getItem("Role")==="ADMIN"? <UnitProfile/>:<Navigate to='/'/> },
  { path: "/hr/procurement/vendor", element:localStorage.getItem("Role")==="ADMIN"? <VendorView />:<Navigate to='/'/> },
  { path: "/procurement/edit-vendor/:id", element:localStorage.getItem("Role")==="ADMIN"? <EditVendor />:<Navigate to='/'/> },
  { path: "/vendor-profile/:id", element:localStorage.getItem("Role")==="ADMIN"? <VendorProfile />:<Navigate to='/'/> },
   { path: "/hr/procurement/purchase-order", element:localStorage.getItem("Role")==="ADMIN"? <PurchaseOrder />:<Navigate to='/'/> },
   { path: "/purchaseorder-profile/:id", element:localStorage.getItem("Role")==="ADMIN"? <PurchaseOrderProfile />:<Navigate to='/'/> },
  { path: "/hr/procurement/request", element:localStorage.getItem("Role")==="ADMIN"? <RequestView />:<Navigate to='/'/> },
  { path: "/request-profile/:id", element:localStorage.getItem("Role")==="ADMIN"? <RequestProfile />:<Navigate to='/'/> },
  { path: "/hr/procurement/bidAnalysis", element:localStorage.getItem("Role")==="ADMIN"? <BidAnalysis />:<Navigate to='/'/> },
  // { path: "/hr/procurement/purchase", element:localStorage.getItem("Role")==="ADMIN"? <PurchaseOrderView />:<Navigate to='/'/> },
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
