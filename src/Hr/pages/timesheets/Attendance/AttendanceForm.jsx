import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import AttendanceView from "./mainfile/AttendanceView";
import StateAttendance from "./StateAttendance";

const AttendanceForm = ({
  formData,
  setFormData,
  setFormVisible,
  setToggle,
}) => {
  // const calculateTimeDifference = (t1, t2) => {
  //   if (t1 && t2) {
  //     const time1 = new Date(`1970-01-01T${t1}:00`);
  //     const time2 = new Date(`1970-01-01T${t2}:00`);
  //     const timeDifferenceInMilliseconds = time2 - time1;
  //     const timeDifferenceInMinutes =
  //       timeDifferenceInMilliseconds / (1000 * 60);
  //     const hours = timeDifferenceInMinutes / 60;
  //     return hours;
  //   } else {
  //     return 100;
  //   }
  // };

  const navigate = useNavigate();

  const {
    employee,
    setEmployee,
    attendance,
    setAttendance,
    dateError,
    setDateError,
  } = StateAttendance();

  // const checkIn = "09:30";
  // const checkOut = "18:30";
  // const workingHours = calculateTimeDifference(checkIn, checkOut);

  const loadAttendance = async () => {
    const result = await api.loadAttendance();
    setAttendance(result);
  };

  useEffect(() => {
    loadAttendance();
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
    if (name === "date") {
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
       
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

    //   let lateValue;
    //   let earlyLeavingValue;
    //   let overtimeValue;
    //   let totWorkValue;
    //   let totRest;
    //   if (name === "clockOut") {
    //     lateValue = calculateTimeDifference(checkIn, formData.clockIn);
    //     earlyLeavingValue =
    //       workingHours - calculateTimeDifference(formData.clockIn, value);
    //     overtimeValue =
    //       calculateTimeDifference(checkOut, value) < 0
    //         ? 0
    //         : calculateTimeDifference(checkOut, value);
    //     totWorkValue = calculateTimeDifference(formData.clockIn, value);
    //     totRest = 1;
    //   } else {
    //     lateValue = formData.late;
    //     earlyLeavingValue = formData.earlyLeaving;
    //     overtimeValue = formData.overtime;
    //     totWorkValue = formData.totalWork;
    //     totRest = formData.totalRest;
    //   }

  
      // late: lateValue,
      // earlyLeaving: earlyLeavingValue,
      // overtime: overtimeValue,
      // totalWork: totWorkValue,
      // totalRest: totRest,
   

  const saveAttendance = async () => {
    await api.saveAttendance(formData);
    navigate("/hr/timesheets/attendance");

    setFormData({
      employeeName: "",
      username: "",
      clockIn: "",
      clockOut: "",
      officeClockIn: "",
      officeClockOut: "",
      date: getCurrentDate(),
    });
  };

  const handleSubmit = (e) => {
    loadAttendance();
  };

  const fetchEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

  let buttonCheck = 
  //formData.employeeName.length > 0 &&
  // formData.username.length>0 &&
    formData.officeClockIn.length > 0 &&
    formData.officeClockOut.length > 0 &&
    formData.clockIn.length > 0 &&
    formData.clockOut.length > 0;
  // formData.earlyLeaving.length > 0 &&
  // formData.overtime.length > 0 &&
  // formData.totalWork.length > 0 &&
  // formData.totalRest.length > 0

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      employeeName: "",
      username: "",
      clockIn: "",
      clockOut: "",
      officeClockIn: "",
      officeClockOut: "",
      date: getCurrentDate(),
    });
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
          margin="dense"
          label="Employee Id"
          type="text"
          fullWidth
          select
          name="username"
          id="username"
          value={formData.username}
          onChange={(e) => handleInputChange(e)}
          // required
        >
          {employee.map((option, index) => (
            <option key={index} value={option.username}>
              {option.employeeName}
            </option>
          ))}
        </TextField>
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Office Clock In"
          type="time"
          fullWidth
          name="officeClockIn"
          id="officeClockIn"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1, // Step size for seconds
          }}
          value={formData.officeClockIn}
          onChange={(e) => handleInputChange(e)}
          required
        />

        <TextField
          margin="dense"
          label="Office Clock Out"
          type="time"
          fullWidth
          name="officeClockOut"
          id="officeClockOut"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1, // Step size for seconds
          }}
          value={formData.officeClockOut}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Clock In"
          type="time"
          fullWidth
          name="clockIn"
          id="clockIn"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1, // Step size for seconds
          }}
          value={formData.clockIn}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label=" Clock Out"
          type="time"
          fullWidth
          name="clockOut"
          id="clockOut"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1, // Step size for seconds
          }}
          value={formData.clockOut}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Date"
          type="date"
          fullWidth
          name="date"
          id="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.date}
          onChange={(e) => handleInputChange(e)}
          required
          error={dateError}
          helperText={dateError && "Please select the current date"}
        />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          type="submit"
          onClick={saveAttendance}
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

export default AttendanceForm;
