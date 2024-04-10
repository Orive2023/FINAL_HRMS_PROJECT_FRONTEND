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
import logo from "../../../Hr/asset/Orive Logo 2.png";

const AwardProfile = () => {
	const { id } = useParams();

	const [award, setaward] = useState({
	  awardName: "",
      awardDescription: "",
      username: "",
      date: "",
      employeeName: "",
      awardBy: "",
      giftItem: "",
	});

	useEffect(() => {
		loadaward();
	}, []);

	const loadaward = async () => {
		try {
			const result = await axios.get(
				`https://api.orivehrms.com/awards/get/${id}`
			);
			setaward(result.data);
		} catch (error) {
			console.log("load award failed", error);
		}
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
								<h5 className="my-3">
									{`${award.awardName} ${award.employeeName}`}
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
											Award Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.awardName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Award Description
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.awardDescription}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Username
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
											Date
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.date}
										</p>
									</div>
								</div>
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
										Award By
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.awardBy}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Gift Item
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{award.giftItem}
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

export default AwardProfile;
