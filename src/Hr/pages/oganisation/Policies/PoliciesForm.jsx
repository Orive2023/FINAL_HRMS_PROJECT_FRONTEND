import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import * as api from "./PoliciesApi";
import StatePolicies from "./StatePolicies";

const Policiesform = ({formData,setFormData, setOpen,}) => {
  const {
    dateError,
    setDateError,
    titleError,
    setTitleError,
    descriptionError,
    setDescriptionError,
   pdfFile,setPdfFile,
   
    company,
  setCompany,
  } = StatePolicies();

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
    const { name, value, files } = e.target;

    if (name === "description") {
      const isValidDescription = value.length >= 2 && value.length <= 200;
      setDescriptionError(!isValidDescription);
    }

    if (name === "title") {
      // Validate title length (between 2 and 50 characters)
      const isValidLength = value.length >= 5 && value.length <= 30;
      setTitleError(!isValidLength);
    }

    if (name === "uploadPdf") {
      setPdfFile(e.target.files[0])
    }
    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: name === "chooseFile" ? files[0] : value,
    // }));
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.name === "uploadPdf" ? e.target.files[0] : value,
    });

    if (name === "createdDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    if (name === "companyName" && value === "addNewCompany") {
      // Redirect to the company form in the company module
      navigate("/hr/organisation/company");
      return;
    }
    
  };

  const fetchCompany = async () => {
  
    const response = await api.fetchCompany()
  
  setCompany(response)
};

useEffect(() => {
    fetchCompany()
  },[])

  const savePolicies = async () => {
   

      await api.savePolicies(formData);
      navigate("/hr/organisation/policies");
      setFormData({
        companyName: "",
        title: "",
        description: "",
        createdDate:getCurrentDate(),
        uploadPdf: "",
      })
    
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  
  const cancelButton = () => {
    setOpen(false);
    setFormData({
      companyName: "",
      title: "",
      createdDate: "",
      uploadPdf: ""
    });
  };

  let buttonCheck =
    formData.companyName.length > 0 &&
    formData.title.length > 0 &&
    formData.createdDate.length > 0 ;
    //formData.uploadPdf;




  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        {/* <TextField
          id="companyName"
          margin="dense"
          select
          label="CompanyName"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.companyName}
          onChange={(e) => handleInputChange(e)}
          name="companyName"
        >
          {company.map((option, index) => (
            <option key={index} value={option.companyName}>
              {option.companyName}
            </option>
          ))}
        </TextField> */}
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
          // helperText={titleError && "Title must be between 5 and 30 characters"}
        />
      </div>

      <div className="data-input-fields">
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
          // error={descriptionError}
          // helperText={
          //   descriptionError &&
          //   "Please enter a description between 2 and 200 characters."
          // }
        />

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
          disabled
          error={dateError}
          helperText={dateError && "Please select the current date"}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <TextField
        margin="dense"
        label="Policy Form"
        type="file"
        fullWidth
        name="uploadPdf"
        id="uploadPdf"
        onChange={(e) => handleInputChange(e)}
        accept=".pdf"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <div className="data-buttons-popup">
        <Button
          type="submit"
          onClick={savePolicies}
          variant="outlined"
          disabled={buttonCheck?false:true}
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

export default Policiesform;
