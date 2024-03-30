import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import AccountBalanceView from "./accountBalanceForm/Mainfile/AccountBalanceView";
import SubTypeView from "./subType/Mainfile/SubTypeView";
import DebitView from "./debit/Mainfile/DebitView";
import CreditView from "./credit/Mainfile/CreditView";
import FinacialYearView from "./financialYear/Mainfile/FinancialYearView";
import ContraVoucherView from "./contraVoucher/Mainfile/ContraVoucherView";
import OpeningBalanceView from "./openingbalance/Mainfile/BalanceView";
import EditDebit from "../account/debit/Mainfile/EditDebit"
import EditAccountBalance from "./accountBalanceForm/Mainfile/EditAccountBalance";
import EditContraVoucher from "./contraVoucher/Mainfile/EditContraVoucher";
import EditSubType from "./subType/Mainfile/EditSubtype";
import EditFinancialYear from "./financialYear/Mainfile/EditFinancialYear";
import AccountBalanceProfile from "./accountBalanceForm/Mainfile/AccountBalanceProfile";
import DebitProfile from "./debit/Mainfile/DebitProfile";
import CreditProfile from "./credit/Mainfile/CreditProfile";
import ContraVoucherProfile from "./contraVoucher/Mainfile/ContraVoucherProfile";
import Login from "../../../Login";

const routesData = [
  { path: "/hr/account/account-balance", element:localStorage.getItem("Role")==="ADMIN"? <AccountBalanceView />:<Navigate to='/'/> },
  {
    path: "/account/edit-accountBalance/:id",
    element:localStorage.getItem("Role")==="ADMIN"? <EditAccountBalance />:<Navigate to='/'/>,
  },
  { path: "/account/edit-debit/:id", element:localStorage.getItem("Role")==="ADMIN"? <EditDebit/>:<Navigate to='/'/> },
  { path: "/hr/account/sub-type", element:localStorage.getItem("Role")==="ADMIN"? <SubTypeView />:<Navigate to='/'/> },
  { path: "/account/edit-sub-type/:id", element:localStorage.getItem("Role")==="ADMIN"? <EditSubType />:<Navigate to='/'/> },
  { path: "/hr/account/debit", element:localStorage.getItem("Role")==="ADMIN"? <DebitView />:<Navigate to='/'/> },
  { path: "/hr/account/credit-voucher", element:localStorage.getItem("Role")==="ADMIN"? <CreditView />:<Navigate to='/'/> },
  { path: "/hr/account/financial-year", element:localStorage.getItem("Role")==="ADMIN"? <FinacialYearView />:<Navigate to='/'/> },
  { path: "/account/edit-financial-year/:id", element:localStorage.getItem("Role")==="ADMIN"? <EditFinancialYear />:<Navigate to='/'/> },
  { path: "/hr/account/contra-voucher/", element:localStorage.getItem("Role")==="ADMIN"? <ContraVoucherView />:<Navigate to='/'/> },
  { path: "/hr/account/opening-balance", element:localStorage.getItem("Role")==="ADMIN"? <OpeningBalanceView />:<Navigate to='/'/> },
  { path: "/account/edit-contra-voucher/:id", element:localStorage.getItem("Role")==="ADMIN"? <EditContraVoucher />:<Navigate to='/'/> },
  { path: "/accountbalance-profile/:id", element:localStorage.getItem("Role")==="ADMIN"? <AccountBalanceProfile />:<Navigate to='/'/> },
  { path: "/debit-profile/:id", element:localStorage.getItem("Role")==="ADMIN"? <DebitProfile />:<Navigate to='/'/> },
  { path: "/credit-profile/:id", element:localStorage.getItem("Role")==="ADMIN"? <CreditProfile />:<Navigate to='/'/> },
  { path: "/contravoucher-profile/:id", element:localStorage.getItem("Role")==="ADMIN"? <ContraVoucherProfile />:<Navigate to='/'/> },
  // { path: "/account/debit-voucher", element:localStorage.getItem("Role")==="ADMIN"? <ContraVoucherView />:<Navigate to='/'/> },
];

const RoutingAccount = () => {
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

export default RoutingAccount;
