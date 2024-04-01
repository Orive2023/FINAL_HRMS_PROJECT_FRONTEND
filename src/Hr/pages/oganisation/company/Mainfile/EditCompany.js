
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

import { useNavigate, useParams } from "react-router-dom";

const EditCompany = () => {
	const [showConfirmation, setShowConfirmation] = useState(false);

  let navigate = useNavigate();
  const { id } = useParams();

  const [company, setCompany] = useState({
    companyName: "",
    contactNumber: "",
    email: "",
    cin: "",
    gst: "",
    uan: "",
    status: "",
  });

  useEffect(() => {
    loadCompanyById();
  }, []);

  const loadCompanyById = async () => {
    const result = await axios.get(`https://api.orivehrms.com/company/get/${id}`);
    setCompany(result.data);
  };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleInputChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://api.orivehrms.com/company/update/${id}`, company);
    navigate("/hr/organisation/company");
  };



  console.log("hwew",company);

  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header />
      </div>
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <div className="col-sm-8 py-2 px-5 shadow">
            <h2 className="mt-5"> Edit Company</h2>
            <form  onSubmit={(e) => { e.preventDefault(); showUpdateConfirmation(); }}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="companyName"
                  id="companyName"
                  required
                  value={company.companyName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="contactNumber">
                  Contact Number
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  required
                  value={company.contactNumber}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="form-control col-sm-6"
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={company.email}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="cin">
                  CIN
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="cin"
                  id="cin"
                  required
                  value={company.cin}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="gst">
                  GST
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="gst"
                  id="gst"
                  required
                  value={company.gst}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="uan">
                  UAN
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="uan"
                  id="uan"
                  required
                  value={company.uan}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="approval">
                  Status
                </label>
                <select
                  className="form-control col-sm-6"
                  name="status"
                  id="status"
                  required
                  value={company.status}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="select">Select</option>
                  <option value="Registered">Registered</option>
                  <option value="Unregistered">Unregistered</option>
                </select>
              </div>

              <div className="data-buttons">
                <Button
                  id="input-btn-submit"
                  className="submit"
                  type="submit"
                  variant="outlined"
                >
                  Submit
                </Button>
                <Button
                  id="input-btn-cancel"
                  className="cancel"
                  onClick={() => navigate("/hr/organisation/company")}
                  variant="outlined"
                >
                  Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
	  {showConfirmation && (
        <div className="confirmation">
          <div className="confirmation-popup d-flex align-items-center justify-content-center">
            <div>
              <p className="fs-4 fw-bold">Are you sure you want to update?</p>
              <div className="d-flex" style={{ gap: "10px" }}>
                <Button id="input-btn-submit" style={{width:'100%'}} onClick={handleUpdate} variant="contained">
                  Yes
                </Button>
                <Button id="input-btn-cancel" style={{width:'100%'}} onClick={hideUpdateConfirmation} variant="outlined">
                  No
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCompany;