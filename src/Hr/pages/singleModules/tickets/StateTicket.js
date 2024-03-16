import { useState } from "react";
import TicketView from "../tickets/mainfile/TicketView";

const StateTicket = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [formErrors, setFormerrors] = useState([]);
  const [formControl, setFormControl] = useState(false);
  const [ticket, setTicket] = useState([]);
  const [project, setProject] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [recDelete, setRecDelete] = useState("");

  const [formData, setFormData] = useState({
    ticketsCode: "",
    subject: "",
    employeeName: "",
    username:"",
    priority: "",
    date: getCurrentDate(),
    createdBy: "",
    projectTitle: "",
    description: "",
  });
  return {
    formData,
    setFormData,
    formVisible,
    formErrors,
    setFormerrors,
    setFormVisible,
    toggle,
    setToggle,
    ticket,
    setTicket,
    employee,
    formControl,
    setFormControl,
    setEmployee,
    recDelete,
    project,
    setProject,
    setRecDelete,
  };
};

export default StateTicket;