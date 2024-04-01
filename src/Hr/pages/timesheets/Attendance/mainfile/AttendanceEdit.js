import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import { useNavigate, useParams } from "react-router-dom";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import { TextField } from "@mui/material";

const AttendanceEdit = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [attendance, setAttendance] = useState({
    clockOut: "",
    date: "",
  });

  useEffect(() => {
    loadAttendance();
  }, []);
  const [clockOutTime, setClockOutTime] = useState('00:00:00');
  const [isFieldOpen, setIsFieldOpen] = useState(false);

  const handleTimeChange = (e) => {
    const value = e.target.value;
    // Perform validation if necessary
    setClockOutTime(value);
  };

  const handleFieldOpen = () => {
    setIsFieldOpen(true);
    // You can set the default value when the field is opened
    setClockOutTime('00:00:00');
  };

  const handleFieldClose = () => {
    setIsFieldOpen(false);
  };

  const loadAttendance = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/attendance/get/${id}`
    );
    setAttendance(result.data);
  };

  const handleInputChange = (e) => {
    setAttendance({
      ...attendance,
      [e.target.name]: e.target.value,
    });
  };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(
      `https://api.orivehrms.com/attendance/update/${id}`,
      attendance
    );
    navigate("/hr/timesheets/attendance");
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
          <div className="col-sm-8 py-2 px-5 shadow">
            <h2 className="mt-5"> Edit Attendance</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}
            >
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="officeClockInTime">
                  Clock Out
                </label>
              <input
          label="ClockOut Time"
          type="time"
          id="clockOutTime"
          name="clockOutTime"
          value={isFieldOpen ? clockOutTime : '00:00:00'}
          onChange={handleTimeChange}
          onFocus={handleFieldOpen}
          onBlur={handleFieldClose}
          />
              
              </div>

              <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="officeClockInTime">
                Date
              </label>
              <input
              className="form-control col-sm-6"
              type="date"
              name="date"
              id="date"
              required
              value={attendance.date}
              onChange={(e) => handleInputChange(e)}
            />
            
            </div>

              <div className="data-buttons">
                <Button id="input-btn-submit" variant="outlined" type="submit">
                  Submit
                </Button>
                <Button
                  id="input-btn-cancel"
                  variant="outlined"
                  onClick={() => navigate("/hr/timesheets/attendance")}
                >
                  Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div className="confirmation">
          <div className="confirmation-popup d-flex align-items-center justify-content-center">
            <div>
              <p className="fs-4 fw-bold">Are you sure you want to update?</p>
              <div className="d-flex" style={{ gap: "10px" }}>
                <Button
                  id="input-btn-submit"
                  style={{ width: "100%" }}
                  onClick={handleUpdate}
                  variant="contained"
                >
                  Yes
                </Button>
                <Button
                  id="input-btn-cancel"
                  style={{ width: "100%" }}
                  onClick={hideUpdateConfirmation}
                  variant="outlined"
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceEdit;
