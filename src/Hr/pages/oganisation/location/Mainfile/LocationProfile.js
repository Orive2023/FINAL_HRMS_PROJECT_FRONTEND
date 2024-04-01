import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Orive from '../../../../asset/Orive Logo 2.png'
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import { loadLocation } from "../api";

const LocationPofile = () => {
  const { id } = useParams();

  const [location, setLocation] = useState({
    companyName: "",
    locationHead: "",
    locationName: "",
    address: "",
    email: "",
    phone: "",
    faxNumber: "", 
    city: "",
    state: "",
    zipCode: "",
    country: "",
    date: "",
    status:"",
  });

  useEffect(() => {
    loadLocation();
  }, []);

  const loadLocation = async () => {
    const result = await axios.get(`https://api.orivehrms.com/location/get/${id}`);
    setLocation(result.data);
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
                          <h5 className="mb-0">Company Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {location.companyName}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Location Head</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {location.locationHead}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Location Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {location.locationName}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Address </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{location.address}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Email </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{location.email}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Phone</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{location.phone}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Fax Number </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{location.faxNumber}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> City </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{location.city}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> State </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{location.state}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> ZipCode </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{location.zipCode}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Country </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{location.country}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Date </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{location.date}</p>
                        </div>
                      </div>
                      <hr />
                                                                           
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Status</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{location.status}</p>
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

export default LocationPofile;