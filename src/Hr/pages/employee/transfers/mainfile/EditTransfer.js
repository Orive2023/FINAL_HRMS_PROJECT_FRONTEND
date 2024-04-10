import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Button from "@mui/material/Button";

const EditTransfer = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [transfer, setTransfer] = useState({
    employeeName: "",
    departmentName: "",
    locationName: "",
  });

  const { employeeName, departmentName, locationName } =
    transfer;

  useEffect(() => {
    loadTransfer();
  }, []);

  const url = "api.orivehrms.com";
  const ip = "13.126.190.50:8082";

  const loadTransfer = async () => {
    const result = await axios.get(`https://${url}/transfers/get/${id}`);
    setTransfer(result.data);
  };

  const handleInputChange = (e) => {
    setTransfer({
      ...transfer,
      [e.target.name]: e.target.value,
    });
  };
  // const updateTransfer = async (e) => {
  //   e.preventDefault();
  //   await axios.put(`https://${url}/transfers/update/${id}`, transfer);
  //   navigate("/hr/employee/transfer");
  // };
  const [menu, setMenu] = useState(false);

  console.log("edit", transfer);

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://${url}/transfers/update/${id}`, transfer);
    navigate("/hr/employee/transfer");
  };
  console.log("here",transfer);

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
            <h2 className="mt-5"> Edit Transfer</h2>
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
                  value={transfer.employeeName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label
                  className="input-group-text"
                  htmlFor="transferToDepartment"
                >
                  Transfer To Department
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="departmentName"
                  id="departmentName"
                  required
                  value={transfer.departmentName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label
                  className="input-group-text"
                  htmlFor="transferToLocation"
                >
                  Transfer To Location
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="locationName"
                  id="locationName"
                  required
                  value={transfer.locationName}
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
                  onClick={() => navigate("/hr/employee/transfer")}
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

export default EditTransfer;
