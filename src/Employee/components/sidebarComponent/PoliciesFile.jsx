import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/privacy-policy.png";

const PoliciesFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/policies")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Award" />
        <p>Policies </p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/policies")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Award" />
      </div>
    </div>
  );
};

export default PoliciesFile;
