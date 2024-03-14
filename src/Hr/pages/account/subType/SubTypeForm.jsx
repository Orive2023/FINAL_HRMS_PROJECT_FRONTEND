import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as api from "./api";
import StateSubType from "./StateSubType";

const SubTypeForm = ({formData,setFormData, setOpen}) => {
  const {
    subType,
    setsubType,
    recDelete,
    setRecDelete,
  } = StateSubType();

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

  const saveSubType = async () => {
    try {
      await api.saveSubType(formData);
      navigate("/hr/accounts/subType");
      loadSubType();
      setFormData({
        subtype: "",
        accountName: "",
       
      });
      handleClose();
    } catch (error) {
      console.error("Error saving subtype:", error);
    }
  };

  const loadSubType = async () => {
    try {
      const result = await api.loadSubType();
      setsubType(result);
    } catch (error) {
      console.error("Error loading subtype:", error.response.data);
    }
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  const Type = [
    {
      value: "Choose",
      label: "Select Type",
    },
    {
      value: "None",
      label: "None",
    },
    {
      value: "Employee",
      label: "Employee",
    },
    {
      value: "Customer",
      label: "Customer",
    },
    {
      value: "Supplier",
      label: "Supplier",
    },
    {
      value: "Agent",
      label: "Agent", 
    }
  ];

  console.log(formData);
  const cancelButton = () => {
    setOpen(false);
    setFormData({
      subType: "",
      accountName: "",
      subTypeEndDate: "",
    });
  };

  let buttonClick =true
    // formData.subtype.length > 0 &&
    // formData.accountName.length > 0 &&
    // formData.subTypeEndDate.length > 0 ;
  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          id="subType"
          margin="dense"
          select
          label="subType"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.subType}
          onChange={(e) => handleInputChange(e)}
          name="subType"
        >
          {Type.map((option, index) => (
            <option key={index} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          margin="dense"
          label="Account name"
          type="text"
          fullWidth
          name="accountName"
          id="accountName"
          value={formData.accountName}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

 
      <div className="data-buttons-popup">
        <Button
          type="submit"
          onClick={saveSubType}
          variant="outlined"
          disabled={buttonClick?false:true}
          id="input-btn-submit-popup"
        >
          Submit
        </Button>
        <Button
          onClick={cancelButton}
          id="input-btn-cancel-popup"
        >
          Cancel
        </Button>
    </div>
    </form>
  );
};

export default SubTypeForm;
