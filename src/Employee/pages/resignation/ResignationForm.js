import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateResignation from "./StateResignation";
import { jwtDecode } from "jwt-decode";

const ResignationForm = ({
  setFormVisible,
  setToggle,
  formData,
  setFormData,
}) => {
  const navigate = useNavigate();
const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = decoded.username;

  useEffect(() => {
    setFormData({
      ...formData,
      username: username,
      employeeName: decoded.name
    })
  },[username])
  

  const { setOpen, setResignation, employee, setEmployee } = StateResignation();

  const loadResignation = async () => {
    const result = await api.loadResignation();
    setResignation(result);
  };

  useEffect(() => {
    loadResignation();
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const employeeData = await api.fetchEmployee();
    setEmployee(employeeData);
  };

  const saveResignation = async () => {
    await api.saveResignation(formData);
    navigate("/employee/resignation");

    setFormData({
      employeeName: "",
      resignationDate: "",
      noticeDate: "",
      resignationReason: "",
      username: "",
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "employeeName" && value === "addNewEmployee") {
      // Redirect to the company form in the company module
      navigate("/hr/employee/employee");
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      employeeName: "",
      resignationDate: "",
      noticeDate: "",
      resignationReason: "",
      username: "",
    });
  };
  let buttonClick =
    // formData.employeeName.length > 0 &&
    formData.resignationDate.length > 0 &&
    formData.noticeDate.length > 0 &&
    formData.resignationReason.length > 0;

  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">

        <TextField
          margin="dense"
          label="Employee Name"
          type="text"
          fullWidth
          name="employeeName"
          id="employeeName"
          value={formData.employeeName}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
          disabled
        />
        <TextField
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          name="username"
          id="username"
          value={formData.username}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
          disabled
        />

        <TextField
          margin="dense"
          label="Notice Date"
          type="date"
          fullWidth
          name="noticeDate"
          id="noticeDate"
          value={formData.noticeDate}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Resignation Date"
          type="date"
          fullWidth
          name="resignationDate"
          id="resignationDate"
          value={formData.resignationDate}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          label="Resignation reason"
          type="text"
          fullWidth
          name="resignationReason"
          id="resignationReason"
          value={formData.resignationReason}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          variant="outlined"
          type="submit"
          onClick={saveResignation}
          disabled={buttonClick ? false : true}
        >
          Submit
        </Button>
        <Button
          id="input-btn-cancel"
          className="cancel"
          variant="outlined"
          onClick={cancelButton}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ResignationForm;
