import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import logo from "./Hr/asset/images/Orive Logo 3.png";

const Login = () => {
  const nav = useNavigate();
  const [look, setLook] = useState(false);
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.orivehrms.com/api/v1/auth/authenticate",
        formData
      );
      console.log("Login successful", response.data);
      //   const token = localStorage.getItem("AuthToken");
      const decoded = response.data.access_token
        ? jwtDecode(String(response.data.access_token))
        : "";
      console.log("decoded", decoded);
      if (decoded.role === "ADMIN") {
        nav("/HRDashboard");
        localStorage.setItem("FName", decoded.firstname);
        localStorage.setItem("LName", decoded.lastname);
        localStorage.setItem("AuthToken", response.data.access_token);
        localStorage.setItem("Role", decoded.role);
      } else {
        nav("/Employee-Dashboard");
        localStorage.setItem("FName", decoded.firstname);
        localStorage.setItem("LName", decoded.lastname);
        localStorage.setItem("AuthToken", response.data.access_token);
        localStorage.setItem("Role", decoded.role);
      }
      window.location.reload();
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div>
      <div className="register">
        <img
          src={logo}
          alt=""
          height={100}
          style={{ position: "absolute", top: "10px", right: "10px" }}
        />
        <div className="register-form">
          <form
            className="register-form-content"
            style={{ flexGrow: 1 }}
            onSubmit={handleSubmit}
          >
            <div className="register-form-header">LOGIN</div>
            <div className="register-input-fields">
              <div className="data-input-fields-login">
                <TextField
                  className="master-input"
                  margin="dense"
                  type="text"
                  fullWidth
                  placeholder="Employee Id"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="data-input-fields-login" id="eye-id">
                <TextField
                  className="master-input"
                  margin="dense"
                  type={look ? "text" : "password"}
                  fullWidth
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                {look ? (
                  <PiEyeLight className="eye" onClick={() => setLook(false)} />
                ) : (
                  <PiEyeSlashLight
                    className="eye"
                    onClick={() => setLook(true)}
                  />
                )}
              </div>
            </div>
            <div className="">
              <div className="d-flex align-items-center justify-content-between mt-2 mb-3">
                <div
                  className="d-flex align-items-center"
                  style={{ fontWeight: "600", fontSize: "0.8rem" }}
                >
                  <input className="" type="checkbox" />
                  <div>Remember Me</div>
                </div>
                <div style={{ fontWeight: "600", fontSize: "0.8rem" }}>
                  Forgot Password?
                </div>
              </div>
              <Button
                id="input-btn-submit"
                className="submit"
                type="submit"
                variant="outlined"
              >
                Login
              </Button>
            </div>
            <br />
            <div className="register-footer">
              <p>
                Don’t have a account yet?
                <Link
                  style={{ textDecoration: "none" }}
                  to="/register"
                  onClick={() => localStorage.removeItem("AuthToken")}
                >
                  <span
                    className="mx-1"
                    style={{ fontWeight: "600", color: "black" }}
                  >
                    Register
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="register-form-beside" style={{color:'white'}}>
            <div className="text-center" style={{padding:"136px 0"}}>
              <h4 style={{fontWeight:"700"}}>Welcome to</h4>
              <h2 style={{fontWeight:"700"}}>Orive Solutions!</h2>
            </div>
            <div className="text-center">
            <h6>By signing up you agree to our <span style={{color:"rgba(72, 3, 75, 1)"}}>Terms and Privacy Policy</span></h6>
            <h6>Protected by reCAPTCHA. <span style={{color:"rgba(72, 3, 75, 1)"}}>Privacy</span> • <span style={{color:"rgba(72, 3, 75, 1)"}}>Terms</span></h6>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
