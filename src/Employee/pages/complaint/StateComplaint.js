import { useState } from "react";

const StateComplaint = () => {

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  const [complaint, setComplaint] = useState([]);

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    complaintId: "",
    complaintFrom: "",
    complaintTitle: "",
    complaintDate: getCurrentDate(),
    complaintAgainst: "",
    description: "",
    username: "",
  });
  return {
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
