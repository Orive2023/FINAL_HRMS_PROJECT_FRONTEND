import { useState } from "react";
import AwardsView from "./Mainfile/AwardView";

const StateAward = () => {
  // const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [award, setAward] = useState("");
  const [company, setCompany] = useState([]);
  const [location, setLocation] = useState([]);
  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  const [department, setDepartment] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [open, setOpen] = useState(false);
  const [giftName, setGiftName] = useState("");
  const [errorGiftName, setErrorGiftName] = useState("");
  const [awardName, setAwardName] = useState("");
  const [errorAwardMsg, setAwardErrorMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  const [formData, setFormData] = useState({
    awardName: "",
    awardDescription: "",
    username: "",
    date: "",
    employeeName: "",
    awardBy: "",
    email:"",
    giftItem:""
  });
  return {
    giftName,
    setGiftName,
    errorGiftName,
    setErrorGiftName,
    awardName,
    setAwardName,
    employeeName,
    setEmployeeName,
    award,
    setAward,
    open,
    setOpen,
    formData,
    toggle,
    location,
    recDelete,
    dateError,
    department,
    setDepartment,
    setDateError,
    setRecDelete,
    setLocation,
    company,
    setCompany,
    setToggle,
    setFormData,
    projectTitle,
    setProjectTitle,
    clientName,
    setClientName,
    projectManager,
    setProjectManager,
    description,
    setDescription,
    summary,
    setSummary,
    errorAwardMsg,
    setAwardErrorMsg,
    errorMsg,
    setErrorMsg,
  };
};

export default StateAward;
