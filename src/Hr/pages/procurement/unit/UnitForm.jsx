import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import * as api from "./UnitApi";
import StateUnit from "./StateUnit";

const Unitform = ({formData,setFormData, setOpen}) => {
  const {
   
    open,recDelete,setRecDelete,unit,SetUnit,setNameError,
   
  } = StateUnit();

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

    if (name === "unitName") {
      const isValidName = value.length >= 2 && value.length <= 200;
      setNameError(!isValidName);
    }

   
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      // signature:pdfFile
    });

  };

 

  const saveUnit = async () => {
   

      await api.saveUnit(formData);

      navigate("/hr/procurement/unit");
      setFormData({
        unitName:"",
      
      })
    
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  
  const cancelButton = () => {
    setOpen(false);
    setFormData({
      unitName: "",
    });
  };

  let buttonClick =true
    // formData.unit.length > 0 
    

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Name"
          type="unitName"
          fullWidth
          name="unitName"
          id="unitName"
          value={formData.unitName}
          onChange={(e) => handleInputChange(e)}
          required
          // error={titleError}
          // helperText={titleError && "Title must be between 5 and 30 characters"}
        />
      </div>
      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          variant="outlined"
          type="submit"
          onClick={saveUnit}
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



export default Unitform;
