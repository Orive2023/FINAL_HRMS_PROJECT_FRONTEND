import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateResignation from "./StateResignation";

const ResignationForm = ({
  setFormVisible,
  setToggle,
  formData,
  setFormData,
}) => {
  const navigate = useNavigate();

  const { setOpen, setResignation, employee, setEmployee } = StateResignation();

  const loadResignation = async () => {
    const result = await api.loadResignation();
    setResignation(result);
  };

  useEffect(() => {
    loadResignation();
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

  const saveResignation = async () => {
    await api.saveResignation(formData);
    navigate("/hr/employee/resignation");

    setFormData({
      employeeName: "",
      resignationDate: "",
      username:"",
      noticeDate: "",
      resignationReason: "",
    });
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
      username: selectedEmployee.username || "",
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    loadResignation();
  };

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      employeeName: "",
      resignationDate: "",
      username:"",
      noticeDate: "",
      resignationReason: "",
    });
  };
  let buttonClick =
    // formData.employeeName.length > 0 &&
    formData.resignationDate.length > 0 &&
    formData.noticeDate.length > 0 &&
    formData.resignationReason.length > 0;

  console.log(formData);

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
          label="Username"
          type="string"
          fullWidth
          name="username"
          id="username"
          value={formData.username}
          onChange={(e) => {
            handleInputChange(e);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          required
          disabled
        />


      
        <TextField
          margin="dense"
          label="Notice Date"
          type="date"
          fullWidth
          name="noticeDate"
          id="noticeDate"
          value={formData.noticeDate}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Resignation Date"
          type="date"
          fullWidth
          name="resignationDate"
          id="resignationDate"
          value={formData.resignationDate}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          label="Resignation reason"
          type="text"
          fullWidth
          name="resignationReason"
          id="resignationReason"
          value={formData.resignationReason}
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
          onClick={saveResignation}
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

export default ResignationForm;