import React, {
    useEffect,
    useState,
  } from "react";
  import axios from "axios";

  import Button from "@mui/material/Button";
  
  import {
    Link,
    useNavigate,
    useParams,
  } from "react-router-dom";

  import Header from "../../../../components/Header";
  import SideBar from "../../../../components/SideBar";
  import CompanyLogoFile from "../../../../components/CompanyLogoFile";
  
  const EditTalent = () => {
    let navigate = useNavigate();
  
    const { id } = useParams();
  
    const [talent, setTalent] = useState({
      name: "",
      requirements: "",
      projectName: "",
      managerName: "",
      startDate: "",
      endDate: "",
      jobLocation: ""
    });
  
  
    useEffect(() => {
      loadTalent();
    }, []);
  
    const loadTalent = async () => {
      const result = await axios.get(
        `https://api.orivehrms.com/talent/get/${id}`
      );
      setTalent(result.data);
    };
  
    const handleInputChange = (e) => {
      setTalent({
        ...talent,
        [e.target.name]: e.target.value,
      });
    };
    const updateTalent = async (e) => {
      e.preventDefault();
      await axios.put(
        `https://api.orivehrms.com/talent/update/${id}`,
        talent
      );
      navigate("/hr/recruitment/talent");
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
        <div className="col-sm-8 py-2 px-5 shadow">
        <h2 className="mt-5"> Edit Talent</h2>
        <form onSubmit={(e) => updateTalent(e)}>
          <div className="input-group mb-5">
            <label
              className="input-group-text"
              htmlFor="departmentName">
              Name
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="name"
              id="name"
              required
              value={talent.name}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
  
          <div className="input-group mb-5">
            <label
              className="input-group-text"
              htmlFor="departmentType">
              Manager Name
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="managerName"
              id="managerName"
              required
              value={talent.managerName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
  
          <div className="input-group mb-5">
            <label
              className="input-group-text"
            >
              Project Name
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="projectName"
              id="projectName"
              required
              value={talent.projectName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
  
          <div className="input-group mb-5">
            <label
              className="input-group-text"
            >
              Start Date
            </label>
            <input
              className="form-control col-sm-6"
              type="date"
              name="startDate"
              id="startDate"
              required
              value={talent.startDate}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="input-group mb-5">
            <label
              className="input-group-text"
            >
              End Date
            </label>
            <input
              className="form-control col-sm-6"
              type="date"
              name="endDate"
              id="endDate"
              required
              value={talent.endDate}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="input-group mb-5">
            <label
              className="input-group-text"
            >
              Job Location
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="jobLocation"
              id="jobLocation"
              required
              value={talent.jobLocation}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="input-group mb-5">
            <label
              className="input-group-text"
            >
              Requirements
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="requirements"
              id="requirements"
              required
              value={talent.requirements}
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
                  onClick={() => navigate("/recruitment/talent")}
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
  
  export default EditTalent;
  