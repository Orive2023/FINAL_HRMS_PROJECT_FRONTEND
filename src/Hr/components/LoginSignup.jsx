import React from "react";
import "../LoginSignup.scss";
import HRDashboard from "../components/Dashboard"
import EmployeeDashboard from "../../Employee/components/Dashboard"


const LoginSignup = () => {
  return (
     <div>
        <HRDashboard/>
        {/* <EmployeeDashboard/> */}
     </div>
   );

};

export default LoginSignup;