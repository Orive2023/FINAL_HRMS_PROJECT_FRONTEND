import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import * as api from "./api";
import { useNavigate, useState } from "react-router-dom";
import StateTravel from "./StateTravel";

const TravelForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();

  const {
    description,
    setDescription,
    descriptionError,
    setDescriptionError,
    setEmployee,
    employee,
    setEmployeeName,
    setErrorMsg,
    errorMsg,
    travel,
    setTravel,
    toggle,
    purposeOfVisit,
    setPurposeOfVisit,
    placeOfVisit,
    setPlaceOfVisit,
    purposeError,
    setPurposeError,
    placeError,
    setPlaceError,
    error,
    open,
    setOpen,
    setError,
    recDelete,
    setRecDelete,
    dateError,
    setDateError,
  } = StateTravel();

  const loadTravel = async () => {
    const result = await api.loadTravel();
    setTravel(result);
  };
  const validateInput = (value, setValue, setError, fieldName) => {
    const isValid = value.length >= 2 && value.length <= 100;
    setError(
      isValid ? "" : `${fieldName}`// must be between 2 and 100 characters.
    );
    setValue(value);
  };
  const handlePlaceChange = (e) => {
    setPlaceOfVisit(e.target.value);
    validateInput(
      e.target.value,
      setPlaceOfVisit,
      setPlaceError,
      "Place of visit"
    );
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

  const handlePurposeChange = (e) => {
    setPurposeOfVisit(e.target.value);
    validateInput(
      e.target.value,
      setPurposeOfVisit,
      setPurposeError,
      "Purpose of visit"
    );
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(1, maxLength);
  };
 

  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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
      username: selectedEmployee.username || " ",

      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    loadTravel();
    fetchEmployee();
  }, []);
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const saveTravel = async () => {
    await api.saveTravel(formData);
    navigate("/hr/employee/travel");

    setFormData({
      employeeName: "",
      username:"",
      startDate: "",
      endDate: "",
      purposeOfVisit: "",
      placeOfVisit: "",
      travelMode: "",
      arrangementType: "",
      expectedTravelBudget: "",
      actualTravelBudget: "",
      description: "",
      createdDate: getCurrentDate(),
    });
  };

  const TravelMode = [
    {
      value: "Choose",
      label: "Select Travel Mode",
    },
    {
      value: "PersonalCar",
      label: "Personal Car",
    },
    {
      value: "CompanyCar",
      label: "Company Car",
    },
    {
      value: "PublicTransportation",
      label: "Public Transportation",
    },
    {
      value: "Carpooling",
      label: "Carpooling",
    },
    {
      value: "Biking",
      label: "Biking",
    },
    {
      value: "Walking",
      label: "Walking",
    },
    {
      value: "Telecommuting",
      label: "Telecommuting/Remote Work",
    },
    {
      value: "TaxiRideshare",
      label: "Taxi/Rideshare Services",
    },
    {
      value: "AirTravel",
      label: "Air Travel",
    },
    {
      value: "BoatShip",
      label: "Boat/Ship",
    },
    {
      value: "HoverboardSkateboard",
      label: "Hoverboard/Skateboard",
    },
  ];
  const ArrangementTypeOptions = [
    {
      value: "Choose",
      label: "Select Arrangement Type",
    },
    {
      value: "Hotel",
      label: "Hotel Accommodation",
    },
    {
      value: "Conference",
      label: "Conference Room Booking",
    },
    {
      value: "Event",
      label: "Event Venue Booking",
    },
    {
      value: "Other",
      label: "Other Arrangement",
    },
  ];
  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      employeeName: "",
      username:"",
      startDate: "",
      endDate: "",
      purposeOfVisit: "",
      placeOfVisit: "",
      travelMode: "",
      arrangementType: "",
      expectedTravelBudget: "",
      actualTravelBudget: "",
      description: "",
      createdDate: getCurrentDate(),
    });
  };

  let buttonClick =
  formData.startDate.length > 0 &&
  formData.endDate.length > 0 &&
  formData.purposeOfVisit.length > 0 &&
  formData.placeOfVisit.length > 0 &&
  formData.description.length > 0 &&
  formData.travelMode.length > 0 &&
  formData.arrangementType.length > 0 &&
  formData.expectedTravelBudget.length > 0 &&
  formData.actualTravelBudget.length > 0 &&
  formData.description.length > 0 &&
  formData.createdDate.length > 0;
  // formData.employeeName.length > 0 &&

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
        InputLabelProps={{
          shrink: true,
        }}
        disabled
      />
      </div>

      <div className="data-input-fields">
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
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          margin="dense"
          label="Purpose of visit"
          type="text"
          fullWidth
          name="purposeOfVisit"
          id="purposeOfVisit"
          value={formData.purposeOfVisit}
          onChange={(e) => {
            handlePurposeChange(e);
            handleInputChange(e);
          }}
          required
          error={!!purposeError}
          helperText={purposeError}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Place of visit"
          type="text"
          fullWidth
          name="placeOfVisit"
          id="placeOfVisit"
          value={formData.placeOfVisit}
          onChange={(e) => {
            handlePlaceChange(e);
            handleInputChange(e);
          }}
          required
          error={!!placeError}
          helperText={placeError}
        />
        <TextField
          margin="dense"
          label="Travel mode"
          type="text"
          fullWidth
          name="travelMode"
          id="travelMode"
          value={formData.travelMode}
          onChange={(e) => handleInputChange(e)}
          required
          select
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        >
          {TravelMode.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
        <TextField
          margin="dense"
          label="Arrangement type"
          type="text"
          fullWidth
          name="arrangementType"
          id="arrangementType"
          value={formData.arrangementType}
          onChange={(e) => handleInputChange(e)}
          required
          select
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        >
          {ArrangementTypeOptions.map((option, val) => (
            <option key={val} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Expected travel budget"
          type="number"
          fullWidth
          name="expectedTravelBudget"
          id="expectedTravelBudget"
          value={formData.expectedTravelBudget}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Actual travel budget"
          type="number"
          fullWidth
          name="actualTravelBudget"
          id="actualTravelBudget"
          value={formData.actualTravelBudget}
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
      <TextField
        margin="dense"
        label="Create Date"
        type="date"
        fullWidth
        name="createdDate"
        id="createdDate"
        value={formData.createdDate}
        onChange={(e) => handleInputChange(e)}
        required
        disabled
        error={dateError}
        helperText={dateError && "Please select the current date"}
        InputLabelProps={{
          shrink: true,
        }}

      />
      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          type="submit"
          onClick={saveTravel}
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

export default TravelForm;