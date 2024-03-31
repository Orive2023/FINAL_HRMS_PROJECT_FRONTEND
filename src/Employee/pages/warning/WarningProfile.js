import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import CompanyLogoFile from "../../components/CompanyLogoFile";

const WarningProfile = () => {
	const { id } = useParams();

	const [award, setaward] = useState({
    employeeName: "",
    username: "",
    warningType: "",
    subject: "",
    warningByEmployee: "",
    warningDate: "",
    description: ""
	});

	useEffect(() => {
		loadaward();
	}, []);

	const loadaward = async () => {
		const result = await axios.get(
			`https://api.orivehrms.com/warnings/get/${id}`
		);
		setaward(result.data);
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
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${award.employeeName} ${award.username}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
                        <Link to="/employee/award">
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
											{award.employeeName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										User Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.username}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										warning Type
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.warningType}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                                        subject
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.subject}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										warning By Employee
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.warningByEmployee}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Warning Date
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.warningDate}
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
											{award.description}
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

export default WarningProfile;
