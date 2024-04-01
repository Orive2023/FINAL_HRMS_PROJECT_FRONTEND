import React, {
  useEffect,
  useState,
} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import Orive from '../../../../asset/Orive Logo 2.png'

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const DepartmentProfile = () => {
  const { id } = useParams();

  const [department, setDepartment] = useState({
    departmentName: "",
    companyName: "",
    locationName: "",
    departmentHead: "",
    createdDate: "",
  });

  useEffect(() => {
    loadDepartment();
  }, []);

  const loadDepartment = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/department/get/${id}`
    );
    setDepartment(result.data);
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
                <h5 className="my-3">Orive solution
                  {/* {${department.departmentName}} */}
                </h5>
                <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/organisation/department">
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
                      Department Name
                    </h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {department.departmentName}
                    </p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">
                      Company Name
                    </h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {department.companyName}
                    </p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">
                      Location Name
                    </h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {department.locationName}
                    </p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">
                    Department Head
                    </h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {department.departmentHead}
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
                      {department.createdDate}
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

export default DepartmentProfile;