import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const RequestProfile = () => {
  const { id } = useParams();

  const [request, setRequest] = useState({
  requestingPerson: "",
  requestingDepartment: "",
  expectedTimeToHaveTheGoodStarts: "",
  expectedTimeToHaveTheGoodEnds: "",
  reasonForRequesting: "",
  createdDate: "",
  status: "",
  descriptionOfMaterialEntities: [],
  descriptionOfMaterialId: "",
  descriptionOfMaterialOrGoodsOrService: "",
  unitName: "",
  quantity: "",
    





  });

  useEffect(() => {
    loadRequest();
  }, []);

  const loadRequest = async () => {
    const result = await axios.get(`https://api.orivehrms.com/request/get/${id}`);
    setRequest(result.data);
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
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 150 }}
                      />
                      <h5 className="my-3">
                        {`${request.requestingPerson} ${request.requestingDepartment}`}
                      </h5>
                      <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/procurement/Request">
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
                          <h5 className="mb-0">Requesting Person</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {request.requestingPerson}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Requesting Department</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {request.requestingDepartment}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">ExpectedTimeToHaveTheGoodStarts</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{request.expectedTimeToHaveTheGoodStarts}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">ExpectedTimeToHaveTheGoodEnds</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{request.expectedTimeToHaveTheGoodEnds}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Reason For Requesting</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{request.reasonForRequesting}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Reason For Requesting</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{request.reasonForRequesting}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Created Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{request.createdDate}</p>
                        </div>
                      </div>
                      <hr />

                      <table className="table">
                        <thead>
                          <tr>
                            <th>SL</th>
                            <th>Description Of Material Id</th>
                            <th>Description Of Material</th>
                            <th>Unit Name</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {request.descriptionOfMaterialEntities.map((subVoucher, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{subVoucher.descriptionOfMaterialId}</td>
                              <td>{subVoucher.descriptionOfMaterialOrGoodsOrService}</td>
                              <td>{subVoucher.unitName}</td>
                              <td>{subVoucher.quantity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <hr />
                      
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Status</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{request.sta}</p>
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

export default RequestProfile;
