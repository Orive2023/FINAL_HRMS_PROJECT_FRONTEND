import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";


import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const EditLocation = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [location, setLocation] = useState({
    companyName: "",
    locationName: "",
    email: "",
    phone: "",
    faxNumber: "",
    locationHead: "",
    address: "",
  });

  useEffect(() => {
    loadLocation();
  }, []);

  const loadLocation = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/location/get/${id}`
    );
    setLocation(result.data);
  };

  const handleInputChange = (e) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  };
  const updateLocation = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://api.orivehrms.com/location/update/${id}`,
      location
    );
    navigate("/hr/organisation/location");
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
          <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5"> Edit Location</h2>
            <form onSubmit={(e) => updateLocation(e)}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="locationType">
                  Company
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="companyName"
                  id="companyName"
                  required
                  value={location.companyName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="locationName">
                  Location Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="locationName"
                  id="locationName"
                  required
                  value={location.locationName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="locationType">
                  Email
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="email"
                  id="email"
                  required
                  value={location.email}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="data-buttons">
                <Button type="submit" variant="outlined" id="input-btn-submit">
                  Submit
                </Button>
                <Button
                  onClick={() => navigate("/hr/organisation/location")}
                  variant="outlined"
                  id="input-btn-cancel"
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

export default EditLocation;
