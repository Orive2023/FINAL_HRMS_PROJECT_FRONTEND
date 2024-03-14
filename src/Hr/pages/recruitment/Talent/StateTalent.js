import { useState } from 'react'

const StateTalent = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  // const { Talent, setTalent, setNameError, setRequirementsError, requirementsError, jobLocationError, setJobLocationError, nameError, company, setCompany, location, setLocation, setProjectNameError, projectNameError, setManagerNameError, managerNameError,
  // } = StateTalent()
  const [talent, setTalent] = useState([]);
  const [managerNameError,setManagerNameError] =useState(false);
  const [requirementsError,setRequirementsError ] =useState(false);
  const [jobLocationError, setJobLocationError] =useState("");
  const [projectNameError, setProjectNameError] =useState("");
  const [nameError,setNameError] =useState("");

  const [formData, setFormData] = useState({
    id:"",
    country: "",
    city: "",
    role: "",
    subRole: "",
    projectRole: "",
    businessArea: "",
    startDate: "",
    endDate: "",
    jobNo: "",
    designation: "",
    projectRoleDesc: "",
    mustHaveSkills: "",
    goodHaveSkills: "",
    qualification: "",
    description: "",
  });
  return {
    formData, setFormData, talent, setTalent, formVisible, setFormVisible, toggle, setToggle,recDelete, setRecDelete, dateError, setDateError,managerNameError,setManagerNameError,requirementsError,setRequirementsError,nameError,setNameError,jobLocationError, setJobLocationError,setProjectNameError, projectNameError

  }
}

export default StateTalent