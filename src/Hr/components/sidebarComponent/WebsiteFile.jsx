import React, { useState } from "react";
import { useNavigate } from "react-router";
import TicketLogo from "../../asset/24px/ticket.png";

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
      <div className="logo-text-p" onClick={handleOrgclick}>
        <span></span>
        <img src={TicketLogo} alt="Organisation" />
        <p id="dropdown">
         Website<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleOrgclick}>
        <span></span>
        <img src={TicketLogo} alt="website" />
      </div>
      <div className={dropdown}>
        <p onClick={() => navigate("/hr/website/reachus")}>Reach Us</p>
        <p onClick={() => navigate("/hr/website/journal")}>Journal</p>
        <p onClick={() => navigate("/hr/website/landing")}>Landing Page</p>
        <p onClick={() => navigate("/hr/website/career")}>Career Page</p>
      </div>
    </div>
  );
};

export default Websitefile;
