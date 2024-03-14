import { useState } from 'react'
// import TerminationView from "../termination/mainfile/TerminationView";

const StateTermination = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [formErrors, setFormerrors] = useState({});
    const [formControl, setFormControl] = useState(false);
    const [termination, setTermination] = useState([]);
    const [description,setDescription] = useState([]);
    const [dateError,setDateError] = useState([]);
    const [employeeName,setEmployeeName] =useState([]);
    const [open, setOpen] = useState(false);
    const [recDelete, setRecDelete] = useState("");

    const [formData, setFormData] = useState({
        employeeName: "",
        terminateDate: "",
        reasonForTermination: "",
        terminatedBy:"",
    });
    return {
        formData, setFormData,employeeName,setEmployeeName,dateError,setDateError,description,setDescription, formVisible,setFormVisible, formErrors, setFormerrors, open, setOpen,  toggle, setToggle, termination, setTermination, formControl, setFormControl, recDelete, setRecDelete
    
    }
}

export default StateTermination