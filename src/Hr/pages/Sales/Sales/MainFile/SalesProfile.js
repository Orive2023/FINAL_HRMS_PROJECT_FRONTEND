import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Orive from '../../../../asset/Orive Logo 2.png'
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";


const SalesProfile = () => {
    const { id } = useParams();

    const [sales, setSales] = useState({
      developerCost: "", 
      researchAndDevlopment: "",
      customerSupportAndTechnicalAssitance: "",
      serverMaintance: "",
      customerSegment: "",
      distributionChannel: "",
      thirdPartySoftwareComponent: "",
      perUserPrice: "",
      totalNumberOfUser: "",
      totalUserCost: "",
      directSalesThroughWebsite: "",
      salesTeam: "",
      totalPrice: "",
      gstPrice: "",
      totalCost: ""
      // status: ""
       
    });
    useEffect(() => {
      loadSales();
    }, []);
  
    const loadSales = async () => {
      const result = await axios.get(`https://api.orivehrms.com/sale/get/${id}`);
      setSales(result.data);
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
            <div className="shadow" style={{ backgroundColor: "whitesmoke" }}>
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
                        <h5 className="my-3"style={{gap:'2px'}}>Orive Solution 
                          {/* {${sales.totalCost}} */}
                        </h5>
                        <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/sales/sales">
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
                            <h5 className="mb-0">Developer Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.developerCost}</p>
                          </div>
                        </div>
  
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Research And Devlopment Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.researchAndDevlopment}</p>
                          </div>
                        </div>
  
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Customer Support And Technical Assitance Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.customerSupportAndTechnicalAssitance}</p>
                          </div>
                        </div>
  
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Server Maintance Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.serverMaintance}</p>
                          </div>
                        </div>
  
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Customer Segment Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.customerSegment}</p>
                          </div>
                        </div>
  
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Distribution Channel Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.distributionChannel}</p>
                          </div>
                        </div>
  
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Third Party Software Component Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.thirdPartySoftwareComponent}</p>
                          </div>
                        </div>
  
                        <hr />
  
                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Per User Price</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.perUserPrice}</p>
                          </div>
                        </div>
                        <hr />
  
                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Total Number Of User</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.totalNumberOfUser}</p>
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Total User Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.totalUserCost}</p>
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Direct Sales Through Website Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.directSalesThroughWebsite}</p>
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Sales Team Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.salesTeam}</p>
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Total Price</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.totalPrice}</p>
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">GST Price</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.gstPrice}</p>
                          </div>
                        </div>
                        <hr />
  
                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Total Cost</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{sales.totalCost}</p>
                          </div>
                        </div>
                        <hr />
  
                        {/* <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Status</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              {sales.status}
                            </p>
                          </div>
                        </div> */}
                       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
}

export default SalesProfile;