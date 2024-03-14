import {useState} from 'react'

const StatePolicies = () => {
    const [descriptionError,setDescriptionError]= useState(false);
    const [policies, setPolicies] = useState([]);
    const [open, setOpen] = useState(false);
    const [company, setCompany] = useState([]);
    const [recDelete,setRecDelete] =useState("")
    const [titleError, setTitleError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [pdfFile,setPdfFile] = useState("")
    const [formData, setFormData] = useState({
        companyName: "",
        title: "",
        description: "",
        createdDate: "",
        uploadPdf: "",
      });
  return {
    pdfFile,setPdfFile,dateError,setDateError,titleError,setTitleError,descriptionError,setDescriptionError,policies,setPolicies,open,setOpen,company,setCompany,recDelete,setRecDelete,formData,setFormData
  }
}

export default StatePolicies