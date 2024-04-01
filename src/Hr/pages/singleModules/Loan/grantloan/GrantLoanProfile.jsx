import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Orive from '../../../../asset/Orive Logo 2.png'
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const GrantLoanProfile = () => {
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
  accountType: "",
  installmentCleared: "",
  totalPaymentCleared: "",
  status: ""
  });
  useEffect(() => {
    loadLoan();
  }, []);

  const loadLoan = async () => {
    const result = await axios.get(`https://api.orivehrms.com/grantloan/get/${id}`);
    setLoan(result.data);
  };
  const [menu, setMenu] = useState(false);


  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <div className="shadow" style={{ backgroundColor: "whitesmoke" }}>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-3">
                  <div className="card mb-4">
                    <div className="card-body text-center">
                      <img
                        src={Orive}
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 150 }}
                      />
                      <h5 className="my-3">
                        {loan.employeeName}
                      </h5>
                      <div className="d-flex justify-content-center mb-2">
                      <Link to="/hr/loan/grant-loan">
                          <button
                            type="button"
                            className="btn btn-outline-secondary ms-1"
                          >
                            Back
                          </button>
                        </Link>
                       
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-9">
                  <div className="card mb-4">
                    <div className="card-body">
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Employee Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.employeeName}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Permitted By</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.permittedBy}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Loan Details</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.loanDetails}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Approve Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.approveDate}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Repayment Form</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {loan.repaymentForm}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Amount</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.amount}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Interest Percentage</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {loan.interestPersentage}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Installment Period</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {loan.installmentPeriod}
                          </p>
                        </div>
                      </div>
<hr />
<div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Installment Cleared</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {loan.installmentCleared}
                          </p>
                        </div>
                      </div>
<hr />
<div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Total Payment Cleared </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {loan.totalPaymentCleared}
                          </p>
                        </div>
                      </div>
<hr />
<div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Status</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {loan.status}
                          </p>
                        </div>
                      </div>
<hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Repayment Total</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {loan.repaymentTotal}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Installment</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.installment}</p>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantLoanProfile;