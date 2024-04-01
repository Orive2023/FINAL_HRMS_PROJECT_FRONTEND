import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Orive from '../../../../asset/Orive Logo 2.png'
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const TrainerProfile = () => {
  const { id } = useParams();

  const [loan, setLoan] = useState({
    trainersFullName: "",
    emailAddress: "",
    phoneNo: "",
    technicalSkills: "",
    softSkills: "",
    industries: "",
    certifications: "",
    trainingProgramsOffered: "",
    preferredTrainingAudienece: "",
    trainingLanguages: "",
    availability: "",
    previousClients: "",
    trainingMaterialsProvided: "",
    additionalNotes: "",
    status: ""
  });
  useEffect(() => {
    loadLoan();
  }, []);

  const loadLoan = async () => {
    const result = await axios.get(`https://api.orivehrms.com/trainerslist/get/${id}`);
    setLoan(result.data);
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
                        {/* {${loan.trainersFullName}} */}
                      </h5>
                      <div className="d-flex justify-content-center mb-2">
                      <Link to="/hr/trainer">
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
                          <h5 className="mb-0">Trainers Full Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.trainersFullName}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Email Address</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.emailAddress}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Phone Number</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.phoneNo}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Technical Skills</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.technicalSkills}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Soft Skills</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.softSkills}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Industries</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.industries}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Certifications</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.certifications}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Training Programs Offered</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.trainingProgramsOffered}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Preferred Training Audienece</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.preferredTrainingAudienece}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Training Languages</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.trainingLanguages}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Availability</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.availability}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Previous Clients</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.previousClients}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Training Materials Provided</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.trainingMaterialsProvided}</p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Additional Notes</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.additionalNotes}</p>
                        </div>
                      </div>

                      <hr />

                      
                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Status</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{loan.status}</p>
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
  );
};

export default TrainerProfile;