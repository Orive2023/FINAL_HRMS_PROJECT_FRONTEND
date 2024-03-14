import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Requirement from "../../asset/24px/Recruitment.png";
const JobVacancyFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/job-vacancy")}
      >
        <span></span>
        <img src={Requirement} alt="Dashboard" />
        <p>Job Vacancy</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/job-vacancy")}
      >
        <span></span>
        <img src={Requirement} alt="JobVacancy" />
      </div>
    </div>
  );
};

export default JobVacancyFile;
