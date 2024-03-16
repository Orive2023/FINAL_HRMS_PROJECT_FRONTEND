import React from "react";

const Content = ({
  employeeName,
  productName,
  directorName,
  endDate,
  startDate,
  internName
  
  
}) => {
  return (
    <>
      <div>
        <h2 className="fw-bold text-decoration-underline tracking-wide text-2xl appoint mt-2 mb-4">
       TO WHOM IT MAY CONCERN 
        </h2>
        <p className="mt-7">
          This is to certify that {internName} has successfully completed an
          internship at Orive solutions opc pvt.ltd from {startDate} to{" "}
          {endDate}.
        </p>
        <p className="para-g">
          During this internship, {employeeName} has actively participated in
          various areas of {productName} software product development and
          successfully met the objectives that were set at the beginning of the
          project. {employeeName} shows a lot of promise and skill in his work
          and we wish him all the best in all his future endeavors.
        </p>
        <p>I wish him good luck and great future ahead.</p>
        <div>
          <p>
        
          {directorName}
          </p>
         
        </div>


      </div>
    </>
  );
};

export default Content;