import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const EditAnnnouncements = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [announcement, setAnnouncement] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  });


  useEffect(() => {
    loadAnnouncement();
  }, []);

  const loadAnnouncement = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/announcement/get/${id}`
    );
    setAnnouncement(result.data);
  };

  const handleInputChange = (e) => {
    setAnnouncement({
      ...announcement,
      [e.target.name]: e.target.value,
    });
  };

  const updateAnnouncement = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://api.orivehrms.com/announcement/update/${id}`,
      announcement 
    );
    navigate("/hr/organisation/announcements");
  };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

 
  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put( `https://api.orivehrms.com/announcement/update/${id}`, announcement);
    navigate("/hr/organisation/announcements");
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
      <div className="col-sm-8 py-2 px-5 shadow">
      <h2 className="mt-5"> Edit Announcement</h2>
      <form onSubmit={(e) => { e.preventDefault(); showUpdateConfirmation(); }}>
        {/* ... (other input fields) ... */}

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="title">
            Title
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="title"
            id="title"
            required
            value={announcement.title}
            onChange={(e) => handleInputChange(e)}
          />
          </div>
          <div className="input-group mb-5">
           <label className="input-group-text" htmlFor="start-date">
            Start-Date
          </label>
          <input
            className="form-control col-sm-6"
            type="date"
            name="startDate"
            id="start-date"
            required
            value={announcement.startDate}
            onChange={(e) => handleInputChange(e)}
          />
          </div>
          <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="endDate">
           End-Date
          </label>
          <input
            className="form-control col-sm-6"
            type="date"
            name="endDate"
            id="endDate"
            required
            value={announcement.endDate}
            onChange={(e) => handleInputChange(e)}
          />
          </div>
        
          <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="description">
            Description
          </label>
           <input
            className="form-control col-sm-6"
            type="text"
            name="description"
            id="description"
            required
            value={announcement.description}
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
                  onClick={() => navigate("/hr/organisation/announcements")}
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
                <Button id="input-btn-submit" style={{width:'100%'}} onClick={handleUpdate} variant="contained">
                  Yes
                </Button>
                <Button id="input-btn-cancel" style={{width:'100%'}} onClick={hideUpdateConfirmation} variant="outlined">
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

export default EditAnnnouncements;
