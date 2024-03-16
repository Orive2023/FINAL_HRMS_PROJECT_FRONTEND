import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import MainHrRouting from "../src/Hr/components/MainHrRouting";
import MainEmpRouting from "../src/Employee/components/MainEmpRouting";
import LoginSignup from "./Hr/components/LoginSignup";
// import CryptoJS from 'crypto-js';

function App() {

  const token = localStorage.getItem("AuthToken");
  const Role = localStorage.getItem("Role");

  // var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(token), 'my-secret-key@123').toString();
  // var bytes = CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123');
  // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return (
    <div className="App">
    {/* {(token && Role=="client_HR")?<MainHrRouting />:<LoginSignup/>}
    {(token && Role=="client_Employee")?<MainEmpRouting />:<LoginSignup/>} */}
      <MainHrRouting />
      <MainEmpRouting />
    </div>
  );
}

export default App;
