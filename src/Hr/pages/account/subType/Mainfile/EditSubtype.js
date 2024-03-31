import React, { useEffect, useState } from "react";
import axios from "axios";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";
import Button from "@mui/material/Button";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

import { useNavigate, useParams } from "react-router-dom";

const EditSubType = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [subType, setSubType] = useState({
    accountName:"",
  });
  const { accountName } =
    subType;

  useEffect(() => {
    loadSubType();
  }, []);

  const loadSubType = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/subType/get/${id}`
    );
    setSubType(result.data);
  };

  const handleInputChange = (e) => {
    setSubType({
      ...subType,
      [e.target.name]: e.target.value,
    });
  };
  const updateSubType = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://api.orivehrms.com/subType/update/${id}`,
      subType
    );
    navigate("/hr/account/subType");
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
            <h2 className="mt-5"> Edit SubType</h2>
            <form onSubmit={(e) => updateSubType(e)}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="accountName">
                  Account Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="accountName"
                  id="accountName"
                  required
                  value={accountName}
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
                  onClick={() => navigate("/hr/account/sub-type")}
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

export default EditSubType;
