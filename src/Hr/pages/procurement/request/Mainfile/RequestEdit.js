import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

import { useNavigate, useParams } from "react-router-dom";

const RequestEdit = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  let navigation = useNavigate();
  const { id } = useParams();

  const [request, setRequest] = useState({
    requestingPerson: "",
    requestingDepartment: "",
    status: "",
  });

  useEffect(() => {
    loadRequest();
  }, []);

  const loadRequest = async () => {
      const result = await axios.get(`https://api.orivehrms.com/request/get/${id}`);
      setRequest(result.data);
   
  };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleInputChange = (e) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
      hideUpdateConfirmation();
      await axios.put(`https://api.orivehrms.com/request/update/${id}`, request);
      navigation("/hr/procurement/request");
     
    
  };

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
            <h2 className="mt-5"> Edit Request</h2>
            <form onSubmit={(e) => { e.preventDefault(); showUpdateConfirmation(); }}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="requestingPerson">
                  Requesting Person
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="requestingPerson"
                  id="requestingPerson"
                  required
                  value={request.requestingPerson}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="requestingDepartment">
                  Requesting Department
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="requestingDepartment"
                  id="requestingDepartment"
                  required
                  value={request.requestingDepartment}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

             

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="status">
                  Status
                </label>
                <select
                  className="form-control col-sm-6"
                  name="status"
                  id="status"
                  required
                  value={request.status}
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
                  onClick={() => navigation("/hr/procurement/request")}
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
                <Button
                  id="input-btn-submit"
                  style={{ width: "100%" }}
                  onClick={handleUpdate}
                  variant="contained"
                >
                  Yes
                </Button>
                <Button
                  id="input-btn-cancel"
                  style={{ width: "100%" }}
                  onClick={hideUpdateConfirmation}
                  variant="outlined"
                >
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

export default RequestEdit;
