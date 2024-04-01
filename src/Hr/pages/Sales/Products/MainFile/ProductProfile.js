import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Orive from '../../../../asset/Orive Logo 2.png'
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";


const ProductProfile = () => {
    const { id } = useParams();

  const [product, setProducts] = useState({
    productPricePerUnit: "",
    noOfClients: "",
    grossRevenue: "",
    saleDate: "",
    returns: "",
    discounts: "",
    allowances: "",
    netRevenue: "",
    moneyAddedBankName: "",
    productName: "",
  });
  useEffect(() => {
    loadproduct();
  }, []);

  const loadproduct = async () => {
    const result = await axios.get(`https://api.orivehrms.com/revenue/get/${id}`);
    setProducts(result.data);
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
                        <h5 className="my-3">Orive Solution
                          {/* {${product.productName}} */}
                        </h5>
                        <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/sales/product">
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
                          <h5 className="mb-0">Product Name</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {product.productName}
                          </p>
                        </div>
                      </div>
                      <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Product Price Per Unit</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{product.productPricePerUnit}</p>
                          </div>
                        </div>
  
                        <hr />
  
                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">No Of Clients</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{product.noOfClients}</p>
                          </div>
                        </div>
                        <hr />
  
                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Gross Revenue</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{product.grossRevenue}</p>
                          </div>
                        </div>
                        <hr />
  
                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Sale Date</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{product.saleDate}</p>
                          </div>
                        </div>
                        <hr />
  
                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Net Revenue</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              {product.netRevenue}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h5 className="mb-0">Bank Name</h5>
                          </div>
  
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{product.moneyAddedBankName}</p>
                          </div>
                        </div>
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

export default ProductProfile;