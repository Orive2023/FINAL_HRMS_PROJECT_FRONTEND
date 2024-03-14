import React from 'react';
import { Route, Routes } from "react-router-dom";
import SalesView from '../Sales/Sales/MainFile/SalesView';
import ClientsView from './Clients/MainFile/ClientsView';
import ProductsView from './Products/MainFile/ProductsView';
import ClientsProfile from './Clients/MainFile/ClientsProfile';
import ProductProfile from './Products/MainFile/ProductProfile';
import SalesProfile from './Sales/MainFile/SalesProfile';

const routesData=[
    { path: "/hr/sales/client", element: <ClientsView/> },
    { path: "/hr/sales/product", element: <ProductsView/> },
    { path: "/hr/sales/sales", element: <SalesView /> },
    { path: "/clients/clients-profile/:id", element: <ClientsProfile /> },
    { path: "/sales/products-view/:id", element: <ProductProfile /> },
    { path: "/sales/sales-view/:id", element: <SalesProfile /> },


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






