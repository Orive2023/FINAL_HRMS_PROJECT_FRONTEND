import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateWarning from "./StateWarning";

const WarningForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();

  const {
    setWarning,
    setDateError,
    employee,
    setEmployee,
    warningError,
    subjectError,
    descriptionError,
  } = StateWarning();
  const loadWarning = async () => {
    const result = await api.loadWarning();
    console.log("rec", result);
    setWarning(result);
  };

 
  
  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
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
  useEffect(() => {
    loadWarning();
    fetchEmployee();
  }, []);

  const saveWarning = async () => {
    await api.saveWarning(formData);
    window.location.reload();
    navigate("/hr/employee/warning");
    setFormData({
      employeeName: "",
      username:"",
      warningType: "",
      subject: "",
      warningByEmployee: "",
      warningDate: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    // loadWarning();
    console.log("Form submitted:", formData);
  };
  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      employeeName: "",
      username:"",
      warningType: "",
      subject: "",
      warningByEmployee: "",
      warningDate: "",
      description: "",
    });
  };

  let buttonClick =true
    // formData.employeeName.length > 0 &&
    // formData.warningType.length > 0 &&
    // formData.subject.length > 0 &&
    // formData.warningByEmployee.length > 0 &&
    // formData.warningDate.length > 0 &&
    // formData.description.length > 0;
  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
  

      <FormControl fullWidth>
          <InputLabel id="demo-employee-select-label">Employee Name</InputLabel>
          <Select
            labelId="demo-employee-select-label"
            id="selectedEmployee"
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
  value={formData.username}
  onChange={(e) => {
    handleInputChange(e);
  }}
  required
  disabled
/>
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Warning Type"
          type="text"
          fullWidth
          name="warningType"
          id="warningType"
          value={formData.warningType}
          onChange={(e) => handleInputChange(e)}
          required
          error={warningError}
          helperText={
            warningError &&
            "Please enter a warning text between 2 and 100 characters."
          }
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
          error={subjectError}
          helperText={
            subjectError &&
            "Please enter a subject between 2 and 100 characters."
          }
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextField
          margin="dense"
          label="Warning By Employee"
          type="text"
          fullWidth
          name="warningByEmployee"
          id="warningByEmployee"
          value={formData.warningByEmployee}
          onChange={(e) => handleInputChange(e)}
          required
          error={warningError}
          helperText={
            warningError &&
            "Please enter a description between 2 and 200 characters."
          }
        />
        <TextField
          margin="dense"
          label="Warning date"
          type="date"
          fullWidth
          name="warningDate"
          id="warningDate"
          value={formData.warningDate}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
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
        error={descriptionError}
        helperText={
          descriptionError &&
          "Please enter a description between 2 and 200 characters."
        }
      />
      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          onClick={(e) => saveWarning(e)}
          disabled={buttonClick ? false : true}
          variant="outlined"
        >
          Submit
        </Button>
        <Button
          id="input-btn-cancel"
          className="cancel"
          variant="outlined"
          onClick={cancelButton}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default WarningForm;
