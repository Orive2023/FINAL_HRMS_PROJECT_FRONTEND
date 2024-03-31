import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";

import TextField from "@mui/material/TextField";
import axios from "axios";
import Header from "./Header";
import MainDetails from "./HeadFile";
import Dates from "./Dates";
import Table from "./CertificateContent";
import CertiFicateTable from "./CertiFicateTable";
import Footer from "./Footer";

import Head from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const ShowInvoice = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [referrenceNo, setReferrenceNo] = useState("");
  const [date, setDate] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [productName, setProductName] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [internName, setInternsName] = useState("");
  const [recDelete, setRecDelete] = useState("");

  const [menu, setMenu] = useState(false);

  const [formData, setFormData] = useState({
    referrenceNo: "",
    date: "",
    issueDate: "",
    registrationNo: "",
    employeeName: "",
    internsName: "",
    startDate: "",
    endDate: "",
    productName: "",
    directorName: "",
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
      "https://api.orivehrms.com/internshipcertificate/create/internshipcertificate",
      formData
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const [getTable, setGetTable] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://api.orivehrms.com/internshipcertificate/get/internshipcertificate"
    );
    setGetTable(result.data);
  };



  const handleSubmit = (e) => {
   getData();
    console.log("Form submitted:", formData);
  };


  useEffect(() => {
    getData();
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
                className="fw-bold text-white rounded shadow border-2 border-gray-500 hover:bg-transparent transition-all duration-300"
              >
                Print/Download
              </button>

              <div ref={componentRef} className="p-5">
                <Header />
                <div className="p-4">
                  <MainDetails referrenceNo={referrenceNo} date={date} />

                  <Dates
                  internName={internName}
                    date={date}
                    issueDate={issueDate}
                    registrationNo={registrationNo}
                  />
                  <div className="p-12">
                    <Table
                      registrationNo={registrationNo}
                      startDate={startDate}
                      productName={productName}
                      endDate={endDate}
                      directorName={directorName}
                      internName={internName}
                    />
                  </div>
                </div>

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
            <div className="d-flex flex-column form-exl justify-content-center">
              <h3>Internship Certificate</h3>
             
              <form className="bg-white" onSubmit={handleSubmit}>
                <div className="data-input-fields">
                  <TextField
                    id="referrenceNo"
                    number
                    autoComplete="off"
                    name="referrenceNo"
                    margin="dense"
                    label="Ref No.:"
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
                    id="date"
                    type="date"
                    autoComplete="off"
                    name="date"
                    margin="dense"
                    label="Date :"
                    fullWidth
                    value={formData.date}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setDate(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                  <TextField
                    id="issueDate"
                    type="date"
                    autoComplete="off"
                    name="issueDate"
                    margin="dense"
                    label="Enter Issue Date:"
                    fullWidth
                    value={formData.issueDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setIssueDate(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>

                <div className="data-input-fields">
                  <TextField
                    id="registrationNo"
                    type="text"
                    autoComplete="off"
                    name="registrationNo"
                    margin="dense"
                    label="Enter Registration No:"
                    fullWidth
                    value={formData.registrationNo}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setRegistrationNo(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                

                  <TextField
                    id="internsName"
                    type="text"
                    autoComplete="off"
                    name="internsName"
                    margin="dense"
                    label="Enter Intern's Name:"
                    fullWidth
                    value={formData.internsName}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setInternsName(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>

                <div className="data-input-fields">
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

                  <TextField
                    id="productName"
                    type="text"
                    autoComplete="off"
                    name="productName"
                    margin="dense"
                    label="Enter Product Name:"
                    fullWidth
                    value={formData.productName}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setProductName(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>

                  <TextField
                    id="directorName"
                    type="text"
                    autoComplete="off"
                    name="directorName"
                    margin="dense"
                    label="Enter Director Name:"
                    fullWidth
                    value={formData.directorName}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setDirectorName(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>
              </form>

              <button
                onClick={() => setShowInvoice(true)}
                className="mt-5 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 btn-b"
              >
                Preview Intern Certificate{" "}
              </button>

              <CertiFicateTable
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