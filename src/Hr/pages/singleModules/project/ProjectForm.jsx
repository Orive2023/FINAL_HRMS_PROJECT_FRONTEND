import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateProject from "./StateProject";

const ProjectForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const navigate = useNavigate();

  const {
    setClientName,
    setProjectManager,
    setDescription,
    setSummary,
    company,
    setDateError,
    setProject,
    setCompany,
    employee,
    setEmployee,
  } = StateProject();
  const loadProject = async () => {
    const result = await api.loadProject();
    setProject(result);
  };

  const diffToast = () => {
    toast.success("Submitted Successfully!", {
      position: "top-center",
    });
  };

  useEffect(() => {
    loadProject();
  }, []);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "createdDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [name]: value,
    });
  };

  const Type = [
    {
      value: "Choose",
      label: "Select Priority",
    },
    {
      value: "Low",
      label: "Low",
    },
    {
      value: "Medium",
      label: "Medium",
    },
    {
      value: "High",
      label: "High",
    },
  ];

  const saveProject = async () => {
    await api.saveProject(formData);
    navigate("/hr/project");
    setFormData({
      projectsId: "",
      projectTitle: "",
      clientName: "",
      projectName: "",
      companyName: "",
      startDate: "",
      endDate: "",
      priority: "",
      budget: "",
      projectManagers: "",
      summary: "",
      description: "",
      workUpdateSheet: "",
    });
  };

  const fetchCompany = async () => {
    const response = await api.fetchCompanies();
    setCompany(response ? response : []);
  };
  const fetchEmployee = async () => {
    const response = await api.fetchEmployee();
    setEmployee(response ? response : []);
  };

  useEffect(() => {
    fetchCompany();
    fetchEmployee();
  }, []);

  const handleSubmit = (e) => {
    console.log("FormData", formData);
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(0, maxLength);
  };

  const handleProjChange = (e) => {
    setProjectManager(e.target.value);
  };

  const handleClientChange = (e) => {
    setClientName(e.target.value);
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSumChange = (e) => {
    setSummary(e.target.value);
  };

  let buttonCheck =
    formData.projectTitle.length > 0 &&
    formData.clientName.length > 0 &&
    formData.startDate.length > 0 &&
    formData.endDate.length > 0 &&
    formData.projectManagers.length > 0 &&
    formData.priority.length > 0 &&
    formData.description.length > 0 &&
    formData.summary.length > 0 &&
    formData.workUpdateSheet.length > 0;

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      projectTitle: "",
      projectName: "",
      clientName: "",
      companyName: "",
      startDate: "",
      endDate: "",
      projectManagers: "",
      priority: "",
      description: "",
      summary: "",
      budget: "",
      workUpdateSheet: "",
    });
  };

  const [items, setItems] = useState([]);

  const addItems = () => {
    const addItem = {
      id: new Date().getTime().toString(),
      username: "",
      employeeName: "",
      projectName: "",
      taskAssignedFor: "",
      typeTheTaskHere: "",
    };
    setItems([...items, addItem]);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((e) => {
      return id !== e.id;
    });
    setItems(updatedItems);
  };

  const handleItemChange = (id, e) => {
    const updateDataItem = items.map((item) => {
      return item.id === id
        ? { ...item, [e.target.name]: e.target.value }
        : item;
    });
    setItems(updateDataItem);
    let eID;
    if (e.target.name === "employeeName") {
      employee.map((elem) => {
        if (e.target.value === elem.employeeName) {
          eID = elem.username;
        }
      });
      const updateDataItem = items.map((item) => {
        return item.id === id
          ? { ...item, ["username"]: eID, ["employeeName"]: e.target.value }
          : item;
      });
      setItems(updateDataItem);
    }
  };

  const handleSave = (e) => {
    saveProject();
    diffToast();
  };

  const saveItems = () => {
    setFormData({
      ...formData,
      employeeProjectManagementEntities: items,
    });
  };

  console.log(formData);
  console.log(items);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="data-input-fields">
          <TextField
            margin="dense"
            label="Project Title"
            type="text"
            fullWidth
            name="projectTitle"
            id="projectTitle"
            value={formData.projectTitle}
            onChange={(e) => handleInputChange(e)}
            required
            InputProps={{
              minLength: 2,
              maxLength: 200,
            }}
            onInput={(e) => {
              e.target.value = enforceMaxLength(e.target.value, 200);
              handleProjChange(e);
            }}
          />
          <TextField
            margin="dense"
            label="project Name"
            type="text"
            fullWidt
            name="projectName"
            id="projectName"
            value={formData.projectName}
            onChange={(e) => handleInputChange(e)}
            required
          />
          <TextField
            margin="dense"
            label="Client Name"
            type="text"
            fullWidth
            name="clientName"
            id="clientName"
            value={formData.clientName}
            onChange={(e) => handleInputChange(e)}
            required
            InputProps={{
              minLength: 2,
              maxLength: 50,
            }}
            onInput={(e) => {
              e.target.value = enforceMaxLength(e.target.value, 50);
              handleClientChange(e);
            }}
          />
        </div>

        <div className="data-input-fields">
          <FormControl fullWidth>
            <InputLabel id="demo-company-select-label">Company Name</InputLabel>
            <Select
              labelId="demo-company-select-label"
              id="selectedCompany"
              value={formData.companyName}
              name="companyName"
              label="Company Name"
              onChange={(e) => handleInputChange(e)}
            >
              {company.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.companyName}>
                    {item.companyName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField
            margin="dense"
            label="Start-Date"
            type="date"
            fullWidth
            name="startDate"
            id="startDate"
            SelectProps={{
              native: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.startDate}
            onChange={(e) => handleInputChange(e)}
            required
            InputProps={{
              min: "2022-01-01",
              max: "2023-12-31",
            }}
          />
          <TextField
            margin="dense"
            label="End-date"
            type="date"
            fullWidth
            name="endDate"
            id="endDate"
            value={formData.endDate}
            onChange={(e) => handleInputChange(e)}
            required
            SelectProps={{
              native: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              min: "2022-01-01",
              max: "2023-12-31",
            }}
          />
          <TextField
            margin="dense"
            label="Budget"
            type="number"
            fullWidth
            name="budget"
            id="budget"
            value={formData.budget}
            onChange={(e) => handleInputChange(e)}
            required
            SelectProps={{
              native: true,
            }}
          />
        </div>

        <div className="data-input-fields">
          <TextField
            margin="dense"
            label="Project Manager"
            type="text"
            fullWidth
            name="projectManagers"
            id="projectManagers"
            value={formData.projectManagers}
            onChange={(e) => handleInputChange(e)}
            required
            InputProps={{
              minLength: 2, // Set your minimum length here
              maxLength: 60, // Set your maximum length here
            }}
            onInput={(e) => {
              e.target.value = enforceMaxLength(e.target.value, 60);
              handleProjChange(e);
            }}
          />
          <TextField
            id="priority"
            margin="dense"
            select
            //  label="Priority"
            // type="text"
            fullWidth
            defaultValue="Choose"
            SelectProps={{
              native: true,
            }}
            value={formData.priority}
            onChange={(e) => handleInputChange(e)}
            name="priority"
          >
            {Type.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <div className="data-input-fields">
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            name="description"
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange(e)}
            required
            InputProps={{
              minLength: 2, // Set your minimum length here
              maxLength: 500, // Set your maximum length here
            }}
            onInput={(e) => {
              e.target.value = enforceMaxLength(e.target.value, 500);
              handleChange(e);
            }}
          />
          <TextField
            margin="dense"
            label="Summary"
            type="text"
            fullWidth
            name="summary"
            id="summary"
            value={formData.summary}
            onChange={(e) => handleInputChange(e)}
            required
            InputProps={{
              minLength: 2, // Set your minimum length here
              maxLength: 300, // Set your maximum length here
            }}
            onInput={(e) => {
              e.target.value = enforceMaxLength(e.target.value, 300);
              handleSumChange(e);
            }}
          />

          <TextField
            margin="dense"
            label="Work Update Sheet"
            type="text"
            fullWidth
            name="workUpdateSheet"
            id="workUpdateSheet"
            value={formData.workUpdateSheet}
            onChange={(e) => handleInputChange(e)}
            required
            InputProps={{
              minLength: 2, // Set your minimum length here
              maxLength: 300, // Set your maximum length here
            }}
            onInput={(e) => {
              e.target.value = enforceMaxLength(e.target.value, 300);
              handleSumChange(e);
            }}
          />
        </div>

        <div className="mt-5">
          <h1
            style={{
              marginBottom: "15px",
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            Employee Project Management
          </h1>

          <TableContainer component={Paper}>
            <Table style={{ border: "1px solid #ddd" }}>
              <TableHead>
                <TableRow style={{ background: "#f2f2f2" }}>
                  <TableCell className="table-data">SL</TableCell>
                  <TableCell className="table-data">Username</TableCell>
                  <TableCell className="table-data">Employee Name</TableCell>
                  <TableCell className="table-data">Project Name</TableCell>
                  <TableCell className="table-data">
                    Task Assigned For
                  </TableCell>
                  <TableCell className="table-data">
                    Type The Task Here
                  </TableCell>
                  <TableCell className="table-data">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow key={item.id} style={{ border: "1px solid #ddd" }}>
                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                      }}
                    >
                      <TextField
                        disabled={true}
                        value={index + 1}
                        style={{ width: "70px" }}
                      />
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                      }}
                    >
                      <FormControl fullWidth>
                        <InputLabel id="demo-company-select-label">
                          Employee Name
                        </InputLabel>
                        <Select
                          value={formData.employeeName}
                          name="employeeName"
                          label="Employee Name"
                          onChange={(e) => handleItemChange(item.id, e)}
                        >
                          {employee.map((e, i) => {
                            return (
                              <MenuItem key={i} value={e.employeeName}>
                                {e.employeeName}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                      }}
                    >
                      <TextField
                        name="username"
                        type="text"
                        value={item.username}
                        onChange={(e) => handleItemChange(item.id, e)}
                        style={{ width: "70px" }}
                        disabled
                      />
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                      }}
                    >
                      <TextField
                        type="text"
                        name="projectName"
                        value={item.projectName}
                        onChange={(e) => handleItemChange(item.id, e)}
                        style={{ width: "90%" }}
                      />
                    </TableCell>

                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                      }}
                    >
                      <TextField
                        name="taskAssignedFor"
                        type="text"
                        value={item.taskAssignedFor}
                        onChange={(e) => handleItemChange(item.id, e)}
                        style={{ width: "100%" }}
                      />
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                      }}
                    >
                      <TextField
                        name="typeTheTaskHere"
                        type="text"
                        value={item.typeTheTaskHere}
                        onChange={(e) => handleItemChange(item.id, e)}
                        style={{ width: "100%" }}
                      />
                    </TableCell>

                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={(e) => removeItem(item.id)}
                        disabled={items.length === 1 ? true : false}
                      >
                        {/* Delete */}
                        {<DeleteIcon />}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                <Button
                  variant="contained"
                  className="m-2"
                  style={{
                    marginBottom: "7px",
                    justifyContent: "center",
                    background: "#f76c24",
                    color: "white",
                    marginTop: "10px",
                    width: "max-content",
                  }}
                  onClick={addItems}
                >
                  Add Item
                </Button>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="d-flex justify-content-end">
          <Button
            variant="contained"
            style={{
              marginBottom: "7px",
              justifyContent: "center",
              background: "#f76c24",
              color: "white",
              marginTop: "10px",
              width: "max-content",
              display: "flex",
              textAlign: "end",
            }}
            onClick={saveItems}
          >
            Save Items
          </Button>
        </div>

        <div className="data-buttons mb-3">
          <Button
            id="input-btn-submit"
            variant="outlined"
            type="submit"
            onClick={(e) => handleSave(e)}
            // onClick={diffToast}
            disabled={buttonCheck ? false : true}
          >
            Submit
          </Button>
          <Button
            id="input-btn-cancel"
            variant="outlined"
            onClick={cancelButton}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
