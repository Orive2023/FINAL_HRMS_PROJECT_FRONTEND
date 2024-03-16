import { useState } from "react";
// import TicketView from "../transfers/mainfile/TransferView";

const StateResignation = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [formErrors, setFormerrors] = useState({});
  const [formControl, setFormControl] = useState(false);
  const [resignation, setResignation] = useState([]);
  const [open, setOpen] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [employee, setEmployee] = useState([]);

  const [formData, setFormData] = useState({
    employeeName: "",
    resignationDate: "",
    noticeDate: "",
    resignationReason: "",
    username:""
  });
  return {
    formData,
    setFormData,
    formVisible,
    formErrors,
    setFormerrors,
    open,
    setOpen,
    setFormVisible,
    toggle,
    setToggle,
    resignation,
    setResignation,
    formControl,
    setFormControl,
    recDelete,
    setRecDelete,
    employee,
    setEmployee,
  };
};

export default StateResignation;
