import React, {useState} from 'react'
import AdvanceSalaryView from './Mainfile/AdvanceSalaryView';

const StateAdvanceSalary = () => {

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [dueSalary, setDueSalary] = useState(0)
    const [company, setCompany] = useState([]);
    const [location, setLocation] = useState([]);
    const [recDelete, setRecDelete] = useState("");
    const [dateError, setDateError] = useState(false);
    const [department, setDepartment] = useState([]);
    const [advanceSalary, setAdvanceSalary] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [formData, setFormData] = useState({
      createdDate: getCurrentDate(),
      employeeName: "",
      salary: 0,
      advanceAmount: 0,
      salaryDue: 0,
      monthAndYear: "",
      });
    return {
       advanceSalary,setAdvanceSalary,formData,setFormData,dueSalary, setDueSalary,recDelete,setRecDelete,department,setDepartment, formVisible,setFormVisible,toggle,setToggle,company,setCompany,location,setLocation,dateError,setDateError,employee, setEmployee
 
    }
}

export default StateAdvanceSalary