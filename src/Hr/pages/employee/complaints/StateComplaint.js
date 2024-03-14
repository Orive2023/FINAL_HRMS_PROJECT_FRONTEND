import { useState } from "react";
import ComplaintView from "./Mainfile/ComplaintView";

const StateComplaint = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [employee, setEmployee]= useState([]);
  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  const [complaint, setComplaint] = useState([]);

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    employeeName: "",
    username: "",
    complaintTitle: "",
    complaintDate: "",
    complaintAgainst: "",
    description: "",  });
  return {
    employee,
    setEmployee,
    formData,
    formVisible,
    toggle,
    setToggle,
    recDelete,
    dateError,
    complaint,
    setComplaint,
    setDateError,
    setRecDelete,
    open,
    setOpen,
    setFormVisible,
    setFormData,
  };
};

export default StateComplaint;