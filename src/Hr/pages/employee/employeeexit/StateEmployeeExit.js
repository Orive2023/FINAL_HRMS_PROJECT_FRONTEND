import {useState} from 'react'
// import DepartmentView from './Mainfile/DepartmentView';

const StateEmployeeExit = () => {
    const [descriptionError, setDescriptionError] = useState("");
    const [employee, setEmployee] = useState([]);
    const [formVisible, setFormVisible] = useState(false);
    const [employeeExit, setEmployeeExit] = useState([]);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [recDelete, setRecDelete] = useState("");
    const [dateError, setDateError] = useState(false);
    const [employeeUserNameError, setEmployeeUserNameError] = useState("");

    const [formData, setFormData] = useState({
        employeeToExit: "",
        exitDate: "",
        typeOfExit: "",
        exitInterview: "",
        inactivateEmployeeAccount: "",
        description: "",
      });
    
    return {
        descriptionError, setDescriptionError,employee, setEmployee,formVisible, setFormVisible,employeeExit, setEmployeeExit,search, setSearch,open, setOpen,recDelete, setRecDelete,dateError, setDateError, formData, setFormData,employeeUserNameError, setEmployeeUserNameError
    }
}

export default StateEmployeeExit;