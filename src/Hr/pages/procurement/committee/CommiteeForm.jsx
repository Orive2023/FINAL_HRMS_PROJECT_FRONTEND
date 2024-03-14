import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import * as api from "./CommitteeApi";
import StateCommittee from "./StateCommittee";

const Committeeform = ({ formData, setFormData, setOpen }) => {
  const {
    pdfFile,
    setPdfFile,
    open,
    recDelete,
    setRecDelete,
    committe,
    SetCommittee,
    setNameError,
  } = StateCommittee();

  // const getCurrentDate = () => {
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = `${now.getMonth() + 1}`.padStart(2, "0");
  //   const day = `${now.getDate()}`.padStart(2, "0");
  //   return `${year}-${month}-${day}`;
  // };

  let navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "name") {
      const isValidName = value.length >= 2 && value.length <= 200;
      setNameError(!isValidName);
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.name === "signature" ? e.target.files[0] : value,
    });
  };

  const saveCommittee = async () => {
    await api.saveCommittee(formData);

    navigate("/hr/procurement/committee");
    setFormData({
      name: "",
      signature: "",
      status:"",
    });
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  const cancelButton = () => {
    setOpen(false);
    setFormData({
      name: "",
      signature: "",
      status:"",
    });
  };

  // let buttonCheck = formData.name.length > 0 && formData.signature && formData.status.length>0;

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Name"
          type="name"
          fullWidth
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange(e)}
          required
          // error={titleError}
          // helperText={titleError && "Title must be between 5 and 30 characters"}
        />
      </div>

      <TextField
        margin="dense"
        label="Signature"
        type="file"
        fullWidth
        name="signature"
        id="signature"
        onChange={(e) => handleInputChange(e)}
        accept=".pdf"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        margin="dense"
        label="Status"
        type="text"
        fullWidth
        name="status"
        id="status"
        onChange={(e) => handleInputChange(e)}
      />

      <div className="data-buttons-popup">
        <Button
          type="submit"
          onClick={saveCommittee}
          variant="outlined"
          // disabled={buttonCheck?false:true}
          id="input-btn-submit-popup"
        >
          Submit
        </Button>
        <Button onClick={cancelButton} id="input-btn-cancel-popup">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default Committeeform;
