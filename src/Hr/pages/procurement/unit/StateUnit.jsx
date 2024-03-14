import {useState} from 'react'

const StateUnit = () => {
    const [unit,setUnit] = useState("");
    const [open, setOpen] = useState(false);
    const [recDelete,setRecDelete] =useState("")
    const [nameError, setNameError] = useState("")
    const [formData, setFormData] = useState({
        unitName: "",
      });
  return {
   nameError, setNameError,open,setOpen,recDelete,setRecDelete,formData,setFormData,unit,setUnit
  }
}

export default StateUnit