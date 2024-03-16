import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { format } from "date-fns-tz";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateInterview from "./StateInterview";

const InterviewForm = ({formData, setFormData, setFormVisible, setToggle}) => {
  const navigate = useNavigate();

  const {
    email,
    setEmail,
    candidateEmailError,
    setCandidateEmailError,
    schedulerEmailError,
    setSchedulerEmailError,
    interviewerEmailError,
    setInterviewerEmailError,
    formVisible,
    toggle,
    Interview,
    setInterview,
    open,user,
    setUser,setCandidate,
    setOpen,setTalent,
  } = StateInterview();
  const currentDate = new Date();
  const formattedCurrentDate = format(currentDate, "yyyy-MM-dd'T'HH:mm", { timeZone: "Asia/Kolkata" });

  const loadInterview = async () => {
    try {
      console.log("Loading interview data");
      const result = await api.loadInterview();
      console.log("Interview data loaded:", result);
      setInterview(result);
    } catch (error) {
      console.error("Error loading interview data:", error);
    }
  };
 

 
  const fetchCandidate = async () => {
    const candidateData = await api.fetchCandidate()
    setCandidate(candidateData)
  };


  const fetchUser = async () => {
    const userData = await api.fetchUser()
    setUser(userData)
  };

  const fetchTalent = async () => {
    const userData = await api.fetchTalent()
    setTalent(userData)
  };
  


  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };
  
  const handleEmailChange3 = (e) => {
    // Additional email-related logic if needed
  };

  const handleInputChangeAndValidate = (e) => {
    handleInputChange(e);
    handleEmailChange3(e);

    // Validate the email and set error state accordingly
    const email = e.target.value;
    if (!validateEmail(email)) {
      setInterviewerEmailError('Please enter a valid email address.');
    } else {
      setInterviewerEmailError('');
    }
  };
  const handleEmailChange2 = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    if (inputValue.trim() === "") {
      setSchedulerEmailError("Email is required");
    } else if (!validateEmail(inputValue)) {
      setSchedulerEmailError("Invalid email address");
    } else {
      setSchedulerEmailError("");
    }
  };
  const handleEmailChange1 = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    if (inputValue.trim() === "") {
      setCandidateEmailError("Email is required");
    } else if (!validateEmail(inputValue)) {
      setCandidateEmailError("Invalid email address");
    } else {
      setCandidateEmailError("");
    }
  };

  const handleInputChange = (e) => {
    console.log("Input changed:", e.target.value);
    const { name, value } = e.target;
    // if (name === "companyName" && value === "addNewCompany") {
    //   // Redirect to the company form in the company module
    //   navigate("/hr/organisation/company");
    //   return;
    // }
    // if (name === "locationName" && value === "addNewLocation") {
    //   // Redirect to the company form in the company module
    //   navigate("/hr/organisation/location");
    //   return;
    // }
    // if (name === "locationName" && value === "addNewLocation") {
    //   // Redirect to the company form in the company module
    //   navigate("/hr/organisation/location");
    //   return;
    // }
    const selectedUser = user.find((comp) => comp.user === value);
    if (selectedUser) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        user: selectedUser.user || "", 
        // country: selectedLocation.country || "", 
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const saveInterview = async (e) => {
    await api.saveInterview(formData);
    handleClose();
    navigate("/hr/recruitment/Interview");
    loadInterview();
    setFormData({
      candidateEmailId: " ",
      schedulerEmailId: " ",
      interviewerEmailId: " ",
      talentId: " ",
      interviewStatus: " ",
      meetingLink: " ",
      date: " ",
    });
  };

  const handleSubmit = (e) => {
    console.log("Form submitted");
    loadInterview();
  };
  
  useEffect(() => {
    console.log("useEffect triggered");
    loadInterview();
    fetchCandidate();
    fetchTalent();
    fetchUser();
  }, []);
  
  const Role = [
    {
      value: "Choose",
      label: "Select Status",
    },
    {
      value: "SCHEDULED",
      label: "SCHEDULED",
    },
    {
      value: "RE_SCHEDULED",
      label: "RE_SCHEDULED",
    },
    {
      value: "CANCELLED",
      label: "CANCELLED",
    },
    {
      value: "SELECTED",
      label: "SELECTED",
    },
    {
      value: "REJECTED",
      label: "REJECTED",
    },
   
  ];

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      candidateEmailId: " ",
      schedulerEmailId: " ",
      interviewerEmailId: " ",
      talentId: " ",
      interviewStatus: " ",
      meetingLink: " ",
      date: " ",
    });
  };

  let buttonCheck =true
  //   formData.candidateEmailId.length > 0 &&
  //  formData.schedulerEmailId.length>0 &&       
  //   formData.interviewerEmailId.length > 0 &&
  //   formData.talentId.length > 0 &&
  //   formData.interviewStatus.length > 0 &&
  //   formData.meetingLink.length > 0 &&
  //   formData.dateTime.length > 0 ;

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Candidate Email ID"
          type="email"
          fullWidth
          name="candidateEmailId"
          id="candidateEmailId"
          value={formData.candidateEmailId}
          onChange={(e) => {
            handleInputChange(e);
            handleEmailChange1(e);
          }}
          required
          // error={Boolean(candidateEmailError)}
          // helperText={candidateEmailError}
        />
        <TextField
          margin="dense"
          label="Scheduler Email ID"
          type="email"
          fullWidth
          name="schedulerEmailId"
          id="schedulerEmailId"
          value={formData.schedulerEmailId}
          onChange={(e) => {
            handleInputChange(e);
            handleEmailChange2(e);
          }}
          required
          // error={Boolean(schedulerEmailError)}
          // helperText={schedulerEmailError}
        />
      </div>

      <div className="data-input-fields">
      <TextField
      margin="dense"
      label="Interviewer Email ID"
      type="email"
      fullWidth
      name="interviewerEmailId"
      id="interviewerEmailId"
      value={formData.interviewerEmailId}
      onChange={handleInputChangeAndValidate}
      required
      // error={Boolean(interviewerEmailError)}
      // helperText={interviewerEmailError}
    />
        <TextField
          margin="dense"
          label="Talent ID"
          type="text"
          fullWidth
          name="talentId"
          id="talentId"
          value={formData.talentId}
          onChange={(e) => handleInputChange(e)}
          required
        />
         <TextField
          id="role"
          margin="dense"
          select
          label="Status"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.interviewStatus}
          onChange={(e) => handleInputChange(e)}
          name="interviewStatus"
        >
          {Role.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          margin="dense"
          label="meetingLink"
          type="text"
          fullWidth
          name="meetingLink"
          id="meetingLink"
          value={formData.meetingLink}
          onChange={(e) => handleInputChange(e)}
          required
        />
        </div>

      <div className="data-input-fields">
      <TextField
  margin="dense"
  label="Date"
  type="date"
  fullWidth
  name="date"
  id="date"
  value={formData.date}
  onChange={(e) => handleInputChange(e)}
  required

/>
      </div>
      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          type="submit"
          onClick={saveInterview}
          variant="outlined"
          disabled={buttonCheck ? false : true}
        >
          Submit
        </Button>
        <Button
          id="input-btn-cancel"
          onClick={cancelButton}
          variant="outlined"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default InterviewForm;
