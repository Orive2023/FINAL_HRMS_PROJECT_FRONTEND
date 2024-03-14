import {useState} from 'react'

const StateDesignation = () => {
 

  const [dateError, setDateError] = useState("");
  const [designation, setDesignation] = useState([]);
  const [department, setDepartment] = useState([]);
  const [open, setOpen] = useState(false);
  const [recDelete,setRecDelete] =useState("")
  const [formData, setFormData] = useState({
    departmentName: "",
    designationName: "",
    createdDate: "",
  });
  return {
    dateError,setDateError,designation,setDesignation,department,setDepartment,open,setOpen,formData,setFormData,recDelete,setRecDelete
}
}

export default StateDesignation