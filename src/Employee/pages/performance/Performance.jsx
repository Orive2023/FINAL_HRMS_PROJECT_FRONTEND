import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import CompanyLogoFile from "../../components/CompanyLogoFile";
import appl from "../../asset/40px/appl.png";
import filter from "../../asset/40px/filter.png";
import bars from "../../asset/40px/bars.png";
import list from "../../asset/40px/list.png";
import vector from "../../asset/40px/Vector.png";
import dartlogo from "../../asset/40px/dartlogo.png";
import ChartApex from "react-apexcharts";
import frame1 from "../../asset/40px/frame1.png";
import frame2 from "../../asset/40px/frame2.png";
import frame3 from "../../asset/40px/frame3.png";
import frame5 from "../../asset/40px/frame5.png";
import frame6 from "../../asset/40px/frame6.png";
import frame7 from "../../asset/40px/frame7.png";
import goal from "../../asset/40px/goal.png";
import badge1 from "../../asset/40px/badge1.png";
import badge2 from "../../asset/40px/badge2.png";
import Dialog from "@mui/material/Dialog";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "../../styles.css";
import { Watch } from "react-loader-spinner";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

const Performance = () => {
const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = decoded.username;
  console.log("decoded", username);

  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [menu, setMenu] = useState(false);

  const [performanceData, setPerformanceData] = useState([]);

  const loadPerformance = async () => {
    try {
      const result = await axios.get(
        `https://api.orivehrms.com/performanceappraisal/byId/${username}`
      );
      setPerformanceData(result.data[0]);
    } catch (error) {
      console.error("Load performance data failed", error)
    }
  };
  console.log("appri", performanceData);
  useEffect(() => {
    loadPerformance();
  }, []);

  const communicationData = {
    series: [(performanceData?.communicationSkillsRating / 5) * 100],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: `70%`,
          },
        },
      },
      labels: [`${(performanceData?.communicationSkillsRating / 5) * 100}%`],
      toolbar: {
        show: false,
      },
      colors: ["#F76C24"],
    },
  };
  const teamData = {
    series: [(performanceData?.teamworkAndCollaborationRating / 5) * 100],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: `70%`,
          },
        },
      },
      labels: [
        `${(performanceData?.teamworkAndCollaborationRating / 5) * 100}%`,
      ],
      toolbar: {
        show: false,
      },
      colors: ["#F76C24"],
    },
  };
  const initiativeData = {
    series: [(performanceData?.initiativeAndCreativityRating / 5) * 100],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: `70%`,
          },
        },
      },
      labels: [
        `${(performanceData?.initiativeAndCreativityRating / 5) * 100}%`,
      ],
      toolbar: {
        show: false,
      },
      colors: ["#F76C24"],
    },
  };
  const workData = {
    series: [(performanceData?.qualityOfWorkRating / 5) * 100],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: `70%`,
          },
        },
      },
      labels: [`${(performanceData?.qualityOfWorkRating / 5) * 100}%`],
      toolbar: {
        show: false,
      },
      colors: ["#F76C24"],
    },
  };

  let overall = Math.floor(
    ((performanceData?.qualityOfWorkRating +
      performanceData?.initiativeAndCreativityRating +
      performanceData?.teamworkAndCollaborationRating +
      performanceData?.communicationSkillsRating +
      4 +
      performanceData?.adaptabilityRating) /
      30) *
      100
  );
  const revenueData = {
    series: [overall],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: `70%`,
          },
        },
      },
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "13px",
        },
        value: {
          color: "#111",
          fontSize: "30px",
          show: true,
        },
      },
      labels: [`${overall}%`],
      toolbar: {
        show: false,
      },
      colors: ["#F76C24"],
    },
  };

  const adaptabilityData = {
    series: [(performanceData?.adaptabilityRating / 5) * 100],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: `70%`,
          },
        },
      },
      labels: [`${(performanceData?.adaptabilityRating / 5) * 100}%`],
      toolbar: {
        show: false,
      },
      colors: ["#F76C24"],
    },
  };
  console.log(performanceData);

  const [award, setAward] = useState([]);

  const loadAward = async () => {
    try {
      const result = await axios.get(
        `https://api.orivehrms.com/awards/employee/get/${username}`,
        {
          validateStatus: () => {
            return true;
          },
        }
      );

      if (result.data) {
        if (result.data.length > 0) {
          setAward(result.data);
        } else {
          console.log("No records found");
        }
      } else {
        console.log("No data received from the API");
      }
    } catch (error) {
      console.error("Error loading award", error);
    }
  };

  useEffect(() => {
    loadAward();
  }, []);

  console.log("awards", award);
  console.log("ddd", performanceData);
  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part">
          <div>
            <div
            className="mx-4"
              style={{
                marginTop: "70px",
                marginBottom: "-50px",
                width: "150px",
              }}
            >
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
                <div className="d-flex" style={{ padding: "2px" }}>
                  <div style={{ color: "black", fontWeight: "bold" }}>
                    <Link
                      to="/Employee-Dashboard"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Dashboard
                    </Link>{" "}
                    / Employee /{" "}
                  </div>
                  <div style={{ color: "black" }}> Performance</div>
                </div>
              </div>
            </div>
            <div className="per-heading-head">
              <div className="mb-4">
                <h4 className="heading">MY PERFORMANCE INDEX</h4>
              </div>

              <div
                className="side-icons"
                id="side-icons-per"
                style={{ marginTop: "60px", marginRight: "20px" }}
              >
                <img src={appl} style={{ cursor: "pointer" }} alt="" />
                <img
                  src={bars}
                  style={{ cursor: "pointer", margin: "0px 10px" }}
                  alt=""
                />
                <img src={filter} style={{ cursor: "pointer" }} alt="" />
              </div>
            </div>
          </div>

          <div className="my-4 row container-fluid">
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div id="card" className="card per-ka-card">
                <div className="card-top"></div>

                <div>
                  <div className="per-arrow-wala p-3 mt-3">
                    <div className="dat-logo">
                      <img className="dat-dat-img-logo" src={dartlogo} />
                    </div>

                    <div className="mt-3">
                      <h4
                        style={{
                          textAlign: "start",
                          fontWeight: "500",
                          lineHeight: "28.8px",
                          fontSize: "20px",
                        }}
                      >
                        Hi {localStorage.getItem("UserName")}!
                      </h4>

                      <h2
                        style={{
                          textAlign: "start",

                          marginRight: "10px",
                          marginTop: "10px",
                          fontWeight: "700",
                          lineHeight: "26.8px",
                          fontSize: "20px",
                          color: "rgba(250, 98, 32, 1)",
                        }}
                      >
                        Your Last Week Target is Excellent !
                      </h2>
                      <div className="my-5 text-center">
                        <button
                          className="emp-header-check-btn"
                          style={{ height: "auto" }}
                        >
                          Check Feedback
                          <span>
                            <img
                              style={{ width: "8px", marginLeft: "6px" }}
                              src={vector}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div
                id="card"
                className="card d-flex align-items-center justify-content-center"
                style={{ height: "300px" }}
              >
                <h4
                  style={{
                    fontWeight: "600",
                    lineHeight: "28.8px",
                    fontSize: "16px",
                    padding: "0 10px",
                    textAlign: "center",
                    marginTop: "30px",
                  }}
                >
                  RATE YOUR ASSESSMENT
                </h4>
                <img src={list} style={{ transform: "scale(0.65)" }} />

                <div className="text-center mb-4">
                  <button
                    className="emp-header-check-btn-alag"
                    style={{
                      width: "auto",
                      borderRadius: "3px",
                    }}
                    onClick={handleOpen}
                  >
                    Fill Your Form
                    <span>
                      <img
                        style={{ marginLeft: "5px" }}
                        height={12}
                        src={vector}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row container-fluid">
            <div className="col-xl-9 col-lg-9 col-md-9">
              {/* <div style={{ display: "flex", flexWrap: "wrap" }}> */}
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div
                    id="card"
                    className="card px-3"
                    style={{ width: "auto" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "space-between",
                      }}
                    >
                      <div
                        className="d-flex align-items-center"
                        style={{ marginTop: "-25px" }}
                      >
                        <div>
                          <img src={frame1} height={55} />
                        </div>
                        <div
                          className=""
                          style={{
                            fontWeight: "600",
                            fontSize: "1rem",
                            color: "rgba(44, 41, 69, 1)",
                          }}
                        >
                          TEAM WORK
                        </div>
                      </div>

                      <div
                        style={{
                          borderLeft: "3px solid #f76c24",
                          paddingLeft: "5px",
                          position: "absolute",
                          bottom: "10px",
                        }}
                      >
                        Meets Expectations
                      </div>

                      <div style={{ width: "140px", marginLeft: "15px" }}>
                        <div
                          style={{
                            height: "130px",
                            width: "130px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="fs-3" style={{ fontWeight: "600" }}>
                            {performanceData.teamworkAndCollaborationRating}/5{" "}
                            <IoStar
                              style={{
                                color: "orange",
                                marginTop: "-8px",
                                filter: "drop-shadow(0 0 0.075rem black)",
                                fontSize: "25px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div
                    id="card"
                    className="card px-3"
                    style={{ width: "auto" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        className="d-flex align-items-center"
                        style={{ marginTop: "-25px" }}
                      >
                        <div>
                          <img src={frame2} height={55} />
                        </div>
                        <div
                          className=""
                          style={{
                            fontWeight: "600",
                            fontSize: "1rem",
                            color: "rgba(44, 41, 69, 1)",
                          }}
                        >
                          INITIATIVE
                        </div>
                      </div>

                      <div
                        style={{
                          borderLeft: "3px solid #f76c24",
                          paddingLeft: "5px",
                          position: "absolute",
                          bottom: "10px",
                        }}
                      >
                        Meets Expectations
                      </div>
                      <div style={{ width: "140px", marginLeft: "15px" }}>
                        <div
                          style={{
                            height: "130px",
                            width: "130px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="fs-3" style={{ fontWeight: "600" }}>
                            {performanceData.initiativeAndCreativityRating}/5{" "}
                            <IoStar
                              style={{
                                color: "orange",
                                marginTop: "-8px",
                                filter: "drop-shadow(0 0 0.075rem black)",
                                fontSize: "25px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div
                    id="card"
                    className="card px-3"
                    style={{ width: "auto" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "space-between",
                      }}
                    >
                      <div
                        className="d-flex align-items-center"
                        style={{ marginTop: "-25px" }}
                      >
                        <div>
                          <img src={frame3} height={45} />
                        </div>
                        <div
                          className=""
                          style={{
                            fontWeight: "600",
                            fontSize: "1rem",
                            color: "rgba(44, 41, 69, 1)",
                          }}
                        >
                          COMMUNICATION & LISTENING
                        </div>
                      </div>

                      <div
                        style={{
                          borderLeft: "3px solid #f76c24",
                          paddingLeft: "5px",
                          position: "absolute",
                          bottom: "10px",
                        }}
                      >
                        Meets Expectations
                      </div>
                      <div style={{ width: "140px" }}>
                        <div
                          style={{
                            height: "130px",
                            width: "130px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="fs-3" style={{ fontWeight: "600" }}>
                            {performanceData.communicationSkillsRating}/5{" "}
                            <IoStar
                              style={{
                                color: "orange",
                                marginTop: "-8px",
                                filter: "drop-shadow(0 0 0.075rem black)",
                                fontSize: "25px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div
                    id="card"
                    className="card px-3"
                    style={{ width: "auto" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "space-between",
                      }}
                    >
                      <div
                        className="d-flex align-items-center"
                        style={{ marginTop: "-25px" }}
                      >
                        <div>
                          <img src={frame7} className="mx-1" height={45} />
                        </div>
                        <div
                          className=""
                          style={{
                            fontWeight: "600",
                            fontSize: "1rem",
                            color: "rgba(44, 41, 69, 1)",
                          }}
                        >
                          WORK QUALITY
                        </div>
                      </div>

                      <div
                        style={{
                          borderLeft: "3px solid #f76c24",
                          paddingLeft: "5px",
                          position: "absolute",
                          bottom: "10px",
                        }}
                      >
                        Meets Expectations
                      </div>
                      <div style={{ width: "140px" }}>
                        <div
                          style={{
                            height: "130px",
                            width: "130px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="fs-3" style={{ fontWeight: "600" }}>
                            {performanceData.qualityOfWorkRating}/5{" "}
                            <IoStar
                              style={{
                                color: "orange",
                                marginTop: "-8px",
                                filter: "drop-shadow(0 0 0.075rem black)",
                                fontSize: "25px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div
                    id="card"
                    className="card px-3"
                    style={{ width: "auto" }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "space-between" }}
                    >
                      <div
                        className="d-flex align-items-center"
                        style={{ marginTop: "-25px" }}
                      >
                        <div>
                          <img src={frame6} height={37} />
                        </div>
                        <div
                          className=""
                          style={{
                            fontWeight: "600",
                            fontSize: "1rem",
                            color: "rgba(44, 41, 69, 1)",
                          }}
                        >
                          ATTENDANCE
                        </div>
                      </div>

                      <div
                        style={{
                          borderLeft: "3px solid #f76c24",
                          paddingLeft: "5px",
                          position: "absolute",
                          bottom: "10px",
                        }}
                      >
                        Meets Expectations
                      </div>
                      <div div style={{ width: "140px" }}>
                        <div
                          style={{
                            height: "130px",
                            width: "130px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="fs-3" style={{ fontWeight: "600" }}>
                            {performanceData.punctualityAndAttendanceRating}/5{" "}
                            <IoStar
                              style={{
                                color: "orange",
                                marginTop: "-8px",
                                filter: "drop-shadow(0 0 0.075rem black)",
                                fontSize: "25px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div>
                    <div
                      id="card"
                      className="card px-3"
                      style={{ width: "auto" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "space-between",
                        }}
                      >
                        <div
                          className="d-flex align-items-center"
                          style={{ marginTop: "-25px" }}
                        >
                          <div>
                            <img src={frame5} height={47} />
                          </div>
                          <div
                            className=""
                            style={{
                              fontWeight: "600",
                              fontSize: "1rem",
                              color: "rgba(44, 41, 69, 1)",
                            }}
                          >
                            ADAPTABILTY
                          </div>
                        </div>

                        <div
                          style={{
                            borderLeft: "3px solid #f76c24",
                            paddingLeft: "5px",
                            position: "absolute",
                            bottom: "10px",
                          }}
                        >
                          Meets Expectations
                        </div>
                        <div style={{ width: "140px" }}>
                          <div
                            style={{
                              height: "130px",
                              width: "130px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div className="fs-3" style={{ fontWeight: "600" }}>
                              {performanceData.adaptabilityRating}/5{" "}
                              <IoStar
                                style={{
                                  color: "orange",
                                  marginTop: "-8px",
                                  filter: "drop-shadow(0 0 0.075rem black)",
                                  fontSize: "25px",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div
                id="card"
                className="card"
                style={{
                  height: "auto",
                }}
              >
                <div id="card-header" className="card-header">
                  <h3 className="card-title">Overall Performance</h3>
                </div>
                <div className="card-body text-center">
                  <div style={{ textAlign: "center", marginTop: "-20px" }}>
                    <div
                      style={{
                        height: "130px",
                        width: "130px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                      }}
                    >
                      <div className="fs-1" style={{ fontWeight: "600" }}>
                        {performanceData.overallRating}/5{" "}
                        <IoStar
                          style={{
                            color: "orange",
                            marginTop: "-8px",
                            filter: "drop-shadow(0 0 0.075rem black)",
                            fontSize: "30px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-0 mt-3 font300">
                    <span className="counter">{`${overall}% `}</span>
                    <span className="text-green font-15">Monthly</span>
                  </h3>
                  <small style={{ fontSize: "1rem" }}>
                    Good Score <br />
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="row container-fluid">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div
                id="card"
                className="card"
                style={{
                  height: "auto",
                  paddingBottom: "30px",
                }}
              >
                <h4
                  style={{
                    textAlign: "start",
                    paddingLeft: "20px",
                    marginTop: "20px",
                    fontWeight: "700",
                    lineHeight: "28.8px",
                    fontSize: "16px",
                  }}
                >
                  TARGET
                </h4>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      style={{
                        marginTop: "10px",
                        marginLeft: "25px",
                        width: "30px",
                        height: "30px",
                      }}
                      src={goal}
                    />
                    <div
                      style={{
                        marginTop: "8px",
                        marginLeft: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Code Quality Metrics
                      <div
                        style={{
                          color: "rgba(128, 132, 136, 1)",
                          fontSize: "10px",
                          lineHeight: "19.5px",
                          marginTop: "10px",
                          marginLeft: "2px",
                        }}
                      >
                        Maintain a code quality score above a predefined
                        threshold (e.g., code review ratings, static code
                        analysis results).
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "88px",
                      height: "21px",
                      fontSize: "10px",
                      marginTop: "8px",
                      marginRight: "20px",
                      color: "#646978",
                    }}
                  >
                    May 12, 2019
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                      style={{
                        marginTop: "10px",
                        marginLeft: "25px",
                        width: "30px",
                        height: "30px",
                      }}
                      src={goal}
                    />
                    <div
                      style={{
                        marginTop: "8px",
                        marginLeft: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Task Completion
                      <div
                        style={{
                          color: "rgba(128, 132, 136, 1)",
                          fontSize: "10px",
                          lineHeight: "19.5px",
                          marginTop: "10px",
                          marginLeft: "2px",
                        }}
                      >
                        Complete a certain number of tasks or user stories by
                        the end of the day.
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "88px",
                      height: "21px",
                      fontSize: "10px",
                      marginTop: "8px",
                      marginRight: "5px",
                      color: "#646978",
                    }}
                  >
                    June 12, 2019
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <img
                    style={{
                      marginTop: "20px",
                      marginLeft: "25px",
                      width: "30px",
                      height: "30px",
                    }}
                    src={goal}
                  />
                  <div
                    style={{
                      marginTop: "20px",
                      marginLeft: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Bug Resolution
                    <div
                      style={{
                        color: "rgba(128, 132, 136, 1)",
                        fontSize: "10px",
                        lineHeight: "19.5px",
                        marginTop: "10px",
                        marginLeft: "2px",
                      }}
                    >
                      Resolve a specified number of bugs or issues each day.
                    </div>
                  </div>
                  <div
                    style={{
                      width: "88px",
                      height: "21px",
                      fontSize: "10px",
                      marginTop: "8px",
                      marginLeft: "160px",
                      color: "#646978",
                    }}
                  >
                    July 12, 2019
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <img
                    style={{
                      marginTop: "20px",
                      marginLeft: "25px",
                      width: "30px",
                      height: "30px",
                    }}
                    src={goal}
                  />
                  <div
                    style={{
                      marginTop: "20px",
                      marginLeft: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Time Management
                    <div
                      style={{
                        color: "rgba(128, 132, 136, 1)",
                        fontSize: "10px",
                        lineHeight: "19.5px",
                        marginTop: "10px",
                        marginLeft: "2px",
                      }}
                    >
                      Allocate a specific amount of time to different tasks
                      (coding, debugging, testing) throughout the day.
                    </div>
                  </div>
                  <div
                    style={{
                      width: "88px",
                      height: "21px",
                      fontSize: "10px",
                      marginTop: "8px",
                      marginRight: "20px",
                      color: "#646978",
                    }}
                  >
                    July 12, 2019
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12">
              <div
                id="card"
                className="card"
                style={{
                  height: "50vh",
                }}
              >
                <h4
                  style={{
                    textAlign: "start",
                    paddingLeft: "20px",
                    marginTop: "20px",
                    fontWeight: "600",
                    lineHeight: "28.8px",
                    fontSize: "16px",
                  }}
                >
                  MY AWARDS
                </h4>
                <div style={{ overflow: "scroll", height: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "50px",
                        width: "650px",
                        height: "174.62px",
                        gap: "30px",
                      }}
                    >
                      {award.length > 0
                        ? award.map((item, index) => {
                            return (
                              <div
                                key={index}
                                style={{
                                  border: "2px solid #EDEFF3",
                                  borderRadius: "3px",
                                  width: "150px",
                                  height: "150px",
                                }}
                              >
                                <div
                                  style={{
                                    width: "120px",
                                    padding: "3px",
                                    margin: "auto",
                                  }}
                                >
                                  <img
                                    src={
                                      item.awardName === "Employee of the Month"
                                        ? badge1
                                        : badge2
                                    }
                                  />
                                </div>
                                <div>
                                  <div
                                    style={{
                                      width: "170px",
                                      Height: "34px",
                                      marginTop: "10px",
                                      margin: "auto",
                                      padding: "auto",
                                      fontSize: "12px",
                                      fontWeight: "600",
                                      color: " #48034B",
                                      align: "center",
                                    }}
                                  >
                                    {item.awardName}
                                  </div>
                                  <div
                                    style={{
                                      width: "166px",
                                      Height: "34px",
                                      marginTop: "10px",
                                      marginLeft: "20px",
                                      fontSize: "8px",
                                      fontWeight: "400",
                                      color: "#2C2945",
                                    }}
                                  >
                                    Earned on : {item.date}
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : "No Awards Recieved"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Dialog open={open} onClose={handleClose}>
            <div
              id="card"
              className="card"
              style={{
                height: "80vh",
                position: "center",
              }}
            >
              <h4
                style={{
                  textAlign: "start",
                  paddingLeft: "20px",
                  marginTop: "20px",
                  fontWeight: "600",
                  lineHeight: "28.8px",
                  fontSize: "16px",
                }}
              >
                SELF ASSESSMENT
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "30px",
                      fontWeight: "600",
                      padding: "10px, 20px",
                    }}
                  >
                    1. How well did you meet your performance goals for the past
                    quarter/year?
                    <div>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          height: "21px",
                          marginTop: "20px",
                          marginLeft: "5px",
                        }}
                      >
                        <div style={{ color: "#646978" }}>Rating:</div>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </div>

                      <div
                        style={{
                          marginTop: "13px",
                          marginLeft: "5px",
                          padding: "10px, 12px, 10px, 12px",
                          borderRadius: "5px",
                        }}
                      >
                        <Box>
                          <TextField
                            fullWidth
                            label="fullWidth"
                            id="fullWidth"
                          />
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "30px",
                      fontWeight: "600",
                    }}
                  >
                    2.Have you acquired new skills or improved existing ones
                    since the last self-assessment?
                    <div>
                      <Box
                        component="form"
                        sx={
                          {
                            // '& > :not(style)': { m: 1, width: '120px' },
                          }
                        }
                        noValidate
                        autoComplete="off"
                      ></Box>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          height: "21px",
                          marginTop: "20px",
                          marginLeft: "5px",
                        }}
                      >
                        <div style={{ color: "#646978" }}>Rating:</div>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </div>

                      <div
                        style={{
                          marginTop: "13px",
                          marginLeft: "5px",
                          padding: "10px, 12px, 10px, 12px",
                          borderRadius: "5px",
                          border: "2px",
                          gap: "357px",
                        }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Comments"
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "30px",
                      fontWeight: "600",
                    }}
                  >
                    3.How would you rate your collaboration with team members
                    and colleagues?
                    <div>
                      <Box
                        component="form"
                        sx={
                          {
                            // '& > :not(style)': { m: 1, width: '120px' },
                          }
                        }
                        noValidate
                        autoComplete="off"
                      ></Box>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          height: "21px",
                          marginTop: "20px",
                          marginLeft: "5px",
                        }}
                      >
                        <div style={{ color: "#646978" }}>Rating:</div>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </div>

                      <div
                        style={{
                          marginTop: "13px",
                          marginLeft: "5px",
                          padding: "10px, 12px, 10px, 12px",
                          borderRadius: "5px",
                          border: "2px",
                          gap: "357px",
                        }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Comments"
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "30px",
                      fontWeight: "600",
                    }}
                  >
                    4.How well have you managed your time and prioritized tasks?
                    <div>
                      <Box
                        component="form"
                        sx={
                          {
                            // '& > :not(style)': { m: 1, width: '120px' },
                          }
                        }
                        noValidate
                        autoComplete="off"
                      ></Box>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          height: "21px",
                          marginTop: "20px",
                          marginLeft: "5px",
                        }}
                      >
                        <div style={{ color: "#646978" }}>Rating:</div>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </div>

                      <div
                        style={{
                          marginTop: "13px",
                          marginLeft: "5px",
                          padding: "10px, 12px, 10px, 12px",
                          borderRadius: "5px",
                          border: "2px",
                          gap: "357px",
                        }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Comments"
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "30px",
                      fontWeight: "600",
                    }}
                  >
                    5.In what ways have you worked to improve your communication
                    skills?
                    <div>
                      <Box
                        component="form"
                        sx={
                          {
                            // '& > :not(style)': { m: 1, width: '120px' },
                          }
                        }
                        noValidate
                        autoComplete="off"
                      ></Box>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          height: "21px",
                          marginTop: "20px",
                          marginLeft: "5px",
                        }}
                      >
                        <div style={{ color: "#646978" }}>Rating:</div>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </div>

                      <div
                        style={{
                          marginTop: "13px",
                          marginLeft: "5px",
                          padding: "10px, 12px, 10px, 12px",
                          borderRadius: "5px",
                          border: "2px",
                          gap: "357px",
                        }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Comments"
                          variant="outlined"
                        />
                      </div>
                      <div className="sub-can-per">
                        <button
                          style={{ width: "200px" }}
                          id="input-btn-submit"
                        >
                          Submit
                        </button>
                        <button
                          style={{ width: "200px" }}
                          id="input-btn-cancel"
                          onClick={handleClose}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Performance;
