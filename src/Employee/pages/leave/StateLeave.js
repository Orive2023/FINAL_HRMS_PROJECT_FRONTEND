import { useState } from "react";

const StateLeave = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [leave, setLeave] = useState([]);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [address, setAddress] = useState("");
  const [employee, setEmployee] = useState([]);
  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    employeeName: "",
    leaveReason: "",
    description: "",
    appliedOn: getCurrentDate(),
    username:""
  });

  return {
    employee, setEmployee,
    formData,
    setFormData,
    leave,
    setLeave,
    formVisible,
    setFormVisible,
    toggle,
    setToggle,
    recDelete,
    setRecDelete,
    dateError,
    setDateError,
    email,
    setEmail,
    emailError,
    setEmailError,
    phone,
    setPhone,
    phoneError,
    setPhoneError,
    name,
    setName,
    address,
    setAddress,
  };
};

export default StateLeave;
