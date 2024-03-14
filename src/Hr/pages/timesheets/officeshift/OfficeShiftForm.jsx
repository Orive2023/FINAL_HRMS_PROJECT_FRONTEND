import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateOfficeShift from "./StateOfficeShift";

const OfficeShiftForm = ({ formData, setFormData, setOpen }) => {
  const navigate = useNavigate();

  const { setOfficeShift, officeShift, setDateError } = StateOfficeShift();

  const loadOfficeShift = async () => {
    const result = await api.loadOfficeShift();
    setOfficeShift(result);
  };

  useEffect(() => {
    loadOfficeShift();
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

    if (name === "officeClockInTime") {
      setFormData({
        ...formData,
        [name]: `${value}:00`,
      });
    }
    if (name === "officeClockOutTime") {
      setFormData({
        ...formData,
        [name]: `${value}:00`,
      });
    }
    if (name === "createdDate") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const saveOfficeShift = async () => {
    await api.saveOfficeShift(formData);
    navigate("/hr/timesheets/officeshift");
    setFormData({
      createdDate: "",
      officeClockInTime: "",
      officeClockOutTime: "",
    });
  };
  const cancelButton = () => {
    setOpen(false);
    setFormData({
      createdDate: "",
      officeClockInTime: "",
      officeClockOutTime: "",
    });
  };
  const handleSubmit = (e) => {
    loadOfficeShift();
  };

  console.log(formData);

  let buttonClick =
    formData.officeClockInTime?.length > 0 &&
    formData.officeClockOutTime?.length > 0;

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
          value={formData.date}
          onChange={(e) => handleInputChange(e)}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          margin="dense"
          label="Office Clock In"
          type="time"
          fullWidth
          name="officeClockInTime"
          id="officeClockInTime"
          value={formData.officeClockInTime}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Office Clock Out"
          type="time"
          fullWidth
          name="officeClockOutTime"
          id="officeClockOutTime"
          value={formData.officeClockOutTime}
          InputLabelProps={{ shrink: true }}
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
          onClick={saveOfficeShift}
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

export default OfficeShiftForm;
