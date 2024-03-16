import Button from "@mui/material/Button";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateCandidate from "./StateCandidate";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
const CandidateForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();

  const {
    candidate,
    setCandidate,
    setIsEmailValid,
    isEmailValid,
    setIsValidPhoneNumber,
  } = StateCandidate();

  const loadCandidate = async () => {
    try {
      const result = await api.loadCandidate();
      setCandidate(result);
    } catch (error) {
      console.error("Error loading candidate data:", error);
    }
  };

  useEffect(() => {
    loadCandidate();
  }, []);

  const saveCandidate = async () => {
    await api.saveCandidate(formData);
    window.location.reload();
    navigate("/hr/recruitment/candidate");

    setFormData({
      name: "",
      address: "",
      email: "",
      mobile: "",
      ctc: "",
      ectc: "",
      location: "",
      notice: "",
      file: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     saveCandidate();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
    }

    if (name === "mobileNo") {
      const isValidPhoneNumber = /^\d{10}(-\d{1,4})?$/;
      setIsValidPhoneNumber(isValidPhoneNumber.test(value));
    }
      setFormData({
        ...formData,
        [name]: value,
        [e.target.name]: e.target.name === "file" ? e.target.files[0] : value,
      });
  };

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      name: "",
      address: "",
      email: "",
      mobile: "",
      ctc: "",
      ectc: "",
      location: "",
      notice: "",
      file: "",
    });
  };
  let buttonCheck = true;

    console.log(formData);
  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange(e)}
          required
          // InputProps={{
          //   minLength: 2,
          //   maxLength: 100,
          // }}
          // error={isSubjectValid()}
          // helperText={
          //   isSubjectValid()
          //     ? "Candidate Name length should be between 2 and 50 characters."
          //     : ""
          // }
          // onInput={(e) => {
          //   e.target.value = enforceMaxLength(e.target.value, 100);
          //   handleCandidateNameChange(e);
          // }}
        />

        <TextField
          margin="dense"
          label="Address"
          type="text"
          fullWidth
          name="address"
          id="address"
          value={formData.address}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleInputChange(e)}
          required
          error={!isEmailValid}
          helperText={
            !isEmailValid ? "Please enter a valid email address." : ""
          }
        />

        <TextField
          margin="dense"
          label="Mobile Number"
          type="text"
          fullWidth
          name="mobile"
          id="mobile"
          value={formData.mobile}
          onChange={(e) => handleInputChange(e)}
          required
          // error={!isValidPhoneNumber}
          // helperText={!isValidPhoneNumber ? "Invalid phone number" : ""}
          //  onInput={(e) => {
          //    e.target.value = enforceMaxLength(e.target.value, 10);
          //    handleInputChange(e);
          //  }}
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label=" CTC"
          type="number"
          fullWidth
          name="ctc"
          id="ctc"
          value={formData.ctc}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label=" ECTC"
          type="number"
          fullWidth
          name="ectc"
          id="ectc"
          value={formData.ectc}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Location"
          type="text"
          fullWidth
          name="location"
          id="location"
          value={formData.location}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Notice"
          type="text"
          fullWidth
          name="notice"
          id="notice"
          value={formData.notice}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
      <TextField
        margin="dense"
        label="Resume Upload in pdf"
        type="file"
        fullWidth
        name="file"
        id="file"
        onChange={(e) => handleInputChange(e)}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          variant="outlined"
          type="submit"
          onClick={saveCandidate}
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

export default CandidateForm;
