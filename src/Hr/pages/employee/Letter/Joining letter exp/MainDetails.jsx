import React from "react";

const MainDetails = ({ referrenceNo, date }) => {
  return (
    <section className="d-flex ref-c">
      <div>
        {" "}
        <span className="fw-bold">Ref No.:</span>
        {referrenceNo}
      </div>
      <div>
        {" "}
        <span className="fw-bold">Date:</span>
        {date}
      </div>
    </section>
  );
};

export default MainDetails;
