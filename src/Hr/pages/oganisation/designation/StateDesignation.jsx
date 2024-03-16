import {useState} from 'react'

const StateDesignation = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };


  const [dateError, setDateError] = useState("");
  const [designation, setDesignation] = useState([]);
  const [department, setDepartment] = useState([]);
  const [open, setOpen] = useState(false);
  const [recDelete,setRecDelete] =useState("")
  const [formData, setFormData] = useState({
    departmentName: "",
    designationName: "",
    createdDate:getCurrentDate(),
  });
  return {
    dateError,setDateError,designation,setDesignation,department,setDepartment,open,setOpen,formData,setFormData,recDelete,setRecDelete
}
}

export default StateDesignation