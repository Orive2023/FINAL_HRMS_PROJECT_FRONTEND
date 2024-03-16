import {useState} from 'react'
import TicketView from "../transfers/mainfile/TransferView";

const StateTransfer = () => {

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const day = `${now.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false);
    const [formErrors,setFormerrors]=useState({});
    const [formControl,setFormControl]=useState(false);
    const [transfer, setTransfer] = useState([]);
    const [employee, setEmployee] = useState([])
    const [recDelete, setRecDelete] = useState("");
    const [dateError, setDateError] = useState(false);
    const [location, setLocation] = useState([]);
    const [department, setDepartment] = useState([]);
    const [descriptionError, setDescriptionError] = useState("");
    const [description, setDescription] =  useState("");
   
   

    const [formData, setFormData] = useState({
      employeeName: "",
      username:"",
      email:"",
      transferDate: "",
      departmentName: "",
      locationName: "",
      description:"",
      createdDate: getCurrentDate(),
      });
    return {
       formData,setFormData,dateError,description,setDescription,descriptionError,setDescriptionError, setDateError, formVisible,formErrors,setFormerrors,open, setOpen,setFormVisible,toggle,setToggle,employee,transfer, setTransfer, formControl,setFormControl,setEmployee,recDelete,setRecDelete, location, setLocation,department, setDepartment
 
    }
}

export default StateTransfer