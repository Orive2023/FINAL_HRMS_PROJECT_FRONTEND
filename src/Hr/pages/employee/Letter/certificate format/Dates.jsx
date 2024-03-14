import React from "react";

const Dates = ({ registrationNo, employeeName, issueDate}) => {
  return (
    <article className=" d-flex">
      <ul>
        <li className="">
          <span className="fw-bold">Employee Name:</span> {employeeName}
        </li>
        <li className="">
          <span className="fw-bold">Registration No.:</span> {registrationNo}
        </li>
        <li className="">
          <span className="fw-bold">Issue Date:</span> {issueDate}
        </li>
      </ul>
    </article>
  );
};

export default Dates;
