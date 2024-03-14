import React from "react";

const Dates = ({ employeeName, employeeId, employeeAddress }) => {
  return (
    <article className="d-flex">
      <ul>
        <li className="">
          <span className="fw-bold">Employee Name:</span> {employeeName}
        </li>
        <li className="">
          <span className="fw-bold">Employee ID:</span> {employeeId}
        </li>
        <li className="">
          <span className="fw-bold">Employee Address:</span> {employeeAddress}
        </li>
      </ul>
    </article>
  );
};

export default Dates;
