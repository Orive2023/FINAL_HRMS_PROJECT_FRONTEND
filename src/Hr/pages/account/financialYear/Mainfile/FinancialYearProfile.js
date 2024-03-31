import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Orive from "../../../../asset/Orive Logo 2.png";

const FinancialYearProfile = () => {
  const { id } = useParams();

  const [financial, setFinancial] = useState({
    financialYear: "",
    financialYearStartDate: "",
    financialYearEndDate: "",
  });



  const loadFinancialYear = async () => {
    const result = await axios.get(
     `https://api.orivehrms.com/financialyear/get/${id}`
    );
    setFinancial(result.data);
  };

  useEffect(() => {
    loadFinancialYear();
  }, []);

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
                        {/* {${financial.financialYear}} */}
                        </h5>
                      <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/account/financial-year">
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
                          <h5 className="mb-0">Financial Year</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {financial.financialYear}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Financial Year Start Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {financial.financialYearStartDate}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Financial Year End Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {financial.financialYearEndDate}
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

export default FinancialYearProfile;