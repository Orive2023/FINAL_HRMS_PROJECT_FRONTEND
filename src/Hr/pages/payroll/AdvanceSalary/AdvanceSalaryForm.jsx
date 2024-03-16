import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as api from "./api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StateAdvanceSalary from "./StateAdvanceSalary";

const AdvanceSalaryForm = ({ setFormVisible, setToggle }) => {
  const navigate = useNavigate();

  const {
    setCompany,
    setLocation,
    dateError,
    setDateError,
    formData,
    setFormData,
    location,
    company,
    setDepartment,
    dueSalary,
    setDueSalary,
    employee,
    setEmployee,
  } = StateAdvanceSalary();

  const loadAdvanceSalary = async () => {
    const result = await api.loadAdvanceSalary();
    setDepartment(result);
  };

  useEffect(() => {
    loadAdvanceSalary();
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveAdvanceSalary = async () => {
    await api.saveAdvanceSalary(formData);
    navigate("/hr/payroll/advance-Salary ");

    setFormData({
      createdDate: getCurrentDate(),
      employeeName: "",
      salary: 0,
      advanceAmount: 0,
      salaryDue: 0,
      monthAndYear: "",
    });
  };

  const handleSubmit = (e) => {
    loadAdvanceSalary();
  };

  const fetchEmployee = async () => {
    const result = await api.fetchEmployee();
    setEmployee(result);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      salaryDue: parseInt(formData.salary) - parseInt(formData.advanceAmount),
    });
  }, [formData.salaryDue, formData.advanceAmount]);

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      createdDate: getCurrentDate(),
      employeeName: "",
      salary: 0,
      advanceAmount: 0,
      salaryDue: 0,
      monthAndYear: "",
    });
  };

  let buttonCheck =
    formData.employeeName.length > 0 &&
    formData.monthAndYear.length > 0;

    console.log("formdata", formData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Created Date"
          type="date"
          fullWidth
          name="createdDate"
          id="createdDate"
          value={formData.createdDate}
          onChange={(e) => handleInputChange(e)}
          required
          disabled
          InputLabelProps={{ shrink: true }}
        />
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
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Salary"
          type="number"
          fullWidth
          name="salary"
          id="salary"
          value={formData.salary}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Advance Amount"
          type="number"
          fullWidth
          name="advanceAmount"
          id="advanceAmount"
          value={formData.advanceAmount}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Salary Month & Year"
          type="date"
          fullWidth
          name="monthAndYear"
          id="monthAndYear"
          value={formData.monthAndYear}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          margin="dense"
          label="Rest Salary Due"
          type="number"
          fullWidth
          name="salaryDue"
          id="salaryDue"
          value={formData.salaryDue}
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          variant="outlined"
          type="submit"
          onClick={saveAdvanceSalary}
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

export default AdvanceSalaryForm;
