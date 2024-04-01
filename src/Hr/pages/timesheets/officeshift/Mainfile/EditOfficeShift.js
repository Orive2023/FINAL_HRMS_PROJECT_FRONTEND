import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const Editshift = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [shift, setShift] = useState({
    officeClockInTime: "",
    officeClockOutTime: "",
  });

  useEffect(() => {
    loadshift();
  }, []);

  const loadshift = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/officeshifts/get/${id}`
    );
    setShift(result.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "officeClockInTime") {
      setShift({
        ...shift,
        [name]: `${value}:00`,
      });
    }
    if (name === "officeClockOutTime") {
      setShift({
        ...shift,
        [name]: `${value}:00`,
      });
    }
  };
  const updateshift = async (e) => {
    e.preventDefault();
    await axios.put(`https://api.orivehrms.com/officeshifts/update/${id}`, shift);
    navigate("/hr/timesheets/officeshift");
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
        <div
          className="head-foot-part"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0",
          }}
        >
          <div className="col-sm-8 py-2 px-5 shadow">
            <h2 className="mt-5"> Edit shift</h2>
            <form onSubmit={(e) => updateshift(e)}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="officeClockInTime">
                  Office Clock In Time
                </label>
                <input
                  className="form-control col-sm-6"
                  type="time"
                  name="officeClockInTime"
                  id="officeClockInTime"
                  required
                  value={shift.officeClockInTime}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label
                  className="input-group-text"
                  htmlFor="officeClockOutTime"
                >
                  Office Clock Out Time
                </label>
                <input
                  className="form-control col-sm-6"
                  type="time"
                  name="officeClockOutTime"
                  id="officeClockOutTime"
                  required
                  value={shift.officeClockOutTime}
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
                  onClick={() => navigate("/hr/timesheets/officeshift")}
                >
                  Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editshift;
