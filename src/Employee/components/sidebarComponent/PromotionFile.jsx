import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/promotion.png";

const PromotionFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/promotion")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Award" />
        <p>Promotion</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/promotion")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Promotion" />
      </div>
    </div>
  );
};

export default PromotionFile;
