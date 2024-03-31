import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import { Link, useNavigate, useParams } from "react-router-dom";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const EditCredit = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [credit, setCredit] = useState({
    voucherType: "",
    subType: "",
    ledgerComment: "",
  });


  useEffect(() => {
    loadCredit();
  }, []);

  const loadCredit = async () => {
    const result = await axios.get(`https://api.orivehrms.com/creditvoucher/get/${id}`);
    setCredit(result.data);
  };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://api.orivehrms.com/creditvoucher/update/${id}`, credit);
    navigate("/hr/account/credit");
  };

  const handleInputChange = (e) => {
    setCredit({
      ...credit,
      [e.target.name]: e.target.value,
    });
  };

  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5"> Edit Credit</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}
            >
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
                  value={credit.accountName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="subType">
                  Sub Type
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="subType"
                  id="subType"
                  required
                  value={credit.subType}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="ledgerComment">
                  Ledger Comment
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="ledgerComment"
                  id="ledgerComment"
                  required
                  value={credit.ledgerComment}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="data-buttons">
                <Button id="input-btn-submit"
                 variant="outlined" type="submit">
                 Submit
                 </Button>

                 <Button
                 id="input-btn-cancel"
                 variant="outlined"
                 onClick={() => navigate("/hr/account/credit-voucher")}
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

export default EditCredit;
