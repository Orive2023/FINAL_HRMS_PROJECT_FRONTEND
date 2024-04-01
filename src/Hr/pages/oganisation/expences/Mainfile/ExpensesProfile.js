import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import Orive from '../../../../asset/Orive Logo 2.png'
import { Link } from "react-router-dom";

const ExpensesProfile = () => {
  const { id } = useParams();

  const [expenses, setExpenses] = useState({
    expenceType : "",
    createdDate : "",
    total: "",
    expenseListEntities : [],
      
        expenceListId: "",
        expenceId: "",
        purchaseDate: "",
        description: "" ,
        purchasedBy:  "",
        amount: "",
  });

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const result = await axios.get(`https://api.orivehrms.com/expence/get/${id}`);
    setExpenses(result.data);
  };

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
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
                  {/* {` ${expenses.expenceType}`} */}
                </h5>
                <div className="d-flex justify-content-center mb-2">
                        <Link to="/hr/organisation/expences">
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
                          <h5 className="mb-0">Expense Type</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {expenses.expenceType}
                          </p>
                        </div>
                      </div>

                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0">Created Date</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {expenses.createdDate}
                          </p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <h5 className="mb-0"> Total</h5>
                        </div>

                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{expenses.total}</p>
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

export default ExpensesProfile;