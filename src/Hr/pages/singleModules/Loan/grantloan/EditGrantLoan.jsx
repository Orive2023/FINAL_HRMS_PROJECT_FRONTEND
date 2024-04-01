import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const EditLoan = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [loan, setLoan] = useState({
    employeeName: "",
    permittedBy: "",
    loanDetails: "",
    approveDate: "",
    repaymentForm: "",
    amount: "",
    interestPersentage: "",
    installmentPeriod: "",
    repaymentTotal: "",
    installment: "",
    status: "",
  });

  useEffect(() => {
    loadLoan();
  }, []);

  const loadLoan = async () => {
    const result = await axios.get(`https://api.orivehrms.com/grantloan/get/${id}`);
    setLoan(result.data);
  };

  const [menu, setMenu] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    setLoan({
      ...loan,
      [e.target.name]: e.target.value,
    });
  };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://api.orivehrms.com/grantloan/update/${id}`, loan);
    navigate("/hr/loan/grant-loan");
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
            <h2 className="mt-5">Edit Loan</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}
            >
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  Amount
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="amount"
                  id="amount"
                  required
                  value={loan.amount}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  Installment Period
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="installmentPeriod"
                  id="installmentPeriod"
                  required
                  value={loan.installmentPeriod}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="website">
                  Interest Persentage
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="interestPersentage"
                  id="interestPersentage"
                  required
                  value={loan.interestPersentage}
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
                  onClick={() => navigate("/hr/loan/grant-loan")}
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

export default EditLoan;