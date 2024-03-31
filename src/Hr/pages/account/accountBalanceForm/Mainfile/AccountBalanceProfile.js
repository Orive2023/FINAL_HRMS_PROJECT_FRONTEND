import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import Orive from "../../../../asset/Orive Logo 2.png";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const AccountBalanceProfile = () => {
  const { id } = useParams();

  const [accountBalance, setAccountBalance] = useState({
  employeeName: "",
  username: "",
  departmentName: "",
  position: "",
  hsaBalance: "",
  fsaBalance: "",
  retirementAccountBalance: "",
  otherBenefitsAccountsBalance: "",
  expenseReimbursementAccountBalance: "",
  details: "",
  vacationDaysBalance: "",
  sickDaysBalance: "",
  personalDaysBalance: "",
  floatingHolidaysBalance: "",
  accountType: "",
  accountBalance: "",
  purpose: "",
  comments: "",
  status: ""
  });

  useEffect(() => {
    loadAccountBalance();
  }, []);

  const loadAccountBalance = async () => {
    try {
      const result = await axios.get(`https://api.orivehrms.com/accountbalance/get/${id}`);
      setAccountBalance(result.data);
    } catch (error) {
      console.error("Error fetching account balance data: ", error);
    }
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
          <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
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
                      <h5 className="my-3">Orive solution
                        {/* {${accountBalance.employeeName}} */}
                      </h5>
                      <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/account/account-balance">
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
                          <h5 className="mb-0">Employee  Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.employeeName}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Employee Id</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.username}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Department Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.departmentName}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Position</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.position}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Position</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.position}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">HSA Balance</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.hsaBalance}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Retirement Account Balance</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.retirementAccountBalance}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Other Benefits Accounts Balance</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.otherBenefitsAccountsBalance}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Expense Reimbursement Account Balance</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.expenseReimbursementAccountBalance}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Details</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.details}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Vacation Days Balance</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.vacationDaysBalance}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Sick Days Balance</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.sickDaysBalance}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Personal Days Balance</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.personalDaysBalance}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Floating Holidays Balance</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.floatingHolidaysBalance}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Account Type</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.accountType}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Account Balance</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.accountBalance}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Purpose</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.purpose}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Comments</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.comments}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Comments</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.comments}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">FSA Balance</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {accountBalance.fsaBalance}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Status</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{accountBalance.status}</p>
                        </div>
                      </div>
                      <hr />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccountBalanceProfile;