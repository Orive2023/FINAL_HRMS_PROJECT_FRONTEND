import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import Button from "@mui/material/Button";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const EditExpenses = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  let navigate = useNavigate();

  const { id } = useParams();

  const [expenses, setExpenses] = useState({
    expenceType: "",
    total: "",
  });

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const result = await axios.get(`https://api.orivehrms.com/expence/get/${id}`);
    setExpenses(result.data);
  };

  const handleInputChange = (e) => {
    setExpenses({
      ...expenses,
      [e.target.name]: e.target.value,
    });
  };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://api.orivehrms.com/expence/update/${id}`, expenses);
    navigate("/hr/organisation/expenses");
  };

  // const updateExpenses = async (e) => {
  //   e.preventDefault();
  //   await axios.put(`https://api.orivehrms.com/expence/update/${id}`, expenses);
  //   navigate("/hr/organisation/expenses");
  // };
  const [menu, setMenu] = useState(false);
  console.log(expenses);
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
            <h2 className="mt-5"> Edit Expenses</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}
            >
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="expenceType">
                  Expense Type
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="expenceType"
                  id="expenceType"
                  required
                  value={expenses.expenceType}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="total">
                  Total Amount
                </label>
                <input
                  className="form-control col-sm-6"
                  type="number"
                  name="total"
                  id="total"
                  required
                  value={expenses.total}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="data-buttons">
                <Button
                  id="input-btn-submit"
                  className="submit"
                  type="submit"
                  variant="outlined"
                >
                  Submit
                </Button>
                <Button
                  id="input-btn-cancel"
                  className="cancel"
                  onClick={() => navigate("/hr/organisation/expences")}
                  variant="outlined"
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

export default EditExpenses;
