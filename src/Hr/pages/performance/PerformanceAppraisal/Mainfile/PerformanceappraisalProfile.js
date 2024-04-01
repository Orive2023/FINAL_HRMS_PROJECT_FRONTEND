import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Orive from "../../../../asset/Orive Logo 2.png";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const PerformanceappraisalProfile = () => {
  const { id } = useParams();

  const [performances, setPerformances] = useState({
    employeeName: "",
  username: "",
  departmentName: "",
  position: "",
  appraisalPeriod: "",
  qualityOfWorkRating: "",
  qualityOfWorkComments: "",
  qualityOfWorkScore: "",
  jobKnowledgeRating: "",
  jobKnowledgeComments: "",
  jobKnowledgeScore: "",
  communicationSkillsRating: "",
  communicationSkillsScore: "",
  teamworkAndCollaborationRating: "",
  teamworkAndCollaborationComments: "",
  teamworkAndCollaborationScore: "",
  initiativeAndCreativityRating: "",
  initiativeAndCreativityComments: "",
  initiativeAndCreativityScore: "",
  punctualityAndAttendanceRating: "",
  punctualityAndAttendanceComments: "",
  punctualityAndAttendanceScore: "",
  adaptabilityRating: "",
  adaptabilityComments: "",
  adaptabilityScore: "",
  overallRating: "",
  overallComments: "",
  overallScore: "",
  areasForImprovement: "",
  employeesSelfAssessment: "",
  goalsAchieved: "",
  developmentPlan: "",
  managersComments: ""
  });
  useEffect(() => {
    loadPerformances();
  }, []);

  const loadPerformances = async () => {
    const result = await axios.get(`https://api.orivehrms.com/performanceappraisal/get/${id}`);
    setPerformances(result.data);
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
                      {/* {${performances.employeeName }} */}
                    </h5>
                    <div className="d-flex justify-content-center mb-2">
                    <Link to="/hr/performance/Performance-Appraisal">
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
                        <h5 className="mb-0">Employee Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.employeeName}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">User Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.username}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Department Name</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.departmentName}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Position</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.position}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Appraisal Period</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.appraisalPeriod}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Quality Of Work Rating</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.qualityOfWorkRating}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Quality Of Work Comments</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.qualityOfWorkComments}</p>
                      </div>
                    </div>
                    <hr />

                   

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Job Knowledge Rating</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.jobKnowledgeRating}</p>
                      </div>
                    </div>
                    <hr />

                    {/* <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Job Knowledge Comments</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.jobKnowledgeComments}</p>
                      </div>
                    </div>
                    <hr /> */}

                   

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Communication Skills Rating</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.communicationSkillsRating}</p>
                      </div>
                    </div>
                    <hr />

                   
                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Teamwork And Collaboration Rating</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.teamworkAndCollaborationRating}</p>
                      </div>
                    </div>
                    <hr />

                    {/* <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Team work And Collaboration Comments</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.teamworkAndCollaborationComments}</p>
                      </div>
                    </div>
                    <hr /> */}

                   

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Initiative And Creativity Rating</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.initiativeAndCreativityRating}</p>
                      </div>
                    </div>
                    <hr />

                    {/* <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Initiative And Creativity Comments</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.initiativeAndCreativityComments}</p>
                      </div>
                    </div>
                    <hr /> */}

                   
                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Punctuality And Attendance Rating</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.punctualityAndAttendanceRating}</p>
                      </div>
                    </div>
                    <hr />

                    {/* <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Punctuality And Attendance Comments</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.punctualityAndAttendanceComments}</p>
                      </div>
                    </div>
                    <hr /> */}

                   

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Adaptability Rating</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.adaptabilityRating}</p>
                      </div>
                    </div>
                    <hr />

                    {/* <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Adaptability Comments</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.adaptabilityComments}</p>
                      </div>
                    </div>
                    <hr /> */}

                  

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Overall Rating</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.overallRating}</p>
                      </div>
                    </div>
                    <hr />

                    {/* <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Overall Comments</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.overallComments}</p>
                      </div>
                    </div>
                    <hr /> */}

                   
                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Areas For Improvement</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.areasForImprovement}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Employees Self Assessment</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.employeesSelfAssessment}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Goals Achieved</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.goalsAchieved}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Development Plan</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.developmentPlan}</p>
                      </div>
                    </div>
                    <hr />

                    

                    {/* <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Managers Comments</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{performances.managersComments}</p>
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

export default PerformanceappraisalProfile;