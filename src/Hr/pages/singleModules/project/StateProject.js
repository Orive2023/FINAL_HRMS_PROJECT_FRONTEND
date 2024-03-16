import { useState } from "react";

const StateProject = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [company, setCompany] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [location, setLocation] = useState([]);
  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  const [department, setDepartment] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [workUpdateSheet, setWorkUpdateSheet] = useState("");

  const [project, setProject] = useState("");
  const [formData, setFormData] = useState({
    projectsId: "",
    projectTitle: "",
    clientName: "",
    companyName: "",
    startDate: "",
    endDate: "",
    priority: "",
    budget: "",
    projectManagers: "",
    summary: "",
    description: "",
    summary: "",
    budget: "",
    workUpdateSheet:"",
    employeeProjectManagementEntities: [
      {
        id:"",
        username: "",
        employeeName: "",
        projectName: "",
        taskAssignedFor: "",
        typeTheTaskHere: "",
      }
    ]
  });

  return {
    formData,
    formVisible,
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
    setFormVisible,
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
    project,
    setProject,
    workUpdateSheet,
    setWorkUpdateSheet,employee, setEmployee
  };
};

export default StateProject;
