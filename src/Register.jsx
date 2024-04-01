import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Login.css";
import logo from "./Hr/asset/images/Orive Logo 3.png";

const Login = () => {
  const nav = useNavigate();
  const [look, setLook] = useState(false);
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobilenumber: "",
    username: "",
    role: "",
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
        "https://api.orivehrms.com/api/v1/auth/register",
        formData
      );
      console.log("Register successful");
      nav("/");
      window.location.reload();
    } catch (error) {
      console.error("Register error", error);
    }
  };

  const Role = [
    {
      label: "ADMIN",
      role: "ADMIN",
    },
    {
      label: "USER",
      role: "USER",
    },
    {
      label: "MANAGER",
      role: "MANAGER",
    },
  ];

  return (
    <div>
      <div className="register">
        <img
          src={logo}
          alt=""
          height={100}
          style={{ position: "absolute", top: "10px", right: "10px" }}
        />
        <div className="register-section">
          <div className="register-form-beside-reg" style={{ color: "white" }}>
            <div className="text-center" style={{ padding: "136px 0" }}>
              <h4 style={{ fontWeight: "700" }}>Welcome to</h4>
              <h2 style={{ fontWeight: "700" }}>Orive Solutions!</h2>
            </div>
            <div className="text-center">
              <h6>
                By signing up you agree to our{" "}
                <span style={{ color: "rgba(72, 3, 75, 1)" }}>
                  Terms and Privacy Policy
                </span>
              </h6>
              <h6>
                Protected by reCAPTCHA.{" "}
                <span style={{ color: "rgba(72, 3, 75, 1)" }}>Privacy</span> •{" "}
                <span style={{ color: "rgba(72, 3, 75, 1)" }}>Terms</span>
              </h6>
            </div>
          </div>
          <div className="register-form-reg">
            <form
              className="register-form-content"
              style={{ flexGrow: 1 }}
              onSubmit={handleSubmit}
            >
              <div className="register-form-header">REGISTER</div>
              <div className="register-input-fields">
                <div className="data-input-fields-login">
                  <TextField
                    className="master-input"
                    margin="dense"
                    type="text"
                    fullWidth
                    placeholder="First Name"
                    name="firstname"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="data-input-fields-login">
                  <TextField
                    className="master-input"
                    margin="dense"
                    type="text"
                    fullWidth
                    placeholder="Last Name"
                    name="lastname"
                    id="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="data-input-fields-login">
                  <TextField
                    className="master-input"
                    margin="dense"
                    type="text"
                    fullWidth
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={formData.email}
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
                    <PiEyeLight
                      className="eye"
                      onClick={() => setLook(false)}
                    />
                  ) : (
                    <PiEyeSlashLight
                      className="eye"
                      onClick={() => setLook(true)}
                    />
                  )}
                </div>
              </div>
              <div className="data-input-fields-login">
                <TextField
                  className="master-input"
                  margin="dense"
                  type="number"
                  fullWidth
                  placeholder="Mobile Number"
                  name="mobilenumber"
                  id="mobilenumber"
                  value={formData.mobilenumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
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
              <div className="data-input-fields">
                <TextField
                  id="role"
                  margin="dense"
                  select
                  label="Role"
                  fullWidth
                  SelectProps={{
                    native: true,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formData.role}
                  onChange={(e) => handleInputChange(e)}
                  name="role"
                >
                  <option selected>Select Role</option>
                  {Role.map((option, index) => (
                    <option key={index} value={option.role}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </div>
              <div className="text-center my-2">
                <Button
                  id="input-btn-submit"
                  className="submit"
                  type="submit"
                  variant="outlined"
                >
                  Register
                </Button>
              </div>
              <div className="register-footer">
                <p>
                  Already have an account?
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <span style={{ fontWeight: "700", color: "black" }}>
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
