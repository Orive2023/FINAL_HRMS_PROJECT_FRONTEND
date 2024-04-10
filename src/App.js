import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import MainHrRouting from "../src/Hr/components/MainHrRouting";
import MainEmpRouting from "../src/Employee/components/MainEmpRouting";
import Login from "./Login";
import Register from "./Register";
import { Oval } from "react-loader-spinner";
import { useLocation, Routes, Route } from "react-router-dom";
// import CryptoJS from 'crypto-js';

function App() {
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("AuthToken");
  const Role = localStorage.getItem("Role");

  const location = useLocation();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeEnd = () => {
      setLoading(false);
    };
    const unlisten = () => {
      handleRouteChangeStart();
      setTimeout(() => {
        handleRouteChangeEnd();
      }, 1500);
    };
    unlisten();
    return () => {};
  }, [location]);

  // var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(token), 'my-secret-key@123').toString();
  // var bytes = CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123');
  // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return (
    <React.Fragment>
      {loading && (
        <div
          style={{
            position: "absolute",
            zIndex: "1",
            background: "white",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Oval
            visible={true}
            height="90"
            width="90"
            strokeWidth="3"
            color="#f76c24"
            secondaryColor="#f76c24"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {token ? (
        <div className="App">
          <MainHrRouting />
          <MainEmpRouting />
        </div>
      ) : (
        <>
          {location.pathname === "/register" ? (
            <Routes>
              <Route path="/register" element={<Register />} />
            </Routes>
          ) : (
            <Login />
          )}
        </>
      )}  
    </React.Fragment>
  );
}

export default App;
