import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Button from "@mui/material/Button";

const EditEmployeeExit = () => {
  let navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { id } = useParams();

  const [employeeExit, setemployeeExit] = useState({
    employeeName: "",
    typeOfExit: "",
    exitDate: "",
  });
  const showUpdateConfirmation = () => {
		setShowConfirmation(true);
	  };
	
	  const hideUpdateConfirmation = () => {
		setShowConfirmation(false);
	  };

	  const handleUpdate = async () => {
		hideUpdateConfirmation();
		await axios.put(
			`https://api.orivehrms.com/employee_exit/update/${id}`,
			employeeExit
		);
		navigate("/hr/employee/employee-exit");
	  };

 

  useEffect(() => {
    loademployeeExit();
  }, []);

  const loademployeeExit = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/employee_exit/get/${id}`,employeeExit
    );
    setemployeeExit(result.data);
	console.log(employeeExit);
  };


  const handleInputChange = (e) => {
    setemployeeExit({
      ...employeeExit,
      [e.target.name]: e.target.value,
    });
  };
  const updateemployeeExit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://api.orivehrms.com/employee_exit/update/${id}`,
      employeeExit
    );
    navigate("/hr/employee/employee-exit");
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
        <div className="col-sm-8 py-2 px-5 shadow">
          <h2 className="mt-5"> Edit EmployeeExit</h2>
          <form  onSubmit={(e) => { e.preventDefault(); showUpdateConfirmation(); }}>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="employeeExitName">
                EmployeeExit Name
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="employeeToExit"
                id="employeeToExit"
                value={employeeExit.employeeName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="employeeExitType">
                EmployeeExit Type
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="typeOfExit"
                id="typeOfExit"
                value={employeeExit.typeOfExit}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

           

            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="website">
              Exit Date
              </label>
              <input
                className="form-control col-sm-6"
                type="date"
                name="exitDate"
                id="exitDate"
                value={employeeExit.exitDate}
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
                  onClick={() => navigate("/hr/employee/employee-exit")}
                >
                  Back
                </Button>
              </div>
          </form>
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

export default EditEmployeeExit;
