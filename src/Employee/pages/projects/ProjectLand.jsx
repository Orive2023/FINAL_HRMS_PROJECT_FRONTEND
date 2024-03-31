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
import { Link } from "react-router-dom";

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
      const result = await axios.get(`https://api.orivehrms.com/projects/employee/details/${username}`, {
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
        <div className="mx-3" style={{ marginTop: "0px", width: "150px" }}>
                <div
                  style={{
                    fontSize: "1.4rem",
                    width: "500px",
                    display: "flex",
                  }}
                >
                  <div style={{ paddingRight: "10px" }}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM7SURBVHgB3VVNaBNREJ55b3ezQYrRg9Sf2m3poTeriLQquBWrvQjtSTy1god6aoIXb9aTXqS99CCC9qoHE0GKYCEpolToIYKiojXJQaziYYNISpLdcXY3Nbv9iWlv+sJmed/OvG/mm5ldgP9lYbOGFw4OjTsEcSKIIUKq8hMSKStlNePbFMmIcf6+DTi6xjEvodw/k3+a/5t/Q5K4YcZ+qTuSHL3JppZDmHBsOyslJjkbg6+8ViVzOjdb2BZJvHvQcADTDkA7ARSqUg7defvktftsjJ8pJJKAdIi3lmJXT099fJbd7Cy5EXit2zSEpqQlR6siFYCgf/rd7IfV54s/PlnH2/Y/0FDsVQX0SgXHTrZ2FV98W1poimSi54yJikgrSK1SUHZFlvum3swtr7VbWM6vvPy+lDL3dYAmwGT7c2ZrJ8wvf55vSHLzqGlKAWlFkK4gzABVL97KZhp20HM+dOBAJ0aEc4qD6j/b1mnNfcm9CtqEajLZa6ZZf5OviasLmRuwhXW71xwVAPcIoYgR6Ehk6sGJoKGukqErDuwU5RnY4uKgZti/oEs71lIu7ww+U0IksuqmRlUB21oR9hcb+IdJVBaKCFu0cGc/HOgbdxDi3oaHxlcZM6WKlrgUkCWqOu4NW2xsQKLwXPNPDZTq8eCxEUJnimp7JG5o14icEV0pxRgarvt7JKCp4aYNJRZlI5dI1+tYRKO46xwRdgIi2EE6dqpoH+asLcaH0mZPLOjvnaFDg0yk7SmhQjWIxVxQRSd54tHin9dHZvhIkW+71N3oFtmq+7tKlBqQsKaeXHYAU9ZjPk6eqEE8GmEtHQe0RjVxU3W1D2oaremsrtE5qninUxDXJdsKWmcbJvG6yyHFrgSy8zqOI66EM6l1oqpVwiQcZhBbRxLxa4KaTgZvPf29juPzFA3CJNKvm1rb50a7DYFu/Qgcu1QM2obE+3q5e4LfvNe5PzlGn4QJ2sm3LAj+8wX1AMObGf6muDh7xDiPGMeY2XP3ff+mJO4qXumaFCjibkT+Gf5crM6g61DHkXHy5wY8pTKqqI5Gp3OFhiSrqzRmGBvhukQvlRWbQr48GxZO5Zv65v+76zfuAjbSpiR+NAAAAABJRU5ErkJggg=="
                      alt="Dashboard"
                    />
                  </div>
                  <div style={{ padding: "2px" }}>
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      <Link
                        to="/HRDashboard"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Dashboard{" "}
                      </Link>{" "}
                      / Employee /{" "}
                    </span>
                    <span style={{ color: "black" }}> Project</span>
                  </div>
                </div>
              </div>
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
