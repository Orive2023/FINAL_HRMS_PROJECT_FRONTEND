import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Button from "@mui/material/Button";

const EditAccountBalance = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  let navigate = useNavigate();
  const { id } = useParams();
  const [accountBalance, setAccountBalance] = useState({
    employeeName: "",
    hsaBalance: "",
    fsaBalance: "",
    status: "",
  });

  const {  employeeName, hsaBalance, fsaBalance } = accountBalance;

  useEffect(() => {
    loadAccountBalance();
  }, []);

  const loadAccountBalance = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/accountbalance/get/${id}`
    );
    setAccountBalance(result.data);
  };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleInputChange = (e) => {
    setAccountBalance({
      ...accountBalance,
      [e.target.name]: e.target.value,
    });
  };

  const updateAccountBalance = async () => {
    await axios.put(
      `https://api.orivehrms.com/accountbalance/update/${id}`,
      accountBalance
    );
    navigate("/hr/account/account-balance");         
  };

  console.log(accountBalance);
  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header />
      </div>
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5"> Edit Account Balance</h2>
            <form onSubmit={(e) => { e.preventDefault(); showUpdateConfirmation(); }}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="employeeFullName">
                  Employee Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name=" employeeFullName"
                  id=" employeeFullName"
                  required
                  value={accountBalance.employeeName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="hsaBalance">
                  HSA BALANCE
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="hsaBalance"
                  id="hsaBalance"
                  required
                  value={accountBalance.hsaBalance}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="fsaBalance">
                  FSA BALANCE
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="fsaBalance"
                  id="fsaBalance"
                  required
                  value={accountBalance.fsaBalance}
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
                  value={accountBalance.status}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="select">Select</option>
                  <option value="Registered">Registered</option>
                  <option value="Unregistered">Unregistered</option>
                </select>
              </div>

              <div className="row mb-5">
                <div className="col-sm-2">
                  <button
                    type="submit"
                    className="btn btn-outline-success btn-lg"
                  >
                    Save
                  </button>
                </div>

                <div className="col-sm-2">
                  <Link
                    to={"/hr/account/account-balance"}
                    type="submit"
                    className="btn btn-outline-warning btn-lg"
                  >
                    Cancel
                  </Link>
                </div>
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
                <Button id="input-btn-submit" style={{width:'100%'}} onClick={updateAccountBalance} variant="contained">
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

export default EditAccountBalance;