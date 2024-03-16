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
   
    if (name === "officeClockIn") {
      setFormData({
        ...formData,
        [name]: `${value}:00`,
      });
    }
    if (name === "officeClockOut") {
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
      officeClockIn: "",
      officeClockOut: "",
    });
  };
  const cancelButton = () => {
    setOpen(false);
    setFormData({
      createdDate: "",
      officeClockIn: "",
      officeClockOut: "",
    });
  };
  const handleSubmit = (e) => {
    loadOfficeShift();
  };

  console.log(formData);

  let buttonClick =
    formData.officeClockIn?.length > 0 &&
    formData.officeClockOut?.length > 0;

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
          name="officeClockIn"
          id="officeClockIn"
          value={formData.officeClockIn}
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
          name="officeClockOut"
          id="officeClockOut"
          value={formData.officeClockOut}
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
