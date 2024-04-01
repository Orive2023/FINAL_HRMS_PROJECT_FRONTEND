import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Orive from "../../../../asset/Orive Logo 2.png";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const PurchaseOrderProfile = () => {
  const { id } = useParams();

  const [holiday, setHoliday] = useState({
  quotation: "",
  location: "",
  vendorName: "",
  address: "",
  notes: "",
  authorizedByName: "",
  title: "",
  signatureAndStamp: "",
  date: "",
  status: "",
  purchaseOrderListEntities: [],
      purchaseOrderListId: "",
      purchaseOrderId: "",
      description: "",
      unitName: "",
      quantity: "",
      price: "",
  total: "",
  grandTotal: ""
  });
  useEffect(() => {
    loadHoliday();
  }, []);

  const loadHoliday = async () => {
    const result = await axios.get(`https://api.orivehrms.com/purchaseOrder/get/${id}`);
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
                    <Link to="/hr/procurement/purchase-order">
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
                        <h5 className="mb-0">Quotation</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.quotation}</p>
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Location</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.location}</p>
                      </div>
                    </div>

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
                        <h5 className="mb-0">Address</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.address}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Notes</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.notes}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Authorized By Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.authorizedByName}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Title</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.title}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Date</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.date}</p>
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

                    <hr />

                    <table className="table">
                        <thead>
                          <tr>
                            <th>SL</th>
                            <th>Purchase Order List Id</th>
                            <th>Purchase Order Id</th>
                            <th>Description</th>
                            <th>Unit Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {holiday.purchaseOrderListEntities.map((subVoucher, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{subVoucher.purchaseOrderListId}</td>
                              <td>{subVoucher.purchaseOrderId}</td>
                              <td>{subVoucher.description}</td>
                              <td>{subVoucher.unitName}</td>
                              <td>{subVoucher.quantity}</td>
                              <td>{subVoucher.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Total</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.total}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Grand Total</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.grandTotal}</p>
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

export default PurchaseOrderProfile;