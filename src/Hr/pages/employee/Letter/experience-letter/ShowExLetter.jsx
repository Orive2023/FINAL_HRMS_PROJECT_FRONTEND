import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Dates from "./HeadContent";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Table1 from "./ExpLetterTable";
import Head from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";


import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import { useNavigate } from "react-router";

const ShowLetter = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [referrenceNumber, setReferrenceNumber] = useState("");
  const [date, setDate] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employee, setEmployee] = useState([]);
  const [username, setUsername] = useState("");
  const [designation, setDesignation] = useState("");
  const [formReleaseDate, setFormReleaseDate] = useState("");
  const [leavesDate, setLeavesDate] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [servingPeriod, setServingPeriod] = useState("");
  const [workBasedOn, setWorkBasedOn] = useState("");
  const [recDelete, setRecDelete] = useState("");

  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    referrenceNumber: "",
    date: "",
    formReleaseDate: "",
    employeeName: "",
   username: "",
    designation: "",
    joiningDate: "",
    leavesDate: "",
    servingPeriod: "",
    workBasedOn: "",
  });


 
  

  const handleSave = async () => {
    setShowInvoice(false);
    await axios.post(
      "https://api.orivehrms.com/experienceletter/create/experienceletter",
      formData
    );
  };

  const [getTable, setGetTable] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://api.orivehrms.com/experienceletter/get/experienceletter"
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
                style={{ width: "300px" }}
                className="ml-5 fw-bold text-white rounded shadow border-2 border-gray-500 hover:bg-transparent transition-all duration-300"
              >
                Print/Download
              </button>
              <div ref={componentRef} className="p-5">
                <Header />
                <MainDetails referrenceNumber={referrenceNumber} date={date} />

                <Dates
                  designation={designation}
                  employeeName={employeeName}
                 username={username}
                  date={date}
                  formReleaseDate={formReleaseDate}
                />
                <MainContent
                  designation={designation}
                  employeeName={employeeName}
                 username={ username}
                  servingPeriod={servingPeriod}
                  joiningDate={joiningDate}
                  leavesDate={leavesDate}
                  workBasedOn={workBasedOn}
                />
                <Footer />
              </div>{" "}
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
            </>
          ) : (
            <div className="d-flex flex-column justify-content-center form-exl">
              <h3>Employee Experience Letter</h3>
              <form className="bg-white">
                <div className="data-input-fields">
                  <TextField
                    id="referrenceNumber"
                    number
                    autoComplete="off"
                    name="referrenceNumber"
                    margin="dense"
                    label="Enter Reference No.:"
                    fullWidth
                    value={formData.referrenceNumber}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setReferrenceNumber(e.target.value);
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
                    id="formReleaseDate"
                    type="date"
                    autoComplete="off"
                    name="formReleaseDate"
                    margin="dense"
                    label="Enter Releasing Date:"
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
                </div>

                <div className="data-input-fields">
                <FormControl fullWidth>
                <InputLabel id="demo-employee-select-label">Employee Name</InputLabel>
                <Select
                  labelId="demo-employee-select-label"
                  id=""
                  value={formData.employeeName}
                  onChange={(e) => {
                  setEmployeeName(e.target.value);
                    handleInputChange(e);
                  }}
                  name="employeeName"
                  label="employeeName"
                  required
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
                    id="designation"
                    type="text"
                    autoComplete="off"
                    name="designation"
                    margin="dense"
                    label="Enter Designation:"
                    fullWidth
                    value={formData.designation}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setDesignation(e.target.value);
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
                    id="leavesDate"
                    type="date"
                    autoComplete="off"
                    name="leavesDate"
                    margin="dense"
                    label="Enter Leaves Date:"
                    fullWidth
                    value={formData.leavesDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setLeavesDate(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="servingPeriod"
                    type="text"
                    autoComplete="off"
                    name="servingPeriod"
                    margin="dense"
                    label="Enter Serving Period:"
                    fullWidth
                    value={formData.servingPeriod}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setServingPeriod(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                  <TextField
                    id="workBasedOn"
                    type="text"
                    autoComplete="off"
                    name="workBasedOn"
                    margin="dense"
                    label="Enter Work Based On:"
                    fullWidth
                    value={formData.workBasedOn}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => {
                      setWorkBasedOn(e.target.value);
                      handleInputChange(e);
                    }}
                  ></TextField>
                </div>
              </form>

              <button
                onClick={() => setShowInvoice(true)}
                className="mt-5 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 btn-b"
              >
                Preview  Experience Letter{" "}
              </button>

              <Table1 getTable={getTable} setRecDelete={setRecDelete} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowLetter;