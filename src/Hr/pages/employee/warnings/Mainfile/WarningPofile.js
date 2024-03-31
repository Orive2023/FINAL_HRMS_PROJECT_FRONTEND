import React, {
	useEffect,
	useState,
} from "react";
import { Link } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import { useParams } from "react-router-dom";
import logo from '../../../../asset/Orive Logo 2.png'
import axios from "axios";

const WarningPofile = () => {
	const { id } = useParams();

	const [warning, setwarning] = useState({
		employeeName: "",
		warningType: "",
		subject: "",
		warningByEmployee: "",
		warningDate: "",
		description: "",
	});

	useEffect(() => {
		loadWarning();
	}, []);

	const loadWarning = async () => {
		const result = await axios.get(`https://api.orivehrms.com/warnings/get/${id}`
		);
		setwarning(result.data);
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
						 {/* {`${warning.warningToEmployee} `} */}
					   </h5>
					   <div className="d-flex justify-content-center mb-2">
						 <Link to="/hr/employee/warning">
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
						   <h5 className="mb-0">Warning to Employee</h5>
						 </div>
 
						 <div className="col-sm-9">
						   <p className="text-muted mb-0">
							 {warning.employeeName}
						   </p>
						 </div>
					   </div>
 
					   <hr />
 
					   <div className="row">
						 <div className="col-sm-3">
						   <h5 className="mb-0">Warning Type</h5>
						 </div>
 
						 <div className="col-sm-9">
						   <p className="text-muted mb-0">
							 {warning.warningType}
						   </p>
						 </div>
					   </div>
					   <hr />
 
					   <div className="row">
						 <div className="col-sm-3">
						   <h5 className="mb-0">Subject</h5>
						 </div>
 
						 <div className="col-sm-9">
						   <p className="text-muted mb-0">{warning.subject}</p>
						 </div>
					   </div>
					   <hr />
 
					   <div className="row">
						 <div className="col-sm-3">
						   <h5 className="mb-0">Warning By Employee</h5>
						 </div>
 
						 <div className="col-sm-9">
						   <p className="text-muted mb-0">{warning.warningByEmployee}</p>
						 </div>
					   </div>
					   <hr/>

					   <div className="row">
						 <div className="col-sm-3">
						   <h5 className="mb-0">Warning Date</h5>
						 </div>
 
						 <div className="col-sm-9">
						   <p className="text-muted mb-0">{warning.warningDate}</p>
						 </div>
					   </div>
					   <hr/>
					   <div className="row">
						 <div className="col-sm-3">
						   <h5 className="mb-0">Description</h5>
						 </div>
 
						 <div className="col-sm-9">
						   <p className="text-muted mb-0">{warning.description}</p>
						 </div>
					   </div>
					   <hr/>
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

export default WarningPofile;