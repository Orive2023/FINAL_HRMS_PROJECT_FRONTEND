import React from "react";
import { useNavigate } from "react-router-dom";
import TicketLogo from "../../asset/24px/ticket.png";

const TicketsFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div
        className="logo-text-p"
        onClick={() => navigation("/employee/tickets")}
      >
        <span></span>
        <img src={TicketLogo} alt="Ticket" />
        <p>Tickets</p>
      </div>
      <div
        className="mobile-logo-text-p"
        onClick={() => navigation("/employee/tickets")}
      >
        <span></span>
        <img src={TicketLogo} alt="Ticket" />
      </div>
    </div>
  );
};

export default TicketsFile;
