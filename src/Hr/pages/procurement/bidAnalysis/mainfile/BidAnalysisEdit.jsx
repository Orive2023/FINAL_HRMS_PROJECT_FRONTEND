import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
const BidAnalysisEdit = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [bidanalysis, setBidAnalysis] = useState({
    purchaseDate: "",
    description: "",
    amount: "",
    purchaseBy: "",
  });

  const { purchaseDate, description, amount, purchaseBy } = bidanalysis;

  useEffect(() => {
    loadBidAnalysis();
  }, []);

  const loadBidAnalysis = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/bidAnalysis/get/${id}`
    );
    setBidAnalysis(result.data);
  };

  const handleInputChange = (e) => {
    setBidAnalysis({
      ...bidanalysis,
      [e.target.name]: e.target.value,
    });
  };

  const updateBidAnalysis = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://api.orivehrms.com/bidAnalysis/update/${id}`,
      bidanalysis
    );
    navigate("/hr/procurement/bidAnalysis");
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
            <h2 className="mt-5"> Edit bidanalysis</h2>
            <form onSubmit={(e) => updateBidAnalysis(e)}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="purchaseDate">
                  Purchased Date
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="purchaseDate"
                  id="purchaseDate"
                  required
                  value={purchaseDate}
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
                  value={description}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="amount">
                  Amount
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="amount"
                  id="amount"
                  required
                  value={amount}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="purchaseBy">
                  Purchased By
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="purchaseBy"
                  id="purchaseBy"
                  required
                  value={purchaseBy}
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
                    to={"/hr/procurement/bidAnalysis"}
                    type="submit"
                    className="btn btn-outline-warning btn-lg"
                  >
                    Cancel
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

export default BidAnalysisEdit;
