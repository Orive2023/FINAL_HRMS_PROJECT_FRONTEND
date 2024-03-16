import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/left-and-right-arrows.png";

const TransferFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/transfer")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Award" />
        <p>Transfer</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/transfer")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Award" />
      </div>
    </div>
  );
};

export default TransferFile;
