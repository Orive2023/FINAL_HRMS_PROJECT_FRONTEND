import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateTermination from "./StateTermination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const TerminationForm = ({formData,
  setFormData,
  setFormVisible,
  setToggle,}) => {
  const navigate = useNavigate();
  const {
    employee,
    setEmployee,
    setDateError,
    setDescription,
    setTermination,
  } = StateTermination();

  const loadTermination = async () => {
    const result = await api.loadTermination();
    setTermination(result);
  };

  useEffect(() => {
    loadTermination();
    fetchEmployee();
  }, []);

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      employeeName: "",
      username:"",
      terminateDate: "",
      reasonForTermination: "",
      terminatedBy: "",
      email:"",
    });
  };

  let buttonCheck =
    formData.employeeName.length > 0 &&
    formData.terminateDate.length > 0 &&
    formData.reasonForTermination.length > 0 &&
    formData.terminatedBy.length > 0;


  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handledesChange = (e) => {
    setDescription(e.target.value);
  };
  const enforceMaxLength = (value, maxLength) => {
    return value.slice(0, maxLength);
  };

  const handleEmployeeNameChange = (e) => {
    const value = enforceMaxLength(e.target.value, 100);
    setFormData({
      ...formData,
      employeeName: value,
    });
  };

  const isSubjectValid = () => {
    const { employeeName } = formData;
    return (
      /^[A-Za-z]+$/.test(employeeName.length !== 0) ||
      (employeeName.length < 2 && employeeName.length >= 50)
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "terminateDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    if (name === "employeeName" && value === "addNewEmployee") {
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
      email: selectedEmployee.email || "",

      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const saveTermination = async () => {
    await api.saveTermination(formData);
    alert("Termination added successfully");
    navigate("/hr/employee/termination ");

    setFormData({
      employeeName: "",
      username:"",
      terminateDate: "",
      reasonForTermination: "",
      terminatedBy: "",
      email:"",
    });
  };

  const handleSubmit = (e) => {
    loadTermination();
  };

  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

  

  const term = [
    {
      value: "Choose",
      label: "Select progress",
    },
    {
      value: "Incomplete",
      label: "Incomplete",
    },
    {
      value: "Complete",
      label: "Complete",
    },
  ];

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
    <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
   Create Employee
  </a>
</MenuItem>

      </Select>
    </FormControl>
        <TextField
        margin="dense"
        label="username"
        type="string"
        fullWidth
        name="username"
        id="username"
        InputLabelProps={{ shrink: true }}
        value={formData.username}
        onChange={(e) => {
          handleInputChange(e);
        }}
        required
        disabled
      />

        <TextField
          margin="dense"
          label="Terminated Date"
          type="date"
          fullWidth
          InputLabelProps={{
          shrink: true,
        }}
          name="terminateDate"
          id="terminateDate"
          value={formData.terminateDate}
          onChange={(e) => handleInputChange(e)}
          required
        />
         <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          InputLabelProps={{
          shrink: true,
        }}
          name="email"
          id="email"
          disabled
          value={formData.email}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Reason For Termination"
          type="text"
          fullWidth
          name="reasonForTermination"
          id="reasonForTermination"
          value={formData.reasonForTermination}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2, // Set your minimum length here
            maxLength: 500, // Set your maximum length here
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 500);
            handledesChange(e);
          }}
        />
        <TextField
          margin="dense"
          label="Terminated By"
          type="text"
          fullWidth
          name="terminatedBy"
          id="terminatedBy"
          value={formData.terminatedBy}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-buttons">
        <Button
           id="input-btn-submit"
          className="submit"
          variant="outlined"
          type="submit"
          onClick={saveTermination}
          disabled={buttonCheck ? false : true}
        >
          Submit
        </Button>
        <Button onClick={cancelButton}
          id="input-btn-cancel"
          className="cancel"
          variant="outlined">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default TerminationForm;