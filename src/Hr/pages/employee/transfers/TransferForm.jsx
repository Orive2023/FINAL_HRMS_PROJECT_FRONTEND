import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateTransfer from "./StateTransfer";

const TransferForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const navigate = useNavigate();

  const {
    setLocation,
    location,
    setDescription,
    descriptionError,
    setDescriptionError,
    dateError,
    setDateError,
    setOpen,
    employee,
    setTransfer,
    setEmployee,
    department,
    setDepartment,
  } = StateTransfer();

  const loadTransfer = async () => {
    const result = await api.loadTransfer();
    setTransfer(result);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateInput = (value, setValue, setError, fieldName) => {
    const isValid = value.length >= 2 && value.length <= 100;
    setError(
      isValid ? "" : `${fieldName}` //must be between 2 and 100 characters.
    );
    setValue(value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    validateInput(
      e.target.value,
      setDescription,
      setDescriptionError,
      "Description"
    );
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(1, maxLength);
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
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
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

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    handleClose();
  };

  useEffect(() => {
    loadTransfer();
    fetchEmployee();
    fetchLocation();
    fetchDepartment();
  }, []);

  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

  const fetchLocation = async () => {
    const locationData = await api.fetchLocations();
    setLocation(locationData);
  };
  const fetchDepartment = async () => {
    const departmentData = await api.fetchDepartment();
    setDepartment(departmentData);
  };

  console.log(location);

  const saveTransfer = async () => {
    await api.saveTransfer(formData);
    navigate("/hr/employee/transfer");

    setFormData({
      employeeName: "",
      username:"",
      email:"",
      transferDate: "",
      departmentName: "",
      locationName: "",
      description:"",
      createdDate: getCurrentDate(),
    });
  };
  const dept = [
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
      value: "Limited Liability Company",
      label: "Limited Liability Company",
    },
  ];

  console.log(location);

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      employeeName: "",
      username:"",
      email:"",
      transferDate: "",
      departmentName: "",
      locationName: "",
      description: "",
    });
  };

  let buttonClick =
    // formData.employeeName.length > 0 &&
    formData.transferDate.length > 0 &&
    // formData.departmentName.length > 0 &&
    // formData.locationName.length > 0 &&
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
          value={formData.username}
          onChange={(e) => {
            handleInputChange(e);
          }}
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
        label="email"
        type="string"
        fullWidth
        name="email"
        id="email"
        value={formData.email}
        onChange={(e) => {
          handleInputChange(e);
        }}
        required
        disabled
        InputLabelProps={{
          shrink: true,
        }}
      />
       
        <TextField
          margin="dense"
          label="Transfer Date"
          type="date"
          fullWidth
          name="transferDate"
          id="transferDate"
          value={formData.transferDate}
          onChange={(e) => handleInputChange(e)}
          InputLabelProps={{ shrink: true }}
          required
          error={dateError}
          helperText={dateError ? "Please select the current date" : ""}
        />
      </div>

      <div className="data-input-fields">
        <TextField
          id="departmentName"
          select
          margin="dense"
          label="Transfer to Department"
          fullWidth
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.departmentName}
          onChange={(e) => handleInputChange(e)}
          name="departmentName"
        >
          { department && department.map((option) => (
            <option value={option.departmentName}>
              {option.departmentName}
            </option>
          ))}
        </TextField>

        <TextField
          id="locationName"
          select
          margin="dense"
          label="Transfer to Location"
          fullWidth
          defaultValue="Choose Location"
          SelectProps={{
            native: true,
          }}
          value={formData.locationName}
          onChange={(e) => handleInputChange(e)}
          name="locationName"
          InputLabelProps={{
            shrink: true,
          }}
        >
          {location &&
            location.map((option, index) => (
              <option key={index} value={option.locationName}>
                {option.locationName}
              </option>
            ))}
        </TextField>

        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          name="description"
          id="description"
          value={formData.description}
          onChange={(e) => {
            handleDescriptionChange(e);
            handleInputChange(e);
          }}
          required
          error={!!descriptionError}
          helperText={descriptionError}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 100);
            handleDescriptionChange(e);
          }}
        />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          variant="outlined"
          type="submit"
          onClick={saveTransfer}
          disabled={buttonClick ? false : true}
        >
          Submit
        </Button>
        <Button
          id="input-btn-cancel"
          variant="outlined"
          className="cancel"
          onClick={cancelButton}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default TransferForm;