import React, { useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';
import * as api from "./announcementapi"
import StateAnnouncement from './StateAnnouncement';
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
const AnnouncementForm = ({formData,setFormData,setFormVisible, setToggle }) => {
    let navigate = useNavigate();
    const {
        summaryError,
        setSummaryError,
       
        titleError,
        setTitleError,
        dateError,
        setDateError,
        department,
        company,
        setCompany,
   
        setDepartment,
        location,
        setLocation,
        
       
       
       
      } = StateAnnouncement();

      
      
    

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // const isValidLengthSum = value.length >= 2 && value.length <= 200;
        // const hasNoNumbersSum = !/\d/.test(value); // Check for the presence of numbers
        // setSummaryError(!isValidLengthSum || !hasNoNumbersSum);
    
        // const isValidLength = value.length >= 2 && value.length <= 50;
        // const hasNoNumbers = !/\d/.test(value); // Check for the presence of numbers
        // setTitleError(!isValidLength || !hasNoNumbers);
    
        // const isValidDate = value === getCurrentDate();
        // setDateError(!isValidDate);
    
        if (name === "departmentName" && value === "addNewDepartment") {
          // Redirect to the company form in the company module
          navigate("/hr/organisation/department");
          return;
        }
        // if (name === "locationName" && value === "addNewLocation") {
        //   // Redirect to the company form in the company module
        //   navigate("/hr/organisation/location");
        //   return;
        // }
        const selectedDepartment = department.find((comp) => comp.departmentName === value);
        if (selectedDepartment) {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            companyName: selectedDepartment.companyName || "", 
            locationName:selectedDepartment.locationName || "", 
          });
        } else {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        }
      };
       
        
        
    
      const saveAnnouncements = async () => {
        await api.saveAnnouncements(formData)
        navigate("/hr/organisation/announcements");
        setFormData({
          title: "",
          startDate: "",
          endDate: "",
          companyName: "",
          locationName: "",
          departmentName: "",
          summary: "",
          description: "",
          createdDate:getCurrentDate(),
        });
      };

      useEffect(() => {
        const fetchCompany = async () => {
        
          const response = await api.fetchCompanies()
          setCompany(response);
       
      };
    
      const fetchLocation = async () => {
     
          const response = await api.fetchLocations()
          setLocation(response);
       
      };
      const fetchDepartment = async () => {
        
          const response = await api.fetchDepartment()
          setDepartment(response);
        };
        
        fetchCompany();
        fetchLocation();
        fetchDepartment();
      }, []);
    
      
     
      

      const handleSubmit = (e) => {
        
        
      };



      const cancelButton = () => {
        setFormVisible(false);
        setToggle(false);
        setFormData({
          title: "",
          startDate: "",
          endDate: "",
          companyName: "",
          locationName: "",
          departmentName: "",
          summary: "",
          description: "",
          createdDate: "",
        });
      };
    
      let buttonCheck =
        formData.title.length > 0 &&
       formData.endDate.length>0 &&       
        formData.summary.length > 0 &&
        formData.createdDate.length > 0 &&
        formData.description.length > 0;
  return (
    <form onSubmit={handleSubmit}>
    <div className="data-input-fields">
      <TextField
        margin="dense"
        label="Title"
        type="text"
        fullWidth
        name="title"
        id="title"
        value={formData.title}
        onChange={(e) => handleInputChange(e)}
        required
        // error={titleError}
        // helperText={titleError && "Title must be between 2 and 50 characters"}
      />
      <TextField
        margin="dense"
        label="Start-Date"
        type="date"
        fullWidth
        name="startDate"
        id="startDate"
        value={formData.startDate}
        onChange={(e) => handleInputChange(e)}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        margin="dense"
        label="End-date"
        type="date"
        fullWidth
        name="endDate"
        id="endDate"
        value={formData.endDate}
        onChange={(e) => handleInputChange(e)}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
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
        InputLabelProps={{
          shrink: true,
        }}
        disabled
        error={dateError}
        helperText={dateError ? "Please select the current date" : ""}
      />
    </div>
    <div className="data-input-fields">
   
<FormControl fullWidth>
          <InputLabel id="demo-department-select-label">Department Name</InputLabel>
          <Select
            labelId="demo-department-select-label"
            id="selectedDepartment"
            value={formData.departmentName}
            name="departmentName"
            label="departmentName"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {department &&
              department.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.departmentName}>
                    {item.departmentName}
                  </MenuItem>
                );
              })}
            <MenuItem className="linkStyle" value="addNewDepartment">
  <a href="#">
    <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
    Create Department
  </a>
</MenuItem>


          </Select>
        </FormControl>
        <FormControl fullWidth>
        <InputLabel id="demo-company-select-label">Location Name</InputLabel>
        <Select
          labelId="demo-company-select-label"
          id="selectedEmployee"
          value={formData.locationName}
          name="locationName"
          label="location Name"
          onChange={(e) => handleInputChange(e)}
        >
          {location && location.map((item, index) => {
            return (
              <MenuItem key={index} value={item.locationName}>
                {item.locationName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-company-select-label">Company Name</InputLabel>
        <Select
          labelId="demo-company-select-label"
          id="selectedEmployee"
          value={formData.companyName}
          name="companyName"
          label="Company Name"
          onChange={(e) => handleInputChange(e)}
        >
          {company && company.map((item, index) => {
            return (
              <MenuItem key={index} value={item.companyName}>
                {item.companyName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>

    <div className="data-input-fields">
      <TextField
        margin="dense"
        label="Summary"
        type="text"
        fullWidth
        name="summary"
        id="summary"
        value={formData.summary}
        onChange={(e) => handleInputChange(e)}
        required
        // error={summaryError}
        // helperText={
        //   summaryError
        //     ? "Summary must be between 2 and 200 characters and should not contain numbers"
        //     : ""
        // }
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
      />
    </div>
    
      <div
        className="data-buttons"
      >
        <Button
          variant="outlined"
          type="submit"
          onClick={saveAnnouncements}
          disabled={buttonCheck ? false : true}
          id="input-btn-submit"
        >
          Submit
        </Button>
        <Button variant="outlined" id="input-btn-cancel" onClick={cancelButton}>
          Cancel
        </Button>
      </div>
  </form>
  );
};

export default AnnouncementForm;
