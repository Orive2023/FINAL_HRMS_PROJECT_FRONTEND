import { useState } from 'react'
// import CandidateView from "../candiddate/mainfile/CandidateView";

const StateHoliday = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [formErrors, setFormerrors] = useState({});
    const [formControl, setFormControl] = useState(false);
    const [holiday, setHoliday] = useState([]);
    const [search, setSearch] = useState("");
    const [dateError,setDateError] = useState([]);
    const [open, setOpen] = useState(false);
    const [recDelete, setRecDelete] = useState("");
    const [formData, setFormData] = useState({
        eventName: "",
        startDate: "",
        endDate: "",
        description: "",
    });
    return {
        holiday,setHoliday,formVisible,setFormVisible,toggle,setToggle,formErrors,setFormerrors,formControl,setFormControl,search,setSearch,dateError,setDateError,open,setOpen,recDelete,setRecDelete,formData,setFormData
    }
}

export default StateHoliday