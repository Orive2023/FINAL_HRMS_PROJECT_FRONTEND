import React from "react";
import { useNavigate } from "react-router-dom";

import ProjectLogo from "../../asset/24px/user (2).png";




const ProfileFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/profile")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Profile" />

       

        <p>Profile</p>

      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/profile")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Profile" />
      </div>
    </div>
  );
};

export default ProfileFile;
