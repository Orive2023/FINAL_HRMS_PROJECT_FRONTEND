import { useState } from "react";

const StateVendor = () => {

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isValidGSTNumber, setIsValidGSTNumber] = useState(true);
  const [isValidUANNumber, setIsValidUANNumber] = useState(true);
  const [phoneError, setPhoneError] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [vendor, setVendor] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [recDelete,setRecDelete] =useState("")
  const [formData, setFormData] = useState({
 
 vendorName:"",
 mobileNo:"",
 emailAddress:"",
 address:"",
 country:"",
 city:"",
 zipCode:"",
 previousBalance:"",
  });

  return {
    recDelete,setRecDelete,
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
    vendor,
    setVendor,
    search,
    setSearch,
    open,
    setOpen,
    zipCode,
    setZipCode,
    errorCode,
    setErrorCode,
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

export default StateVendor;
