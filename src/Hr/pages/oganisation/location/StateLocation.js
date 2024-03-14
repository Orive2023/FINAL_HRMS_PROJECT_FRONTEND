import {useState} from 'react'

const StateLocation = () => {
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [phoneError, setPhoneError] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [company, setCompany] = useState([]);
    const [location, setLocation] = useState([]);
    const [recDelete,setRecDelete] =useState("")
    const [faxError, setFaxError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [formData, setFormData] = useState({
      companyName: "",
      locationHead: "",
      locationName: "",
      address: "",
      email: "",
      phone: "",
      faxNumber: "", 
      city: "",
      state: "",
      zipCode: "",
      country: "",
      date: "",
        
      });
  return {
    faxError,setFaxError,addressError,setAddressError,recDelete,setRecDelete,isEmailValid,setIsEmailValid,phoneError,setPhoneError,toggle,setToggle,formVisible,setFormVisible,company,setCompany,location,setLocation,formData,setFormData
  }
}

export default StateLocation