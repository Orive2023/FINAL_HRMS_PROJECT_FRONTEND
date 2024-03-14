import {useState} from 'react'
// import DepartmentView from './Mainfile/DepartmentView';

const StateDepartment = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);

    const [company, setCompany] = useState([]);
    const [location, setLocation] = useState([]);
    const [recDelete, setRecDelete] = useState("");
    const [dateError, setDateError] = useState(false);
    const [department, setDepartment] = useState([]);

    const [formData, setFormData] = useState({
        departmentName: "",
        companyName: "",
        locationName: "",
        departmentHead: "",
        createdDate: "",
      });
    return {
       formData,setFormData,department,setDepartment, formVisible,setFormVisible,toggle,setToggle,company,setCompany,location,setLocation,recDelete,setRecDelete,dateError,setDateError
 
    }
}

export default StateDepartment