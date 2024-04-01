import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Orive from "../../../../asset/Orive Logo 2.png";
import { loadAttendance } from "../api";

const AttendanceProfile = () => {
  const { id } = useParams();

  const [attendance, setAttendance] = useState({
  officeClockIn: "", 
  officeClockOut: "",
  employeeName: "",
  username: "",
  clockIn: "",
  clockOut: "",
  late: "",
  earlyLeaving: "",
  overTime: "",
  totalWork: "",
  totalRest: "",
  date: "",
  clockInLocation: "",
  clockOutLocation: ""
  });

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/attendance/get/${id}`
    );
    setAttendance(result.data);
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
                        src={Orive}
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 150 }}
                      />
                      <h5 className="my-3">Orive solution
                        {/* {${attendance.employeeName}} */}
                        </h5>
                      <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/timesheets/attendance">
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
                        <p className="text-muted mb-0">
                          {attendance.employeeName}
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Office Clock In Time</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {attendance.officeClockIn}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Office Clock Out Time</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {attendance.officeClockOut}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Employee Id</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {attendance.username}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">clockIn</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {attendance.clockIn}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Clock Out</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {attendance.clockOut}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Late</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {attendance.late}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Early Leaving </h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {attendance.earlyLeaving}
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Over Time</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {attendance.overTime}
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Total Work</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {attendance.totalWork}
                    </p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Total Rest</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {attendance.totalRest}
                    </p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">clock In Location</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {attendance.clockInLocation}
                    </p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">clock Out Location</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {attendance.clockOutLocation}
                    </p>
                  </div>
                </div>
                <hr />

                <div className="row">
                <div className="col-sm-3">
                  <h5 className="mb-0">Date</h5>
                </div>

                <div className="col-sm-9">
                  <p className="text-muted mb-0">
                    {attendance.date}
                  </p>
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

export default AttendanceProfile;