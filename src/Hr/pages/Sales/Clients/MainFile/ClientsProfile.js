import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Orive from "../../../../asset/Orive Logo 2.png";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import { loadClients } from "../ClientsApi";

const ClientsProfile = () => {
  const { id } = useParams();
  const [clients, setClients] = useState({
    clientName: "",
    clientContactNumber: "",
    clientEmailAddress: "",
    physicalAddress: "",
    relevantContactDetails: "",
    clientPosition: "",
    productDetailsPurchasedByClient: "",
    purchaseDate: "",
    productQuantities: "",
    preferences: "",
    billingAddress: "",
    paymentMethod: "",
    billingContactInformation: "",
    communicationHistory: "",
    comments: "",
    status: "",
  });
  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const result = await axios.get(`https://api.orivehrms.com/client/get/${id}`);
    setClients(result.data);
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
                        {/* {${clients.clientName}} */}
                        </h5>
                      <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/sales/client">
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
                          <h5 className="mb-0">Client Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.clientName}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Contact Number</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.clientContactNumber}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Email Address</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.clientEmailAddress}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Physical Address</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.physicalAddress}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Relevant Contact Details</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.relevantContactDetails}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Payment Method</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.paymentMethod}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Billing Contact Information</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.billingContactInformation}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Communication History</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.communicationHistory}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Client Position</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.clientPosition}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Product Details</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.productDetailsPurchasedByClient}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Purchase Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.purchaseDate}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Product Quantities</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.productQuantities}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Preferences</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {clients.preferences}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Billing Address</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {clients.billingAddress}
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
                          {clients.comments}
                        </p>
                      </div>
                    </div>
                    <hr />


                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">status</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{clients.status}</p>
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

export default ClientsProfile;