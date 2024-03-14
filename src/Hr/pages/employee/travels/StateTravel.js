import {useState} from 'react'
import TravelView from './mainfile/TravelView';

const StateTravel = () => {

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const day = `${now.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [travel, setTravel] = useState([]);
    const [recDelete, setRecDelete] = useState("");
    const [dateError, setDateError] = useState(false);
    const [purposeOfVisit, setPurposeOfVisit] = useState('');
    const [placeOfVisit, setPlaceOfVisit] = useState('');
    const [purposeError, setPurposeError] = useState('');
    const [placeError, setPlaceError] = useState('');
    const [error, setError] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [errorMsg, setErrorMsg] = useState("")
    const [employee, setEmployee] = useState([]);
    const [descriptionError, setDescriptionError] = useState("");
    const [description, setDescription] =  useState("");
    

    const [formData, setFormData] = useState({
        employeeName: "",
        startDate: "",
        endDate:"",
        purposeOfVisit:"",
        placeOfVisit: "",
        travelMode: "",
        arrangementType: "",
        expectedTravelBudget: "",
        actualTravelBudget: "",
        description: "",
        createdDate:getCurrentDate(),
      });
    return {
       formData,description,setDescription,descriptionError,setDescriptionError,setEmployee,employee,setFormData,travel,setEmployeeName, employeeName, setTravel, formVisible,setFormVisible,toggle,setToggle,purposeOfVisit,setPurposeOfVisit,placeOfVisit,setPlaceOfVisit,purposeError, setPurposeError,placeError, setPlaceError,error, setError,recDelete,setRecDelete,dateError,setDateError, errorMsg, setErrorMsg
 
    }
}

export default StateTravel;