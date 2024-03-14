import { useState } from 'react'
// import CandidateView from "../candiddate/mainfile/CandidateView";

const StateCandidate = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [formErrors, setFormerrors] = useState({});
    const [formControl, setFormControl] = useState(false);
    const [candidate, setCandidate] = useState([]);
    const [search, setSearch] = useState("");
    const [dateError,setDateError] = useState([]);
    const [open, setOpen] = useState(false);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [isEmailValid,setIsEmailValid] = useState(true);
    const [phoneError,setPhoneError ]= useState(false);
    const [recDelete, setRecDelete] = useState("");
    const [formData, setFormData] = useState({
       name: "",
        address: "",
        email: "",
        mobile: "",
        ctc: "",
        ectc: "",
        location: "",
        notice:"",
       file:"",
    });
    return {
        candidate,setCandidate,isValidPhoneNumber,setIsValidPhoneNumber,setPhoneError,phoneError,setIsEmailValid,isEmailValid,formVisible,setFormVisible,toggle,setToggle,recDelete,setRecDelete,dateError,setDateError,open,setOpen,search,setSearch,formControl,setFormControl,formErrors,setFormerrors,formData,setFormData
   
    }
}

export default StateCandidate