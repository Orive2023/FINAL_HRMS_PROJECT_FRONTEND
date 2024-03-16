import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataNotFound from "../../../asset/images/no data 1.png";

const BidAnalysisTable = ({ bidAnalysis, setRecDelete }) => {
  const handleDelete = (id) => {
    setRecDelete(id);
  };

  const renderbidData = () => {
    return (
      <tr>
        <td colSpan="12" className="text-center">
          <img style={{ margin: "50px 0 50px 0" }} src={DataNotFound}></img>
          <h1>No Data Found!</h1>
          <p>
            It Looks like there is no data to display in this table at the
            moment
          </p>
        </td>
      </tr>
    );
  };

  return (
    <table id="table" className="table table-bordered table-hover shadow">
      <thead>
        <tr className="text-center">
          <th>SL.</th>
          <th>Location</th>
          <th>Quotation</th>
          <th>Status</th>
          <th>Date</th>

          <th colSpan="3">Actions</th>
        </tr>
      </thead>

      <tbody className="text-center">
        {bidAnalysis &&
          bidAnalysis.map((bid, index) => (
            <tr key={bid.bidAnalysisId}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{bid.location}</td>
              <td>{bid.quotation}</td>
              <td>{bid.status}</td>
              <td>{bid.date}</td>

              <td className="mx-2">
                <div
                  onClick={() => handleDelete(bid.bidAnalysisId)}
                >
                  <FaTrashAlt className="action-delete"/>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default BidAnalysisTable;
