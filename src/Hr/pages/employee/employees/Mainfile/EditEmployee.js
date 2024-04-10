import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
const Editemployee = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [employee, setemployee] = useState({
    employeeName: "",
    phone: "",
    accountNumber: "",
    basicSalary: "",
    transportAllowance: "",
    hraAllowances: "",
    otherAllowances: "",
    pfAllowances: "",
    daAllowances: "",
    medicalAllowances: "",
    tax: "",
  });
  const { employeeName, employeeType, email, website } = employee;

  useEffect(() => {
    loademployee();
  }, []);

  const url = "api.orivehrms.com";
  const ip = "13.126.190.50:8082";
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [menu, setMenu] = useState(false);
  const loademployee = async () => {
    const result = await axios.get(`https://${url}/employee/byId/${id}`);
    setemployee(result.data[0]);
  };

  const handleInputChange = (e) => {
    setemployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  // const updateemployee = async (e) => {
  //   e.preventDefault();
  //   await axios.put(https://${url}/employee/update/ID/${id}, employee);
  //   navigate("/hr/employee/employee");
  // };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://${url}/employee/update/ID/${id}`, employee);
    navigate("/hr/employee/employee");
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
            <h2 className="mt-5"> Edit employee</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}
            >
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
                  value={employee.employeeName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  Phone
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="phone"
                  id="phone"
                  required
                  value={employee.phone}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  Account Number
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="accountNumber"
                  id="accountNumber"
                  required
                  value={employee.accountNumber}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  Basic Salary
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="basicSalary"
                  id="basicSalary"
                  required
                  value={employee.basicSalary}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  Transport Allowance
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="transportAllowance"
                  id="transportAllowance"
                  required
                  value={employee.transportAllowance}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  HRA Allowances
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="hraAllowances"
                  id="hraAllowances"
                  required
                  value={employee.hraAllowances}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  Other Allowances
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="otherAllowances"
                  id="otherAllowances"
                  required
                  value={employee.otherAllowances}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  PF Allowances
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="pfAllowances"
                  id="pfAllowances"
                  required
                  value={employee.pfAllowances}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  DA Allowances
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="daAllowances"
                  id="daAllowances"
                  required
                  value={employee.daAllowances}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  Medical Allowances
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="medicalAllowances"
                  id="medicalAllowances"
                  required
                  value={employee.medicalAllowances}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  Tax
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="tax"
                  id="tax"
                  required
                  value={employee.tax}
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
                  value={employee.status}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="">Select</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="data-buttons">
                <Button id="input-btn-submit" variant="outlined" type="submit">
                  Submit
                </Button>
                <Button
                  id="input-btn-cancel"
                  variant="outlined"
                  onClick={() => navigate("/hr/employee/employee")}
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

export default Editemployee;