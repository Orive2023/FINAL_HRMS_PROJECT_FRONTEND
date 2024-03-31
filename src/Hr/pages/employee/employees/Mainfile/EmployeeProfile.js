import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import logo from '../../../../asset/Orive Logo 2.png'

const EmployeeProfile = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    loadEmployee();
  }, []);

  const url = "api.orivehrms.com";
  const ip = "13.126.190.50:8082";

  const loadEmployee = async () => {
    const result = await axios.get(`https://${url}/employee/byId/${id}`);
    setEmployee(result.data[0]);
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
      <div className="head-foot-part">
      <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  src={logo}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 100 }}
                />
                <h5 className="my-3 fw-bold">Orive Solution
                  {/* {${employee.employeeName}} */}
                </h5>
                <h6 style={{marginTop:'-10px', marginBottom:'10px'}}>
             
                </h6>
                <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/employee/employee">
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
                    <h5 className="mb-0">employee Name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.employeeName}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">User name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.username}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Designation Name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.designationName}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Phone</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.phone}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Alternative Phone</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.alternativePhone}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Country</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.country}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">City</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.city}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">ZipCode</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.zipCode}</p>
                  </div>
                </div>
                <hr />
               
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Company Type</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.companyType}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Attendance Time</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.attendanceTime}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Employee Type</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.employeeType}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Created Date</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.createdDate}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Account Number</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.accountNumber}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Bank Name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.bankName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Ifsc Number</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.ifscNumber}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">branchName</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.branchName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Basic Salary</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.basicSalary}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Transport Allowance</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.transportAllowance}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Gross Salary</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.grossSalary}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">TIN Number</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.tinNumber}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">HRA Allowances</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.hraAllowances}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Other Allowances</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.otherAllowances}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">PF Allowances</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.pfAllowances}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Da Allowances</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.daAllowances}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Medical Allowances</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.medicalAllowances}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Other Insurance</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.otherInsurance}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Tax</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.tax}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">subDepartment</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.subDepartment}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">position</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.position}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">dutyType</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.dutyType}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">hireDate</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.hireDate}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">joiningDate</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.joiningDate}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">rateType</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.rateType}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">rateNumber</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.rateNumber}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">monthlyWorkHours</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.monthlyWorkHours}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">payFrequency</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.payFrequency}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">medical</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.medical}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">family</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.family}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">transportation</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.transportation}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">others</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.others}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">teamLeaderName</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.teamLeaderName}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">reportingTo</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.reportingTo}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">dateOfBirth</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.dateOfBirth}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">gender</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.gender}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">maritalStatus</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.maritalStatus}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">workInCity</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.workInCity}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">cityOfResidence</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.cityOfResidence}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">workPermit</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.workPermit}</p>
                  </div>
                </div>
                <hr />

               
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Business Email</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.businessEmail}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Home Phone</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.homePhone}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Cell Phone</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.cellPhone}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">UserEmail Or Name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.userEmailOrName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Status</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.status}</p>
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

export default EmployeeProfile;