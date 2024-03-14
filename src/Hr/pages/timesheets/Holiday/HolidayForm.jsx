import React, { useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as api from "./api"
import { useNavigate,useState } from 'react-router-dom';
import StateHoliday from './StateHoliday';

const HolidayForm = ({ formData, setFormData, setFormVisible, setToggle }) => {

  const navigate = useNavigate()

  const {setHoliday
  } = StateHoliday()

  const loadHoliday = async () => {
      const result = await api.loadHoliday()
      setHoliday(result);
    };

    useEffect(() => {
      loadHoliday()
    },[])

    const getCurrentDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = `${now.getMonth() + 1}`.padStart(2, '0');
      const day = `${now.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
  
    // const handledesChange = (e) => {
    //   setDescription(e.target.value);
    // };
    const enforceMaxLength = (value, maxLength) => {
      return value.slice(0, maxLength);
    };

    
  const handleInputChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


    
    const handleHolidayChange = (e) => {
      const value = enforceMaxLength(e.target.value, 100);
      setFormData({
        ...formData,
        eventName: value,
      });
    };
  
  
    const isSubjectValid = () => {
      const { eventName } = formData;
      return /^[A-Za-z]+$/.test(eventName) && eventName.length >= 2 &&  eventName.length <= 50;
    };
  
    const saveHoliday = async () => {
      await api.saveHoliday(formData);
      navigate("/hr/timesheets/holiday ");
      setFormData({
        eventName: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    };

    const handleSubmit = (e) => {
      loadHoliday();
    }

    let buttonCheck = formData.eventName.length > 0 &&
                      formData.startDate.length > 0 &&
                      formData.endDate.length > 0 &&
                      formData.description.length > 0
                      

    const cancelButton = () => {
      setFormVisible(false);
      setToggle(false);
      setFormData({
        eventName: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    };  
  
return (
  <form onSubmit={handleSubmit}>
  <div className="data-input-fields">
      <TextField
        margin="dense"
        label="Event Name"
        type="text"
        fullWidth
        name="eventName"
        id="eventName"
        value={formData.eventName}
        onChange={(e) => handleHolidayChange(e)}
        required
        // InputProps={{
        //   minLength: 2,
        //   maxLength: 100,
        // }}
        // error={isSubjectValid()}
        // helperText={
        //   isSubjectValid()
        //     ?  'Event Name length should be between 2 and 50 characters.'
        //     : ''
        // }
        // onInput={(e) => {
        //   e.target.value = enforceMaxLength(e.target.value);
        //   handleHolidayChange (e);
        // }}
      />

     <TextField
        label="Start-Date"
          margin="dense"
          type="date"
          fullWidth
          name="startDate"
          SelectProps={{
            native: true,
          }}
          
          InputLabelProps = {{
            shrink: true,
          }}
          id="startDate"
          value={formData.startDate}
          onChange={(e) => handleInputChange(e)}
          required
          
        />
      </div>

    <div className="data-input-fields">
    <TextField
          margin="dense"
          label="End-Date"
          type="date"
          fullWidth
          name="endDate"
          id="endDate"
          SelectProps={{
            native: true,
          }}
          
          InputLabelProps = {{
            shrink: true,
          }}
          value={formData.endDate}
          onChange={(e) => handleInputChange(e)}
          required
          
        />
       <TextField
                margin="dense"
                label="Description"
                type="text"
                fullWidth
                name="description"
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange(e)}
                required
                InputProps={{
                  minLength: 2, // Set your minimum length here
                  maxLength: 500, // Set your maximum length here
                }}
                // onInput={(e) => {
                //   e.target.value = enforceMaxLength(e.target.value, 500);
                //   handledesChange(e);
                // }}

              />
 
      </div>

  <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          type="submit"
          onClick={saveHoliday}
          variant="outlined"
          disabled={buttonCheck?false:true}
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
)
}

export default HolidayForm;