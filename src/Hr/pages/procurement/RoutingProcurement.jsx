import React from "react";
import { Route, Routes } from "react-router-dom";
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
const routesData = [
  { path: "/hr/procurement/committee", element: <CommitteeView /> },
  { path: "/procurement/edit-committee/:id", element: <EditCommittee /> },
  { path: "/hr/procurement/unit", element: <UnitView /> },
  { path: "/unit-profile/:id", element: <UnitProfile/> },
  { path: "/hr/procurement/vendor", element: <VendorView /> },
  { path: "/vendor-profile/:id", element: <VendorProfile /> },
   { path: "/hr/procurement/purchase-order", element: <PurchaseOrder /> },
   { path: "/purchaseorder-profile/:id", element: <PurchaseOrderProfile /> },
  { path: "/hr/procurement/request", element: <RequestView /> },
  { path: "/request-profile/:id", element: <RequestProfile /> },
  { path: "/hr/procurement/bidAnalysis", element: <BidAnalysis /> },
  // { path: "/hr/procurement/purchase", element: <PurchaseOrderView /> },
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
