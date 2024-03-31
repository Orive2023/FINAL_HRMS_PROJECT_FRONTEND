import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import axios from "axios";
import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import CompanyLogoFile from "../../../components/CompanyLogoFile";
import { Link } from "react-router-dom";

const ResignationProfile = () => {
	const { id } = useParams();

	const [resignation, setresignation] = useState({
	  employeeName: "",
      resignationDate: "",
      noticeDate: "",
      resignationReason: "",
	});

	useEffect(() => {
		loadresignation();
	}, []);

	const loadresignation = async () => {
		const result = await axios.get(
			`https://api.orivehrms.com/resignations/get/${id}`
		);
		setresignation(result.data);
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
									{`${resignation.employeeName}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
                        <Link to="/employee/resignation">
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
											{resignation.employeeName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
										Resignation Date
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{resignation.resignationDate}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Notice Data
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{resignation.noticeDate}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Resignation Reason
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{resignation.resignationReason}
										</p>
									</div>
								</div>
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

export default ResignationProfile;
