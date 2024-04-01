import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Orive from '../../../../asset/Orive Logo 2.png'
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const CompanyPofile = () => {
  const { id } = useParams();

  const [company, setCompany] = useState({
    companyId:"",
    companyName: "",
    companyType: "",
    legalOrTradingName: "",
    address: "",
    registrationNumber: "",
    contactNumber: " ",
    email: "",
    website: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cin: "",
    gst: "",
    uan: "",
    createdDate: "",
    file: "",
    status:""
  });

  useEffect(() => {
    loadCompany();
  }, []);

  const loadCompany = async () => {
    const result = await axios.get(`https://api.orivehrms.com/company/get/${id}`);
    setCompany(result.data);
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
                      <h5 className="my-3">Orive Solution
                        {/* {${company.companyName} ${company.companyType}} */}
                      </h5>
                      <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/organisation/company">
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
                          <h5 className="mb-0">Company Id</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {company.companyId}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Company Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {company.companyName}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Company Type</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {company.companyType}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Legal Or Trading Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.legalOrTradingName}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Address </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.address}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Registration Number </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.registrationNumber}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Contact Number </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.contactNumber}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Email </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.email}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Website </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.website}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> City </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.city}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> State </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.state}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> ZipCode </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.zipCode}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Country </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.country}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Cin </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.cin}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Gst </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.gst}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Uan </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.uan}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Created Date </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.createdDate}</p>
                        </div>
                      </div>
                      <hr />

                      {/* <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> File </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.file}</p>
                        </div>
                      </div>
                      <hr /> */}

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Status</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{company.status}</p>
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

export default CompanyPofile;