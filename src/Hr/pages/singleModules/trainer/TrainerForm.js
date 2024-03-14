import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateTrainer from "./StateTrainer";

const TrainerForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();

  const {
    setTrainer,
    errorMsg,
    setErrorMsg,
    emailError,
    setEmailError,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    phoneNumberError,
    setPhoneNumberError,
  } = StateTrainer();

  const loadTrainer = async () => {
    const result = await api.loadTrainer();
    setTrainer(result);
  };

  useEffect(() => {
    loadTrainer();
  }, []);

  const saveTrainer = async () => {
    await api.saveTrainer(formData);
    navigate("/hr/trainer");
    setFormData({
      trainersFullName: "",
      emailAddress: "",
      phoneNo: "",
      technicalSkills: "",
      softSkills: "",
      industries: "",
      certifications: "",
      trainingProgramsOffered: "",
      preferredTrainingAudienece: "",
      trainingLanguages: "",
      availability: "",
      previousClients: "",
      trainingMaterialsProvided: "",
      additionalNotes: "",
      status:""
    });
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.slice(0, maxLength);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.length < 2 || value.length > 50) {
      setErrorMsg(
        "Invalid name length. Name length should be between 2 and 50."
      );
    } else {
      setErrorMsg("");
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInChange = (e) => {
    // Ensure that only numeric characters are allowed
    if (/^\d*$/.test(e.target.value) || e.target.value === "") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    if (newEmail === "") {
      setEmailError("Email is required");
    } else if (!emailRegex.test(newEmail)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);

    // Phone number validation regex
    const phoneNumberRegex = /^\d{10}$/;

    // Validate phone number format
    if (newPhoneNumber === "") {
      setPhoneNumberError("Phone number is required");
    } else if (!phoneNumberRegex.test(newPhoneNumber)) {
      setPhoneNumberError("Invalid phone number format");
    } else {
      setPhoneNumberError("");
    }
  };

  const handleSubmit = (e) => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // handleClose();
  };

  const Prog = [
    {
      value: "Choose",
      label: "Select Program",
    },
    {
      value: "Workhop",
      label: "Workhop",
    },
    {
      value: "Seminar",
      label: "Seminar",
    },
    {
      value: "Webinar",
      label: "Webinar",
    },
  ];
  const Train = [
    {
      value: "Choose",
      label: "Select Audience",
    },
    {
      value: "Employees",
      label: "Employees",
    },
    {
      value: "Managers/Supervisors",
      label: "Managers/Supervisors",
    },
    {
      value: "Cross-functional Team",
      label: "Cross-functional Team",
    },
  ];
  const Ava = [
    {
      value: "Choose",
      label: "Select Availability",
    },
    {
      value: "Part-Time",
      label: "Part-Time",
    },
    {
      value: "Full-Time",
      label: "Full-Time",
    },
    {
      value: "Contact Basis",
      label: "Contact Basis",
    },
    {
      value: "Remote/online",
      label: "Remote/online",
    },
  ];
  const Type = [
    {
      value: "Choose",
      label: "Select Material",
    },
    {
      value: "Trainer Provides Materials",
      label: "Trainer Provides Materials",
    },
    {
      value: "Organisation Provides Materials",
      label: "Organisation Provides Materials",
    },
    {
      value: "Both",
      label: "Both",
    },
  ];

  const Lan = [
    {
      value: "Choose",
      label: "Select Language",
    },
    {
      value: "English",
      label: "English",
    },
    {
      value: "Hindi",
      label: "Hindi",
    },
    {
      value: "Spainch",
      label: "Spainch",
    },
    {
      value: "French",
      label: "French",
    },
  ];
  const Ind = [
    {
      value: "Choose",
      label: "Select Industries",
    },
    {
      value: "IT",
      label: "IT",
    },
    {
      value: "Healthcare",
      label: "Health",
    },
    {
      value: "Finance",
      label: "Finance",
    },
  ];

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      trainersFullName: "",
      emailAddress: "",
      phoneNo: "",
      technicalSkills: "",
      softSkills: "",
      industries: "",
      certifications: "",
      trainingProgramsOffered: "",
      preferredTrainingAudienece: "",
      trainingLanguages: "",
      availability: "",
      previousClients: "",
      trainingMaterialsProvided: "",
      additionalNotes: "",
      status:""
    });
  };

  let buttonClick =
    formData.trainersFullName.length > 0 &&
    formData.emailAddress.length > 0 &&
    formData.phoneNo.length > 0 &&
    formData.technicalSkills.length > 0 &&
    formData.softSkills.length > 0 &&
    formData.industries.length > 0 &&
    formData.certifications.length > 0 &&
    formData.trainingProgramsOffered.length > 0 &&
    formData.preferredTrainingAudienece.length > 0 &&
    formData.trainingLanguages.length > 0 &&
    formData.availability.length > 0 &&
    formData.previousClients.length > 0 &&
    formData.trainingMaterialsProvided.length > 0 &&
    formData.additionalNotes.length > 0
  console.log(FormData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Trainer's Full Name"
          type="text"
          fullWidth
          name="trainersFullName"
          id="trainersFullName"
          value={formData.trainersFullName}
          error={errorMsg !== ""}
          helperText={errorMsg}
          InputProps={{
            minLength: 2,
            maxLength: 50,
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 50);
            handleNameChange(e);
          }}
        />
        <TextField
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          name="emailAddress"
          id="emailAddress"
          value={formData.emailAddress}
          onChange={(e) => {
            handleInputChange(e);
            handleEmailChange(e);
          }}
          required
          error={!!emailError}
          helperText={emailError}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Phone Number"
          type="text" // Using text type to allow both numeric and non-numeric characters
          fullWidth
          name="phoneNo"
          id="phoneNo"
          value={phoneNumber}
          onChange={(e) => {
            handleInChange(e);
            handlePhoneNumberChange(e);
          }}
          required
          error={!!phoneNumberError}
          helperText={phoneNumberError}
        />
        <TextField
          margin="dense"
          label="Technical Skills"
          type="text"
          fullWidth
          name="technicalSkills"
          id="technicalSkills"
          value={formData.technicalSkills}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Trainers Soft Skills"
          type="text"
          fullWidth
          name="softSkills"
          id="softSkills"
          value={formData.softSkills}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ margin: "8px 3px" }}
        />
      </div>

      <div className="data-input-fields">
        <TextField
          id="industries"
          margin="dense"
          select
          //  label="Priority"
          // type="text"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          value={formData.industries}
          onChange={(e) => handleInputChange(e)}
          name="industries"
        >
          {Ind.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="trainingProgramsOffered"
          margin="dense"
          select
          //  label="Priority"
          // type="text"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          value={formData.trainingProgramsOffered}
          onChange={(e) => handleInputChange(e)}
          name="trainingProgramsOffered"
        >
          {Prog.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>

      <div className="data-input-fields">
        <TextField
          id="preferredTrainingAudienece"
          margin="dense"
          select
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          value={formData.preferredTrainingAudienece}
          onChange={(e) => handleInputChange(e)}
          name="preferredTrainingAudienece"
        >
          {Train.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          margin="dense"
          label="Certifications"
          type="text"
          fullWidth
          name="certifications"
          id="certifications"
          value={formData.certifications}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          id="trainingLanguages"
          margin="dense"
          select
          //  label="Priority"
          // type="text"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          value={formData.trainingLanguages}
          onChange={(e) => handleInputChange(e)}
          name="trainingLanguages"
        >
          {Lan.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="availability"
          margin="dense"
          select
          //  label="Priority"
          // type="text"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          value={formData.availability}
          onChange={(e) => handleInputChange(e)}
          name="availability"
        >
          {Ava.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Previous Clients"
          type="text"
          fullWidth
          name="previousClients"
          id="previousClients"
          value={formData.previousClients}
          onChange={(e) => handleInputChange(e)}
          required
          error={errorMsg !== ""}
          helperText={errorMsg}
          InputProps={{
            minLength: 2,
            maxLength: 50,
          }}
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 50);
            handleNameChange(e);
          }}
        />

        <TextField
          id="trainingMaterialsProvided"
          margin="dense"
          select
          type="text"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          value={formData.trainingMaterialsProvided}
          onChange={(e) => handleInputChange(e)}
          name="trainingMaterialsProvided"
        >
          {Type.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          margin="dense"
          label="Additional Notes"
          type="text"
          fullWidth
          name="additionalNotes"
          id="additionalNotes"
          value={formData.additionalNotes}
          onChange={(e) => handleInputChange(e)}
          required
          style={{ marginBottom: "10px" }}
        />
      </div>
      
      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          variant="outlined"
          type="submit"
          onClick={saveTrainer}
          disabled={buttonClick ? false : true}
        >
          Submit
        </Button>
        <Button
          id="input-btn-cancel"
          variant="outlined"
          onClick={cancelButton}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default TrainerForm;
