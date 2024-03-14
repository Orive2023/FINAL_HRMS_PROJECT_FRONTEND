import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import appl from "../../asset/images/appl.png";
import filter from "../../asset/images/filter.png";
import bars from "../../asset/images/burger.png";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import CompanyLogoFile from "../../components/CompanyLogoFile";
import avatar1 from "../../asset/40px/avatar1.jpeg";
import { styled } from "@mui/material/styles";
import clipboard1 from "../../asset/40px/clipboard 1.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { jwtDecode } from "jwt-decode";

import axios from "axios";
import calender from "../../asset/images/calendarr.jpeg";
import ChartApex from "react-apexcharts";
import { useNavigate } from "react-router-dom";

const ProjectLand = () => {
  const [menu, setMenu] = useState(false);
  const now = 60;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      ["Subham Parida", "Web Developer"],
      "Develop Recommendations",
      <div
        style={{
          background: "rgba(72, 3, 75, 0.2)",
          borderRadius: "3px",
          padding: "0px, 2px, 0px, 2px",
          height: "30px",
          width: "max-content",
          color: "rgba(71, 2, 77, 1)",
          fontWeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            backgroundColor: "rgba(72, 3, 75, 0.2)",
            border: "3px solid white",
            margin: "0 5px",
          }}
        ></div>
        <div
          className="card-top-right"
          style={{ fontWeight: "600", marginRight: " 10px" }}
        >
          Ongoing
        </div>
      </div>,

      <div id="progress" className="progress progress-xs">
        <div
          className="progress-bar bg-azure"
          role="progressbar"
          style={{ width: "35%" }}
          aria-valuenow={42}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>,

      "Aug 18, 2023 at 04:12 pm"
    ),
    createData(
      ["Subham Parida", "Web Developer"],
      "Conduct Usability Testing and Gather Feedback",
      <div
        style={{
          background: "rgba(15, 147, 13, 0.2)",
          borderRadius: "3px",
          padding: "0px, 2px, 0px, 2px",
          height: "30px",
          width: "max-content",
          color: "rgba(15, 147, 13, 1)",
          fontWeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            backgroundColor: "rgba(15, 147, 13, 1)",
            border: "3px solid white",
            margin: "0 5px",
          }}
        ></div>
        <div
          className="card-top-right"
          style={{ fontWeight: "600", marginRight: " 10px" }}
        >
          Completed
        </div>
      </div>,
      <div id="progress" className="progress progress-xs">
        <div
          className="progress-bar bg-green"
          role="progressbar"
          style={{ width: "75%" }}
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>,
      "Aug 3, 2023 at 12:10 am"
    ),
    createData(
      ["Eleanor Pena", "Business Analyst"],
      "Synthesise your Research",
      <div
        style={{
          background: "rgba(255, 148, 0, 0.2)",
          borderRadius: "3px",
          padding: "0px, 2px, 0px, 2px",
          height: "30px",
          width: "max-content",
          color: "rgba(239, 139, 51, 1)",
          fontWeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 148, 0, 0.2)",
            border: "3px solid white",
            margin: "0 5px",
          }}
        ></div>
        <div
          className="card-top-right"
          style={{ fontWeight: "600", marginRight: " 10px" }}
        >
          Overdue
        </div>
      </div>,
      <div id="progress" className="progress progress-xs">
        <div
          className="progress-bar bg-azure"
          role="progressbar"
          style={{ width: "35%" }}
          aria-valuenow={42}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>,
      "Mar 13, 2023 at 08:05 am"
    ),
  ];

  const [projectData, setProjectData] = useState([]);
  const username = localStorage.getItem("UserName")

  const loadProject = async () => {
    try {
      const result = await axios.get(`http://localhost:8086/projects/employee/details/${username}`, {
        validateStatus: () => {
          return true;
        },
      });
      setProjectData(result.data);
    } catch (error) {
      console.error("Error load project", error);
    }
  };

  useEffect(() => {
    loadProject();
  }, []);

  const navigation = useNavigate();
  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part" style={{ paddingTop: "110px" }}>
          <section>
            <div className="section-body">
              <div className="container-fluid">
                <div className="row clearfix row-deck">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div
                      id="card"
                      className="card"
                      style={{ margin: "30px 10px" }}
                    >
                      <div
                        id="card"
                        className="card"
                        style={{ height: "max-content", width: "auto" }}
                      >
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 1000 }}
                            aria-label="customized table"
                          >
                            <TableHead>
                              <TableRow>
                                <StyledTableCell
                                  align="left"
                                  className="fs-5"
                                  style={{ fontWeight: "500" }}
                                >
                                  PROJECT NAME
                                </StyledTableCell>
                                <StyledTableCell
                                  align="left"
                                  className="fs-5"
                                  style={{ fontWeight: "500" }}
                                >
                                  Task Assigned For
                                </StyledTableCell>
                                <StyledTableCell
                                  align="center"
                                  className="fs-5"
                                  style={{ fontWeight: "500" }}
                                >
                                  Type The Task Here
                                </StyledTableCell>
                                {/* <StyledTableCell
                                  align="center"
                                  className="fs-5"
                                  style={{ fontWeight: "500" }}
                                >
                                  PROGRESS
                                </StyledTableCell>
                                <StyledTableCell
                                  align="left"
                                  className="fs-5"
                                  style={{ fontWeight: "500" }}
                                >
                                  DEADLINE
                                </StyledTableCell> */}
                              </TableRow>
                            </TableHead>
                            <br />
                            <TableBody>
                              {projectData.map((row, index) => (
                                <StyledTableRow
                                  key={index}
                                  className="table-row-cell"
                                  onClick={() =>
                                    navigation(
                                      `/employee/project/profile/${row.projectsId}`,
                                      { state: { project: row.projectTitle } }
                                    )
                                  }
                                >
                                  <StyledTableCell align="left">
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <div style={{ lineHeight: "5px" }}>
                                        <p style={{ fontSize: "15px" }}>
                                          {row.projectName}
                                        </p>
                                      </div>
                                    </div>
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    {row.taskAssignedFor}
                                  </StyledTableCell>
                                  <StyledTableCell
                                    align="center"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {row.typeTheTaskHere}
                                  </StyledTableCell>
                                  {/* <StyledTableCell align="center">
                                    {row.carbs}
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    {row.endDate}
                                  </StyledTableCell> */}
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectLand;
