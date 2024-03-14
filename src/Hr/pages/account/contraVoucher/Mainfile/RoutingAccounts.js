import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../../../../components/Dashboard";

import ContraVoucherView from "../../accounts/Mainfile/ContraVoucherView";
import ContraVoucherView from "../../accountBalanceForm/Mainfile/AccountBalanceView";
import DebitView from "../../debit/Mainfile/DebitView";

const routesData = [

    { path: "/", element: <Dashboard /> },
 
  { path: "/accounts/accountBalanceForm", element: <AccountBalanceView /> },
  { path: "/accounts/debit-voucher", element: <DebitView /> },

  
];

const RoutingAccounts = () => {
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
  
  export default RoutingAccounts;