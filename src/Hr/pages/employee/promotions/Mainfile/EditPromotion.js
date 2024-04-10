import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import { useNavigate, useParams } from "react-router-dom";

const EditPromotion = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(false);


  const [promotion, setpromotion] = useState({
    promotionDate: "",
    employeeName: "",
    promotionTitle: "",
  });

  useEffect(() => {
    loadpromotion();
  }, []);
  const url = "api.orivehrms.com";
  const ip = "13.126.190.50:8082";
  const loadpromotion = async () => {
    const result = await axios.get(`https://${url}/promotions/get/${id}`);
    setpromotion(result.data);
  };

  const handleInputChange = (e) => {
    setpromotion({
      ...promotion,
      [e.target.name]: e.target.value,
    });
  };
//   const updatepromotion = async (e) => {
//     await axios.put(`https://${url}/promotions/update/${id}`, promotion);
//     navigate("/hr/employee/promotions");
//   };
  const [menu, setMenu] = useState(false);

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://${url}/promotions/update/${id}`, promotion);
    navigate("/hr/employee/promotions");
  };

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
            <h2 className="mt-5"> Edit promotion</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="employeeName">
                  Promotion For
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="employeeName"
                  id="employeeName"
                  required
                  value={promotion.employeeName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="promotionDate">
                  Promotion Date
                </label>
                <input
                  className="form-control col-sm-6"
                  type="date"
                  name="promotionDate"
                  id="promotionDate"
                  required
                  value={promotion.promotionDate}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="promotionTitle">
                  Promotion Title
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="promotionTitle"
                  id="promotionTitle"
                  required
                  value={promotion.promotionTitle}
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
                  onClick={() => navigate("/hr/employee/promotions")}
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

export default EditPromotion;
