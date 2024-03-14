import { useState } from "react";

const StateAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [company, setCompany] = useState([]);

  const [department, setDepartment] = useState([]);
  const [location, setLocation] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [summaryError, setSummaryError] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    companyName: "",
    locationName: "",
    departmentName: "",
    summary: "",
    description: "",
    createdDate: "",
  });
  return {
    summaryError,
    setSummaryError,
    recDelete,
    setRecDelete,
    titleError,
    setTitleError,
    dateError,
    setDateError,
    announcements,
    setAnnouncements,
    company,
    setCompany,
    department,
    setDepartment,
    location,
    setLocation,
    formData,
    setFormData,
    formVisible,
    setFormVisible,
    toggle,
    setToggle,
  };
};

export default StateAnnouncement;
