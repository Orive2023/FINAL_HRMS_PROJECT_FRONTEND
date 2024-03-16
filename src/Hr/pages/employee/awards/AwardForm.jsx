import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as api from "./api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import StateAward from "./StateAward";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

const AwardForm = ({ formData, setFormData, setOpen }) => {
  const navigate = useNavigate();

  const [username, setusername] = useState("");

  const { setEmployeeName, setAward, setDateError, errorMsg, setErrorMsg } =
    StateAward();

  const loadAward = async () => {
    const result = await api.loadAward();
    setAward(result);
  };

  useEffect(() => {
    loadAward();
    fetchEmployee();
  }, []);

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
       username: selectedEmployee.username  || "",
       email: selectedEmployee.email || "",
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  //   let id;
  //   if (name === "employeeName") {
  //     employee.map((item) => {
  //       if (e.target.value === item.employeeName) {
  //         id = item.username;
  //       }
  //     });
  //   }
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //     username: id,
  //   });
  // };
  const handleClose = () => {
    setOpen(false);
  };

  const awardType = [
    {
      award: "Employee of the Month",
      earnedOn: "November 2023",
    },
    {
      award: "Best Performer Of the Month",
      earnedOn: "November 2023",
    },
  ];

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(1, maxLength);
  };

  const saveAward = async () => {
    await api.saveAward(formData);
    navigate("/hr/employee/awards");
    setFormData({
      awardName: "",
      awardDescription: "",
      username: "",
      date: "",
      employeeName: "",
      awardBy: "",
      email:"",
      giftItem: "",
    });
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.length < 2 || value.length > 50) {
      setErrorMsg(" Name length should be between 2 and 50.");
    } else {
      setErrorMsg("");
    }
    setEmployeeName(e.target.value);
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  const cancelButton = () => {
    setOpen(false);
    setFormData({
      awardName: "",
      awardDescription: "",
      username: "",
      date: "",
      employeeName: "",
      awardBy: "",
      email:"",
      giftItem: "",
    });
  };

  let buttonClick =
    formData.awardName?.length > 0 &&
    formData.date?.length > 0 &&
    formData.awardBy?.length > 0 &&
    formData.giftItem?.length > 0 &&
    formData.email?.length > 0 &&
    formData.awardDescription?.length > 0;

  const [employee, setEmployee] = useState([]);
  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

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
          id="awardName"
          margin="dense"
          select
          label="Award Name"
          fullWidth
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.awardName}
          onChange={(e) => handleInputChange(e)}
          name="awardName"
        >
          <option selected>Select Award Type</option>
          {awardType.map((option, index) => (
            <option key={index} value={option.award}>
              {option.award}
            </option>
          ))}
        </TextField>
      </div>
      
      <div className="data-input-fields">
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
          disabled
         
        />
        <TextField
        margin="dense"
        label="email"
        type="text"
        fullWidth
        name="email"
        id="email"
        value={formData.email}
        onChange={(e) => handleInputChange(e)}
        required
        disabled
       
      />
      </div>

      <div className="data-input-fields">

        <TextField
          margin="dense"
          type="date"
          label="Awards Date"
          fullWidth
          name="date"
          id="date"
          value={formData.date}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          margin="dense"
          type="text"
          label="Award By"
          fullWidth
          name="awardBy"
          id="awardBy"
          value={formData.awardBy}
          onChange={(e) => handleInputChange(e)}
          required
        />
        </div>
        <div className="data-input-fields">

        <TextField
          margin="dense"
          type="text"
          label="Gift Item"
          fullWidth
          name="giftItem"
          id="giftItem"
          value={formData.giftItem}
          onChange={(e) => handleInputChange(e)}
          required
        />
      <TextField
        margin="dense"
        label="Award Description"
        type="text"
        fullWidth
        name="awardDescription"
        id="awardDescription"
        value={formData.awardDescription}
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
          onClick={saveAward}
          disabled={buttonClick ? false : true}
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

export default AwardForm;
