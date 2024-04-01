import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Orive from '../../../../asset/Orive Logo 2.png'
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const WorkSheetProfile = () => {
  const { id } = useParams();

  const [worksheet, setWorksheet] = useState({
      username: "",
      workSheetTitle: "",
      startDate: "",
      endDate: "",
      estimateHour: "",
      projectName: "",
      employeeName: "",
      assignedTo: "",
      description: "",
      taskName: "",
      challangePart: "",
      workProgress: "",
      createdDate: "",
  });

  useEffect(() => {
    loadWorksheet();
  }, []);

  const loadWorksheet = async () => {
    const result = await axios.get(`https://api.orivehrms.com/worksheet/get/${id}`);
    setWorksheet(result.data);
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
                      <h5 className="my-3" >Orive Solutions
                        {/* {`${worksheet.worksheetName} `} */}
                      </h5>
                      <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/worksheets">
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
                          <h5 className="mb-0">User Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {worksheet.username}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Worksheet Title</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {worksheet.workSheetTitle}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Start Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {worksheet.startDate}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">End Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.endDate}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Estimate Hour</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.estimateHour}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Project Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.projectName}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Employee Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.employeeName}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Assigned To </h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.assignedTo}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Description</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.description}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Task Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.taskName}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Challange Part</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.challangePart}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Work Progress</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.workProgress}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Created Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.createdDate}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Status</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{worksheet.status}</p>
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

export default WorkSheetProfile;