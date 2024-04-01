import React, {
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

const CommitteeProfile = () => {
  const { id } = useParams();

  const [committee, setCommittee] = useState({
    name: "",
    signature: "",

  });

  useEffect(() => {
    loadCommittee();
  }, []);

  const loadCommittee = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/committees/get/${id}`
    );
    setCommittee(result.data);
  };

  return (
    <div>
    <Header />
    <div className="dashboard-container">
      <SideBar />
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
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />


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
                     Name
                    </h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {committee.name}
                    </p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">
                     Signature
                    </h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {committee.signature}
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

export default CommitteeProfile;
