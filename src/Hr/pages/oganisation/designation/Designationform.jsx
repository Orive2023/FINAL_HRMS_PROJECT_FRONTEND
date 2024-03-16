import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

import StateDesignation from "./StateDesignation";
import * as api from "./DesignationApi";

const Designationform = ({ formData, setFormData, setOpen }) => {
  const { dateError, setDateError, department, setDepartment } =
    StateDesignation();
  let navigate = useNavigate();

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "createdDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    if (name === "departmentName" && value === "addNewDepartment") {
      // Redirect to the department form in the department module
      navigate("/hr/organisation/department");
      return;
    }
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchDepartment();
  },[]);

  const fetchDepartment = async () => {
    const response = await api.fetchDepartment();
    setDepartment(response);
  };

  const saveDesignation = async () => {
    await api.saveDesignation(formData);
    navigate("/hr/organisation/designation");

    handleClose();
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  let buttonCheck =
    formData.departmentName.length > 0 &&
    formData.designationName.length > 0 &&
    formData.createdDate.length > 0;

  const cancelButton = () => {
    handleClose();
    setFormData({
      departmentName: "",
      designationName: "",
      createdDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "10px 0" }}>

<FormControl fullWidth>
          <InputLabel id="demo-department-select-label">Department Name</InputLabel>
          <Select
            labelId="demo-department-select-label"
            id="selectedDepartment"
            value={formData.departmentName}
            name="departmentName"
            label="departmentName"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {department &&
              department.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.departmentName}>
                    {item.departmentName}
                  </MenuItem>
                );
              })}
            <MenuItem className="linkStyle" value="addNewDepartment">
  <a href="#">
    <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
    Create Department
  </a>
</MenuItem>


          </Select>
        </FormControl>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Designation "
          type="text"
          fullWidth
          name="designationName"
          value={formData.designationName}
          onChange={(e) => handleInputChange(e)}
          required
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
      </div>

      <DialogActions>
        <div className="data-buttons-popup">
          <Button
            type="submit"
            onClick={saveDesignation}
            variant="outlined"
            disabled={buttonCheck ? false : true}
            id="input-btn-submit-popup"
          >
            Submit
          </Button>
          <Button
            onClick={cancelButton}
            variant="outlined"
            id="input-btn-cancel-popup"
          >
            Cancel
          </Button>
        </div>
      </DialogActions>
    </form>
  );
};

export default Designationform;
