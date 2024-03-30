import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import SalesView from '../Sales/Sales/MainFile/SalesView';
import ClientsView from './Clients/MainFile/ClientsView';
import ProductsView from './Products/MainFile/ProductsView';
import ClientsProfile from './Clients/MainFile/ClientsProfile';
import ProductProfile from './Products/MainFile/ProductProfile';
import SalesProfile from './Sales/MainFile/SalesProfile';
import Login from '../../../Login';

const routesData=[
    { path: "/hr/sales/client", element:localStorage.getItem("Role")==="ADMIN"? <ClientsView/>:<Navigate to='/'/> },
    { path: "/hr/sales/product", element:localStorage.getItem("Role")==="ADMIN"? <ProductsView/>:<Navigate to='/'/> },
    { path: "/hr/sales/sales", element:localStorage.getItem("Role")==="ADMIN"? <SalesView />:<Navigate to='/'/> },
    { path: "/clients/clients-profile/:id", element:localStorage.getItem("Role")==="ADMIN"? <ClientsProfile />:<Navigate to='/'/> },
    { path: "/sales/products-view/:id", element:localStorage.getItem("Role")==="ADMIN"? <ProductProfile />:<Navigate to='/'/> },
    { path: "/sales/sales-view/:id", element:localStorage.getItem("Role")==="ADMIN"? <SalesProfile />:<Navigate to='/'/> },


]

const RoutingSales = () => {
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

export default RoutingSales;






