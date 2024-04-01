import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Orive from "../../../../asset/Orive Logo 2.png";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const TicketProfile = () => {
  const { id } = useParams();

  const [holiday, setHoliday] = useState({
    ticketsCode: "",
    subject: "",
    employeeName: "",
    username: "",
    priority: "",
    createdBy: "",
    date: "",
    projectTitle: "",
    description: "",
    status: ""
  });
  useEffect(() => {
    loadHoliday();
  }, []);

  const loadHoliday = async () => {
    const result = await axios.get(`https://api.orivehrms.com/tickets/get/${id}`);
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
                      {/* {${holiday.projectTitle}} */}
                    </h5>
                    <div className="d-flex justify-content-center mb-2">
                    <Link to="/hr/ticket">
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
                        <h5 className="mb-0">Tickets Code</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.ticketsCode}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Subject</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.subject}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Employee Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.employeeName}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Employee Id</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.username}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Created By</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.createdBy}</p>
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
                        <h5 className="mb-0">Priority</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.priority}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Project Title</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.projectTitle}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Description</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.description}</p>
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

export default TicketProfile;