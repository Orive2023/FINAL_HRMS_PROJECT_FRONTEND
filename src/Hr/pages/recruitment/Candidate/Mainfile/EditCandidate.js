import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";
import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import Button from "@mui/material/Button";

const EditCandidate = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [candidate, setCandidate] = useState({
        candidateName: "",
        address: "",
        email: "",
        mobileNo: "",
        ctc: "",
        ectc: "",
        location: "",
        notice:"",
        resumeUrl:"",
	});
	const {
        formVisible,setFormVisible,toggle,setToggle,resumeUrl,location,setLocationsetResumeUrl,notice,setNotice,ectc,setEctc,ctc,setCtc,email,setEmail,mobileNo,setMobileNo,updateCandidate,setUpdateCandidate,candidateName,setCandidateName,address,setAddress,recDelete,setRecDelete,dateError,setDateError,open,setOpen,search,setSearch,formControl,setFormControl,formErrors,setFormerrors,formData,setFormData
    } = candidate;

	useEffect(() => {
		loadCandidate();
	}, []);

	const loadCandidate = async () => {
		const result = await axios.get(
            `https://api.orivehrms.com/candidates/download/${id}`
		);
		setCandidate(result.data);
	};
	

	
	

	const handleInputChange = (e) => {
		setCandidate({
			...candidate,
			[e.target.name]: e.target.value,
		});
	};

	const [menu, setMenu] = useState(false);

	return (
		<div >
		   <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
	  <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
      <div className="head-foot-part" style={{ padding: "0" }}>
			<div className="col-sm-8 py-2 px-5 shadow">
			<h2 className="mt-5"> Edit Candidate</h2>
			<form onSubmit={(e) => updateCandidate(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="candidateName">
						Candidate Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="candidateName"
						id="candidateName"
						required
						value={candidateName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="terminationType">
						Address 
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="address"
						id="address"
						required
						value={address}	
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Email
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="mobileNo">
						Mobile No 
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						name="mobileNo"
						id="mobileNo"
						required
						value={mobileNo}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="ctc">
						CTC
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						name="ctc"
						id="ctc"
						required
						value={ctc}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="ectc">
						ECTC
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						name="ectc"
						id="ectc"
						required
						value={ectc}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="location">
						Location
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="location"
						id="location"
						required
						value={location}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="notice">
						Notice
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="notice"
						id="notice"
						required
						value={notice}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="resumeUrl">
						Resume
					</label>
					<input
						className="form-control col-sm-6"
						type="file"
						name="resumeUrl"
						id="resumeUrl"
						required
						value={resumeUrl}
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
                  onClick={() => navigate("/hr/recruitment/candidate")}
                >
                  Back
                </Button>
              </div>
			</form>
			</div>
		</div>
		</div>
		</div>
		
	);
};

export default EditCandidate;