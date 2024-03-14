import { useState } from "react";
import WarningView from "./Mainfile/WarningView";

const StateWarning = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  const [descriptionError,setDescriptionError]= useState(false);
  const [warningError,setWarningError] = useState(false);
  const[subjectError, setSubjectError] = useState(false);
  const [warning, setWarning] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const [summary, setSummary] = useState("");
 
 
  

  const [formData, setFormData] = useState({
    warningId: "",
    warningToEmployee: "",
    warningType: "",
    subject: "",
    warningByEmployee: "",
    warningDate: "",
    description: "",
  });

 return {


    formData,
    formVisible,
    toggle,
    setToggle,
    recDelete,
    dateError,
    warning,
    setWarning,
    setDateError,
    setRecDelete,
   
    setFormVisible,
    setFormData,
    summary,
    setSummary,
  };

}
export default StateWarning;
