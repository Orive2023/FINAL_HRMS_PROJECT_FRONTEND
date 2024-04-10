import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import CompanyLogoFile from "../../../components/CompanyLogoFile";

const ComplaintEdit = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [complaint, setcomplaint] = useState({
    complaintFrom: "",
    complaintTitle: "",
  });
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    loadcomplaint();
  }, []);
  const url = "api.orivehrms.com";
  const ip = "13.126.190.50:8082";
  const loadcomplaint = async () => {
    const result = await axios.get(`https://${url}/complaints/get/${id}`);
    setcomplaint(result.data);
  };

  const handleInputChange = (e) => {
    setcomplaint({
      ...complaint,
      [e.target.name]: e.target.value,
    });
  };
  // const updatecomplaint = async (e) => {
  //   e.preventDefault();
  //   await axios.put(
  //     `https://${url}/complaints/update/${id}`,
  //     complaint
  //   );
  //   navigate("/hr/employee/complaints");
  // };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://${url}/complaints/update/${id}`, complaint);
    navigate("/employee/complaint");
  };

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
            <h2 className="mt-5"> Edit complaint</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="complaintAgainst">
                  Complaint Against
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="complaintAgainst"
                  id="complaintAgainst"
                  required
                  value={complaint.complaintAgainst}
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
                  onClick={() => navigate("/employee/complaint")}
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

export default ComplaintEdit;
