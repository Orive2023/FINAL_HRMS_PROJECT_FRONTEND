import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Orive from "../../../../asset/Orive Logo 2.png";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const VendorProfile = () => {
  const { id } = useParams();

  const [holiday, setHoliday] = useState({
  vendorName: "",
  mobileNo: "",
  emailAddress: "",
  address: "",
  country: "",
  city: "",
  zipCode: "",
  previousBalance: "",
  status: ""
  });
  useEffect(() => {
    loadHoliday();
  }, []);

  const loadHoliday = async () => {
    const result = await axios.get(`https://api.orivehrms.com/vendor/get/${id}`);
    setHoliday(result.data);
  };
  const [menu, setMenu] = useState(false);

  return(
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
                      {/* {${holiday.vendorName }} */}
                    </h5>
                    <div className="d-flex justify-content-center mb-2">
                    <Link to="/hr/procurement/vendor">
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
                        <h5 className="mb-0">Vendor Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.vendorName}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Mobile Number</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.mobileNo}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Email Address</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.emailAddress}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Address</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.address}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Country</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.country}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">City</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.city}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Zip Code</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.zipCode}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Previous Balance</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.previousBalance}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Status</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.status}</p>
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

  )
};

export default VendorProfile;