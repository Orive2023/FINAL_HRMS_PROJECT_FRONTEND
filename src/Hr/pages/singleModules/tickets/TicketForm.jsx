import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import * as api from "./api";
import { useNavigate, useState } from "react-router-dom";
import StateTicket from "./StateTicket";
import { fetchProjects } from "../worksheet/api";

const TicketForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();
  const {
    setTicket,
    employee,
    project,
    setProject,
    setEmployee,
    setErrorCode,
    valueCode,
    setTicketsValue,
    ticketsCode,
  } = StateTicket();
  const loadTicket = async () => {
    const result = await api.loadTicket();
    setTicket(result);
  };

  useEffect(() => {
    loadTicket();
    fetchEmployee();
    fetchProject();
    


  }, []);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const saveTicket = async () => {
    await api.saveTicket(formData);
    navigate("/hr/ticket");
    setFormData({
      ticketsCode: "",
      subject: "",
      employeeName: "",
      username:"",
      priority: "",
      date: getCurrentDate(),
      createdBy: "",
      projectTitle: "",
      description: "",
    });
  };

  let buttonCheck =
    formData.ticketsCode.length > 0 &&
    formData.subject.length > 0 &&
    formData.priority.length > 0 &&
    formData.date.length > 0 &&
    formData.createdBy.length > 0 &&
    formData.projectTitle.length > 0 &&
    formData.description.length > 0;

  const handleSubmit = (e) => {
    console.log("FormData", formData);
  };

  const fetchEmployee = async () => {
    const employee = await api.fetchEmployee();
    setEmployee(employee);
  };
  const fetchProject = async () => {
    const project = await api.fetchProject();
    setProject(project);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "employeeName" && value === "addNewEmployee") {
      // Redirect to the company form in the company module
      navigate("/hr/employee/employee");
      return;
    }
    if (name === "projectTitle" && value === "addNewProject") {
      // Redirect to the company form in the company module
      navigate("/hr/project");
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

  const enforceMaxLength = (value, maxLength) => {
    return value.slice(0, maxLength);
  };

  const handleSubChange = (e) => {
    const value = enforceMaxLength(e.target.value, 50);
    setFormData({
      ...formData,
      subject: value,
    });
  };

  const handleCodeChange = (e) => {
    const value = enforceMaxLength(e.target.value, 10);
    setFormData({
      ...formData,
      ticketsCode: value,
    });
  };

  const enforceMaxCode = (valueCode, maxLength) => {
    return valueCode.length <= maxLength
      ? valueCode
      : valueCode.slice(0, maxLength);
  };

  const isTicketCodeValid = () => {
    if (valueCode.length < 2 || valueCode.length > 10) {
      setErrorCode("Invalid length. Length should be between 2 to 10.");
    } else {
      setErrorCode("");
    }
    setTicketsValue(ticketsCode);
  };

  const isSubjectValid = () => {
    const { subject } = formData;
    return subject.length <= 2 && subject.length >= 50;
  };



  const handleTicketsCodeChange = (e) => {
    const valueCode = e.target.value;

    setFormData({
      ...formData,
      //ticketsCode: value,
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

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      ticketsCode: "",
      subject: "",
      username:"",
      employeeName: "",
      priority: "",
      date: getCurrentDate(),
      createdBy: "",
      projectTitle: "",
      description: "",
    });
  };

  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Ticket Code"
          type="number"
          fullWidth
          name="ticketsCode"
          id="ticketsCode"
          value={formData.ticketsCode}
          onChange={(e) => handleInputChange(e)}
          InputProps={{
            minLength: 2,
            maxLength: 10,
          }}
        />

        <TextField
          margin="dense"
          label="Subject"
          type="text"
          fullWidth
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 50,
          }}
          error={isSubjectValid()}
          helperText={
            isSubjectValid()
              ? "Subject length should be between 2 and 50 characters."
              : ""
          }
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 100);
            handleSubChange(e);
          }}
        />
      </div>

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
        <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
       Create Employee
      </a>
    </MenuItem>

          </Select>
        </FormControl>
        <TextField
        margin="dense"
        label="username"
        type="username"
        fullWidth
        name="username"
        id="username"
        value={formData.username}
        onChange={(e) => handleInputChange(e)}
        required
        InputLabelProps={{
          shrink: true,
        }}
        disabled
      />
        <TextField
          id="priority"
          margin="dense"
          select
          label="Priority"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.priority}
          onChange={(e) => handleInputChange(e)}
          name="priority"
        >
          {Type.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          margin="dense"
          label="Date"
          type="date"
          fullWidth
          name="date"
          id="date"
          value={formData.date}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
          disabled
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Created By"
          type="text"
          fullWidth
          name="createdBy"
          id="createdBy"
          value={formData.createdBy}
          onChange={(e) => handleInputChange(e)}
          required
        />
       <FormControl fullWidth>
          <InputLabel id="demo-project-select-label">Project Tittle</InputLabel>
          <Select
            labelId="demo-proect-select-label"
            id="selectedProject"
            value={formData.projectTitle}
            name="projectTitle"
            label="projectTitle"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {project &&
              project.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.projectTitle}>
                    {item.projectTitle}
                  </MenuItem>
                );
              })}
             <MenuItem className="linkStyle" value="addNewProject">
      <a href="#">
        <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
       Create Project
      </a>
    </MenuItem>

          </Select>
        </FormControl>
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
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          variant="outlined"
          type="submit"
          onClick={saveTicket}
          disabled={buttonCheck ? false : true}
        >
          Submit
        </Button>
        <Button id="input-btn-cancel" variant="outlined" onClick={cancelButton}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default TicketForm;