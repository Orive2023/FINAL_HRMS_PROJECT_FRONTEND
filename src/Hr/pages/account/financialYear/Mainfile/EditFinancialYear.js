import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import Button from "@mui/material/Button";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const EditFinancialYear = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [financial, setFinancial] = useState({
    financialYear:"",
    financialYearStartDate:"",
    financialYearEndDate:""
  });

 

  useEffect(() => {
    loadFinancialYear();
  }, []);

  const loadFinancialYear = async () => {
    const result = await axios.get(`https://api.orivehrms.com/financialyear/get/${id}`);
    setFinancial(result.data);
  };

  const handleInputChange = (e) => {
    setFinancial({
      ...financial,
      [e.target.name]: e.target.value,
    });
  };
  const [showConfirmation, setShowConfirmation] = useState(false);


  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };
 

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(`https://api.orivehrms.com/financialyear/update/${id}`, financial);
    navigate("/hr/account/financial-year");
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
    <div className="head-foot-part" >
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit Financial Year</h2>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        showUpdateConfirmation();
      }}
    >        

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="financialYear">
            Financial Year
          </label>
          <input
            className="form-control col-sm-6"
            type="number"
            name="financialYear"
            id="financialYear"
            required
            value={financial.financialYear}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="startDate">
           Start Date
          </label>
          <input
            className="form-control col-sm-6"
            type="date"
            name="financialYearStartDate"
            id="financialYearStartDate"
            required
            value={financial.financialYearStartDate}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="endDate">
            End Date 
          </label>
          <input
            className="form-control col-sm-6"
            type="date"
            name="financialYearEndDate"
            id="financialYearEndDate"
            required
            value={financial.financialYearEndDate}
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
          onClick={() => navigate("/hr/account/financial-year")}
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

export default EditFinancialYear;
