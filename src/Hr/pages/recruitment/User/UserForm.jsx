import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateUser from "./StateUser";

const UserForm = ({formData, setFormData, setFormVisible, setToggle}) => {
  const navigate = useNavigate();

  const {
    setDateError,
    setUser,
    email,
    setEmail,
    setName,
    name,
    phoneError,
    setPhoneError,
    phone,
    setPhone,
    setAddress,
    address,
    emailError,
    setEmailError,
  } = StateUser();

  const loadUser = async () => {
    const result = await api.loadUser();
    setUser(result);
  };

  useEffect(() => {
    loadUser();
  }, []); 
  

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@] + \.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "createdDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [name]: value,
    });
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    const isValid = /^\d{10}(-\d{1,4})?$/.test(value);
    setPhoneError(!isValid);
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(0, maxLength);
  };

  const saveUser = async () => {
    await api.saveUser(formData);
    alert("User added successfully");
    navigate("/hr/recruitment/user ");

    setFormData({
      name: "",
      address: "",
      emailId: "",
      password: "",
      mobile: "",
      role: "",
      profileUrl: "",
      forgetToken: "",
      otp: "",
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault(); // prevent default form submission
    saveUser(); // call saveUser function
    loadUser(); // reload user data after submitting the form
  };

  

  const Role = [
    {
      value: "Choose",
      label: "Select Role",
    },
    {
      value: "ADMIN",
      label: "ADMIN",
    },
    {
      value: "HR",
      label: "HR",
    },
    {
      value: "INTERVIEWER",
      label: "INTERVIEWER",
    },
   
  ];

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      name: "",
      address: "",
      emailId: "",
      password: "",
      mobile: "",
      role: "",
      profileUrl: "",
      forgetToken: "",
      otp: "",
    });
  };

  let buttonCheck =
   
   formData.name.length>0 &&       
    formData.address.length > 0 &&
    formData.emailId.length > 0 &&
    formData.password.length > 0 &&
    formData.mobile.length > 0 &&
    formData.role.length > 0 &&
    formData.profileUrl.length > 0 &&
    formData.forgetToken.length > 0 &&
    formData.otp.length > 0 ;

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2, // Set your minimum length here
            maxLength: 20, // Set your maximum length here
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 20);
            handleNameChange(e);
          }}
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
          InputProps={{
            minLength: 2, // Set your minimum length here
            maxLength: 100, // Set your maximum length here
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 100);
            handleNameChange(e);
          }}
        />

        <TextField
          margin="dense"
          label="Email Id"
          type="email"
          fullWidth
          name="emailId"
          id="emailId"
          value={formData.emailId}
          onChange={(e) => {
            handleInputChange(e);
            handleEmailChange(e);
          }}
          required
          error={Boolean(emailError)}
          helperText={emailError}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          id="password"
          margin="dense"
          type="password"
          label="Password"
          fullWidth
          name="password"
          value={formData.password}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2, // Set your minimum length here
            maxLength: 8, // Set your maximum length here
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 8);
            handleNameChange(e);
          }}
        ></TextField>
        <TextField
          margin="dense"
          label="Mobile"
          type="text"
          fullWidth
          name="mobile"
          id="mobile"
          value={formData.mobile}
          onChange={(e) => handleInputChange(e)}
          required
          // InputProps={{
          //   minLength: 0, // Set your minimum length here
          //   maxLength: 11, // Set your maximum length here
          // }}
          // onInput={(e) => {
          //   e.target.value = enforceMaxLength(e.target.value, 10);
          //   handleNameChange(e);
          // }}
          // helperText={phoneError ? "Invalid phone number" : ""}
        />

        <TextField
          id="role"
          margin="dense"
          select
          label="Role"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.role}
          onChange={(e) => handleInputChange(e)}
          name="role"
        >
          {Role.map((option,index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Profile Url"
          type="text"
          fullWidth
          name="profileUrl"
          id="profileUrl"
          value={formData.profileUrl}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          margin="dense"
          label="Forget Token"
          type="text"
          fullWidth
          name="forgetToken"
          id="forgetToken"
          value={formData.forgetToken}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2, // Set your minimum length here
            maxLength: 30, // Set your maximum length here
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 30);
            handleNameChange(e);
          }}
        />
        <TextField
          margin="dense"
          label="Otp"
          type="text"
          fullWidth
          name="otp"
          id="otp"
          value={formData.otp}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2, // Set your minimum length here
            maxLength: 6, // Set your maximum length here
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 6);
            handleNameChange(e);
          }}
        />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          variant="outlined"
          type="submit"
          onClick={saveUser}
          disabled={buttonCheck ? false : true}
        >
          Submit
        </Button>
        <Button
          id="input-btn-cancel"
          variant="outlined"
          onClick={cancelButton}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
