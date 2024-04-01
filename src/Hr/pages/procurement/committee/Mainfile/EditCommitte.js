import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

const EditCommittee = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [committee,setCommittee] = useState({
    title: "",
  });

  useEffect(() => {
   loadCommittee();
  }, []);

  const loadCommittee = async () => {
    const result = await axios.get(`https://api.orivehrms.com/committees/get/${id}`);
   setCommittee(result.data);
  };

  const handleInputChange = (e) => {
   setCommittee({
      ...committee,
      [e.target.name]: e.target.value,
    });
  };

  const updateCommittee = async (e) => {
    e.preventDefault();
    await axios.put(`https://api.orivehrms.com/committees/update/${id}`, committee);
    navigate("/hr/procurement/committee");
  };

  
  return (
    <div>
    <Header />
    <div className="dashboard-container">
      <SideBar />
      <div className="head-foot-part" style={{ padding: "0" }}>
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit Committee</h2>
      <form onSubmit={(e) =>updateCommittee(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="purchaseDate">
            Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="title"
            id="title"
            required
            value={committee.name}
            onChange={(e) => handleInputChange(e)}
          />
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
              to={"/hr/procurement/committee"}
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

export default EditCommittee;
