import React from "react";

const HeadContent = ({username, employeeName, formReleaseDate, designation }) => {
  return (
    <article className="d-flex">
      <ul>

      <li className="">
          <span className="fw-bold">Releasing Date:</span> {formReleaseDate}
        </li>
        <li className="">
          <span className="fw-bold">Employee Name:</span> {employeeName}
        </li>
        <li className="">
          <span className="fw-bold">User Name:</span> {username}
        </li>
        <li className="">
          <span className="fw-bold">Designation:</span> {designation}
        </li>
      </ul>
    </article>
  );
};

export default HeadContent;
