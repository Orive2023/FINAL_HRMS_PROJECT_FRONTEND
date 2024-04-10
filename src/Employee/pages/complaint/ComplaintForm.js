import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateComplaint from "./StateComplaint";
import { jwtDecode } from "jwt-decode";

const ComplaintForm = ({
  formData,
  setFormData,
  setFormVisible,
  setToggle,
}) => {
  const navigate = useNavigate();

const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = decoded.username;

  const {
    setComplaint,
    formVisible,
    toggle,
    projectTitle,
    setProjectTitle,
    clientName,
    setClientName,
    projectManager,
    setProjectManager,
    description,
    setDescription,
    summary,
    setSummary,
    company,
    setLocation,
    setDateError,
    setCompany,
    setFormErrors,
  } = StateComplaint();
  useEffect(() => {
    loadComplaint();
  }, []);
  const loadComplaint = async () => {
    const result = await api.loadComplaint();
    setComplaint(result);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleManualEntryChange = (e) => {
    setFormData({
      ...formData,
      manualCompanyName: e.target.value,
    });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      username: username,
      complaintFrom: decoded.name
    })
  },[username])

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

  const Type = [
    {
      value: "Choose",
      label: "Select Priority",
    },
    {
      value: "Low",
      label: "Low",
    },
    {
      value: "Medium",
      label: "Medium",
    },
    {
      value: "High",
      label: "High",
    },
  ];

  const saveComplaint = async () => {
    await api.saveComplaint(formData);
    navigate("/hr/employee/complaints");

    setFormData({
      complaintFrom: "",
      complaintTitle: "",
      complaintDate: getCurrentDate(),
      complaintAgainst: "",
      description: "",
      username:""
    });
  };

  const handleSubmit = (e) => {
    loadComplaint();
  };

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      complaintId: "",
      complaintFrom: "",
      complaintTitle: "",
      complaintDate: getCurrentDate(),
      complaintAgainst: "",
      description: "",
      username:""
    });
  };

  let buttonClick =
    formData.complaintTitle.length > 0 &&
    formData.complaintDate.length > 0 &&
    formData.complaintAgainst.length > 0 &&
    formData.description.length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Complaint from employee"
          type="text"
          fullWidth
          name="complaintFrom"
          id="complaintFrom"
          value={formData.complaintFrom}
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          name="username"
          id="username"
          value={formData.username}
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />

        <TextField
          margin="dense"
          label="Complaint title"
          type="text"
          fullWidth
          name="complaintTitle"
          id="complaintTitle"
          value={formData.complaintTitle}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Complaint date"
          type="date"
          fullWidth
          name="complaintDate"
          id="complaintDate"
          value={formData.complaintDate}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          label="Complaint against employee"
          type="text"
          fullWidth
          name="complaintAgainst"
          id="complaintAgainst"
          value={formData.complaintAgainst}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <TextField
        margin="dense"
        label="Description"
        type="text"
        fullWidth
        name="description"
        id="description"
        value={formData.description}
        onChange={(e) => handleInputChange(e)}
        required
      />
      {/* </div> */}

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          variant="outlined"
          type="submit"
          onClick={saveComplaint}
          disabled={buttonClick ? false : true}
        >
          Submit
        </Button>
        <Button id="input-btn-cancel" variant="outlined" onClick={cancelButton}>
          Cancel
        </Button>
      </div>
      {/* </div> */}
    </form>
  );
};

export default ComplaintForm;
