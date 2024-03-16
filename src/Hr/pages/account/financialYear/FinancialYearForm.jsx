import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import * as api from "./api";
import StateFinancialYear from "./StateFinancialYear";

const FinancialYearForm = ({ formData, setFormData, setOpen }) => {
  const {
    financialYearSection,
    setFinancialYearSection,
    financialYearStartDate,
    financialYearEndDate,
    cretaedDate,
    dateError,
    setDateError,
    open,
  } = StateFinancialYear();

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  let navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveFinancialYear = async () => {
    try {
      await api.saveFinancialYear(formData);
      navigate("/hr/account/financial-year");
      loadFinancialYear();
      setFormData({
        financialYear: "",
        financialYearStartDate: "",
        financialYearEndDate: "",
        cretaedDate: getCurrentDate(),
      });
      handleClose();
    } catch (error) {
      console.error("Error saving financial year:", error);
    }
  };

  const loadFinancialYear = async () => {
    try {
      const result = await api.loadFinancialYear();
      setFinancialYearSection(result);
    } catch (error) {
      console.error("Error loading financial year:", error.response.data);
    }
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  console.log(formData);

  let buttonCheck = true
    // formData.financialYear?.length > 0 &&
    // formData.financialYearStartDate?.length > 0 &&
    // formData.financialYearEndDate?.length > 0;

  const cancelButton = () => {
    setOpen(false);
    setFormData({
      financialYear: "",
      financialYearStartDate: "",
      financialYearEndDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          type="text"
          id="financialYear"
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
          label="Financial year"
          fullWidth
          value={formData.financialYear}
          onChange={(e) => handleInputChange(e)}
          name="financialYear"
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Financial year start date"
          type="date"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          name="financialYearStartDate"
          id="financialYearStartDate"
          value={formData.financialYearStartDate}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="financial year end date"
          type="date"
          fullWidth
          name="financialYearEndDate"
          id="financialYearEndDate"
          value={formData.financialYearEndDate}
          onChange={(e) => handleInputChange(e)}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
      </div>

      <DialogActions>
        <div className="data-buttons">
          <Button
            type="submit"
            onClick={saveFinancialYear}
            id="input-btn-submit-popup"
            variant="outlined"
            disabled={buttonCheck ? false : true}
          >
            Submit
          </Button>
          <Button
            onClick={cancelButton}
            id="input-btn-cancel-popup"
            variant="outlined"
          >
            Cancel
          </Button>
        </div>
      </DialogActions>
    </form>
  );
};

export default FinancialYearForm;
