

import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

import { useNavigate, useParams } from "react-router-dom";

const EditVendor = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [vendor, setVendor] = useState({
    vendorName: "",
    mobileNo: "",
    emailAddress: "",
    status:""
  });
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    loadVendorById();
  }, []);

  const loadVendorById = async () => {
    try {
      const result = await axios.get(`https://api.orivehrms.com/vendor/get/${id}`);
      setVendor(result.data);
    } catch (error) {
      console.error("Error loading vendor:", error);
    }
  };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleInputChange = (e) => {
    setVendor({
      ...vendor,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      hideUpdateConfirmation();
      await axios.put(`https://api.orivehrms.com/vendor/update/${id}`, vendor);
      navigate("/hr/procurement/vendor");
    } catch (error) {
      console.error("Error updating vendor:", error);
    }
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
            <h2 className="mt-5"> Edit Vendor</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}
            >
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="vendorName">
                  Vendor Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="vendorName"
                  id="vendorName"
                  required
                  value={vendor.vendorName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="mobileNo">
                  Mobile Number
                </label>
                <input
                  className="form-control col-sm-6"
                  type="tel"
                  name="mobileNo"
                  id="mobileNo"
                  required
                  value={vendor.mobileNo}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  className="form-control col-sm-6"
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  required
                  value={vendor.emailAddress}
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
                  value={vendor.status}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="select">Select</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              {/* Add more input fields as needed */}

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
                  onClick={() => navigate("/hr/procurement/vendor")}
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
              <p className="fs-4 fw-bold">
                Are you sure you want to update?
              </p>
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

export default EditVendor;
