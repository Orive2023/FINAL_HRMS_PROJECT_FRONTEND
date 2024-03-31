import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from '../../../../asset/Orive Logo 2.png'
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const TerminationPofile = () => {
	const { id } = useParams();

	const [termination, setTermination] = useState({
		    employeeName: "",
            terminateDate: "",
            reasonForTermination: "",
            terminatedBy:"",
			email:"",
	});

	useEffect(() => {
		loadTermination();
	}, []);

	const loadTermination = async () => {
		const result = await axios.get(
			`https://api.orivehrms.com/terminations/get/${id}`
		);
		setTermination(result.data);
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
		  <div className="head-foot-part">
		  <section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
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
									
								</h5>
								<div className="d-flex justify-content-center mb-2">
								<Link to="/hr/employee/termination">
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
											Employee Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{termination.employeeName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Termination Date
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{termination.terminateDate}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Reason For Termination
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{termination.reasonForTermination}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{termination.email}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Terminated By 
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{termination.terminatedBy}
										</p>
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

export default TerminationPofile;