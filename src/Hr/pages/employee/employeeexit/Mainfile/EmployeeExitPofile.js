import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import logo from '../../../../asset/Orive Logo 2.png'
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
const EmployeeExitPofile = () => {
	const { id } = useParams();

	const [employeeExit, setemployeeExit] = useState({
	  employeeToExit: "",
      exitDate: "",
      typeOfExit: "",
      exitInterview: "",
      inactivateEmployeeAccount: "",
      description: "",
		
	});

	useEffect(() => {
		loademployeeExit();
	}, []);
	const [menu, setMenu] = useState(false);
	const loademployeeExit = async () => {
		const result = await axios.get(
			`https://api.orivehrms.com/employee_exit/get/${id}`
		);
		setemployeeExit(result.data);
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
		   <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
			 <div className="container py-5">
			   <div className="row">
				 <div className="col-lg-3">
				   <div className="card mb-4">
					 <div className="card-body text-center">
					   <img
						src={logo}
						 alt="avatar"
						 className="rounded-circle img-fluid"
						 style={{ width: 150 }}
					   />
					   <h5 className="my-3">Orive Solution
						 {/* {`${employeeExit.employeeToExit} `} */}
					   </h5>
					   <div className="d-flex justify-content-center mb-2">
						 <Link to="/hr/employee/employee-exit">
						   <button
							 type="button"
							 className="btn btn-outline-secondary ms-1"
						   >
							 Back
						   </button>
						 </Link>
					   </div>
					 </div>
				   </div>
				 </div>
 
					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Employee To Exit
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employeeExit.employeeName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Exit Date
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employeeExit.exitDate}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Type Of Exit
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employeeExit.typeOfExit}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Exit Interview
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employeeExit.exitInterview}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Inactivate Employee Account
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employeeExit.inactivateEmployeeAccount}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Description
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employeeExit.description}
										</p>
									</div>
								</div>
								<hr />

								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
				   </div>
				 </div>
	);
};

export default EmployeeExitPofile;