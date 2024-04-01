import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Orive from "../../../../asset/Orive Logo 2.png";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import StateProject from "../StateProject";

const ProjectProfile = () => {
  const { id } = useParams();

  const [holiday, setHoliday] = useState({
  projectTitle: "",
  projectName: "",
  managerEmployeeId: "",
  clientName: "",
  companyName: "",
  startDate: "",
  endDate: "",
  priority: "",
  budget: "",
  projectManagers: "",
  summary: "",
  description: "",
  workUpdateSheet: "",
  status: "",
  employeeProjectManagementEntities: [],
  employeeProjectManagementId: "",
  username: "",
  projectName: "",
  employeeName: "",
  taskAssignedFor: "",
  typeTheTaskHere: "",
});
  useEffect(() => {
    loadHoliday();
  }, []);

  const loadHoliday = async () => {
    const result = await axios.get(`https://api.orivehrms.com/projects/get/${id}`);
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
                      {/* {${holiday.projectName}} */}
                    </h5>
                    <div className="d-flex justify-content-center mb-2">
                    <Link to="/hr/project">
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
                        <h5 className="mb-0">Project Title</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.projectTitle}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Project Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.projectName}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Manager Employee Id</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.managerEmployeeId}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Client Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.clientName}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Company Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.companyName}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Start Date</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.startDate}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">End Date</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.endDate}</p>
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
                        <h5 className="mb-0">Budget</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.budget}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Project Managers</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.projectManagers}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Summary</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.summary}</p>
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
                        <h5 className="mb-0">Work Update Sheet</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.workUpdateSheet}</p>
                      </div>
                    </div>
                    <hr />

                    <table className="table">
                        <thead>
                          <tr>
                            <th>SL</th>
                            <th>Employee Project Management Id</th>
                            <th>Employee Id</th>
                            <th>Project Name</th>
                            <th>Employee Name</th>
                            <th>Task Assigned For</th>
                            <th>Task Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {holiday.employeeProjectManagementEntities.map((subVoucher, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{subVoucher.employeeProjectManagementId}</td>
                              <td>{subVoucher.username}</td>
                              <td>{subVoucher.projectName}</td>
                              <td>{subVoucher.employeeName}</td>
                              <td>{subVoucher.taskAssignedFor}</td>
                              <td>{subVoucher.typeTheTaskHere}</td>
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
                        <p className="text-muted mb-0">{holiday.status}</p>
                      </div>
                    </div>
                    <hr />

                    {/* <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Description</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{holiday.description}</p>
                      </div>
                    </div> */}

                   
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

export default ProjectProfile;