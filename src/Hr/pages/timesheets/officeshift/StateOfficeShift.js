import { useState } from "react";
import OfficeShiftView from "./Mainfile/OfficeShiftView";

const StateOfficeShift = () => {
  // const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [officeShift, setOfficeShift] = useState("");
  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    createdDate: "",
    officeClockInTime: "",
    officeClockOutTime: "",
  });
  return {
    officeShift,
    setOfficeShift,
    open,
    setOpen,
    formData,
    toggle,
    recDelete,
    dateError,
    setDateError,
    setRecDelete,
    setToggle,
    setFormData,
  };
};

export default StateOfficeShift;
