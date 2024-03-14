import React from "react";

const MainDetails = ({ date, referrenceNumber }) => {
  return (
    <section className="d-flex ref-c">
      <div>
        {" "}
        <span className="fw-bold">Ref No. : </span>
        {referrenceNumber}
      </div>
      <div>
        {" "}
        <span className="fw-bold">Date: </span>
        {date}
      </div>
    </section>
  );
};

export default MainDetails;
