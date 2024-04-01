import React, {
  useEffect,
  useState,
} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import Orive from '../../../../asset/Orive Logo 2.png'

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const PoliciesProfile = () => {
  const { id } = useParams();

  const [policies, setPolicies] = useState({
    companyName: "",
    title: "",
    description: "",

  });

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/policies/get/${id}`
    );
    setPolicies(result.data);
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
                  {/* {` ${policies.companyName}`} */}
                </h5>
                <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/organisation/policies">
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
                      Comapany Name
                    </h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {policies.companyName}
                    </p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">
                     Title
                    </h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {policies.title}
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
                      {policies.description}
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
                      {policies.createdDate}
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

export default PoliciesProfile;