import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import CompanyLogoFile from "./CompanyLogoFile";
import MainFile from "./MainFile";
import axios from "axios";

const Dashboard = ({logout,name}) => {
  const [menu, setMenu] = useState(false);

  const username = localStorage.getItem("UserName")
  

 
  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
      <SideBar menu={menu} setMenu={setMenu} logout={logout}/>
        <div className="head-foot-part">
        <MainFile name={username}/>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
