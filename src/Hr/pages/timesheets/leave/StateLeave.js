import { useState } from "react";

const StateLeaves = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [leave, setLeave] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [address, setAddress] = useState("");
  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    employeeName: "",
    leaveReason: "",
    description: "",
    appliedOn: "",
  });

  return {
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
    employee, setEmployee,
  };
};

export default StateLeaves;
