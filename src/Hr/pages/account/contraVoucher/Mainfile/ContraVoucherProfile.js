import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Orive from "../../../../asset/Orive Logo 2.png";

const ContraVoucherProfile = () => {
  const { id } = useParams();

  const [contraVoucher, setContraVoucher] = useState({
    voucherType: "",
    reversedAccountHead: "",
    reversedAccountHead: "",
    date: "",
    remark: "",
    contraVoucherListEntities: [],
        contraVoucherListId: "",
        accountName: "",
        ledgerComment: "",
        debit: "",
        credit: ""
   
  });

  useEffect(() => {
    loadcontraVoucher();
  }, []);

  const loadcontraVoucher = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/contravoucher/get/${id}`
    );
    setContraVoucher(result.data);
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
                        {/* {${contraVoucher.voucherType}} */}
                        </h5>
                      <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/account/contra-voucher">
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
                            {contraVoucher.voucherType}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {contraVoucher.date}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Account Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {contraVoucher.reversedAccountHead}
                        </p>
                      </div>
                    </div>
                    <hr />

                    
                    
                    <table className="table">
                        <thead>
                          <tr>
                            <th>SL</th>
                            <th>Contra Voucher Id</th>
                            <th>Account Name</th>
                            <th>Ledger Comment</th>
                            <th>Debit</th>
                            <th>Credit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {contraVoucher.contraVoucherListEntities.map((subVoucher, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{subVoucher.contraVoucherListId}</td>
                              <td>{subVoucher.accountName}</td>
                              <td>{subVoucher.ledgerComment}</td>
                              <td>{subVoucher.debit}</td>
                              <td>{subVoucher.credit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Remarks</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {contraVoucher.remark}
                          </p>
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

export default ContraVoucherProfile;