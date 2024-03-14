import React from "react";
import Logo from "../../../../asset/Orive Logo.png";
const Header = () => {
  return (
    <header className="d-flex item s-center justify-content-center mb-5 xl:flex-row xl:justify-between">
      <div>
        <img src={Logo} alt="" className="" />
        <div className="hr">
          <div className="hr1 border-success p-1 mb-2 bg-purple">
           
          </div>
          <div className="hr2 border-danger p-1 bg-danger">
        
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
