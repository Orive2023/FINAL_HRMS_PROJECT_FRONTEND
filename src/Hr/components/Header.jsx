import React, { useEffect, useState } from "react";
import Notificationlogo from "../asset/24px/Notification.png";
import MessageLogo from "../asset/24px/message.png";
import UserLogo from "../asset/24px/User.png";
import { Navigate } from "react-router";
import DataNotFound from "../asset/images/no data 1.png";


const Header = ({ menu, setMenu }) => {
  const handleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [redirectTo, setRedirectTo] = useState(null);

  const handleSearch = () => {
    if (searchTerm === "company") {
      setRedirectTo("/hr/organisation/company");
    } else if (searchTerm === "location") {
      setRedirectTo("/hr/organisation/location");
    } else if (searchTerm === "department") {
      setRedirectTo("/hr/organisation/department");
    } else if (searchTerm === "designation") {
      setRedirectTo("/hr/organisation/designation/");
    } else if (searchTerm === "policies") {
      setRedirectTo("/hr/organisation/policies");
    } else if (searchTerm === "announcements") {
      setRedirectTo("/hr/organisation/announcements");
    } else if (searchTerm === "expenses") {
      setRedirectTo("/hr/organisation/expences");


    } else if (searchTerm === "employees") {
      setRedirectTo("/hr/employee/employee");
    }
   else if (searchTerm === "awards") {
    setRedirectTo("/hr/employee/awards");
  }
  else if (searchTerm === "transfers") {
    setRedirectTo("/hr/employee/transfer");
  }
  else if (searchTerm === "resignation") {
    setRedirectTo("/hr/employee/resignation");
  }
  else if (searchTerm === "travels") {
    setRedirectTo("/hr/employee/travel");
  }
  else if (searchTerm === "promotions") {
    setRedirectTo("/hr/employee/promotions");
  }
  else if (searchTerm === "complaints") {
    setRedirectTo("/hr/employee/complaints");
  }
  else if (searchTerm === "warnings") {
    setRedirectTo("/hr/employee/warning");
  }
  else if (searchTerm === "termination") {
    setRedirectTo("/hr/employee/termination");
  }
  else if (searchTerm === "employee exit") {
    setRedirectTo("/hr/employee/employee-exit");
  }
  else if (searchTerm === "certificate") {
    setRedirectTo("/hr/employee/certificate");
  }
  else if (searchTerm === "experience letter") {
    setRedirectTo("/hr/employee/experience");
  }
  else if (searchTerm === "exp joining letter") {
    setRedirectTo("/hr/employee/joining");
  }
  else if (searchTerm === "int joining letter") {
    setRedirectTo("/hr/employee/intern");
  }

  else if (searchTerm === "appraisal") {
    setRedirectTo("/hr/performance/Performance-Appraisal");
  }


  else if (searchTerm === "attendance") {
    setRedirectTo("/hr/timesheets/attendance");
  }
  else if (searchTerm === "leaves") {
    setRedirectTo("/hr/timesheets/leaves");
  }
  else if (searchTerm === "holiday") {
    setRedirectTo("/hr/timesheets/holiday");
  }
  else if (searchTerm === "officeshift") {
    setRedirectTo("/hr/timesheets/officeshift");
  }

  else if (searchTerm === "advance salary") {
    setRedirectTo("/hr/payroll/advance-Salary");
  }
  else if (searchTerm === "payslip generator") {
    setRedirectTo("/hr/payroll/payslip-generator");
  }


  else if (searchTerm === "projects") {
    setRedirectTo("/hr/project");
  }
  else if (searchTerm === "tickets") {
    setRedirectTo("/hr/ticket");
  }
  else if (searchTerm === "worksheets") {
    setRedirectTo("/hr/worksheets");
  }
  else if (searchTerm === "banks") {
    setRedirectTo("/hr/bank/add-bank");
  }
  else if (searchTerm === "loans") {
    setRedirectTo("/hr/loan/grant-loan");
  }
  else if (searchTerm === "account balance") {
    setRedirectTo("/hr/account/account-balance");
  }
  else if (searchTerm === "sub type") {
    setRedirectTo("/hr/account/sub-type");
  }
  else if (searchTerm === "debit voucher") {
    setRedirectTo("/hr/account/debit");
  }
  else if (searchTerm === "credit voucher") {
    setRedirectTo("/hr/account/credit-voucher");
  }
  else if (searchTerm === "financial year") {
    setRedirectTo("/hr/account/financial-year");
  }
  else if (searchTerm === "contra voucher") {
    setRedirectTo("/hr/account/contra-voucher/");
  }
  else if (searchTerm === "opening balance") {
    setRedirectTo("/hr/account/opening-balance");
  }


  else if (searchTerm === "bid analysis") {
    setRedirectTo("/hr/procurement/bidAnalysis");
  }
  else if (searchTerm === "commitee") {
    setRedirectTo("/hr/procurement/committee");
  }
  else if (searchTerm === "purchase order") {
    setRedirectTo("/hr/procurement/purchase-order");
  }
  else if (searchTerm === "request") {
    setRedirectTo("/hr/procurement/request");
  }
  else if (searchTerm === "units") {
    setRedirectTo("/hr/procurement/unit");
  }
  else if (searchTerm === "vendor") {
    setRedirectTo("/hr/procurement/vendor");
  }


  else if (searchTerm === "candidates") {
    setRedirectTo("/hr/procurement/vendor");
  }
  else if (searchTerm === "interview") {
    setRedirectTo("/hr/recruitment/interview");
  }
  else if (searchTerm === "talent") {
    setRedirectTo("/hr/recruitment/talent");
  }
  else if (searchTerm === "users") {
    setRedirectTo("/hr/recruitment/user");
  }
  else if (searchTerm === "trainer list") {
    setRedirectTo("/hr/trainer");
  }


  else if (searchTerm === "client") {
    setRedirectTo("/hr/sales/client");
  }
  else if (searchTerm === "product") {
    setRedirectTo("/hr/sales/product");
  }
  else if (searchTerm === "sales") {
    setRedirectTo("/hr/sales/sales");
  }


  else if (searchTerm === "reach us") {
    setRedirectTo("/hr/website/reachus");
  }
  else if (searchTerm === "journal") {
    setRedirectTo("/hr/website/journal");
  }
  else if (searchTerm === "landing page") {
    setRedirectTo("/hr/website/landing");
  }
  else if (searchTerm === "career page") {
    setRedirectTo("/hr/website/career");
  }

  else{
  }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div id="header-part" className="section-body top_dark">
        <div className="container-fluid" id="container-fluid">
          <div id="page-header" className="page-header">
            <div className="left">
              <h1 className="page-title">ORIVE Dashboard</h1>
              <div className="input-group xs-hide">
                <div className="search-print">
                  {redirectTo && <Navigate to={redirectTo} />}
                  <input
                    type="text"
                    className="search-beside-btn"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    style={{
                      width: "15rem",
                      borderRadius: "5px",
                      height: "30px",
                      padding: "10px",
                      border: "1px solid rgba(247, 108, 36, 1)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mobile-right">
              <i
                class="menu-icon bx bx-menu"
                style={{ fontSize: "24px" }}
                onClick={handleMenu}
              ></i>
            </div>
            <div className="right">
              <div className="notification d-flex">
                <div className="dropdown d-flex">
                  <a
                    href={"#"}
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                    data-toggle="dropdown"
                  >
                    {/* <i className="fa fa-envelope" /> */}
                    <img src={Notificationlogo} />
                    <span className="badge badge-success nav-unread" />
                  </a>
                </div>
                <div className="dropdown d-flex">
                  <a
                    href={"#"}
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                    data-toggle="dropdown"
                  >
                    <img src={MessageLogo} />
                    <span className="badge badge-primary nav-unread" />
                  </a>
                </div>
                <div className="dropdown d-flex">
                  <a
                    href={"#"}
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                    data-toggle="dropdown"
                  >
                    <img src={UserLogo} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
