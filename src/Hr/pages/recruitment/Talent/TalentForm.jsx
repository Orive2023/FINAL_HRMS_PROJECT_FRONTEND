import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateTalent from "./StateTalent";

const TalentForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();
  const {
    setTalent,
    setNameError,
    setRequirementsError,
    requirementsError,
    jobLocationError,
    setJobLocationError,
    nameError,
    setProjectNameError,
    projectNameError,
    setManagerNameError,
    managerNameError,
  } = StateTalent();

  const loadTalent = async () => {
    const result = await api.loadTalent();
    setTalent(result);
  };

  useEffect(() => {
    loadTalent();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    validateName(value); // Validate the name field
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNameChange = (value) => {
    validateName(value); // Validate the name field
    setFormData((prevData) => ({ ...prevData, name: value }));
  };

  const handleReqChange = (value) => {
    validateRequirements(value); // Validate the requirements field
    setFormData((prevData) => ({ ...prevData, requirements: value }));
  };

  const handleProjectNameChange = (value) => {
    validateProjectName(value); // Validate the project Name field
    setFormData((prevData) => ({ ...prevData, projectName: value }));
  };

  const handleManagerNameChange = (value) => {
    validateManagerName(value); // Validate the Manager Name field
    setFormData((prevData) => ({ ...prevData, managerName: value }));
  };

  const handleJobLocationChange = (value) => {
    validateJobLocation(value); // Validate the Job Location field
    setFormData((prevData) => ({ ...prevData, jobLocation: value }));
  };

  const validateName = (name) => {
    if (name.length < 2) {
      setNameError("Name must be at least 2 characters long.");
    } else if (name.length > 200) {
      setNameError("Name must be at most 200 characters long.");
    } else {
      setNameError("");
    }
  };

  const validateRequirements = (requirements) => {
    if (requirements.length < 2) {
      setRequirementsError("Requirements must be at least 2 characters long.");
    } else if (requirements.length > 100) {
      setRequirementsError("Requirements must be at most 100 characters long.");
    } else {
      setRequirementsError("");
    }
  };

  const validateProjectName = (projectName) => {
    if (projectName.length < 2) {
      setProjectNameError("Project Name must be at least 2 characters long.");
    } else if (projectName.length > 50) {
      setProjectNameError("Project Name must be at most 50 characters long.");
    } else {
      setProjectNameError("");
    }
  };

  const validateManagerName = (managerName) => {
    if (managerName.length < 2) {
      setManagerNameError("Manager Name must be at least 2 characters long.");
    } else if (managerName.length > 60) {
      setManagerNameError("Manager Name must be at most 60 characters long.");
    } else {
      setManagerNameError("");
    }
  };

  const validateJobLocation = (jobLocation) => {
    if (jobLocation.length < 2) {
      setJobLocationError("Job Location must be at least 2 characters long.");
    } else if (jobLocation.length > 100) {
      setJobLocationError("Job Location must be at most 100 characters long.");
    } else {
      setJobLocationError("");
    }
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.slice(0, maxLength);
  };

  const saveTalent = async () => {
    await api.saveTalent(formData);
    alert("Talent added successfully");
    navigate("/hr/recruitment/talents");

    setFormData({
      id:"",
      country: "",
      city: "",
      role: "",
      subRole: "",
      projectRole: "",
      businessArea: "",
      startDate: "",
      endDate: "",
      jobNo: "",
      designation: "",
      projectRoleDesc: "",
      mustHaveSkills: "",
      goodHaveSkills: "",
      qualification: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    loadTalent();
  };

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      id:"",
      country: "",
      city: "",
      role: "",
      subRole: "",
      projectRole: "",
      businessArea: "",
      startDate: "",
      endDate: "",
      jobNo: "",
      designation: "",
      projectRoleDesc: "",
      mustHaveSkills: "",
      goodHaveSkills: "",
      qualification: "",
      description: "",
    });
  };

  let buttonCheck =true
    // formData.name.length > 0 &&
    // formData.requirements.length > 0 &&
    // formData.projectName.length > 0 &&
    // formData.managerName.length > 0 &&
    // formData.startDate.length > 0 &&
    // formData.endDate.length > 0 &&
    // formData.jobLocation.length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Role"
          type="text"
          fullWidth
          name="role"
          id="role"
          value={formData.role}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 200,
          }}
          error={!!nameError}
          helperText={nameError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 200);
            handleNameChange(value);
          }}
        />

        <TextField
          margin="dense"
          label="Sub Role"
          type="text"
          fullWidth
          name="subRole"
          id="subRole"
          value={formData.subRole}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!!requirementsError}
          helperText={requirementsError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 100);
            handleReqChange(value);
          }}
        />
    
        <TextField
          margin="dense"
          label="Project Role"
          type="text"
          fullWidth
          name="projectRole"
          id="projectRole"
          value={formData.projectRole}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 50,
          }}
          error={!!projectNameError}
          helperText={projectNameError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 50);
            handleProjectNameChange(value);
          }}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="businessArea"
          type="text"
          fullWidth
          name="businessArea"
          id="businessArea"
          value={formData.businessArea}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 60,
          }}
          error={!!managerNameError}
          helperText={managerNameError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 60);
            handleManagerNameChange(value);
          }}
        />

        <TextField
          margin="dense"
          label="Start Date"
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
          label="End Date"
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
        </div>
         <div className="data-input-fields">
        <TextField
          margin="dense"
          label="jobNo"
          type="text"
          fullWidth
          name="jobNo"
          id="jobNo"
          value={formData.jobNo}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!!jobLocationError}
          helperText={jobLocationError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 100);
            handleJobLocationChange(value);
          }}
        />
        <TextField
          margin="dense"
          label="designation"
          type="text"
          fullWidth
          name="designation"
          id="designation"
          value={formData.designation}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!!jobLocationError}
          helperText={jobLocationError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 100);
            handleJobLocationChange(value);
          }}
        />
        <TextField
          margin="dense"
          label="projectRoleDesc"
          type="text"
          fullWidth
          name="projectRoleDesc"
          id="projectRoleDesc"
          value={formData.projectRoleDesc}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!!jobLocationError}
          helperText={jobLocationError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 100);
            handleJobLocationChange(value);
          }}
        />
        </div>
        <div className="data-input-fields">
         <TextField
          margin="dense"
          label="mustHaveSkills"
          type="text"
          fullWidth
          name="mustHaveSkills"
          id="mustHaveSkills"
          value={formData.mustHaveSkills}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!!jobLocationError}
          helperText={jobLocationError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 100);
            handleJobLocationChange(value);
          }}
        />
         <TextField
          margin="dense"
          label="goodHaveSkills"
          type="text"
          fullWidth
          name="goodHaveSkills"
          id="goodHaveSkills"
          value={formData.goodHaveSkills}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!!jobLocationError}
          helperText={jobLocationError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 100);
            handleJobLocationChange(value);
          }}
        />
         <TextField
          margin="dense"
          label="qualification"
          type="text"
          fullWidth
          name="qualification"
          id="qualification"
          value={formData.qualification}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!!jobLocationError}
          helperText={jobLocationError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 100);
            handleJobLocationChange(value);
          }}
        />
        </div>
        <div className="data-input-fields">
         <TextField
          margin="dense"
          label="description"
          type="text"
          fullWidth
          name="description"
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!!jobLocationError}
          helperText={jobLocationError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 100);
            handleJobLocationChange(value);
          }}
        />
         <TextField
          margin="dense"
          label="country"
          type="text"
          fullWidth
          name="country"
          id="country"
          value={formData.country}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!!jobLocationError}
          helperText={jobLocationError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 100);
            handleJobLocationChange(value);
          }}
        />
         <TextField
          margin="dense"
          label="city"
          type="text"
          fullWidth
          name="city"
          id="city"
          value={formData.city}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!!jobLocationError}
          helperText={jobLocationError}
          onInput={(e) => {
            const value = enforceMaxLength(e.target.value, 100);
            handleJobLocationChange(value);
          }}
        />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          variant="outlined"
          type="submit"
          onClick={saveTalent}
          disabled={buttonCheck ? false : true}
        >
          Submit
        </Button>
        <Button id="input-btn-cancel" variant="outlined" onClick={cancelButton}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default TalentForm;
