import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";

const EditUnit = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [unit, setUnit] = useState({
    title: "",
    status:"",
  });

  useEffect(() => {
    loadUnit();
  }, []);

  const loadUnit = async () => {
    const result = await axios.get(`https://api.orivehrms.com/unit/get/${id}`);
    setUnit(result.data);
  };

  const handleInputChange = (e) => {
    setUnit({
      ...unit,
      [e.target.name]: e.target.value,
    });
  };

  const updateUnit = async (e) => {
    e.preventDefault();
    await axios.put(`https://api.orivehrms.com/unit/update/${id}`, unit);
    navigate("/hr/procurement/unit");
  };

  return (
    <div>
    <Header />
    <div className="dashboard-container">
      <SideBar />
      <div className="head-foot-part" style={{ padding: "0" }}>
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit Unit</h2>
      <form onSubmit={(e) => updateUnit(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="purchaseDate">
            Title
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="title"
            id="title"
            required
            value={unit.title}
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
                  value={unit.status}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="select">Select</option>
                  <option value="Registered">Registered</option>
                  <option value="Unregistered">Unregistered</option>
                </select>
              </div>
    

        <div className="row mb-5">
          <div className="col-sm-2">
            <button
              type="submit"
              className="btn btn-outline-success btn-lg"
            >
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/hr/procurement/unit"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
      </div>
    </div>
  </div>
   
  );
};

export default EditUnit;
