import React, { useEffect, useState } from "react";
import axios from "axios";
import * as api from "./api";
import TextField from "@mui/material/TextField";
import { Stepper, Step, StepLabel, Card } from "@mui/material";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import StateEmployee from "./StateEmployee";
import { useNavigate } from "react-router-dom";

const EmployeeForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  let navigate = useNavigate();
  const {
    toggle,
    employeeData,
    setEmployeeData,
    photograph,
    setPhotograph,
    employee,
    designation,
    setDesignation,
    setemployees,
    dateError,
    setDateError,
    handleStep,
    setHandleStep,
    activeStep,
    setActiveStep,
    email,
    setEmail,
    isEmailValid,
    setIsEmailValid,
    businessEmail,
    setBusinessEmail,
    emailBusinessError,
    setEmailBusinessError,
    employeeName,
    setEmployeeName,
    branchName,
    setBranchName,
    branchErrorMsg,
    setBranchErrorMsg,
    teamLeaderName,
    setTeamLeaderName,
    reportingTo,
    setReporting,
    accountNumber,
    setAccountNumber,
    accountErrorMsg,
    setAccountErrorMsg,
    zipCode,
    setZipCode,
    tinNumber,
    setTinNumber,
    countryCode,
    setCountryCode,
    phone,
    setPhone,
    phoneError,
    setPhoneError,
    homePhone,
    setHomePhone,
    phoneHomeError,
    setHomePhoneError,
    cellPhone,
    setCellPhone,
    phoneCellError,
    setCellPhoneError,
    errorMsg,
    setErrorMsg,
    alternativePhone,
    setAlternativePhone,
    sal,
    setSal,
  } = StateEmployee();

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleNext = async (e) => {
    //formRef.current.reportValidity()
    // await axios.post("https://13.126.190.50:5000/employee/create/employee",formData);
    setActiveStep((prevStep) => prevStep + 1);
    //   if (formData.accountNumber === '' || formData.bankName === 'Choose' || formData.ifscNumber === '' || formData.branchName === '') {
    //     alert('Please fill out all fields');
    //  } else {
    //     handleStep(false);
    //  }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const [photo, setPhoto] = useState(null);
  const [document, setDocument] = useState(null);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   const files = e.target;

  //   const selectedFile = files && files.length ? files[0] : null;

  //   if (name === "createdDate") {
  //     const isValidDate = value === getCurrentDate();
  //     setDateError(!isValidDate);
  //   }

  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.name==="uploadPhoto" ? e.target.files[0] : value
  //   })
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.name==="uploadDocument" ? e.target.files[0] : value
  //   })

  //   calculateGross();
  // };

  const handleInputChange = (e) => {


    const { name, value } = e.target;

    const files = e.target.files;

    const selectedFile = files && files.length ? files[0] : null;

    if (name === "createdDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }


    const updatedFormData = { ...formData };

    if (name === "uploadPhoto" || name === "uploadDocument") {
      updatedFormData[name] = selectedFile;
    } else {
      updatedFormData[name] = value;
    }
    if (name === "designationName" && value === "addNewDesignation") {
      // Redirect to the company form in the company module
      navigate("/hr/organisation/designation");
      return;
    }
    updatedFormData["grossSalary"] = sal;
    setFormData(updatedFormData);

    calculateGross();
  };

  useEffect(() => {
    loademployees();
    fetchDesignation();
  }, []);
  const fetchDesignation = async () => {
    const designationData = await api.fetchDesignation();
    setDesignation(designationData);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(inputEmail));
  };

  const handleBusinessEmailChange = (e) => {
    const inputEmail = e.target.value;
    setBusinessEmail(inputEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailBusinessError(!emailRegex.test(inputEmail));
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
    setEmployeeName(e.target.value);
  };

  const handleBranchChange = (e) => {
    const valueBranch = e.target.value;
    if (valueBranch.length < 2 || valueBranch.length > 50) {
      setBranchErrorMsg(
        "Invalid name length. Name length should be between 2 and 50."
      );
    } else {
      setBranchErrorMsg("");
    }
    setBranchName(e.target.value);
  };

  const enforceMaxLengthBranch = (valueBranch, maxLength) => {
    return valueBranch.length <= maxLength
      ? valueBranch
      : valueBranch.slice(1, maxLength);
  };

  const handleTeamChange = (e) => {
    setTeamLeaderName(e.target.value);
  };

  const handleReportChange = (e) => {
    setReporting(e.target.value);
  };

  const handleAccountChange = (e) => {
    const valueAccount = e.target.value;
    if (valueAccount.length < 2 || valueAccount.length > 50) {
      setAccountErrorMsg(
        "Invalid name length. Name length should be between 2 and 50."
      );
    } else {
      setAccountErrorMsg("");
    }
    setAccountNumber(e.target.value);
  };

  const enforceMaxLengthAccount = (valueAccount, maxLength) => {
    return valueAccount.length <= maxLength
      ? valueAccount
      : valueAccount.slice(1, maxLength);
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(1, maxLength);
  };

  const handleCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleTinChange = (e) => {
    setTinNumber(e.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    const isValid = /^\d{10}(-\d{1,4})?$/.test(value);
    setPhoneError(!isValid);
  };

  const handleHomePhoneChange = (e) => {
    const value = e.target.value;
    setHomePhone(value);

    const isValid = /^\d{10}(-\d{1,4})?$/.test(value);
    setHomePhoneError(!isValid);
  };

  const handleCellPhoneChange = (e) => {
    const value = e.target.value;
    setCellPhone(value);
    const isValid = /^\d{10}(-\d{1,4})?$/.test(value);
    setCellPhoneError(!isValid);
  };

  const Type = [
    {
      value: "Choose",
      label: "Select Company Type",
    },
    {
      value: "Corporation",
      label: "Corporation",
    },
    {
      value: "Exempt Organization",
      label: "Exempt Organization",
    },
    {
      value: "Partnership",
      label: "Partnership",
    },
    {
      value: "Private Foundation",
      label: "Private Foundation",
    },
    {
      value: "Limited Liability",
      label: "Limited Liability",
    },
    {
      value: "Non-profit Organization",
      label: "Non-profit Organization",
    },
    {
      value: "Proprietorship",
      label: "Proprietorship",
    },
  ];

  const EmpType = [
    {
      value: "Choose",
      label: "Select Employee Type",
    },
    {
      value: "Full Time",
      label: "Full Time",
    },
    {
      value: "Contractual",
      label: "Contractual",
    },
    {
      value: "Intern",
      label: "Intern",
    },
  ];

  const Role = [
    {
      value: "Choose",
      label: "Select Employee Role",
    },
    {
      value: "Fresher",
      label: "Fresher",
    },
    {
      value: "Experience",
      label: "Experience",
    },
    {
      value: "Intern",
      label: "Intern",
    },
  ];

  const Time = [
    {
      value: "Choose",
      label: "Select Attendance Time",
    },
    {
      value: " Attendance time(15:30 - 20:30)",
      label: " Attendance time(15:30 - 20:30)",
    },
    {
      value: " Test attendance(08:30 - 16:30)",
      label: " Test attendance(08:30 - 16:30)",
    },
    {
      value: " Regular(10:00 - 18:00)",
      label: " Regular(10:00 - 18:00)",
    },
  ];

  const Permit = [
    {
      value: "Choose",
      label: "Select Work Permit",
    },
    {
      value: "YES",
      label: "YES",
    },
    {
      value: "NO",
      label: "NO",
    },
  ];

  const gendertype = [
    {
      value: "Choose",
      label: "Select Gender",
    },
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

  const status = [
    {
      value: "Choose",
      label: "Select Marital Status",
    },

    {
      value: "Single",
      label: "Single",
    },

    {
      value: "Married",
      label: "Married",
    },

    {
      value: "Widowed",
      label: "Widowed",
    },

    {
      value: "Other",
      label: "Other",
    },
  ];

  const bankNameType = [
    {
      value: "Choose",
      label: "Select Bank Name",
    },
    {
      value: "Bank Of India",
      label: "Bank Of India",
    },
    {
      value: "Corporation Bank",
      label: "Corporation Bank",
    },
    {
      value: "Canara Bank",
      label: "Canara Bank",
    },
    {
      value: "HDFC Bank",
      label: "HDFC Bank",
    },
    {
      value: "ICICI Bank",
      label: "ICICI Bank",
    },
    {
      value: "IndusInd Bank",
      label: "IndusInd Bank",
    },
    {
      value: "Kotak Mahindra Bank",
      label: "Kotak Mahindra Bank",
    },
    {
      value: "Punjab National Bank",
      label: "Punjab National Bank",
    },
    {
      value: "UCO Bank",
      label: "UCO Bank",
    },
    {
      value: "SBI Bank",
      label: "SBI Bank",
    },
    {
      value: "Standard Chartered Bank",
      label: "Standard Chartered Bank",
    },
  ];

  const SubDepartmentType = [
    {
      value: "Choose",
      label: "Select Sub Department Name",
    },
    {
      value: "Developer",
      label: "Developer",
    },
    {
      value: "Testing",
      label: "Testing",
    },
    {
      value: "SEO",
      label: "SEO",
    },
    {
      value: "Sales",
      label: "Sales",
    },
    {
      value: "Digital Marketing",
      label: "Digital Marketing",
    },
    {
      value: "DataScience",
      label: "DataScience",
    },
  ];

  const RateType = [
    {
      value: "Choose",
      label: "Select Rate Type",
    },

    {
      value: "Hourly",
      label: "Hourly",
    },
    {
      value: "Salary",
      label: "Salary",
    },
  ];

  const medicalType = [
    {
      value: "Choose",
      label: "Select Medical Type",
    },

    {
      value: "YES",
      label: "YES",
    },
    {
      value: "NO",
      label: "NO",
    },
  ];

  const familyType = [
    {
      value: "Choose",
      label: "Select Family Type",
    },

    {
      value: "YES",
      label: "YES",
    },
    {
      value: "NO",
      label: "NO",
    },
  ];

  const TransportationType = [
    {
      value: "Choose",
      label: "Select Transportation Type",
    },

    {
      value: "YES",
      label: "YES",
    },
    {
      value: "NO",
      label: "NO",
    },
  ];

  const othersType = [
    {
      value: "Choose",
      label: "Select Others",
    },

    {
      value: "YES",
      label: "YES",
    },
    {
      value: "NO",
      label: "NO",
    },
  ];
  const statuses = [
    {
      value: "Choose",
      label: "Select Status",
    },

    {
      value: "Active",
      label: "Active",
    },
    {
      value: "Inactive",
      label: "Inactive",
    },
  ];

  const steps = [
    "Basic Info",
    "Bank Details",
    "Salary Details",
    "Personal Info",
    "Benefit",
    "Supervisor",
    "Bioraphical Info",
    "Additional Address",
    "Login Info",
  ];

  const calculateGross = () => {
    var gross =
      parseInt(formData.basicSalary) +
      parseInt(formData.transportAllowance) +
      parseInt(formData.hraAllowances) +
      parseInt(formData.otherAllowances);
    setSal(gross);
  };

  useEffect(() => {
    calculateGross();
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    const isValid = /^\d{10}(-\d{1,4})?$/.test(value);
    setPhoneError(!isValid);

    setAlternativePhone(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // handleNext();
    // handleBack();
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    await api.saveEmployees(formData);
    navigate("/hr/employee/employee");
    loademployees();
    window.location.reload();
    setFormData({
      employeeName: "",
      username: "",
      designationName: "",
      email: "",
      phone: "",
      alternativePhone: "",
      country: "",
      city: "",
      zipCode: "",
      employeeRole: "",
      companyType: "",
      attendanceTime: "",
      employeeType: "",
      createdDate: getCurrentDate(),
      accountNumber: "",
      bankName: "",
      ifscNumber: "",
      branchName: "",
      basicSalary: "",
      transportAllowance: "",
      grossSalary: "",
      tinNumber: "",
      hraAllowances: "",
      otherAllowances: "",
      pfAllowances: "",
      daAllowances: "",
      medicalAllowances: "",
      otherInsurance: "",
      tax: "",
      subDepartment: "",
      position: "",
      dutyType: "",
      hireDate: "",
      joiningDate: "",
      rateType: "",
      rateNumber: "",
      monthlyWorkHours: "",
      payFrequency: "",
      medical: "",
      family: "",
      transportation: "",
      others: "",
      teamLeaderName: "",
      reportingTo: "",
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
      workInCity: "",
      cityOfResidence: "",
      workPermit: "",
      businessEmail: "",
      homePhone: "",
      cellPhone: "",
      userEmailOrName: "",
      password: "",
      status: "",
      uploadPhoto: "",
      uploadDocument: "",
    });
    setPhoto(null);
    setDocument(null);
  };

  const loademployees = async () => {
    const result = await api.loademployees();
    setemployees(result);
  };

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      employeeName: "",
      username: "",
      designationName: "",
      email: "",
      phone: "",
      alternativePhone: "",
      country: "",
      city: "",
      zipCode: "",
      employeeRole: "",
      companyType: "",
      attendanceTime: "",
      employeeType: "",
      createdDate: getCurrentDate(),
      accountNumber: "",
      bankName: "",
      ifscNumber: "",
      branchName: "",
      basicSalary: "",
      transportAllowance: "",
      grossSalary: "",
      tinNumber: "",
      hraAllowances: "",
      otherAllowances: "",
      pfAllowances: "",
      daAllowances: "",
      medicalAllowances: "",
      otherInsurance: "",
      tax: "",
      subDepartment: "",
      position: "",
      dutyType: "",
      hireDate: "",
      joiningDate: "",
      rateType: "",
      rateNumber: "",
      monthlyWorkHours: "",
      payFrequency: "",
      medical: "",
      family: "",
      transportation: "",
      others: "",
      teamLeaderName: "",
      reportingTo: "",
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
      workInCity: "",
      cityOfResidence: "",
      workPermit: "",
      businessEmail: "",
      homePhone: "",
      cellPhone: "",
      userEmailOrName: "",
      password: "",
      status: "",
      uploadPhoto: "",
      uploadDocument: "",
    });
  };

  let buttonCheckBasicInfo = true
    // formData.employeeName.length > 0 &&
    // formData.username.length > 0 &&
    // formData.email.length > 0 &&
    // formData.phone.length > 0 &&
    // formData.alternativePhone.length > 0 &&
    // formData.country.length > 0 &&
    // formData.city.length > 0 &&
    // formData.zipCode.length > 0 &&
    // formData.employeeRole.length > 0 &&
    // formData.attendanceTime.length > 0 &&
    // formData.designationName.length > 0 &&
    // formData.employeeType.length > 0 &&
    // formData.companyType.length > 0 &&
    // formData.createdDate.length > 0;

  let buttonCheckBankDetails = true
    // formData.accountNumber.length > 0 &&
    // formData.bankName.length > 0 &&
    // formData.ifscNumber.length > 0 &&
    // formData.branchName.length > 0;

  let buttonCheckSalaryDetails = true
    // formData.basicSalary.length > 0 &&
    // formData.transportAllowance.length > 0 &&
    // formData.tinNumber.length > 0 &&
    // formData.hraAllowances.length > 0 &&
    // formData.otherInsurance.length > 0 &&
    // formData.pfAllowances.length > 0 &&
    // formData.daAllowances.length > 0 &&
    // formData.medicalAllowances.length > 0 &&
    // formData.otherAllowances.length > 0 &&
    // formData.tax.length > 0;

  let buttonCheckPersonalInfo = true
    // formData.subDepartment.length > 0 &&
    // formData.position.length > 0 &&
    // formData.dutyType.length > 0 &&
    // formData.hireDate.length > 0 &&
    // formData.joiningDate.length > 0 &&
    // formData.rateType.length > 0 &&
    // formData.rateNumber.length > 0 &&
    // formData.monthlyWorkHours.length > 0 &&
    // formData.payFrequency.length > 0;

  let buttonCheckBenefit = true
    // formData.medical.length > 0 &&
    // formData.family.length > 0 &&
    // formData.transportation.length > 0 &&
    // formData.others.length > 0;

  let buttonCheckSupervisor = true
    // formData.reportingTo.length > 0 && formData.teamLeaderName.length > 0;

  let buttonCheckBiographicalInfo = true
    // formData.dateOfBirth.length > 0 &&
    // formData.gender.length > 0 &&
    // formData.maritalStatus.length > 0 &&
    // formData.workInCity.length > 0 &&
    // formData.cityOfResidence.length > 0 &&
    // formData.workPermit.length > 0 &&
    // formData.uploadPhoto;

  let buttonCheckAdditionalAddress = true
    // formData.businessEmail.length > 0 &&
    // formData.homePhone.length > 0 &&
    // formData.cellPhone.length > 0;

  let buttonCheckLoginInfo = true
    // formData.userEmailOrName.length > 0 &&
    // formData.password.length > 0 &&
    // formData.uploadDocument;

  console.log(formData);

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step
          // onClick={() => setActiveStep(0)}
          style={{ cursor: "pointer" }}
        >
          <StepLabel>Basic Info</StepLabel>
        </Step>

        <Step
          // onClick={() => setActiveStep(1)}
          style={{ cursor: "pointer" }}
        >
          <StepLabel>Bank Details</StepLabel>
        </Step>
        <Step
          // onClick={() => setActiveStep(2)}
          style={{ cursor: "pointer" }}
        >
          <StepLabel>Salary Details</StepLabel>
        </Step>
        <Step
          // onClick={() => setActiveStep(3)}
          style={{ cursor: "pointer" }}
        >
          <StepLabel>Personal Info</StepLabel>
        </Step>
        <Step
          // onClick={() => setActiveStep(4)}
          style={{ cursor: "pointer" }}
        >
          <StepLabel>Benefit</StepLabel>
        </Step>
        <Step
          // onClick={() => setActiveStep(5)}
          style={{ cursor: "pointer" }}
        >
          <StepLabel>Supervisor</StepLabel>
        </Step>
        <Step
          // onClick={() => setActiveStep(6)}
          style={{ cursor: "pointer" }}
        >
          <StepLabel>Biographical Info</StepLabel>
        </Step>
        <Step
          // onClick={() => setActiveStep(7)}
          style={{ cursor: "pointer" }}
        >
          <StepLabel>Additional Address</StepLabel>
        </Step>
        <Step
          // onClick={() => setActiveStep(8)}
          style={{ cursor: "pointer" }}
        >
          <StepLabel>Login Info</StepLabel>
        </Step>
      </Stepper>
      <form onSubmit={handleSubmit}>
        {activeStep === 0 && (
          <div style={{ marginTop: "15px" }}>
            <Card variant="outlined">
              <div style={{ marginTop: "20px" }}>
                <h3 className="form-header">Basic Info</h3>
                <DialogContent>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Employee name"
                      type="text"
                      fullWidth
                      name="employeeName"
                      id="employeeName"
                      value={formData.employeeName}
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
                      margin="dense"
                      label="Username"
                      type="text"
                      fullWidth
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
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
                        !isEmailValid && "Please enter a valid email address."
                      }
                    />
                  </div>

                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Phone "
                      type="number"
                      fullWidth
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange(e)}
                      required
                      error={phoneError}
                      helperText={phoneError ? "Invalid phone number" : ""}
                    />
                    <TextField
                      margin="dense"
                      label="Alternative Number"
                      type="number"
                      fullWidth
                      name="alternativePhone"
                      id="alternativePhone"
                      value={formData.alternativePhone}
                      onChange={(e) => handleInputChange(e)}
                      error={phoneError}
                      helperText={
                        phoneError ? "Invalid alternative phone number" : ""
                      }
                      required
                    />
                    <TextField
                      margin="dense"
                      label="Country"
                      type="text"
                      fullWidth
                      name="country"
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="City"
                      type="text"
                      fullWidth
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      margin="dense"
                      label="Zip Code"
                      type="number"
                      fullWidth
                      name="zipCode"
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange(e)}
                      required
                      InputProps={{
                        minLength: 6, // Set your minimum length here
                        maxLength: 8, // Set your maximum length here
                      }}
                      onInput={(e) => {
                        e.target.value = enforceMaxLength(e.target.value, 10);
                        handleCodeChange(e);
                      }}
                    />
                    <TextField
                      id="employeeRole"
                      margin="dense"
                      select
                      label="Employee Role"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.employeeRole}
                      onChange={(e) => handleInputChange(e)}
                      name="employeeRole"
                    >
                      {Role.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div className="data-input-fields">
                    <TextField
                      id="attendanceTime"
                      margin="dense"
                      select
                      label="Attendance Time"
                      fullWidth
                      defaultValue="Choose"
                      value={formData.attendanceTime}
                      onChange={(e) => handleInputChange(e)}
                      name="attendanceTime"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      {Time.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>

                    <FormControl fullWidth>
                      <InputLabel id="demo-company-select-label">Designation Name</InputLabel>
                      <Select
                        labelId="demo-company-select-label"
                        id="selectedCompany"
                        value={formData.designationName}
                        name="designationName"
                        label="designationName"
                        onChange={(e) => handleInputChange(e)}
                        required
                      >
                        {designation &&
                          designation.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.designationName}>
                                {item.designationName}
                              </MenuItem>
                            );
                          })}
                        <MenuItem className="linkStyle" value="addNewdesignation">
                          <a href="#">
                            <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
                            Create Designation
                          </a>
                        </MenuItem>

                      </Select>
                    </FormControl>
                  </div>
                  <div className="data-input-fields">
                    <TextField
                      id="employeeType"
                      margin="dense"
                      select
                      label="Employee Type"
                      fullWidth
                      defaultValue="Choose"
                      value={formData.employeeType}
                      onChange={(e) => handleInputChange(e)}
                      name="employeeType"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      {EmpType.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    <TextField
                      id="companyType"
                      margin="dense"
                      select
                      label="Company Type"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      value={formData.companyType}
                      onChange={(e) => handleInputChange(e)}
                      name="companyType"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      {Type.map((option, index) => (
                        <option key={index} value={option.label}>
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
                      disabled
                      error={dateError}
                      helperText={dateError && "Please select the current date"}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                  <div className="data-buttons">
                    <Button
                      id="input-btn-cancel"
                      onClick={cancelButton}
                      variant="outlined"
                    >
                      Back
                    </Button>
                    <Button
                      id="input-btn-submit"
                      type="submit"
                      onClick={handleNext}
                      disabled={buttonCheckBasicInfo ? false : true}
                      variant="outlined"
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </DialogContent>
              </div>
            </Card>
          </div>
        )}

        {activeStep === 1 && (
          <div style={{ marginTop: "30px" }}>
            <Card variant="outlined">
              <div style={{ marginTop: "20px" }}>
                <h3 className="form-header">Bank Details</h3>
                <DialogContent>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Account Number"
                      type="number"
                      fullWidth
                      name="accountNumber"
                      id="accountNumber"
                      value={formData.accountNumber}
                      onChange={(e) => handleInputChange(e)}
                      required
                      error={accountErrorMsg !== ""}
                      helperText={accountErrorMsg}
                      InputProps={{
                        minLength: 2, // Set your minimum length here
                        maxLength: 15, // Set your maximum length here
                      }}
                      onInput={(e) => {
                        e.target.value = enforceMaxLengthAccount(
                          e.target.value,
                          10
                        );
                        handleAccountChange(e);
                      }}
                    />

                    <TextField
                      id="bankName"
                      margin="dense"
                      select
                      label="Bank Name"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.bankName}
                      onChange={(e) => handleInputChange(e)}
                      name="bankName"
                    >
                      {bankNameType.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>

                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="IFCS CODE "
                      type="text"
                      fullWidth
                      name="ifscNumber"
                      id="ifscNumber"
                      value={formData.ifscNumber}
                      onChange={(e) => handleInputChange(e)}
                    />

                    <TextField
                      margin="dense"
                      label="Branch Name "
                      type="text"
                      fullWidth
                      name="branchName"
                      id="branchName"
                      value={formData.branchName}
                      onChange={(e) => handleInputChange(e)}
                      required
                      error={branchErrorMsg !== ""}
                      helperText={branchErrorMsg}
                      InputProps={{
                        minLength: 2, // Set your minimum length here
                        maxLength: 30, // Set your maximum length here
                      }}
                      onInput={(e) => {
                        e.target.value = enforceMaxLengthBranch(
                          e.target.value,
                          10
                        );
                        handleBranchChange(e);
                      }}
                    />
                  </div>

                  <div className="data-buttons">
                    <Button
                      id="input-btn-cancel"
                      type="submit"
                      onClick={handleBack}
                      variant="outlined"
                    >
                      Previous
                    </Button>

                    <Button
                      id="input-btn-submit"
                      onClick={handleNext}
                      disabled={buttonCheckBankDetails ? false : true}
                      variant="outlined"
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </DialogContent>
              </div>
            </Card>
          </div>
        )}

        {activeStep === 2 && (
          <div style={{ marginTop: "30px" }}>
            <Card variant="outlined">
              <div style={{ marginTop: "20px" }}>
                <h3 className="form-header">Salary Details</h3>
                <DialogContent>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Basic Salary*"
                      type="number"
                      fullWidth
                      name="basicSalary"
                      id="basicSalary"
                      value={formData.basicSalary}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      margin="dense"
                      label="Transport Allowance*"
                      type="number"
                      fullWidth
                      name="transportAllowance"
                      id="transportAllowance"
                      value={formData.transportAllowance}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>

                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Tin Number "
                      type="number"
                      fullWidth
                      name="tinNumber"
                      id=" tinNumber"
                      value={formData.tinNumber}
                      onChange={(e) => handleInputChange(e)}
                      required
                      InputProps={{
                        minLength: 2, // Set your minimum length here
                        maxLength: 20, // Set your maximum length here
                      }}
                      onInput={(e) => {
                        e.target.value = enforceMaxLength(e.target.value, 10);
                        handleTinChange(e);
                      }}
                    />

                    <TextField
                      margin="dense"
                      label="HRA Allowance "
                      type="number"
                      fullWidth
                      name="hraAllowances"
                      id="hraAllowances"
                      value={formData.hraAllowances}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      margin="dense"
                      label="Other Insurance "
                      type="number"
                      fullWidth
                      name="otherInsurance"
                      id="otherInsurance"
                      value={formData.otherInsurance}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />

                    <TextField
                      margin="dense"
                      label="PF Allowance "
                      type="number"
                      fullWidth
                      name="pfAllowances"
                      id="pfAllowances"
                      value={formData.pfAllowances}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="DA Allowances "
                      type="number"
                      fullWidth
                      name="daAllowances"
                      id="daAllowances"
                      value={formData.daAllowances}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />

                    <TextField
                      margin="dense"
                      label="Medical Allowance "
                      type="number"
                      fullWidth
                      name="medicalAllowances"
                      id="medicalAllowances"
                      value={formData.medicalAllowances}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      margin="dense"
                      label="Other Allowance "
                      type="number"
                      fullWidth
                      name="otherAllowances"
                      id="otherAllowances"
                      value={formData.otherAllowances}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      margin="dense"
                      label="Tax "
                      type="number"
                      fullWidth
                      name="tax"
                      id="tax"
                      value={formData.tax}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      margin="dense"
                      label="Gross Salary "
                      type="number"
                      fullWidth
                      name="grossSalary"
                      id="grossSalary"
                      value={sal}
                      onChange={(e) => handleInputChange(e)}
                      required
                      disabled
                    />
                  </div>
                  <div className="data-buttons">
                    <Button
                      id="input-btn-cancel"
                      type="submit"
                      onClick={handleBack}
                      variant="outlined"
                    >
                      Previous
                    </Button>

                    <Button
                      id="input-btn-submit"
                      onClick={handleNext}
                      disabled={buttonCheckSalaryDetails ? false : true}
                      variant="outlined"
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </DialogContent>
              </div>
            </Card>
          </div>
        )}

        {activeStep === 3 && (
          <div style={{ marginTop: "30px" }}>
            <Card variant="outlined">
              <div style={{ marginTop: "20px" }}>
                <h3 className="form-header">Personal Info</h3>
                <DialogContent>
                  <div className="data-input-fields">
                    <TextField
                      id="subDepartment"
                      margin="dense"
                      select
                      label="Sub Department"
                      fullWidth
                      defaultValue="Choose"
                      required
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.subDepartment}
                      onChange={(e) => handleInputChange(e)}
                      name="subDepartment"
                    >
                      {SubDepartmentType.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    <TextField
                      margin="dense"
                      label="Position "
                      type="text"
                      fullWidth
                      name="position"
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>

                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Duty Type"
                      type="text"
                      fullWidth
                      name="dutyType"
                      id="dutyType"
                      value={formData.dutyType}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />

                    <TextField
                      margin="dense"
                      label="Hire Date "
                      type="date"
                      fullWidth
                      name="hireDate"
                      id="hireDate"
                      value={formData.hireDate}
                      onChange={(e) => handleInputChange(e)}
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      margin="dense"
                      label="Joining Date "
                      type="date"
                      fullWidth
                      name="joiningDate"
                      id="joiningDate"
                      value={formData.joiningDate}
                      onChange={(e) => handleInputChange(e)}
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="rateType"
                      margin="dense"
                      select
                      label="Rate Type"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.rateType}
                      onChange={(e) => handleInputChange(e)}
                      name="rateType"
                    >
                      {RateType.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Rate"
                      type="number"
                      fullWidth
                      name="rateNumber"
                      id="rateNumber"
                      value={formData.rateNumber}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      margin="dense"
                      label="Monthly Work Hours"
                      type="number"
                      fullWidth
                      name="monthlyWorkHours"
                      id="monthlyWorkHours"
                      value={formData.monthlyWorkHours}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      margin="dense"
                      label="Pay Frequency"
                      type="text"
                      fullWidth
                      name="payFrequency"
                      id="payFrequency"
                      value={formData.payFrequency}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>

                  <div className="data-buttons">
                    <Button
                      id="input-btn-cancel"
                      type="submit"
                      onClick={handleBack}
                      variant="outlined"
                    >
                      Previous
                    </Button>

                    <Button
                      id="input-btn-submit"
                      onClick={handleNext}
                      disabled={buttonCheckPersonalInfo ? false : true}
                      variant="outlined"
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </DialogContent>
              </div>
            </Card>
          </div>
        )}

        {activeStep === 4 && (
          <div style={{ marginTop: "30px" }}>
            <Card variant="outlined">
              <div style={{ marginTop: "20px" }}>
                <h3 className="form-header">Benefit</h3>
                <DialogContent>
                  <div className="data-input-fields">
                    <TextField
                      id="medical"
                      margin="dense"
                      select
                      label="medical"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.medical}
                      onChange={(e) => handleInputChange(e)}
                      name="medical"
                    >
                      {medicalType.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>

                    <TextField
                      id="family"
                      margin="dense"
                      select
                      label="Family"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.family}
                      onChange={(e) => handleInputChange(e)}
                      name="family"
                    >
                      {familyType.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>

                    <TextField
                      id="transportation"
                      margin="dense"
                      select
                      label="transportation"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.transportation}
                      onChange={(e) => handleInputChange(e)}
                      name="transportation"
                    >
                      {TransportationType.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>

                    <TextField
                      id="others"
                      margin="dense"
                      select
                      label="others"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.others}
                      onChange={(e) => handleInputChange(e)}
                      name="others"
                    >
                      {othersType.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div className="data-buttons">
                    <Button
                      id="input-btn-cancel"
                      type="submit"
                      onClick={handleBack}
                      variant="outlined"
                    >
                      Previous
                    </Button>

                    <Button
                      id="input-btn-submit"
                      onClick={handleNext}
                      disabled={buttonCheckBenefit ? false : true}
                      variant="outlined"
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </DialogContent>
              </div>
            </Card>
          </div>
        )}

        {activeStep === 5 && (
          <div style={{ marginTop: "30px" }}>
            <Card variant="outlined">
              <div style={{ marginTop: "20px" }}>
                <h3 className="form-header">Supervisor</h3>
                <DialogContent>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Team Leader Name "
                      type="text"
                      fullWidth
                      name="teamLeaderName"
                      id="teamLeaderName"
                      value={formData.teamLeaderName}
                      onChange={(e) => handleInputChange(e)}
                      required
                      InputProps={{
                        minLength: 2, // Set your minimum length here
                        maxLength: 30, // Set your maximum length here
                      }}
                      onInput={(e) => {
                        e.target.value = enforceMaxLength(e.target.value, 10);
                        handleTeamChange(e);
                      }}
                    />

                    <TextField
                      margin="dense"
                      label="Reporting To "
                      type="text"
                      fullWidth
                      name="reportingTo"
                      id="reportingTo"
                      value={formData.reportingTo}
                      onChange={(e) => handleInputChange(e)}
                      required
                      InputProps={{
                        minLength: 2, // Set your minimum length here
                        maxLength: 30, // Set your maximum length here
                      }}
                      onInput={(e) => {
                        e.target.value = enforceMaxLength(e.target.value, 10);
                        handleReportChange(e);
                      }}
                    />
                  </div>

                  <div className="data-buttons">
                    <Button
                      id="input-btn-cancel"
                      type="submit"
                      onClick={handleBack}
                      variant="outlined"
                    >
                      Previous
                    </Button>

                    <Button
                      id="input-btn-submit"
                      onClick={handleNext}
                      disabled={buttonCheckSupervisor ? false : true}
                      variant="outlined"
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </DialogContent>
              </div>
            </Card>
          </div>
        )}

        {activeStep === 6 && (
          <div style={{ marginTop: "30px" }}>
            <Card variant="outlined">
              <div style={{ marginTop: "20px" }}>
                <h3 className="form-header">Biographical Info</h3>
                <DialogContent>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Date Of Birth "
                      type="date"
                      fullWidth
                      name="dateOfBirth"
                      id="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange(e)}
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      id="gender"
                      margin="dense"
                      select
                      label="Gender"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.gender}
                      onChange={(e) => handleInputChange(e)}
                      name="gender"
                    >
                      {gendertype.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>

                    <TextField
                      id="maritalStatus"
                      margin="dense"
                      select
                      label="Marital Status"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.maritalStatus}
                      onChange={(e) => handleInputChange(e)}
                      name="maritalStatus"
                    >
                      {status.map((option, index) => (
                        <option key={index} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Work In City "
                      type="text"
                      fullWidth
                      name="workInCity"
                      id="workInCity"
                      value={formData.workInCity}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />

                    <TextField
                      margin="dense"
                      label="City Of Residence"
                      type="text"
                      fullWidth
                      name="cityOfResidence"
                      id="cityOfResidence"
                      value={formData.cityOfResidence}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      id="workPermit"
                      margin="dense"
                      select
                      label="Work Permit"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.workPermit}
                      onChange={(e) => handleInputChange(e)}
                      name="workPermit"
                    >
                      {Permit.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>

                    <TextField
                      margin="dense"
                      label="Upload Photo"
                      type="file"
                      fullWidth
                      name="uploadPhoto"
                      id="uploadPhoto"
                      inputProps={{ accept: ".jpg, .jpeg, .png" }}
                      onChange={(e) => handleInputChange(e)}
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                      
                    />
                  </div>
                  <div className="data-buttons">
                    <Button
                      id="input-btn-cancel"
                      type="submit"
                      onClick={handleBack}
                      variant="outlined"
                    >
                      Previous
                    </Button>

                    <Button
                      id="input-btn-submit"
                      onClick={handleNext}
                      disabled={buttonCheckBiographicalInfo ? false : true}
                      variant="outlined"
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </DialogContent>
              </div>
            </Card>
          </div>
        )}

        {activeStep === 7 && (
          <div style={{ marginTop: "30px" }}>
            <Card variant="outlined">
              <div style={{ marginTop: "20px" }}>
                <h3 className="form-header">Additional Address</h3>
                <DialogContent>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="Business Email"
                      type="email"
                      fullWidth
                      name="businessEmail"
                      id="businessEmail"
                      value={formData.businessEmail}
                      onChange={(e) => handleInputChange(e)}
                      required
                    // error={emailBusinessError}
                    // helperText={
                    //   emailBusinessError
                    //     ? "Please enter a valid email address."
                    //     : ""
                    // }
                    />

                    <TextField
                      margin="dense"
                      label="Home Phone "
                      type="number"
                      fullWidth
                      name="homePhone"
                      id="homePhone"
                      value={formData.homePhone}
                      onChange={(e) => handleInputChange(e)}
                      required
                      error={phoneHomeError}
                      helperText={phoneHomeError ? "Invalid phone number" : ""}
                    />
                    <TextField
                      margin="dense"
                      label="Cell Phone "
                      type="number"
                      fullWidth
                      name="cellPhone"
                      id="cellPhone"
                      value={formData.cellPhone}
                      onChange={(e) => handleInputChange(e)}
                      required
                      error={phoneCellError}
                      helperText={phoneCellError ? "Invalid phone number" : ""}
                    />
                  </div>

                  <div className="data-buttons">
                    <Button
                      id="input-btn-cancel"
                      type="submit"
                      onClick={handleBack}
                      variant="outlined"
                    >
                      Previous
                    </Button>

                    <Button
                      id="input-btn-submit"
                      onClick={handleNext}
                      disabled={buttonCheckAdditionalAddress ? false : true}
                      variant="outlined"
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </DialogContent>
              </div>
            </Card>
          </div>
        )}

        {activeStep === 8 && (
          <div style={{ marginTop: "30px" }}>
            <Card variant="outlined">
              <div style={{ marginTop: "20px" }}>
                <h3 className="form-header">Login Info</h3>
                <DialogContent>
                  <div className="data-input-fields">
                    <TextField
                      margin="dense"
                      label="User Name/Email "
                      type="text"
                      fullWidth
                      name="userEmailOrName"
                      id="userEmailOrName"
                      value={formData.userEmailOrName}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      margin="dense"
                      label="Password "
                      type="password"
                      fullWidth
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />

                    <TextField
                      margin="dense"
                      label="Upload Document"
                      type="file"
                      fullWidth
                      name="uploadDocument"
                      id="uploadDocument"
                      inputProps={{ accept: ".pdf" }}
                      onChange={(e) => handleInputChange(e)}
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                  <TextField
                    id="status"
                    margin="dense"
                    select
                    label="status"
                    fullWidth
                    defaultValue="Choose"
                    SelectProps={{
                      native: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formData.status}
                    onChange={(e) => handleInputChange(e)}
                    name="status"
                  >
                    {statuses.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <div className="data-buttons">
                    <Button
                      id="input-btn-cancel"
                      type="submit"
                      onClick={handleBack}
                      variant="outlined"
                    >
                      PREVIOUS
                    </Button>
                    <Button
                      id="input-btn-submit"
                      className="cancel"
                      onClick={saveEmployee}
                      disabled={buttonCheckLoginInfo ? false : true}
                      variant="outlined"
                    >
                      SUBMIT
                    </Button>
                  </div>
                </DialogContent>
              </div>
            </Card>
          </div>
        )}
      </form>
    </div>
  );
};

export default EmployeeForm;
