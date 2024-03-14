import React from "react";

const MainDetails = ({ formReleaseDate, referenceNo }) => {
  return (
    <section className="d-flex ref-c">
      <div>
        {" "}
        <span className="fw-bold">Ref No. : </span> 
         {referenceNo}
      </div>
      <div>
        {" "}
        <span className="fw-bold">Date: </span>
        { formReleaseDate}
      </div>
    </section>
  );
};

export default MainDetails;
