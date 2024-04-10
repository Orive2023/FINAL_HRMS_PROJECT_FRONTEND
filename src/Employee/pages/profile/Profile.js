import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import CompanyLogoFile from "../../components/CompanyLogoFile";
import logo from "../../../Hr/asset/Orive Logo 2.png";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = decoded.username;
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    loadEmployee();
  }, []);

  console.log(username)

  const url = "api.orivehrms.com";
  const ip = "13.126.190.50:8082";

  const loadEmployee = async () => {
    const result = await axios.get(`https://api.orivehrms.com/employee/byId/${username}`);
    console.log(result.data)
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
      <div
            className="mx-3"
            style={{ marginTop: "70px", marginBottom: "-30px", width: "150px" }}
          >
            <div
              style={{
                fontSize: "1.4rem",
                width: "500px",
                display: "flex",
              }}
            >
              <div style={{ paddingRight: "10px" }}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM7SURBVHgB3VVNaBNREJ55b3ezQYrRg9Sf2m3poTeriLQquBWrvQjtSTy1god6aoIXb9aTXqS99CCC9qoHE0GKYCEpolToIYKiojXJQaziYYNISpLdcXY3Nbv9iWlv+sJmed/OvG/mm5ldgP9lYbOGFw4OjTsEcSKIIUKq8hMSKStlNePbFMmIcf6+DTi6xjEvodw/k3+a/5t/Q5K4YcZ+qTuSHL3JppZDmHBsOyslJjkbg6+8ViVzOjdb2BZJvHvQcADTDkA7ARSqUg7defvktftsjJ8pJJKAdIi3lmJXT099fJbd7Cy5EXit2zSEpqQlR6siFYCgf/rd7IfV54s/PlnH2/Y/0FDsVQX0SgXHTrZ2FV98W1poimSi54yJikgrSK1SUHZFlvum3swtr7VbWM6vvPy+lDL3dYAmwGT7c2ZrJ8wvf55vSHLzqGlKAWlFkK4gzABVL97KZhp20HM+dOBAJ0aEc4qD6j/b1mnNfcm9CtqEajLZa6ZZf5OviasLmRuwhXW71xwVAPcIoYgR6Ehk6sGJoKGukqErDuwU5RnY4uKgZti/oEs71lIu7ww+U0IksuqmRlUB21oR9hcb+IdJVBaKCFu0cGc/HOgbdxDi3oaHxlcZM6WKlrgUkCWqOu4NW2xsQKLwXPNPDZTq8eCxEUJnimp7JG5o14icEV0pxRgarvt7JKCp4aYNJRZlI5dI1+tYRKO46xwRdgIi2EE6dqpoH+asLcaH0mZPLOjvnaFDg0yk7SmhQjWIxVxQRSd54tHin9dHZvhIkW+71N3oFtmq+7tKlBqQsKaeXHYAU9ZjPk6eqEE8GmEtHQe0RjVxU3W1D2oaremsrtE5qninUxDXJdsKWmcbJvG6yyHFrgSy8zqOI66EM6l1oqpVwiQcZhBbRxLxa4KaTgZvPf29juPzFA3CJNKvm1rb50a7DYFu/Qgcu1QM2obE+3q5e4LfvNe5PzlGn4QJ2sm3LAj+8wX1AMObGf6muDh7xDiPGMeY2XP3ff+mJO4qXumaFCjibkT+Gf5crM6g61DHkXHy5wY8pTKqqI5Gp3OFhiSrqzRmGBvhukQvlRWbQr48GxZO5Zv65v+76zfuAjbSpiR+NAAAAABJRU5ErkJggg=="
                  alt="Dashboard"
                />
              </div>
              <div style={{ padding: "2px" }}>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  <Link
                    to="/HRDashboard"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Dashboard{" "}
                  </Link>{" "}
                  / Employee /{" "}
                </span>
                <span style={{ color: "black" }}> Profile</span>
              </div>
            </div>
          </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src={logo}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 100 }}
                />
                <h5 className="my-3 fw-bold">
                  {`${employee.employeeName}`}
                </h5>
                <h6 style={{marginTop:'-10px', marginBottom:'10px'}}>
             
                </h6>
                <div className="d-flex justify-content-center mb-2 mt-2" style={{gap:"10px"}}>
                        <Link to="/Employee-Dashboard">
                          <button
                            type="button"
                            className="btn btn-warning mt-2"
                            style={{background:"yellow"}}
                          >
                            Update
                          </button>
                        </Link>
                        <Link to="/Employee-Dashboard">
                          <button
                            type="button"
                            className="btn btn-outline-secondary ms-1 mt-2"
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
                    <h5 className="mb-0">Employee Role</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.employeeRole}</p>
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

export default Profile;
