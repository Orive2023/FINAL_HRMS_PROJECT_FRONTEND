import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/Project.png";

const ProjectsFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={() => navigation("/hr/project")}>
        <span></span>
        <img src={ProjectLogo} alt="Project" />
        <p>Projects</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/hr/project")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Project" />
      </div>
    </div>
  );
};

export default ProjectsFile;
