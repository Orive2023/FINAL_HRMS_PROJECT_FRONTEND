import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

const EditExpenses = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [expenses, setExpenses] = useState({

    
    purchaseDate: "",
    description:"",
    amount: "",
    purchaseBy: "",
    
  });

  const {
   
    purchaseDate,
    description,
    amount,
    purchaseBy,
    
  } = expenses;

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const result = await axios.get(`http://localhost:8081/expence/get/${id}`);
    setExpenses(result.data);
  };

  const handleInputChange = (e) => {
    setExpenses({
      ...expenses,
      [e.target.name]: e.target.value,
    });
  };

  const updateExpenses = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/expence/update/${id}`, expenses);
    navigate("/expenses");
  };

  return (
    <div>
    <Header />
    <div className="dashboard-container">
      <SideBar />
      <div className="head-foot-part" style={{ padding: "0" }}>
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit Expenses</h2>
      <form onSubmit={(e) => updateExpenses(e)}>
        

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="purchaseDate">
            Purchased Date
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="purchaseDate"
            id="purchaseDate"
            required
            value={purchaseDate}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="expenceType">
           Description
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="expenceType"
            id="expenceType"
            required
            value={description}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="amount">
            Amount
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="amount"
            id="amount"
            required
            value={amount}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="purchaseBy">
            Purchased By
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="purchaseBy"
            id="purchaseBy"
            required
            value={purchaseBy}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        

        <div className="row mb-5">
          <div className="col-sm-2">
            <button
              type="submit"
              className="btn btn-outline-success btn-lg"
            >
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/expenses"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
      </div>
    </div>
  </div>
    
  );
};

export default EditExpenses;
