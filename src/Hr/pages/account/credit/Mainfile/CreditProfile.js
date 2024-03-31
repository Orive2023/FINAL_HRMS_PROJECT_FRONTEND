import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import { loadCredit } from "../CreditApi";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Orive from "../../../../asset/Orive Logo 2.png";

const CreditProfile = () => {
  const { id } = useParams();

  const [credit, setCredit] = useState({
    voucherType: "",
  debitAccountHead: "",
  date: "",
  remark: "",
  creditVoucherTableEntities: [],
      creditVoucherTableId: "",
      accountName: "",
      subType: "",
      ledgerComment: "",
      amount: "",
  total: ""
  });

  useEffect(() => {
    loadCredit();
  }, []);

  const loadCredit = async () => {
    const result = await axios.get(`https://api.orivehrms.com/creditvoucher/get/${id}`);
    setCredit(result.data);
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
      <div className="head-foot-part">
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
                  <h5 className="my-3">Orive Solution
                    {/* {${credit.voucherType}} */}
                    </h5>
                  <div className="d-flex justify-content-center mb-2">
                    <Link to="/hr/account/credit-voucher">
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
                          <h5 className="mb-0">Voucher Type</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {credit.voucherType}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Debit Account Header</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {credit.debitAccountHead}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{credit.date}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Remarks</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {credit.remark}
                          </p>
                        </div>
                      </div>
                   
<hr />

<table className="table">
                        <thead>
                          <tr>
                            <th>SL</th>
                            <th>Credit Voucher Table Id</th>
                            <th>Account Name</th>
                            <th>Sub Type</th>
                            <th>Ledger Comment</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {credit.creditVoucherTableEntities.map((subVoucher, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{subVoucher.creditVoucherTableId}</td>
                              <td>{subVoucher.accountName}</td>
                              <td>{subVoucher.subType}</td>
                              <td>{subVoucher.ledgerComment}</td>
                              <td>{subVoucher.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Total</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{credit.total}</p>
                        </div>
                      </div>
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

export default CreditProfile;