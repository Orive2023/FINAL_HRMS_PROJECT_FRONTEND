import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateComplaint from "./StateComplaint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";

const ComplaintForm = ({
  formData,
  setFormData,
  setFormVisible,
  setToggle,
}) => {
  const navigate = useNavigate();

  const {
    setComplaint,
    employee,
    setEmployee,
    dateError,
    setDateError,
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
    setCompany,
    setFormErrors,
  } = StateComplaint();


  useEffect(() => {
    loadComplaint();
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };
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


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "complaintDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    if (name === "username" && value === "addNewEmployee") {
      // Redirect to the company form in the company module
      navigate("/hr/employee/employee");
      return;
    }
    const selectedEmployee = employee.find((emp) => emp.employeeName === value);
    if (selectedEmployee) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        username: selectedEmployee.username || "",
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
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
      employeeName: "",
      username: "",
      complaintTitle: "",
      complaintDate: getCurrentDate(),
      complaintAgainst: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    loadComplaint();
  };

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      employeeName: "",
      username: "",
      complaintTitle: "",
      complaintDate: getCurrentDate(),
      complaintAgainst: "",
      description: "",
    });
  };

  let buttonClick =
    formData.complaintTitle.length > 0 &&
    formData.complaintAgainst.length > 0 &&
    formData.description.length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <FormControl fullWidth>
          <InputLabel id="demo-company-select-label">Employee Name</InputLabel>
          <Select
            labelId="demo-company-select-label"
            id="selectedCompany"
            value={formData.employeeName}
            name="employeeName"
            label="employeeName"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {employee &&
              employee.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.employeeName}>
                    {item.employeeName}
                  </MenuItem>
                );
              })}
            <MenuItem className="linkStyle" value="addNewEmployee">
              <a href="#">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  rotation={90}
                  className="iconStyle"
                />
                Create Employee
              </a>
            </MenuItem>
          </Select>
        </FormControl>

 
        <TextField
          margin="dense"
          label="username"
          type="text"
          fullWidth
          name="username"
          id="username"
          InputLabelProps={{ shrink: true }}
          disabled
          value={formData.username}
          onChange={(e) => handleInputChange(e)}
          required
        />
        </div>
        <div className="data-input-fields">

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
        <TextField
          margin="dense"
          label="Complaint date"
          type="date"
          fullWidth
          name="complaintDate"
          id="complaintDate"
          value={formData.complaintDate}
          error={dateError}
          helperText={dateError && "Please select the current date"}
          onChange={(e) => handleInputChange(e)}
          required
          disabled
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div className="data-input-fields">

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
      /> </div>

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