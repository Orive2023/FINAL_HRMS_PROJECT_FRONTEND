import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Orive from '../../../../asset/Orive Logo 2.png'
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const BankProfile = () => {
  const { id } = useParams();

  const [bank, setBank] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    accountType: "",
    branchName: "",
  });
  useEffect(() => {
    loadBank();
  }, []);

  const loadBank = async () => {
    const result = await axios.get(`https://api.orivehrms.com/addbank/get/${id}`);
    setBank(result.data);
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
                      <h5 className="my-3">Orive Solution
                        {/* {${bank.bankName}} */}
                      </h5>
                      <div className="d-flex justify-content-center mb-2">
                      <Link to="/hr/bank/add-bank">
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
                          <h5 className="mb-0">Bank Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{bank.bankName}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Account Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{bank.accountName}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Account Number</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{bank.accountNumber}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Account Type</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{bank.accountType}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Branch Name</h5>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{bank.branchName}</p>
                        </div>
                      </div>
                      <hr />
                      
                    
                     
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

export default BankProfile;