import {useState} from 'react'


const StateTrainer = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [overallTrainerRating, setOverallTrainerRating] = useState(0);
    const [uploadCertificate, setUploadCertificate] = useState("");
    const [formControl,setFormControl]=useState(false);
    const [trainer, setTrainer] = useState([]);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [recDelete,setRecDelete]=useState("");
    const [errorMsg,setErrorMsg] = useState("")
    const [ errorMsgClient,setErrorMsgClient] = useState("")
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [formData, setFormData] = useState({
        trainersFullName: "",
        emailAddress: "",
        phoneNo: "",
        technicalSkills: "",
        softSkills: "",
        industries: "",
        certifications: "",
        trainingProgramsOffered: "",
        preferredTrainingAudienece: "",
        trainingLanguages: "",
        availability: "",
        previousClients: "",
        trainingMaterialsProvided: "",
        additionalNotes: "",
        status:""
    
      });
    return {
        phoneNumber, setPhoneNumber, status, setStatus, phoneNumberError, errorMsgClient,setErrorMsgClient,setPhoneNumberError, email, setEmail,emailError, setEmailError, errorMsg,setErrorMsg,formVisible, setFormVisible, toggle, setToggle,overallTrainerRating, setOverallTrainerRating,uploadCertificate, setUploadCertificate,formControl,setFormControl,formData,setFormData,trainer, setTrainer,search, setSearch,open, setOpen,recDelete,setRecDelete
 
    }
}

export default StateTrainer