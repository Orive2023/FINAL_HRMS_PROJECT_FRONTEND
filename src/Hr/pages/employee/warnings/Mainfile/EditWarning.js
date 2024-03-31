import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Button from "@mui/material/Button";
import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditWarning = () => {
	const [showConfirmation, setShowConfirmation] = useState(false);
	let navigate = useNavigate();

	const { id } = useParams();

	const [warning, setwarning] = useState({
		warningToEmployee: "",
		warningByEmployee: "",
		
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
			`https://api.orivehrms.com/warnings/update/${id}`,
			warning
		);
		navigate("/hr/employee/warning");
	  };

	useEffect(() => {
		loadwarning();
	}, []);

	const loadwarning = async () => {
		const result = await axios.get(
			`https://api.orivehrms.com/warnings/get/${id}`
		);
		setwarning(result.data);
	};

	const handleInputChange = (e) => {
		setwarning({
			...warning,
			[e.target.name]: e.target.value,
		});
	};
	const updatewarning = async (e) => {
		e.preventDefault();
		await axios.put(
			`https://api.orivehrms.com/warnings/update/${id}`,
			warning
		);
		navigate("/hr/employee/warning");
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
	  <h2 className="mt-5"> Edit warning</h2>
			<form  onSubmit={(e) => { e.preventDefault(); showUpdateConfirmation(); }}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="warningToEmployee">
						Warning To Employee
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="warningToEmployee"
						id="warningToEmployee"
						required
						value={warning.employeeName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="warningByEmployee">
						Warning By Employee
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="warningByEmployee"
						id="warningByEmployee"
						required
						value={warning.warningByEmployee}	
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
                  onClick={() => navigate("/hr/employee/warning")}
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

export default EditWarning;
