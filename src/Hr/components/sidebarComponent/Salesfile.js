import React, { useState } from "react";
import { useNavigate } from "react-router";
import TicketLogo from "../../asset/24px/ticket.png";

const Salesfile = () => {
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
          Sales<i class="bx bx-chevron-down"></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleOrgclick}>
        <span></span>
        <img src={TicketLogo} alt="Organisation" />
      </div>
      <div className={dropdown}>
        <p onClick={() => navigate("/hr/sales/client")}>Client</p>

        <p onClick={() => navigate("/hr/sales/product")}>Product</p>

        <p onClick={() => navigate("/hr/sales/sales")}>Sales</p>
      </div>
    </div>
  );
};

export default Salesfile;
