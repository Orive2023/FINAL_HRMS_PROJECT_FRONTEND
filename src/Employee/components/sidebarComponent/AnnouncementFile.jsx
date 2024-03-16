import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/announce.png";

const AnnouncementFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/announcement")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Award" />
        <p>Announcement </p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/announcement")}
      >
        <span></span>
        <img src={ProjectLogo} alt="Award" />
      </div>
    </div>
  );
};

export default AnnouncementFile;
