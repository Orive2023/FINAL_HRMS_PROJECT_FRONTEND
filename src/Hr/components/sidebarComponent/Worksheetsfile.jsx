import React from "react";
import { useNavigate } from "react-router-dom";
import WorksheetLogo from "../../asset/24px/Worksheets.png";

const WorksheetsFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={() => navigation("/hr/worksheets")}>
        <span></span>
        <img src={WorksheetLogo} alt="Worksheet" />
        <p>Worksheets</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/hr/worksheets")}
      >
        <span></span>
        <img src={WorksheetLogo} alt="Worksheet" />
      </div>
    </div>
  );
};

export default WorksheetsFile;
