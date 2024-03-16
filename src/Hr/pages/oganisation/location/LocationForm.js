import React, { useEffect, useState } from "react";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateLocation from "./StateLocation";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { ColorRing } from "react-loader-spinner";

const LocationForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();

  const {
    setAddressError,
    setFaxError,
    addressError,
    faxError,
    isEmailValid,
    setIsEmailValid,
    phoneError,
    setPhoneError,
    company,
    setCompany,
    setLocation,
  } = StateLocation();

  const loadLocation = async () => {
    const result = await api.loadLocation();
    setLocation(result);
  };

  useEffect(() => {
    loadLocation();
    fetchCompany();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const isValidLength = value.length >= 2 && value.length <= 40;
    setAddressError(!isValidLength);

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
    }
    if (name === "phone") {
      // Validate phone number format
      const isValidPhoneNumber = /^\d{10}(-\d{1,4})?$/.test(value);
      setPhoneError(!isValidPhoneNumber);
    }

    if (name === "companyName" && value === "addNewCompany") {
      // Redirect to the company form in the company module
      navigate("/hr/organisation/company");
      return;
    }

    const isValidFax = /^\d{10}$/.test(value);
    setFaxError(!isValidFax);

    // Set the formData based on the selected companyName
    const selectedCompany = company.find((comp) => comp.companyName === value);
    if (selectedCompany) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        state: selectedCompany.state || "",
        country: selectedCompany.country || "",
       zipCode: selectedCompany.zipCode || "",
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(0, maxLength);
  };

  const saveLocation = async (e) => {
    await api.saveLocation(formData);
    navigate("/hr/organisation/location");
    setFormData({
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
  };

  const handleSubmit = (e) => {
    loadLocation();
  };

  const fetchCompany = async () => {
    const companyData = await api.fetchCompanies();
    setCompany(companyData);
  };

  let buttonCheck =
    formData.locationName.length > 0 &&
    formData.email.length > 0 &&
    formData.phone.length > 0 &&
    formData.faxNumber.length > 0 &&
    formData.locationHead.length > 0 &&
    formData.address.length > 0;

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
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
      status:"",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <FormControl fullWidth>
          <InputLabel id="demo-company-select-label">Company Name</InputLabel>
          <Select
            labelId="demo-company-select-label"
            id="selectedCompany"
            value={formData.companyName}
            name="companyName"
            label="companyName"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {company &&
              company.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.companyName}>
                    {item.companyName}
                  </MenuItem>
                );
              })}
            <MenuItem className="linkStyle" value="addNewCompany">
              <a href="#">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  rotation={90}
                  className="iconStyle"
                />
                Create company
              </a>
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          margin="dense"
          label="Location Head"
          type="text"
          fullWidth
          name="locationHead"
          id="locationHead"
          value={formData.locationHead}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Location"
          type="text"
          fullWidth
          name="locationName"
          id="locationName"
          value={formData.locationName}
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
          required
          // error={addressError}
          // helperText={
          //   addressError && "Address must be between 2 and 40 characters"
          // }
          inputProps={{ minLength: 2, maxLength: 40 }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 40);
            handleInputChange(e);
          }}
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
          error={!isEmailValid}
          helperText={!isEmailValid && "Please enter a valid email address."}
        />

        <TextField
          margin="dense"
          label="Phone"
          type="number"
          fullWidth
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange(e)}
          required
          error={phoneError}
          helperText={phoneError ? "Invalid phone number" : ""}
        />

        <TextField
          margin="dense"
          label="Fax Number"
          type="text" // Change the type to "text" to allow non-numeric characters
          fullWidth
          name="faxNumber"
          id="faxNumber"
          value={formData.faxNumber}
          onChange={(e) => handleInputChange(e)}
          required
          // error={faxError}
          // helperText={faxError ? "Invalid fax number (must be 10 digits)" : ""}
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
          error={!isEmailValid}
          helperText={!isEmailValid && "Please enter a valid email address."}
        />

        <TextField
          margin="dense"
          label="State"
          type="text"
          fullWidth
          name="state"
          id="state"
          value={formData.state}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          disabled
        />

       <TextField
          margin="dense"
          label="ZipCode"
          type="number"
          fullWidth
          name="zipCode"
          id="zipCode"
          value={formData.zipCode}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          disabled
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
          disabled
        />

        <TextField
          margin="dense"
          label="Date"
          type="date"
          fullWidth
          name="date"
          id="date"
          value={formData.date}
          onChange={(e) => handleInputChange(e)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div className="data-buttons">
        <Button
          type="submit"
          onClick={saveLocation}
          variant="outlined"
          disabled={buttonCheck ? false : true}
          id="input-btn-submit"
        >
          Submit
        </Button>
        <Button onClick={cancelButton} variant="outlined" id="input-btn-cancel">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default LocationForm;
