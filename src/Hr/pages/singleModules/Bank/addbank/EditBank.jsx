import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import Button from "@mui/material/Button";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const EditBank = () => {
  let navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { id } = useParams();

  const [loan, setLoan] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    accountType: "",
    branchName: "",
  });

  useEffect(() => {
    loadLoan();
  }, []);

  const url = "api.orivehrms.com";
  // const ip = "13.126.190.50:8092";

  const loadLoan = async () => {
    const result = await axios.get(`https://${url}/addbank/get/${id}`);
    setLoan(result.data);
  };

  const handleInputChange = (e) => {
    setLoan({
      ...loan,
      [e.target.name]: e.target.value,
    });
  };
  // const updateLoan = async (e) => {
  //   e.preventDefault();
  //   await axios.put(https://${url}/addbank/update/${id}, loan);
  //   navigate("/hr/bank/add-bank");
  // };
  const [menu, setMenu] = useState(false);

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://${url}/addbank/update/${id}`, loan);
    navigate("/hr/bank/add-bank");
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
            <h2 className="mt-5">Edit Bank</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}
            >
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="LoanName">
                  Bank Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="bankName"
                  id="bankName"
                  required
                  value={loan.bankName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="LoanType">
                  Account Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="accountName"
                  id="accountName"
                  required
                  value={loan.accountName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text">Account Number</label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="accountNumber"
                  id="accountNumber"
                  required
                  value={loan.accountNumber}
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
                  value={loan.status}
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
                  onClick={() => navigate("/hr/bank/add-bank")}
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

export default EditBank;