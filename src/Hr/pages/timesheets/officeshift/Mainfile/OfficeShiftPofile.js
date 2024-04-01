import React, {
	useEffect,
	useState,
} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Orive from '../../../../asset/Orive Logo 2.png'

const OfficeShiftPofile = () => {
	const { id } = useParams();

	const [officeshift, setOfficeShift] = useState({
		createdDate: "",
		day: "",
		officeClockInTime: "",
		officeClockOutTime: "",
	});

	useEffect(() => {
		loadOfficeShift();
	}, []);

	const loadOfficeShift = async () => {
		const result = await axios.get(
			`https://api.orivehrms.com/officeshifts/get/${id}`
		);
		setOfficeShift(result.data);
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
									src={Orive}
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">Orive Solution
									{/* {${officeshift.createdDate}} */}
								</h5>
								<div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/timesheets/officeshift">
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
											Created Date
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{officeshift.createdDate}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Day
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{officeshift.day}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											OfficeClockInTime
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{officeshift.officeClockInTime}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Office ClockOut Time
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{officeshift.officeClockOutTime}
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

export default OfficeShiftPofile;