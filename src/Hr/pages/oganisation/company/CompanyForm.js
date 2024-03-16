import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SweetAlert2 from "react-sweetalert2";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateCompany from "./StateCompany";
import Input from "@mui/material/Input";

const CompanyForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();
  
 

  const {
    file,
    setFile,
    setIsValidCIN,
    setIsEmailValid,
    setIsValidUANNumber,
    setPhoneError,
    setIsValidGSTNumber,
    setWebsiteError,
    dateError,
    setDateError,
    setErrorCode,
    setErrorMsg,
    setCompanyName,
    setAddressError,
    setZipCode,
    setAddress,
    setCompany,
  } = StateCompany();

  const Type = [
    {
      value: "Choose",
      label: "Select Company Type",
    },
    {
      value: "Corporation",
      label: "Corporation",
    },
    {
      value: "Exempt Organization",
      label: "Exempt Organization",
    },
    {
      value: "Partnership",
      label: "Partnership",
    },
    {
      value: "Private Foundation",
      label: "Private Foundation",
    },
    {
      value: "Limited Liability",
      label: "Limited Liability",
    },
    {
      value: "Non-profit Organization",
      label: "Non-profit Organization",
    },
    {
      value: "Proprietorship",
      label: "Proprietorship",
    },
  ];

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const isValidGST = (value) => {
      // GST format: 2 characters followed by 10 digits
      const gstRegex =
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[A-Z]{1}[0-9A-Z]{1}$/;
      return gstRegex.test(value);
    };

    const isValidUAN = (value) => {
      // UAN format: 12 digits
      const uanRegex = /^[0-9]{12}$/;
      return uanRegex.test(value);
    };

    const isValidURL = (url) => {
      // Simple URL validation using a regular expression
      const urlRegex = /^[^ "]+$/;
      return urlRegex.test(url);
    };

    if (name === "uan") {
      const isValidUANNumber = isValidUAN(value);
      setIsValidUANNumber(isValidUANNumber);
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
    }
    if (name === "cin") {
      const isValidCIN = /^[a-zA-Z0-9]{21}$/.test(value);
      setIsValidCIN(isValidCIN);
    }

    if (name === "contactNumber") {
      // Validate phone number format
      const isValidPhoneNumber = /^\d{10}(-\d{1,4})?$/.test(value);
      setPhoneError(!isValidPhoneNumber);
    }
    if (name === "gst") {
      const isValidGSTNumber = isValidGST(value);
      setIsValidGSTNumber(isValidGSTNumber);
    }

    if (name === "website") {
      // Validate the website format
      const isValidWebsite = isValidURL(value);
      setWebsiteError(!isValidWebsite);
    }
    if (name === "createdDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    if (name === "companyName") {
      const truncatedValue = enforceMaxLength(value, 50);
      handleNameChange(truncatedValue);
      setFormData({
        ...formData,
        [name]: truncatedValue,
      });
    }
    if (name === "address") {
      const truncatedValue = enforceMax(value, 50);
      handleAddressChange(truncatedValue);
      setFormData({
        ...formData,
        [name]: truncatedValue,
      });
    }
    if (name === "zipCode") {
      const truncatedValue = enforceMaxCode(value, 8);
      handleCodeChange(truncatedValue);
      setFormData({
        ...formData,
        [name]: truncatedValue,
      });
    }
    if (name === "file") {
      setFile(e.target.files[0]);
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.name === "file" ? e.target.files[0] : value,
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

  const FileInput = (props) => (
    <Input
      {...props}
      type="file"
      onChange={(e) => {
      props.onChange(e); // Pass the onChange event to the parent component
      handleFileChange(e); // Handle file change separately
    }}
    />
  );
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFile(file); // Update the file state with the selected file
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
  const loadCompany = async () => {
    const result = await api.loadCompany();
    console.log("rec", result);
    setCompany(result);
  };

  useEffect(() => {
    loadCompany();
  }, []);

  const saveCompany = async () => {
    await api.saveCompany(formData);
    alert("Company added successfully");
    navigate("/hr/organisation/company");
    setFormData({
      companyId:"",
      companyName: "",
      companyType: "",
      legalOrTradingName: "",
      address: "",
      registrationNumber: "",
      contactNumber: "",
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
      file: "",
      status:""
    });
    setFile("");
    setSwalProps({
      show: true,
      title: "HRMS",
      text: "Data Uploaded Successfully",
    });
  };

  let buttonCheck =
    formData.companyName.length > 0 &&
    formData.companyType.length > 0 &&
    formData.legalOrTradingName.length > 0 &&
    formData.address.length > 0 &&
    formData.registrationNumber.length > 0 &&
    formData.contactNumber.length > 0 &&
    formData.email.length > 0 &&
    formData.website.length > 0 &&
    formData.city.length > 0 &&
    formData.state.length > 0 &&
    formData.zipCode.length > 0 &&
    formData.country.length > 0 &&
    formData.cin.length > 0 &&
    formData.gst.length > 0 &&
    formData.uan.length > 0 &&
    formData.createdDate.length > 0;

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
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
      file: "",
      status:""
    });
  };

  const handleSubmit = (e) => {
    loadCompany();
    console.log("Form submitted:", formData);
  };
  console.log(formData);
  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Company Name"
          type="text"
          fullWidth
          name="companyName"
          id="companyName"
          value={formData.companyName}
          onChange={(e) => handleInputChange(e)}
          required
          // error={errorMsg !== ""}
          // helperText={errorMsg}
        />

        <TextField
          id="companyType"
          margin="dense"
          select
          label="Company Type"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.companyType}
          onChange={(e) => handleInputChange(e)}
          name="companyType"
        >
          {Type.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Legal/Trading Name"
          type="text"
          fullWidth
          name="legalOrTradingName"
          id="Legal Or TradingName"
          value={formData.legalOrTradingName}
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
          // error={addressError !== ""}
          // helperText={addressError}
        />
        <TextField
          margin="dense"
          label="Registration Number"
          type="text"
          fullWidth
          name="registrationNumber"
          id="registrationNumber"
          value={formData.registrationNumber}
          onChange={(e) => handleInputChange(e)}
          required
        />

        <TextField
          margin="dense"
          label="CIN Number"
          type="text"
          fullWidth
          name="cin"
          id="cin"
          value={formData.cin}
          onChange={(e) => handleInputChange(e)}
          required
          // error={!isValidCIN}
          // helperText={!isValidCIN && "Please enter a valid CIN number."}
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleInputChange(e)}
          required
          // error={!isEmailValid}
          // helperText={
          //   !isEmailValid ? "Please enter a valid email address." : ""
          // }
        />
        <TextField
          margin="dense"
          label="Contact Number"
          type="number"
          fullWidth
          name="contactNumber"
          id="contactNumber"
          value={formData.contactNumber}
          onChange={(e) => handleInputChange(e)}
          required
          // error={phoneError}
          // helperText={phoneError ? "Invalid phone number" : ""}
        />
        <TextField
          margin="dense"
          label="Website"
          type="text"
          fullWidth
          name="website"
          id="website"
          value={formData.website}
          onChange={(e) => handleInputChange(e)}
          required
          // error={websiteError}
          // helperText={websiteError && "Please enter a valid website URL."}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="GST Number"
          type="text"
          fullWidth
          name="gst"
          id="gst"
          value={formData.gst}
          onChange={(e) => handleInputChange(e)}
          required
          // error={!isValidGSTNumber}
          // helperText={!isValidGSTNumber && "Please enter a valid GST number."}
        />

        <TextField
          margin="dense"
          label="UAN Number"
          type="text"
          fullWidth
          name="uan"
          id="uan"
          value={formData.uan}
          onChange={(e) => handleInputChange(e)}
          required
          // error={!isValidUANNumber}
          // helperText={!isValidUANNumber && "Please enter a valid UAN number."}
        />
      </div>

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

      <div className="data-input-fields">
        <TextField disabled
          margin="dense"
          label="Create Date"
          type="date"
          fullWidth
          name="createdDate"
          id="createdDate"
          value={formData.createdDate}
          onChange={(e) => handleInputChange(e)}
          // required
          error={dateError}
          helperText={dateError && "Please select the current date"}
          InputLabelProps={{
            shrink: true,
          }}
        />

<TextField
          margin="dense"
          label="Company Logo"
          fullWidth
          id="file"
          type="file"
          name="file"
          InputProps={{ inputComponent: FileInput, onChange: handleInputChange }} // Pass onChange handler
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          type="submit"
          onClick={(e) => saveCompany(e)}
          variant="outlined"
          disabled={buttonCheck ? false : true}
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
    </form>
  );
};

export default CompanyForm;
