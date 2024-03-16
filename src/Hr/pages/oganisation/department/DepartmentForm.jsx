import React, { useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import * as api from "./DepartmentApi"
import { useNavigate} from 'react-router-dom';
import StateDepartment from './StateDepartment';
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

const DepartmentForm = ({formData,setFormData,setFormVisible, setToggle}) => {

    const navigate = useNavigate()

    const {setCompany,location, setLocation, dateError, setDateError,company,setDepartment} = StateDepartment()

    const loadDepartment = async () => {
        const result = await api.loadDepartment()
        setDepartment(result);
      };

      useEffect(() => {
        loadDepartment()
        fetchCompany();
        fetchLocation();
      },[])

      const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = `${now.getMonth() + 1}`.padStart(2, '0');
        const day = `${now.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'createdDate') {
          const isValidDate = value === getCurrentDate();
          setDateError(!isValidDate);
        }
        if (name === "companyName" && value === "addNewCompany") {
          // Redirect to the company form in the company module
          navigate("/hr/organisation/company");
          return;
        }
        if (name === "locationName" && value === "addNewLocation") {
          // Redirect to the company form in the company module
          navigate("/hr/organisation/location");
          return;
        }
        const selectedLocation = location.find((comp) => comp.locationName === value);
        if (selectedLocation) {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            companyName: selectedLocation.companyName || "", 
            // country: selectedLocation.country || "", 
          });
        } else {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        }
      };
       
    
      const saveDepartment = async () => {
    
        await api.saveDepartment(formData);
        alert("Department added successfully");
        navigate("/hr/organisation/department ");
        
        setFormData({
          locationName: "",
          departmentName: "",
          companyName: "",
          departmentHead: "",
          createdDate: "",
        });
      };

      const handleSubmit = (e) => {
     
        loadDepartment();
      }

      const fetchCompany = async () => {
        const companyData = await api.fetchCompanies()
        setCompany(companyData)
      };
    
    
      const fetchLocation = async () => {
        const locationData = await api.fetchLocations()
        setLocation(locationData)
      };

      const Head = [
        {
          value: "Choose",
          label: "Select Depatment Head",
        },
        {
          value: "Sarmistha Jena",
          label: "Sarmistha Jena",
        },
        {
          value: "Sumit Rana",
          label: "Sumit Rana",
        },
        {
          value: "Smruti Sourav",
          label: "Smruti Sourav",
        },
        {
          value: "Pritam Behera",
          label: "Pritam Behera",
        },
        {
          value: "Praveen Kumar",
          label: "Praveen Kumar",
        },
        {
          value: "Hrushikesh Jena",
          label: "Hrushikesh Jena",
        },
        {
          value: "Subhashree Das",
          label: "Subhashree Das",
        },
      ];
    
      const Type = [
        {
          value: "Choose",
          label: "Select Depatment Name",
        },
        {
          value: "Human Resources Department",
          label: "Human Resources Department",
        },
        {
          value: "Marketing Department",
          label: "Marketing Department",
        },
        {
          value: "Finance Department",
          label: "Finance Department",
        },
        {
          value: "Information Technology Department",
          label: "Information Technology Department",
        },
        {
          value: "Customer Service Department",
          label: "Customer Service Department",
        },
        {
          value: "Research and Development Department",
          label: "Research and Development Department",
        },
        {
          value: "Legal Department",
          label: "Legal Department",
        },
      ];

      const cancelButton = () => {

        setFormVisible(false);
        setToggle(false);
        setFormData({
          departmentName: "",
          companyName: "",
          departmentHead: "",
          createdDate: "",
          locationName: "",
        });
      };
    
      let buttonCheck =
        formData.departmentName.length > 0 &&
        // formData.companyName.length > 0 &&
        formData.departmentHead.length > 0 &&
        formData.createdDate.length > 0 &&
        formData.locationName.length > 0;
    
    
  return (
    <form onSubmit={handleSubmit}>
    <div className="data-input-fields">
     <TextField
       id="departmentName"
        margin="dense"
        type="text"
        label="Department Name"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        value={formData.departmentName}
        onChange={(e) => handleInputChange(e)}
        name="departmentName"
     />

      
<FormControl fullWidth>
          <InputLabel id="demo-company-select-label">Company Name</InputLabel>
          <Select
            labelId="demo-company-select-label"
            id="selectedCompany"
            value={formData.companyName}
            name="companyName"
            label="companyName"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {company &&
              company.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.companyName}>
                    {item.companyName}
                  </MenuItem>
                );
              })}
            <MenuItem className="linkStyle" value="addNewCompany">
  <a href="#">
    <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
    Create company
  </a>
</MenuItem>


          </Select>
        </FormControl>
    </div>
    <div className="data-input-fields">
      <TextField
        id="departmentHead"
        margin="dense"
        select
        label="Department Head"
        fullWidth
        defaultValue="Choose"
        SelectProps={{
          native: true,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        value={formData.departmentHead}
        onChange={(e) => handleInputChange(e)}
        name="departmentHead"
      >
        {Head.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

      <TextField
        margin="dense"
        label="Create Date"
        type="date"
        fullWidth
        name="createdDate"
        id="createdDate"
        value={formData.createdDate}
        onChange={(e) => handleInputChange(e)}
        required
        InputLabelProps={{shrink:true}}
        error={dateError}
        helperText={dateError && "Please select the current date"}
       disabled
      />
      
      <FormControl fullWidth>
          <InputLabel id="demo-location-select-label">Location Name</InputLabel>
          <Select
            labelId="demo-location-select-label"
            id="selectedLocation"
            value={formData.locationName}
            name="locationName"
            label="locationName"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {location &&
              location.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.locationName}>
                    {item.locationName}
                  </MenuItem>
                );
              })}
            <MenuItem className="linkStyle" value="addNewLocation">
  <a href="#">
    <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
    Create Location
  </a>
</MenuItem>


          </Select>
        </FormControl>


    </div>

    <div className="data-buttons">

      <Button id="input-btn-submit"
        variant="outlined"
        type="submit"
        onClick={saveDepartment}
        disabled={buttonCheck?false:true}
      >
        Submit
      </Button>
      <Button id="input-btn-cancel"
        variant="outlined"
        onClick={cancelButton}
      >
        Cancel
      </Button>
    </div>


  </form>
  )
}

export default DepartmentForm