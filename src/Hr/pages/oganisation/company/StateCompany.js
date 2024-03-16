import { useState } from "react";

const StateCompany = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [dateError, setDateError] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [isValidCIN, setIsValidCIN] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isValidGSTNumber, setIsValidGSTNumber] = useState(true);
  const [isValidUANNumber, setIsValidUANNumber] = useState(true);
  const [phoneError, setPhoneError] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [company, setCompany] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [file,setFile] = useState(null)
  const [recDelete,setRecDelete] =useState("")
  const [formData, setFormData] = useState({
    companyId:"",
    companyName: "",
    companyType: "",
    legalOrTradingName: "",
    address: "",
    registrationNumber: "",
    contactNumber: " ",
    email: "",
    website: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cin: "",
    gst: "",
    uan: "",
    createdDate:getCurrentDate(),
    file:"",
    status:""
  });

  return {
    recDelete,setRecDelete,
    file,
    setFile,
    dateError,
    setDateError,
    websiteError,
    setWebsiteError,
    isValidCIN,
    setIsValidCIN,
    isEmailValid,
    setIsEmailValid,
    isValidGSTNumber,
    setIsValidGSTNumber,
    isValidUANNumber,
    setIsValidUANNumber,
    phoneError,
    setPhoneError,
    formVisible,
    setFormVisible,
    toggle,
    setToggle,
    company,
    setCompany,
    search,
    setSearch,
    open,
    setOpen,
    zipCode,
    setZipCode,
    errorCode,
    setErrorCode,
    companyName,
    setCompanyName,
    errorMsg,
    setErrorMsg,
    address,
    setAddress,
    addressError,
    setAddressError,
    formData,
    setFormData
  };
};

export default StateCompany;
