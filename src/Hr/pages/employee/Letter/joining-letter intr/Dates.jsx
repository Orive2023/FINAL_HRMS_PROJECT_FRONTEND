import React from "react";

const Dates = ({ candidateName, collegeName, formReleaseDate}) => {
  return (
    <article className="d-flex">
      <ul>
        <li className="">
          <span className="fw-bold">Candidate Name:</span> {candidateName}
        </li>
        <li className="mt-3">
          <span className="fw-bold">College Name:</span> {collegeName}
        </li>
        <li className="mt-3">
          <span className="fw-bold mb-2">Date:</span> {formReleaseDate}
        </li>
      </ul>
      
    </article>
  );
};

export default Dates;
