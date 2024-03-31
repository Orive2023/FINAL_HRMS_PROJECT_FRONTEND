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

const TravelProfile = () => {
	const { id } = useParams();

	const [award, setaward] = useState({
        employeeName: "",
        username: "",
        startDate: "",
        endDate: "",
        purposeOfVisit: "",
        placeOfVisit: "",
        travelMode: "",
        arrangementType: "",
        expectedTravelBudget: "",
        actualTravelBudget: "",
        description: "",
        createdDat: ""
	});

	useEffect(() => {
		loadaward();
	}, []);

	const loadaward = async () => {
		const result = await axios.get(
			`https://api.orivehrms.com/travels/get/${id}`
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
                        <Link to="/employee/travel">
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
										 Employee Id
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
										Start Date
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.startDate}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											End Date
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.endDate}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Purpose Of Visit
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.purposeOfVisit}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Place Of Visit
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.placeOfVisit}
										</p>
									</div>
								</div>
								<hr />

                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Arrangement Type
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.arrangementType}
										</p>
									</div>
								</div>
								<hr />

                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Expected Travel Budget
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.expectedTravelBudget}
										</p>
									</div>
								</div>
								<hr />

                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Actual Travel Budget
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.actualTravelBudget}
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

                                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Created Date
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.createdDat}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Travel Mode
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.travelMode}
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

export default TravelProfile;
