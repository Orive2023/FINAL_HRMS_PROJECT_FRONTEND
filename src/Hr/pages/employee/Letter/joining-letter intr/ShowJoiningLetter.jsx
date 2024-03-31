import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Dates from "./Dates";
import Table from "./MainContent";
import Footer from "./Footer";
import JoiningExpTabale from "./JoiningInternTable";
import Head from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
const ShowInvoice = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [referenceNo, setReferenceNo] = useState("");
  const [formReleaseDate, setFormReleaseDate] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [internStipend, setInternStipend] = useState("");
  const [weeklyComeOfficeForDays, setWeeklyComeOfficeForDays] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [subject, setSubject] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [reportingTo, setReportingTo] = useState("");
  const [recDelete, setRecDelete] = useState("");
  const [signBondWithCompanyForMonths, setSignBondWithCompanyForMonths] =
    useState("");
  const [menu, setMenu] = useState(false);

  const [formData, setFormData] = useState({
    referenceNo: "",
    formReleaseDate: "",
    officeAddress: "",
    candidateName: "",
    collegeName: "",
    joiningDate: "",
    submissionDate: "",
    subject: "",
    employeeDesignation: "",
    department: "",
    startDate: "",
    endDate: "",
    duration: "",
    location: "",
    internStipend: "",
    weeklyComeOfficeForDays: "",
    reportingTo: "",
    signBondWithCompanyForMonths: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = async () => {
    setShowInvoice(false);
    await axios.post(
      "https://api.orivehrms.com/internjoiningletter/create/internjoiningletter",
      formData
    );
  };

  const [getTable, setGetTable] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://api.orivehrms.com/internjoiningletter/get/internjoiningletter"
    );
    setGetTable(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    getData();
    console.log("Form submitted:", formData);
  };

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
                  referenceNo={referenceNo}
                  formReleaseDate={formReleaseDate}
                />
                <p className="">Orive Solutions Pvt Ltd</p>
                <p className="">DLF Cyber city, Infocity</p>
                <p className="">Bhubaneswar, Odisha</p>

                <Dates
                  candidateName={candidateName}
                  collegeName={collegeName}
                  formReleaseDate={formReleaseDate}
                />
                <Table
                  submissionDate={submissionDate}
                  employeeDesignation={employeeDesignation}
                  department={department}
                  subject={subject}
                  startDate={startDate}
                  endDate={endDate}
                  duration={duration}
                  location={location}
                  internStipend={internStipend}
                  weeklyComeOfficeForDays={weeklyComeOfficeForDays}
                  setSignBondWithCompanyForMonths={signBondWithCompanyForMonths}
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
            <div className="d-flex form-exl flex-column justify-content-center">
              <h3>Intern Joining Letter</h3>
              <form className="bg-white">
                <div className="data-input-fields">
                  <TextField
                    id="referenceNo"
                    autoComplete="off"
                    name="referenceNo"
                    margin="dense"
                    label="Enter Reference No:"
                    fullWidth
                    value={formData.referenceNo}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setReferenceNo(e.target.value);
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

                  <TextField
                    id="candidateName"
                    type="text"
                    autoComplete="off"
                    name="candidateName"
                    margin="dense"
                    label="Enter Candidate Name:"
                    fullWidth
                    value={formData.candidateName}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setCandidateName(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>

                <div className="data-input-fields">
                  <TextField
                    id="collegeName"
                    type="text"
                    autoComplete="off"
                    name="collegeName"
                    margin="dense"
                    label="Enter College Name:"
                    fullWidth
                    value={formData.collegeName}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setCollegeName(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="subject"
                    type="text"
                    autoComplete="off"
                    name="subject"
                    margin="dense"
                    label="Enter Subject:"
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
                    label="Enter Position:"
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
                </div>

                <div className="data-input-fields">
                  <TextField
                    id="department"
                    type="text"
                    autoComplete="off"
                    name="department"
                    margin="dense"
                    label=" Enter Department:"
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
                  <TextField
                    id="startDate"
                    type="date"
                    autoComplete="off"
                    name="startDate"
                    margin="dense"
                    label="Enter Start Date:"
                    fullWidth
                    value={formData.startDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="endDate"
                    type="date"
                    autoComplete="off"
                    name="endDate"
                    margin="dense"
                    label="Enter End Date:"
                    fullWidth
                    value={formData.endDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setEndDate(e.target.value);
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
                    id="duration"
                    type="text"
                    autoComplete="off"
                    name="duration"
                    margin="dense"
                    label="Enter Duration:"
                    fullWidth
                    value={formData.duration}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setDuration(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="location"
                    type="text"
                    autoComplete="off"
                    name="location"
                    margin="dense"
                    label="Enter Location:"
                    fullWidth
                    value={formData.location}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>
                <div className="data-input-fields">
                  <TextField
                    id="internStipend"
                    type="text"
                    autoComplete="off"
                    name="internStipend"
                    margin="dense"
                    label="Enter Intern Stipend/Salary:"
                    fullWidth
                    value={formData.internStipend}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setInternStipend(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="weeklyComeOfficeForDays"
                    type="text"
                    autoComplete="off"
                    name="weeklyComeOfficeForDays"
                    margin="dense"
                    label="Enter Weekly Come to Office for Days:"
                    fullWidth
                    value={formData.weeklyComeOfficeForDays}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setWeeklyComeOfficeForDays(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="submissionDate"
                    type="date"
                    autoComplete="off"
                    name="submissionDate"
                    margin="dense"
                    label="Enter Submission Date:"
                    fullWidth
                    value={formData.submissionDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setSubmissionDate(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>
                <div className="data-input-fields">
                  <TextField
                    id="reportingTo"
                    type="text"
                    autoComplete="off"
                    name="reportingTo"
                    margin="dense"
                    label="Enter Reporting to:"
                    fullWidth
                    value={formData.reportingTo}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setReportingTo(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="signBondWithCompanyForMonths"
                    type="text"
                    autoComplete="off"
                    name="signBondWithCompanyForMonths"
                    margin="dense"
                    label="Sign Bond with Company for month:"
                    fullWidth
                    value={formData.signBondWithCompanyForMonths}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setSignBondWithCompanyForMonths(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                 
                </div>
              </form>

              <button
                onClick={() => setShowInvoice(true)}
                className="mt-5 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 btn-b"
              >
                Preview Intern Joining Letter
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
