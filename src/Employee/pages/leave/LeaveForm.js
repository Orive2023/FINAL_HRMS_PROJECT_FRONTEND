import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateLeave from "./StateLeave";
import { jwtDecode } from "jwt-decode";

const LeaveForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();

  const {
    setDateError,
    setLeave,
    employee,
    setEmployee,
    setName,
    nameError,
    setAddress,
    setEmailError,
  } = StateLeave();

  const loadLeave = async () => {
    const result = await api.loadLeave();
    setLeave(result);
  };

const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = decoded.username;

    useEffect(() => {
      setFormData({
        ...formData,
        username: username,
        employeeName: decoded.name
      })
    },[username])

  useEffect(() => {
    loadLeave();
    fetchEmployee();
  }, []);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@] + \.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
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
    if (name === "employeeName" && value === "addNewEmployee") {
      // Redirect to the company form in the company module
      navigate("/hr/employee/employee");
      return;
    }
    if (name === "employeeName") {
      let userName;
      employee.map((elem) => {
        if (value === elem.employeeName) {
          userName = elem.username;
        }
      });
      setFormData({
        ...formData,
        [name]: value,
        username: userName,
      });
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(0, maxLength);
  };
  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

  const saveLeave = async () => {
    await api.saveLeave(formData);
    navigate("/hr/timesheet/leave");

    setFormData({
      username: "",
      leaveType: "",
      startDate: "",
      endDate: "",
      employeeName: "",
      leaveReason: "",
      description: "",
      appliedOn: getCurrentDate(),
      username: "",
    });
  };

  const handleSubmit = (e) => {
    loadLeave();
  };

  const Type = [
    {
      value: "Choose",
      label: "Select Leave Type",
    },
    {
      value: "Sick Leave",
      label: "Sick Leave",
    },
    {
      value: "Annual Leave",
      label: "Annual Leave",
    },
    {
      value: "Casual Leave",
      label: "Casual Leave",
    },
    {
      value: "Sick Leave",
      label: "Sick Leave",
    },
    {
      value: "Maternity Leave",
      label: "Maternity Leave",
    },
    {
      value: "Paternity Leave",
      label: "Paternity Leave",
    },
  ];

  let buttonCheck =
    formData.leaveType.length > 0 &&
    formData.username.length > 0 &&
    formData.startDate.length > 0 &&
    formData.endDate.length > 0 &&
    formData.employeeName.length > 0 &&
    formData.leaveReason.length > 0 &&
    formData.description.length > 0 &&
    formData.appliedOn.length > 0;

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      username: "",
      leaveType: "",
      startDate: "",
      endDate: "",
      employeeName: "",
      leaveReason: "",
      description: "",
      appliedOn: getCurrentDate(),
      username: "",
    });
  };
  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          id="leaveType"
          margin="dense"
          select
          //  label="Priority"
          // type="text"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          value={formData.leaveType}
          onChange={(e) => handleInputChange(e)}
          name="leaveType"
        >
          {Type.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          margin="dense"
          label="Employee Name"
          type="text"
          fullWidth
          name="employeeName"
          id="employeeName"
          value={formData.employeeName}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
          disabled
        />
        <TextField
          margin="dense"
          label="User Name"
          type="text"
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
          margin="dense"
          label="Start Date"
          type="date"
          fullWidth
          name="startDate"
          id="startDate"
          value={formData.startDate}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          margin="dense"
          label="End Date"
          type="date"
          fullWidth
          name="endDate"
          id="endDate"
          value={formData.endDate}
          onChange={(e) => {
            handleInputChange(e);
            handleEmailChange(e);
          }}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Leave Reason"
          type="text"
          fullWidth
          name="leaveReason"
          id="leaveReason"
          value={formData.leaveReason}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 0, // Set your minimum length here
            maxLength: 100, // Set your maximum length here
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 100);
            handleNameChange(e);
          }}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          id="description"
          margin="dense"
          type="text"
          label="Description"
          fullWidth
          name="description"
          value={formData.description}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2, // Set your minimum length here
            maxLength: 200, // Set your maximum length here
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 200);
            handleNameChange(e);
          }}
        ></TextField>
        <TextField
          margin="dense"
          label="Applied On"
          type="date"
          fullWidth
          name="appliedOn"
          id="appliedOn"
          value={formData.appliedOn}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
          disabled
        />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          type="submit"
          onClick={saveLeave}
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

export default LeaveForm;
