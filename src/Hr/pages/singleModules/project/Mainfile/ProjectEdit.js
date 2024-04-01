import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

const EditProject = () => {
  let navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { id } = useParams();

  const [project, setProject] = useState({
    projectTitle: "",
    clientName: "",
    companyName: "",
    startDate: "",
    endDate: "",
    projectManagers: "",
    priority: "",
    description: "",
    summary: "",
  });

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://api.orivehrms.com/projects/update/${id}`, project);
    navigate("/hr/project");
  };

  useEffect(() => {
    loadProject();
  }, []);

  const loadProject = async () => {
    const result = await axios.get(`https://api.orivehrms.com/projects/get/${id}`);
    setProject(result.data);
  };

  const handleInputChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };
  const updateProject = async (e) => {
    e.preventDefault();
    await axios.put(`https://api.orivehrms.com/projects/update/${id}`, project);
    navigate("/hr/project");
  };

  const [menu, setMenu] = useState(false);
  const status = [
    {
      value: "Choose",
      label: "Select Status",
    },
    {
      value: "Progress",
      label: "Progress",
    },
    {
      value: "Completed",
      label: "Completed",
    },
  ];
  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <div className="col-sm-8 py-2 px-5 shadow">
            <h2 className="mt-5"> Edit Project</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}
            >
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="Budget">
                  Budget
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="budget"
                  id="budget"
                  required
                  value={project.budget}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="clientName">
                  Client Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="clientName"
                  id="clientName"
                  required
                  value={project.clientName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text">Start Date</label>
                <input
                  className="form-control col-sm-6"
                  type="date"
                  name="startDate"
                  id="startDate"
                  required
                  value={project.startDate}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text">End Date</label>
                <input
                  className="form-control col-sm-6"
                  type="date"
                  name="endDate"
                  id="endDate"
                  required
                  value={project.endDate}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="approval">
                  Status
                </label>
                <select
                  className="form-control col-sm-6"
                  name="status"
                  id="status"
                  required
                  value={project.status}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="">Select</option>
                  <option value="Progress">Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="data-buttons">
                <Button id="input-btn-submit" variant="outlined" type="submit">
                  Submit
                </Button>
                <Button
                  id="input-btn-cancel"
                  variant="outlined"
                  onClick={() => navigate("/hr/project")}
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

export default EditProject;