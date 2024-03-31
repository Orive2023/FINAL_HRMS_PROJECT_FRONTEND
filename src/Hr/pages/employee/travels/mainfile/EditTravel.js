import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import Button from "@mui/material/Button";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const EditTravel = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [travel, settravel] = useState({
    employeeName: "",
    startDate: "",
    endDate: "",
    placeOfVisit: "",
  });

  useEffect(() => {
    loadtravel();
  }, []);

  const url = "api.orivehrms.com";
  const ip = "13.126.190.50:8082";

  const loadtravel = async () => {
    const result = await axios.get(
      `https://${url}/travels/get/${id}`
    );
    settravel(result.data);
  };

  const handleInputChange = (e) => {
    settravel({
      ...travel,
      [e.target.name]: e.target.value,
    });
  };
  const updatetravel = async (e) => {
    e.preventDefault();
    await axios.put(`https://${url}/travels/update/${id}`, travel);
    navigate("/hr/employee/travel");
  };
  const [menu, setMenu] = useState(false);

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://${url}/travels/update/${id}`, travel);
    navigate("/hr/employee/travel");
  };

  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <div className="col-sm-8 py-2 px-5 shadow">
            <h2 className="mt-5"> Edit travel</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="employeeName">
                  Employee Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="employeeName"
                  id="employeeName"
                  required
                  value={travel.employeeName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="startDate">
                  Start Date
                </label>
                <input
                  className="form-control col-sm-6"
                  type="date"
                  name="startDate"
                  id="startDate"
                  required
                  value={travel.startDate}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="endDate">
                  End Date
                </label>
                <input
                  className="form-control col-sm-6"
                  type="date"
                  name="endDate"
                  id="endDate"
                  required
                  value={travel.endDate}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="placeOfVisit">
                  Place Of Visit
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="placeOfVisit"
                  id="placeOfVisit"
                  required
                  value={travel.placeOfVisit}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="data-buttons">
                <Button id="input-btn-submit" variant="outlined" type="submit">
                  Submit
                </Button>
                <Button
                  id="input-btn-cancel"
                  variant="outlined"
                  onClick={() => navigate("/hr/employee/travel")}
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

export default EditTravel;
