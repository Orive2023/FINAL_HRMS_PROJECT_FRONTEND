import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import TextField from "@mui/material/TextField";

import Header from "./Header";
import MainDetails from "./MainDetails";
import Dates from "./HeadContent";
import Table from "./JoiningContent";
import Footer from "./Footer";
import JoiningExpTabale from "./JoiningExpTable";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import Head from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import { useNavigate } from "react-router";

const ShowInvoice = () => {
  const [employee, setEmployee] = useState([]);
  const [showInvoice, setShowInvoice] = useState(false);
  const [referrenceNo, setReferrenceNo] = useState("");
  const [formReleaseDate, setFormReleaseDate] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");
  const [annualCtc, setAnnualCtc] = useState("");
  const [workingTiming, setWorkingTiming] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [salaryComponentPerMonth, setSalaryComponentPerMonth] = useState("");
  const [salaryComponentPerBasic, setSalaryComponentPerBasic] = useState("");
  const [specialAllowance, setSpecialAllowance] = useState("");
  const [hraConveyance, setHraConveyance] = useState("");
  const [probationPeriod, setProbationPeriod] = useState("");
  const [grossSalary, setGrossSalary] = useState("");
  const [aaddharcardNo, setAaddharcardNo] = useState("");
  const [pancardNo, setPancardNo] = useState("");
  const [reportingManager, setReportingManager] = useState("");
  const [casualSickLeaves, setCasualSickLeaves] = useState("");
  const [earnedLeaves, setEarnedLeaves] = useState("");
  const [marksheets, setMarksheets] = useState("");
  const [department, setDepartment] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [username, setUsername] = useState("");
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [medical, setMedical] = useState("");
  const [uniformAllowance, setUniformAllowance] = useState("");
  const [lta, setLta] = useState("");
  const [mealVoucher, setMealVoucher] = useState("");
  const [educationAllowance, setEducationAllowance] = useState("");
  const [monthlyGrossSalary, setMonthlyGrossSalary] = useState("");
  const [gratuity, setGratuity] = useState("");
  const [mediclaimEmployerShare, setMediclaimEmployerShare] = useState("");
  const [annualCtcFixedVariable, setAnnualCtcFixedVariable] = useState("");
  const [annualVariableCtc, setAnnualVariableCtc] = useState("");
  const [carDriverReimursement, setCarDriverReimursement] = useState("");
  const [recDelete, setRecDelete] = useState("");

  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    referrenceNo: "",
    formReleaseDate: "",
    employeeName: "",
    username: "",
    employeeAddress: "",
    subject: "",
    employeeDesignation: "",
    annualCtc: "",
    joiningDate: "",
    salaryComponentPerMonth: "",
    salaryComponentPerBasic: "",
    specialAllowance: "",
    grossSalary: "",
    aaddharcardNo: "",
    probationPeriod: "",
    pancardNo: "",
    marksheets: "",
    reportingManager: "",
    casualSickLeaves: "",
    earnedLeaves: "",
    noticePeriod: "",
    department: "",
    // workingHours: "",
    // workingTiming: "",
  });


  const handleSave = async () => {
    setShowInvoice(false);
    await axios.post(
      "https://api.orivehrms.com/experiencejoiningletter/create/experiencejoiningletter",
      formData
    );
  };

  const [getTable, setGetTable] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://api.orivehrms.com/experiencejoiningletter/get/experiencejoiningletter"
    );
    setGetTable(result.data);
  };

  const fetchEmployee = async () => {
    try {
      const response = await axios.get("https://api.orivehrms.com/employee/get/employee");
      setEmployee(response.data); // Update the employee state with fetched data
      return response.data;
    } catch (error) {
      console.error("Error fetching company data", error);
      return [];
    }
  };
 
  
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "employeeName" && value === "addNewEmployee") {
      navigate("/hr/employee/employee");
      return;
    }
    
  
    const selectedEmployee = employee.find((emp) => emp.employeeName === value);

    if (selectedEmployee) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        username:selectedEmployee.username || ""
        
       } );
    }else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    getData();
    fetchEmployee();
  }, []);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  console.log(formData);

  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Head menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part">
          {showInvoice ? (
            <>
              <button
                onClick={handlePrint}
                className=" fw-bold text-white rounded shadow border-2 border-gray-500 hover:bg-transparent transition-all duration-300"
              >
                Print/Download
              </button>

              <div ref={componentRef} className="p-5">
                <Header />
                <MainDetails
                  referrenceNo={referrenceNo}
                  date={formReleaseDate}
                />
                <h1 className="text-decoration-underline font-bold uppercase tracking-wide text-2xl mb-3 appoint">
                  Appointment Letter
                </h1>
                <Dates
                  employeeName={employeeName}
                  username={username}
                  employeeAddress={employeeAddress}
                />

                <Table
                  subject={subject}
                  casualSickLeaves={casualSickLeaves}
                  reportingManager={reportingManager}
                  employeeDesignation={employeeDesignation}
                  annualCtcFixedVariable={annualCtcFixedVariable}
                  annualVariableCtc={annualVariableCtc}
                  mediclaimEmployerShare={mediclaimEmployerShare}
                  gratuity={gratuity}
                  monthlyGrossSalary={monthlyGrossSalary}
                  educationAllowance={educationAllowance}
                  carDriverReimursement={carDriverReimursement}
                  mealVoucher={mealVoucher}
                  lta={lta}
                  uniformAllowance={uniformAllowance}
                  medical={medical}
                  specialAllowance={specialAllowance}
                  hraConveyance={hraConveyance}
                  salaryComponentPerBasic={salaryComponentPerBasic}
                  salaryComponentPerMonth={salaryComponentPerMonth}
                  employeeName={employeeName}
                  username={username}
                  annualCtc={annualCtc}
                  workingHours={workingHours}
                  workingTiming={workingTiming}
                  earnedLeaves={earnedLeaves}
                  probationPeriod={probationPeriod}
                  noticePeriod={noticePeriod}
                />

                <Footer />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <button
                    onClick={() => setShowInvoice(false)}
                    className="btn-b mt-5 fw-bold rounded shadow border-2 hover:bg-transparent transition-all duration-300"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleSave}
                    className="btn-b mt-5 fw-bold rounded shadow border-2 hover:bg-transparent transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="d-flex flex-column justify-content-center form-exl">
              <h3>Experience Joining Letter</h3>
              <form className="bg-white">
                <div className="data-input-fields">
                  <TextField
                    id="referrenceNo"
                    autoComplete="off"
                    name="referrenceNo"
                    margin="dense"
                    label="Enter Reference No:"
                    fullWidth
                    value={formData.referrenceNo}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setReferrenceNo(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                  <TextField
                    id="formReleaseDate"
                    type="date"
                    autoComplete="off"
                    name="formReleaseDate"
                    margin="dense"
                    label="Date :"
                    fullWidth
                    value={formData.formReleaseDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setFormReleaseDate(e.target.value);

                      handleInputChange(e);
                    }}
                  ></TextField>
                  <FormControl fullWidth>
                  <InputLabel id="demo-employee-select-label">Employee Name</InputLabel>
                  <Select
                    labelId="demo-employee-select-label"
                    id=""
                    value={formData.employeeName}
                    name="employeeName"
                    label="employeeName"
                    required
                    onChange={(e) => {
                      setEmployeeName(e.target.value);
                      handleInputChange(e);
                    }}
                  >
                    {employee &&
                      employee.map((item, index) => {
                        return (
                          <MenuItem key={index} value={item.employeeName}>
                            {item.employeeName}
                          </MenuItem>
                        );
                      })}
                     <MenuItem className="linkStyle" value="addNewEmployee">
              <a href="#">
                <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
               Create Employee
              </a>
            </MenuItem>
        
                  </Select>
                </FormControl>
        
                <TextField
                margin="dense"
                label="username"
                type="string"
                fullWidth
                name="username"
                id="username"
                value={formData.username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  handleInputChange(e);
                }}
                required
                disabled
              />
                  <TextField
                    id="employeeAddress"
                    type="text"
                    autoComplete="off"
                    name="employeeAddress"
                    margin="dense"
                    label="Enter Employee Address:"
                    fullWidth
                    value={formData.employeeAddress}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setEmployeeAddress(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                
                </div>

                <div className="data-input-fields">
                  <TextField
                    id="subject"
                    type="text"
                    autoComplete="off"
                    name="subject"
                    margin="dense"
                    label=" Enter Subject:"
                    fullWidth
                    value={formData.subject}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="employeeDesignation"
                    type="text"
                    autoComplete="off"
                    name="employeeDesignation"
                    margin="dense"
                    label=" Enter Designation:"
                    fullWidth
                    value={formData.employeeDesignation}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setEmployeeDesignation(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="annualCtc"
                    type="text"
                    autoComplete="off"
                    name="annualCtc"
                    margin="dense"
                    label="Enter CTC of Rs.:"
                    fullWidth
                    value={formData.annualCtc}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setAnnualCtc(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>

                <div className="data-input-fields">
                  <TextField
                    id="workingHours"
                    type="text"
                    autoComplete="off"
                    name="workingHours"
                    margin="dense"
                    label="Enter Working Hours:"
                    fullWidth
                    value={formData.workingHours}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setWorkingHours(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="workingTiming"
                    type="text"
                    autoComplete="off"
                    name="workingTiming"
                    margin="dense"
                    label="Enter Working Timing:"
                    fullWidth
                    value={formData.workingTiming}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setWorkingTiming(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="noticePeriod"
                    type="text"
                    autoComplete="off"
                    name="noticePeriod"
                    margin="dense"
                    label="Enter Notice Period Time:"
                    fullWidth
                    value={formData.noticePeriod}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setNoticePeriod(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>
                <div className="data-input-fields">
                  <TextField
                    id="joiningDate"
                    type="date"
                    autoComplete="off"
                    name="joiningDate"
                    margin="dense"
                    label="Enter Joining Date:"
                    fullWidth
                    value={formData.joiningDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setJoiningDate(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="salaryComponentPerMonth"
                    type="text"
                    autoComplete="off"
                    name="salaryComponentPerMonth"
                    margin="dense"
                    label="Enter Salary Component Per Month:"
                    fullWidth
                    value={formData.salaryComponentPerMonth}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setSalaryComponentPerMonth(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="salaryComponentPerBasic"
                    type="text"
                    autoComplete="off"
                    name="salaryComponentPerBasic"
                    margin="dense"
                    label="Enter Salary Component Per Basic:"
                    fullWidth
                    value={formData.salaryComponentPerBasic}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setSalaryComponentPerBasic(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>
                <div className="data-input-fields">
                  <TextField
                    id="hraConveyance"
                    type="text"
                    autoComplete="off"
                    name="hraConveyance"
                    margin="dense"
                    label="Enter HRA CONVEYANCE:"
                    fullWidth
                    value={formData.hraConveyance}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setHraConveyance(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="specialAllowance"
                    type="text"
                    autoComplete="off"
                    name="specialAllowance"
                    margin="dense"
                    label="Enter Special Allowance:"
                    fullWidth
                    value={formData.specialAllowance}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setSpecialAllowance(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                  <TextField
                    id="medical"
                    type="text"
                    autoComplete="off"
                    name="medical"
                    margin="dense"
                    label="Enter Medical:"
                    fullWidth
                    value={formData.medical}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setMedical(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>

                <div className="data-input-fields">
                  <TextField
                    id="uniformAllowance"
                    type="text"
                    autoComplete="off"
                    name="uniformAllowance"
                    margin="dense"
                    label="Enter Uniform Allowance:"
                    fullWidth
                    value={formData.uniformAllowance}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setUniformAllowance(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="lta"
                    type="text"
                    autoComplete="off"
                    name="lta"
                    margin="dense"
                    label="Enter LTA:"
                    fullWidth
                    value={formData.lta}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setLta(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                  <TextField
                    id="mealVoucher"
                    type="text"
                    autoComplete="off"
                    name="mealVoucher"
                    margin="dense"
                    label="Enter Meal Voucher:"
                    fullWidth
                    value={formData.mealVoucher}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setMealVoucher(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>

                <div className="data-input-fields">
                  <TextField
                    id="carDriverReimursement"
                    type="text"
                    autoComplete="off"
                    name="carDriverReimursement"
                    margin="dense"
                    label="Enter Car & Driver Reimbursement:"
                    fullWidth
                    value={formData.carDriverReimursement}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setCarDriverReimursement(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="educationAllowance"
                    type="text"
                    autoComplete="off"
                    name="educationAllowance"
                    margin="dense"
                    label="Enter Education Allowance:"
                    fullWidth
                    value={formData.educationAllowance}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setEducationAllowance(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                  <TextField
                    id="monthlyGrossSalary"
                    type="text"
                    autoComplete="off"
                    name="monthlyGrossSalary"
                    margin="dense"
                    label="Enter Monthly Gross Salary:"
                    fullWidth
                    value={formData.monthlyGrossSalary}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {setMonthlyGrossSalary(e.target.value)
                    handleInputChange(e)}}
                  ></TextField>
                </div>

                <div className="data-input-fields">
                  <TextField
                    id="gratuity"
                    type="text"
                    autoComplete="off"
                    name="gratuity"
                    margin="dense"
                    label="Enter Gratuity:"
                    fullWidth
                    value={formData.gratuity}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {setGratuity(e.target.value)
                      handleInputChange(e)}}
                  ></TextField>
                  <TextField
                    id="mediclaimEmployerShare"
                    type="text"
                    autoComplete="off"
                    name="mediclaimEmployerShare"
                    margin="dense"
                    label="Enter Mediclaim Employer’s Share:"
                    fullWidth
                    value={formData.mediclaimEmployerShare}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {setMediclaimEmployerShare(e.target.value)
                      handleInputChange(e)}}
                  ></TextField>

                  <TextField
                    id="annualVariableCtc"
                    type="text"
                    autoComplete="off"
                    name="annualVariableCtc"
                    margin="dense"
                    label="Enter Annual Variable CTC:"
                    fullWidth
                    value={formData.annualVariableCtc}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {setAnnualVariableCtc(e.target.value)
                      handleInputChange(e)}}
                  ></TextField>
                </div>
                <div className="data-input-fields">
                  <TextField
                    id="annualCtcFixedVariable"
                    type="text"
                    autoComplete="off"
                    name="annualCtcFixedVariable"
                    margin="dense"
                    label="Enter Annual CTC (FIXED + VARIABLE):"
                    fullWidth
                    value={formData.annualCtcFixedVariable}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {setAnnualCtcFixedVariable(e.target.value)
                      handleInputChange(e)}}
                  ></TextField>
                  <TextField
                    id="grossSalary"
                    type="text"
                    autoComplete="off"
                    name="grossSalary"
                    margin="dense"
                    label="Enter Gross Salary:"
                    fullWidth
                    value={formData.grossSalary}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setGrossSalary(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                  <TextField
                    id="probationPeriod"
                    type="text"
                    autoComplete="off"
                    name="probationPeriod"
                    margin="dense"
                    label="Enter Probation Period:"
                    fullWidth
                    value={formData.probationPeriod}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setProbationPeriod(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>
                <div className="data-input-fields">
                  <TextField
                    id="aaddharcardNo"
                    type="text"
                    autoComplete="off"
                    name="aaddharcardNo"
                    margin="dense"
                    label="Enter Adhar Card No.:"
                    fullWidth
                    value={formData.aaddharcardNo}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setAaddharcardNo(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="pancardNo"
                    type="text"
                    autoComplete="off"
                    name="pancardNo"
                    margin="dense"
                    label=" Enter Pan Card No.:"
                    fullWidth
                    value={formData.pancardNo}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setPancardNo(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                  <TextField
                    id="marksheets"
                    type="text"
                    autoComplete="off"
                    name="marksheets"
                    margin="dense"
                    label="Enter Marksheets:"
                    fullWidth
                    value={formData.marksheets}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setMarksheets(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>

                <div className="data-input-fields">
                  <TextField
                    id="reportingManager"
                    type="text"
                    autoComplete="off"
                    name="reportingManager"
                    margin="dense"
                    label="Enter Reporting Manager:"
                    fullWidth
                    value={formData.reportingManager}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setReportingManager(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="casualSickLeaves"
                    type="text"
                    autoComplete="off"
                    name="casualSickLeaves"
                    margin="dense"
                    label=" Enter Casual Sick Leaves:"
                    fullWidth
                    value={formData.casualSickLeaves}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setCasualSickLeaves(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                  <TextField
                    id="earnedLeaves"
                    type="text"
                    autoComplete="off"
                    name="earnedLeaves"
                    margin="dense"
                    label="Enter Earned Leaves:"
                    fullWidth
                    value={formData.earnedLeaves}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setEarnedLeaves(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                   <TextField
                    id="department"
                    type="text"
                    autoComplete="off"
                    name="department"
                    margin="dense"
                    label="Enter Department:"
                    fullWidth
                    value={formData.department}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setDepartment(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>
              </form>

              <button
                onClick={() => setShowInvoice(true)}
                className="mt-5 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 btn-b"
              >
                Preview Joining Letter Experience{" "}
              </button>
              <JoiningExpTabale
                getTable={getTable}
                setRecDelete={setRecDelete}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowInvoice;