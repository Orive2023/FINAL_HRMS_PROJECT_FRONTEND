import React, { useState } from "react";
import { useNavigate } from "react-router";
import Whatsapp from "../../asset/WhatsApp.png";

const Websitefile = () => {
  const [dropdown, setDropdown] = useState("org-dropdown");
  const handleOrgclick = () => {
    if (dropdown === "org-dropdown") {
      setDropdown("org-open");
    } else {
      setDropdown("org-dropdown");
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="logo-text-p logo-wp" onClick={handleOrgclick} >
        <span></span>
        <img src={Whatsapp} alt="whatsapp" />
        <p id="dropdown ">
        <a href="https://wa.me/919777798142">  Whatsapp</a>
        </p>
      </div>
      
    </div>
  );
};

export default Websitefile;
