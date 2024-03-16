import { useState } from "react";

const StateAttendance = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const day = `${now.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  const [officeShift, setOfficeShift] = useState([]);

  const [formData, setFormData] = useState({
    employeeName: "",
    username: "",
    clockIn: "",
    clockOut: "",
    officeClockIn: "",
    officeClockOut: "",
    date: getCurrentDate(),
  });

  return {
    formData,
    setFormData,
    formVisible,
    setFormVisible,
    toggle,
    setToggle,
    recDelete,
    setRecDelete,
    dateError,
    setDateError,
    employee,
    setEmployee,
    attendance,
    setAttendance,
    officeShift,
    setOfficeShift
  };
};

export default StateAttendance;
