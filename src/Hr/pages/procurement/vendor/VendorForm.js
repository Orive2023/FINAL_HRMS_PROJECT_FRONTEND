import React,{useState,useEffect} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SweetAlert2 from 'react-sweetalert2';


import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateVendor from "../vendor/StateVendor";


const VendorForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();

  const {
    vendor,
    setIsEmailValid,
    setIsValidUANNumber,
    setPhoneError,
    setIsValidGSTNumber,
    setWebsiteError,
    setDateError,
    setErrorCode,
    setErrorMsg,
    setCompanyName,
    setAddressError,
    setZipCode,
    setAddress,
    setVendor
  } = StateVendor();

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;

    
  
   
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
    }
  
    if (name === "contactNumber") {
      // Validate phone number format
      const isValidPhoneNumber = /^\d{10}(-\d{1,4})?$/.test(value);
      setPhoneError(!isValidPhoneNumber);
    }
    if (name === "companyName") {
      const truncatedValue = enforceMaxLength(value, 50);
      handleNameChange(truncatedValue);
      setFormData({
        ...formData,
        [name]: truncatedValue,
      });
    } if (name === "address") {
      const truncatedValue = enforceMax(value, 50);
      handleAddressChange(truncatedValue);
      setFormData({
        ...formData,
        [name]: truncatedValue,
      });
    } if (name === "zipCode") {
      const truncatedValue = enforceMaxCode(value, 8);
      handleCodeChange(truncatedValue);
      setFormData({
        ...formData,
        [name]: truncatedValue,
      });
    } 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [name]: value,
    });

  };

  const handleCodeChange = (valueCode) => {
    if (valueCode.length < 6 || valueCode.length > 8) {
      setErrorCode("Invalid length. Length should be between 6 and 8.");
    } else {
      setErrorCode("");
    }
    setZipCode(valueCode);
  };

  const enforceMaxCode = (valueCode, maxLength) => {
    return valueCode.length <= maxLength
      ? valueCode
      : valueCode.slice(0, maxLength);
  };

  const handleNameChange = (value) => {
    if (value.length < 2 || value.length > 50) {
      setErrorMsg(
        "Invalid name length. Name length should be between 2 and 50."
      );
    } else {
      setErrorMsg("");
    }
    setCompanyName(value);
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(0, maxLength);
  };

  const handleAddressChange = (valueAddress) => {
    if (valueAddress.length < 2 || valueAddress.length > 50) {
      setAddressError(
        "Invalid name length. Name length should be between 2 and 50."
      );
    } else {
      setAddressError("");
    }
    setAddress(valueAddress);
  };

  const enforceMax = (valueAddress, maxLength) => {
    return valueAddress.length <= maxLength
      ? valueAddress
      : valueAddress.slice(0, maxLength);
  };

  const [swalProps, setSwalProps] = useState({});
  const loadVendor = async () => {
    const result = await api.loadVendor();
    console.log("rec", result);
    setVendor(result);
  };

  useEffect(() => {
    loadVendor();
  }, []);

  const saveVendor = async () => {
    await api.saveVendor(formData);
    window.location.reload();
   navigate("/hr/procurement/vendor")
    setFormData({
      vendorName:"",
      mobileNo:"",
      emailAddress:"",
      address:"",
      country:"",
      city:"",
      zipCode:"",
      previousBalance:"",
    });
    setSwalProps({
      show: true,
      title: 'HRMS',
      text: 'Data Uploaded Successfully',
  });
  };

  let buttonCheck =
  formData.vendorName.length > 0 &&
  formData.mobileNo.length > 0 &&
  formData.emailAddress.length > 0 &&
  formData.address.length > 0 &&
  formData.country.length > 0 &&
  formData.city.length > 0 &&
  formData.state.length > 0 &&
  formData.zipCode.length > 0 &&
  formData.previousBalance.length > 0;


  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      vendorName:"",
      mobileNo:"",
      emailAddress:"",
      address:"",
      country:"",
      city:"",
      zipCode:"",
      previousBalance:"",
    });
  };  

  const handleSubmit = (e) => {
  loadVendor()
    console.log("Form submitted:", formData);
  };

  console.log(vendor);
  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Vendor Name"
          type="text"
          fullWidth
          name="vendorName"
          id="vendorName"
          value={formData.vendorName}
          onChange={(e) => handleInputChange(e)}
          required
          // error={errorMsg !== ""}
          // helperText={errorMsg}
        />
      <TextField
          margin="dense"
          label="mobile No"
          type="number"
          fullWidth
          name="mobileNo"
          id="mobileNo"
          value={formData.mobileNo}
          onChange={(e) => handleInputChange(e)}
          required
        />
         </div>
         <TextField
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          name="emailAddress"
          id="emailAddress"
          value={formData.emailAddress}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Address"
          type="text"
          fullWidth
          name="address"
          id="address"
          value={formData.address}
          onChange={(e) => handleInputChange(e)}
          required
        />


      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="City"
          type="text"
          fullWidth
          name="city"
          id="city"
          value={formData.city}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="State"
          type="text"
          fullWidth
          name="state"
          id="state"
          value={formData.state}
          onChange={(e) => handleInputChange(e)}
          required
        />

        <TextField
          margin="dense"
          label="Country"
          type="text"
          fullWidth
          name="country"
          id="country"
          value={formData.country}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Zipcode"
          type="number"
          fullWidth
          name="zipCode"
          id="zipCode"
          value={formData.zipCode}
          onChange={(e) => handleInputChange(e)}
          required
          // error={errorCode !== ""}
          // helperText={errorCode}
        />
      </div>
      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          type="submit"
          onClick={(e) =>saveVendor(e)}
          variant="outlined"
          // disabled={buttonCheck?false:true}
        >
          Submit
        </Button>
        <Button
          id="input-btn-cancel"
          className="cancel"
          onClick={cancelButton}
          variant="outlined"
        >
          Cancel
        </Button>
      </div>
      <SweetAlert2 {...swalProps} />
    </form>
  );
};

export default VendorForm;
