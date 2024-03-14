import {useState} from 'react'

const StateCommittee = () => {
    const [committee, setCommittee] = useState([]);
    const [open, setOpen] = useState(false);
    const [recDelete,setRecDelete] =useState("")
    const [pdfFile,setPdfFile] = useState("")
    const [nameError, setNameError] = useState("")
    const [formData, setFormData] = useState({
        name: "",
       signature: "",
    //    status:"",
      });
  return {
   nameError, setNameError, pdfFile,setPdfFile,open,setOpen,recDelete,setRecDelete,formData,setFormData,committee,setCommittee
  }
}

export default StateCommittee