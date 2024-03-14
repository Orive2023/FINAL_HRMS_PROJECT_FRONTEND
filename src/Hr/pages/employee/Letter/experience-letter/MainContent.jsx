import React from "react";

const Content = ({
  employeeName,
 username,
  designation,
  joiningDate,
  leavesDate,
  servingPeriod,
  workBasedOn,
}) => {
  return (
    <>
      <div>
        <h2 className="fw-bold text-decoration-underline tracking-wide text-2xl appoint mt-2 mb-4">
       <u>   TO WHOM IT MAY CONCERN</u>
        </h2>
        <p className="mt-7">
          This is to inform you that {employeeName}, {username}, was posted as
          {designation}, in Orive solutions Pvt. Ltd from {joiningDate} to
          {leavesDate}. He had given {servingPeriod} of his service.
        </p>
        <p className="para-g">
          During his time with ORIVE SOLUTIONS, {employeeName} has remained
          dedicated and loyal to his work and responsibilities with our company.
          His responsibilities included performing hands-on {workBasedOn}. He
          has done an exemplary job while in this role. {employeeName} has
          always maintained a professional and courteous attitude and appearance
          while with our company.
        </p>
        <p>I wish him good luck and great future ahead.</p>
        <div className="sincer">
          <p> Sincerely</p>
        </div>

        <div>
          <p className="">
            Soumya Ranjan Rout
          </p>
          <p className="mt-1">
            Director
          </p>
          <p className="mt-1 mb-6">
           Orive Solutions  Pvt. Ltd.
          </p>

        </div>
      </div>
    </>
  );
};

export default Content;
