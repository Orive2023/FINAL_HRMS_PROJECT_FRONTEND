import React from "react";
import ChartApex from "react-apexcharts";
import EventsLogo from "../asset/40px/Events.png";
import clipboard from "../asset/40px/clipboard.png";
import documents from "../asset/40px/documents.png";
import upload from "../asset/40px/upload.png";
import Projects from "../asset/40px/Projects.png";
import clock from "../asset/40px/clock.png";
import Vector from "../asset/24px/Vector.png";
import Send from "../asset/24px/Send.png";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Chart } from "primereact/chart";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


// import useAuth from "../hooks/useAuth"
const MainFile = ({name}) => {
  const token = localStorage.getItem("AuthToken");
  const decoded = token?jwtDecode(String(token)):"";
  const usernameRec = decoded===""?"":decoded.preferred_username;
  const username = decoded.username;
  const navigation = useNavigate();
  console.log(name);
  const revenueData = {
    series: [82],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
        },
      },
      labels: ["82%"],
      toolbar: {
        show: false,
      },
      colors: ["#501A51"],
    },
  };

  const chartData = {
    series: [
      {
        name: "No of Leaves",
        data: [15, 15, 20, 15, 40],
      },
      {
        name: "No of Attendes",
        data: [30, 5, 35, 15, 20],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        endingShape: "rounded",
      },
    },

    dataLabels: {
      enabled: false,
    },

    colors: ["#F76C24", "#501A51", "#FCC4A7"],

    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun"],
    },
    yaxis: {
      title: {},
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  var options = {
    series: [
      {
        name: "ERP",
        data: [44, 55, 41, 37, 22, 43, 21],
      },
      {
        name: "CRM",
        data: [53, 32, 33, 52, 13, 43, 32],
      },
      {
        name: "HRMS",
        data: [12, 17, 11, 9, 15, 11, 20],
      },
      {
        name: "Application",
        data: [9, 7, 5, 8, 6, 9, 4],
      },
      {
        name: "Website",
        data: [25, 12, 19, 32, 25, 24, 10],
      },
    ],
    chart: {
      type: "bar",
      height: 380,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },

    xaxis: {
      categories: [2020, 2021, 2023, 2024, 2025, 2026, 2027],
      labels: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    colors: ["#501A51", "#F76C24", "#646978", "#916894", "#FAA77C"],
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  const [chartDonutData] = useState({
    datasets: [
      {
        data: [300, 100],
        backgroundColor: ["#F76C24", "#501A51"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  const type = [
    {
      label: "abcd",
      value: "abcd",
    },
    {
      label: "abcd",
      value: "abcd",
    },
    {
      label: "abcd",
      value: "abcd",
    },
  ];

  const [empData, setEmpData] = useState([]);
  // const loadEmployee = async () => {
  //   try {
  //     const result = await api.loadEmployee();
  //     setEmpData(result.data);
  //   } catch (error) {
  //     console.error("Error loading employee data:", error);
  //   }
  // };

  // useEffect(() => {
  //   loadEmployee();
  // }, []);

  // console.log(empData);
  return (
    <>
      <div id="main_content">
        <div className="page">
          <div className="section-body py-3">
            <div className="container-fluid" style={{ padding: "0" }}>
              <div className="row clearfix">
                <div className="col-lg-12" style={{ paddingTop: "30px" }}>
                  {/* {empData.map((item, index) => { */}
                    {/* return ( */}
                      <div className="mb-4">
                      <h4>Welcome {localStorage.getItem("FName")}{" "}{localStorage.getItem("LName")}!</h4>

                        <p>Your performance is looking good</p>
                      </div>
                    {/* ); */}
                  {/* })} */}
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body ribbon">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <a
                          href="hr-users.html"
                          className="my_sort_cut text-muted"
                        >
                          <span className="my-1">Tasks</span>
                          <img src={documents} />
                        </a>
                        <div
                          className="small-card-title"
                          style={{
                            borderLeft: "2px solid #f76c24",
                            paddingLeft: "10px",
                            position: "absolute",
                            right: "10px",
                            bottom: "10px",
                          }}
                        >
                          Ongoing
                        </div>
                      </div>
                      <div className="ribbon-box orange">
                        <div style={{ transform: "rotate(180deg)" }}>4</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body ribbon">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <a
                          href="hr-users.html"
                          className="my_sort_cut text-muted"
                        >
                          <span className="my-1">Attendance</span>
                          <img src={clipboard} />
                        </a>
                        <div
                          className="small-card-title"
                          style={{
                            borderLeft: "2px solid #f76c24",
                            paddingLeft: "10px",
                            position: "absolute",
                            right: "10px",
                            bottom: "10px",
                          }}
                        >
                          Good Score
                        </div>
                      </div>
                      <div
                        className=""
                        style={{
                          position: "absolute",
                          left: "auto",
                          right: "10px",
                          top: "15px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "600",
                            color: "grey",
                          }}
                        >
                          {/* 98.56% */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body ribbon">
                      <div className="ribbon-box voilet">
                        <div style={{ transform: "rotate(180deg)" }}>4</div>
                      </div>
                      <a
                        onClick={() => navigation("/employee/events")}
                        className="my_sort_cut text-muted"
                      >
                        <img src={EventsLogo} className="logo" />
                        <span>Events</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div
                      className="card-body ribbon"
                      onClick={() => navigation("/employee/leave")}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <a className="my_sort_cut text-muted">
                          <span className="my-1">Leaves</span>
                          <img src={upload} />
                        </a>
                        <div
                          className="small-card-title"
                          style={{
                            borderLeft: "2px solid #f76c24",
                            paddingLeft: "10px",
                            position: "absolute",
                            right: "10px",
                            bottom: "10px",
                          }}
                        >
                          Perfect Score
                        </div>
                      </div>
                      <div
                        className=""
                        style={{
                          position: "absolute",
                          left: "auto",
                          right: "10px",
                          top: "15px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "600",
                            color: "grey",
                          }}
                        >
                          {/* 100% */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body ribbon">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <a
                          href="hr-users.html"
                          className="my_sort_cut text-muted"
                        >
                          <span className="my-1">Projects</span>
                          <img src={Projects} />
                        </a>
                        <div
                          className="small-card-title"
                          style={{
                            borderLeft: "2px solid #f76c24",
                            paddingLeft: "10px",
                            position: "absolute",
                            right: "10px",
                            bottom: "10px",
                          }}
                        >
                          Active
                        </div>
                      </div>
                      <div
                        className=""
                        style={{
                          position: "absolute",
                          left: "auto",
                          right: "10px",
                          top: "15px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "600",
                            color: "grey",
                          }}
                        >
                          {/* 05 */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div id="card" className="card">
                    <div className="card-body ribbon">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <a
                          href="hr-users.html"
                          className="my_sort_cut text-muted"
                        >
                          <span className="my-1">Total Time</span>
                          <img src={clock} />
                        </a>
                        <div
                          className="small-card-title"
                          style={{
                            borderLeft: "2px solid #f76c24",
                            paddingLeft: "10px",
                            position: "absolute",
                            right: "10px",
                            bottom: "10px",
                          }}
                        >
                          Working Hours
                        </div>
                      </div>
                      <div
                        className=""
                        style={{
                          position: "absolute",
                          left: "auto",
                          right: "10px",
                          top: "15px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "600",
                            color: "grey",
                          }}
                        >
                          {/* 4h 28m */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-body">
            <div className="">
              <div className="row clearfix row-deck">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div id="card" className="card">
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Project Stats</h3>
                    </div>
                    <div className="card-body">
                      <ul className="list-group mt-3 mb-0">
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="float-left">
                                <strong>35%</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">
                                  ERP Application
                                </small>
                              </div>
                            </div>
                          </div>
                          <div id="progress" className="progress progress-xs">
                            <div
                              className="progress-bar bg-azure"
                              role="progressbar"
                              style={{ width: "35%" }}
                              aria-valuenow={42}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="float-left">
                                <strong>25%</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">
                                  HRMS Application
                                </small>
                              </div>
                            </div>
                          </div>
                          <div id="progress" className="progress progress-xs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="float-left">
                                <strong>15%</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">
                                  CRM Application
                                </small>
                              </div>
                            </div>
                          </div>
                          <div id="progress" className="progress progress-xs">
                            <div
                              className="progress-bar bg-orange"
                              role="progressbar"
                              style={{ width: "15%" }}
                              aria-valuenow={36}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="float-left">
                                <strong>20%</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">
                                  Customer Onboarding
                                </small>
                              </div>
                            </div>
                          </div>
                          <div id="progress" className="progress progress-xs">
                            <div
                              className="progress-bar bg-indigo"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow={6}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="clearfix">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="float-left">
                                <strong>20%</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">
                                  Customer Onboarding
                                </small>
                              </div>
                            </div>
                          </div>
                          <div id="progress" className="progress progress-xs">
                            <div
                              className="progress-bar bg-pink"
                              role="progressbar"
                              style={{ width: "11%" }}
                              aria-valuenow={6}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div id="card" className="card">
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Performance Status</h3>
                    </div>
                    <div className="card-body text-center">
                      <div className="mt-3">
                        <ChartApex
                          options={revenueData.options}
                          series={revenueData.series}
                          type="radialBar"
                          height={240}
                        />
                      </div>
                      <h3 className="mb-0 mt-3 font300">
                        <span className="counter">82%</span>
                        <span className="text-green font-15">Today</span>
                      </h3>
                      <small style={{ fontSize: "1rem" }}>
                        Good Score <br />
                      </small>
                    </div>
                    <hr />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div style={{ textAlign: "center", height: "70px" }}>
                        <p style={{ fontSize: "15px" }}>63.0%</p>
                        <p style={{ fontSize: "12px", marginTop: "-10px" }}>
                          This Week
                        </p>
                      </div>
                      <div style={{ textAlign: "center", height: "70px" }}>
                        <p style={{ fontSize: "15px" }}>37.0%</p>
                        <p style={{ fontSize: "12px", marginTop: "-10px" }}>
                          Last Month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    id="card"
                    className="card"
                    style={{ padding: "0 15px 0 0px" }}
                  >
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Apply for Leaves</h3>
                    </div>
                    <div className="apply-all-div my-3">
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          margin: "10px 20px",
                        }}
                      >
                        TYPE:
                      </label>
                      <div className="div-apply-form">
                        <TextField
                          margin="dense"
                          label="City"
                          type="text"
                          name="city"
                          id="city"
                          select
                          required
                          defaultValue="Choose"
                          SelectProps={{
                            native: true,
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          className="text-field-apply"
                        >
                          {type.map((e, i) => (
                            <option key={i} value={e.value}>
                              {e.label}
                            </option>
                          ))}
                        </TextField>
                      </div>
                    </div>
                    <div className="apply-all-div">
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          margin: "10px 20px",
                        }}
                      >
                        FROM:
                      </label>
                      <div className="div-apply-form">
                        <TextField
                          margin="dense"
                          label="From"
                          type="date"
                          name="from"
                          id="from"
                          required
                          className="text-field-apply"
                          InputLabelProps={{
                            shrink: true,
                            InputLabelProps: true,
                          }}
                        />
                      </div>
                    </div>
                    <div className="apply-all-div">
                      <label
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          margin: "10px 20px",
                        }}
                      >
                        TO:
                      </label>
                      <div className="div-apply-form my-3">
                        <TextField
                          margin="dense"
                          label="To"
                          type="date"
                          name="to"
                          id="to"
                          required
                          className="text-field-apply"
                          InputLabelProps={{
                            shrink: true,
                            InputLabelProps: true,
                          }}
                        />
                      </div>
                    </div>
                    <button
                      id="add-btn"
                      style={{
                        margin: "25px 25px 60px 25px",
                        padding: "10px 0",
                        width: "85%",
                      }}
                    >
                      Apply
                    </button>

                    <hr style={{ width: "105%" }} />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div style={{ textAlign: "center", height: "70px" }}>
                        <p style={{ fontSize: "15px" }}>12</p>
                        <p style={{ fontSize: "12px", marginTop: "-10px" }}>
                          Total
                        </p>
                      </div>
                      <div style={{ textAlign: "center", height: "70px" }}>
                        <p style={{ fontSize: "15px" }}>4</p>
                        <p style={{ fontSize: "12px", marginTop: "-10px" }}>
                          Taken
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div id="card" className="card">
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Tasks Status</h3>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "60px 0",
                      }}
                    >
                      <Chart
                        type="doughnut"
                        data={chartDonutData}
                        options={lightOptions}
                        style={{
                          position: "relative",
                          width: "240px",
                          height: "240px",
                          marginBottom:'10px'
                        }}
                      />
                    </div>
                    <hr />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div style={{ textAlign: "center", height: "70px" }}>
                        <p style={{ fontSize: "15px" }}>63.0%</p>
                        <p style={{ fontSize: "12px", marginTop: "-10px" }}>
                          Completed
                        </p>
                      </div>
                      <div style={{ textAlign: "center", height: "70px" }}>
                        <p style={{ fontSize: "15px" }}>37.0%</p>
                        <p style={{ fontSize: "12px", marginTop: "-10px" }}>
                          Pending
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-xl-6 col-lg-6">
                  <div id="card" className="card">
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Monthly Attendance Status</h3>
                    </div>
                    <div className="card-body">
                      <ChartApex
                        options={chartData}
                        series={chartData.series}
                        type="bar"
                        height={420}
                      />
                    </div>
                  </div>
                  {/* approcahing deadline                */}
                  <div className="">
                    <div id="card" className="card">
                      <div id="card-header" className="card-header">
                        <h3 className="card-title">APPROACHING DEADLINE</h3>
                      </div>
                      <div className="card-body">
                        <div className="date-wala-cards-ka-body">
                          <div className="card-body date-wala-card-body">
                            <div className="date-card-emp-dash">
                              <div
                                style={{
                                  lineHeight: "10px",
                                  fontSize: "18px",
                                  fontWeight: "600",
                                }}
                              >
                                <p
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "700",
                                  }}
                                >
                                  04
                                </p>
                                <p
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "700",
                                  }}
                                >
                                  JAN
                                </p>
                              </div>
                            </div>
                            <div
                              style={{
                                lineHeight: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "10px 10px",
                              }}
                            >
                              <div>
                                <p
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "600",
                                  }}
                                >
                                  CRM Application
                                </p>
                                <p>Dashboard UI Design</p>
                                <p>6 days left</p>
                              </div>
                            </div>
                          </div>
                          <div className="card-body date-wala-card-body">
                            <div className="date-card-emp-dash">
                              <div
                                style={{
                                  lineHeight: "10px",
                                  fontSize: "17px",
                                  fontWeight: "600",
                                }}
                              >
                                <p
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "700",
                                  }}
                                >
                                  04
                                </p>
                                <p
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "700",
                                  }}
                                >
                                  JAN
                                </p>
                              </div>
                            </div>
                            <div
                              style={{
                                lineHeight: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "10px 10px",
                              }}
                            >
                              <div>
                                <p
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Login Module
                                </p>
                                <p>Dashboard UI Design</p>
                                <p>6 days left</p>
                              </div>
                            </div>
                          </div>
                          <div className="card-body date-wala-card-body">
                            <div className="date-card-emp-dash">
                              <div
                                style={{
                                  lineHeight: "10px",
                                  fontSize: "18px",
                                  fontWeight: "600",
                                }}
                              >
                                <p
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "700",
                                  }}
                                >
                                  04
                                </p>
                                <p
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "700",
                                  }}
                                >
                                  JAN
                                </p>
                              </div>
                            </div>
                            <div
                              style={{
                                lineHeight: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "10px 10px",
                              }}
                            >
                              <div>
                                <p
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "600",
                                  }}
                                >
                                  HRMS Application
                                </p>
                                <p>Dashboard UI Design</p>
                                <p>6 days left</p>
                              </div>
                            </div>
                          </div>
                          <div className="card-body date-wala-card-body">
                            <div className="date-card-emp-dash">
                              <div
                                style={{
                                  lineHeight: "10px",
                                  fontSize: "17px",
                                  fontWeight: "600",
                                }}
                              >
                                <p
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "700",
                                  }}
                                >
                                  04
                                </p>
                                <p
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "700",
                                  }}
                                >
                                  JAN
                                </p>
                              </div>
                            </div>
                            <div
                              style={{
                                lineHeight: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "10px 10px",
                              }}
                            >
                              <div>
                                <p
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "600",
                                    lineHeight: '17px'
                                  }}
                                >
                                  Customer Onboarding
                                </p>
                                <p>Dashboard UI Design</p>
                                <p>6 days left</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="">
                    {/* task ann poll pr  */}
                    <div className="">
                      <div
                        id="card"
                        className="card"
                        style={{ height: "30vh" }}
                      >
                        <div style={{ marginTop: "18px" }}></div>
                        <div className="card-body">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{ textAlign: "center", height: "10px" }}
                            >
                              <p
                                className="hover-border"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-10px",
                                }}
                              >
                                POSTS
                              </p>
                            </div>
                            <div
                              style={{ textAlign: "center", height: "10px" }}
                            >
                              <p
                                className="hover-border"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-10px",
                                }}
                              >
                                ANNOUNCEMENTS
                              </p>
                            </div>
                            <div
                              style={{ textAlign: "center", height: "10px" }}
                            >
                              <p
                                className="hover-border"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-10px",
                                }}
                              >
                                POLL
                              </p>
                            </div>
                            <div
                              style={{ textAlign: "center", height: "10px" }}
                            >
                              <p
                                className="hover-border"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-10px",
                                }}
                              >
                                PRAISE
                              </p>
                            </div>
                          </div>

                          <hr />
                          <div className="card-body">
                            <span>Write your post here..</span>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "end",
                                padding: "0 10px",
                                marginTop: "110px",
                              }}
                            >
                              <img
                                height={24}
                                style={{ margin: "0 10px" }}
                                src={Vector}
                              />
                              <img height={24} src={Send} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* postss last   */}
                    <div className="" style={{height:"auto"}}>
                      <div id="card" className="card">
                        <div id="card-header" className="card-header">
                          <h3 className="card-title"></h3>
                        </div>
                        <div className="card-body">
                          <div className="d-flex mx-4">
                            <div
                              style={{
                                height: "50px",
                                width: "50px",
                                backgroundColor: "grey",
                                borderRadius: "50%",
                              }}
                            ></div>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "10px",
                                }}
                              >
                                <h4>Praveen Kumar </h4>
                                <div className="mx-3 fs-5 cretapon">created a post</div>
                              </div>

                              <div className="cretapob" style={{ marginLeft: "10px", marginTop:'-8px' }}>created a post</div>
                              <div style={{ marginLeft: "10px" }}>
                                22 days ago
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              width: "auto",
                              fontSize: "15px",
                            }}
                            className="mx-4 my-5"
                          >
                            <p>
                              Dear Team, I hope this message finds you well.
                              We're thrilled to share some exciting news from
                              the heart of our operations Orive Solutions
                              Software Team!
                            </p>
                            <p>
                              Software Team proudly announces the release of
                              Software Version 3! Kudos to our dedicated team
                              for their hard work and collaboration. This update
                              brings enhanced features and improved performance
                              to elevate user experience. Explore the highlights
                              [here] and share your valuable feedback. We're
                              committed to continuous improvement and look
                              forward to your insights. Stay tuned for future
                              developments as we strive to shape the future of
                              Orive Solutions. Thank you for your unwavering
                              commitment to excellence!
                            </p>
                            <p>
                              Best regards, <br /> Praveen Kumar <br /> Senior
                              Developer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-body">
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    Copyright © 2023
                    <a
                      href="https://orivesolutions.com/"
                      style={{ marginLeft: "10px" }}
                    >
                      Orive Solutions
                    </a>
                    .
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFile;
