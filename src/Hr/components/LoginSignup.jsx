import React from "react";
import "../LoginSignup.scss";
import HRDashboard from "../components/Dashboard"
import EmployeeDashboard from "../../Employee/components/Dashboard"
import useAuth from "../hooks/useAuth"


const LoginSignup = () => {

  const {isHR, isEmployee, client, logout, name } = useAuth();
  console.log(name)
  return (
     <div>
       {isHR && <p><HRDashboard logout={logout} name={name}/></p>}
       {isEmployee && <p><EmployeeDashboard logout={logout} name={name}/></p>}
     </div>
   );

};

export default LoginSignup;