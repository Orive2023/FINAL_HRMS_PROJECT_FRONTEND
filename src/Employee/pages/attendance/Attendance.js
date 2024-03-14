import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import CompanyLogoFile from "../../components/CompanyLogoFile";
import clock from "../../asset/40px/clock.png";
//import graph from "../../asset/40px/graph";
import graph from "../../asset/40px/graph.png";
import axios from "axios";

const Attendance = () => {
  const [menu, setMenu] = useState(false);

  const [attendanceGet, setAttendanceGet] = useState([]);
  const username = localStorage.getItem("UserName")

  const getAttendance = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8084/attendance/get/username/${username}`,
        {
          validateStatus: () => {
            return true;
          },
        }
      );
      setAttendanceGet(result.data);
    } catch (error) {
      console.error("Error load attendance", error);
    }
  };

  useEffect(() => {
    getAttendance();
  }, []);



  
  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part">
          <div className="page">
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="mb-4">
                  <h4
                    style={{
                      borderLeft: "4px solid #f76c24",
                      borderRadius: "3px",
                      paddingLeft: "10px",
                      marginTop: "50px",
                      marginLeft: "20px",
                    }}
                  >
                    ATTENDANCE STATISTICS
                  </h4>
                </div>
              </div>
              <div style={{ marginTop: "20px", marginLeft: "15px" }}>
                <div className="row clearfix">
                  <div
                    className="col-xl-3 col-lg-3 col-md-4 col-xl-2"
                    style={{ width: "250px" }}
                  >
                    <div id="card" className="card">
                      <div className="card-body ribbon">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <a
                            href="hr-users.html"
                            className="my_sort_cut text-muted"
                          >
                            <span className="my-1">Total Attendance</span>
                            <img src={clock} />
                          </a>
                          <div
                            className="small-card-title"
                            style={{
                              borderLeft: "2px solid #f76c24",
                              paddingLeft: "10px",
                              position: "absolute",
                              right: "17.5px",
                              bottom: "17.5px",
                            }}
                          >{attendanceGet.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="col-xl-3 col-lg-3 col-md-4 col-xl-2"
                    style={{ width: "250px" }}
                  >
                    <div id="card" className="card">
                      <div className="card-body ribbon">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <a
                            href="hr-users.html"
                            className="my_sort_cut text-muted"
                          >
                            <span className="my-1">Avg Check-In Time</span>
                            <img src={clock} />
                          </a>
                          <div
                            className="small-card-title"
                            style={{
                              borderLeft: "2px solid #f76c24",
                              paddingLeft: "10px",
                              position: "absolute",
                              right: "17.5px",
                              bottom: "17.5px",
                            }}
                          >
                            9:30 AM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-lg-3 col-md-4 col-xl-2"
                    style={{ width: "250px" }}
                  >
                    <div id="card" className="card">
                      <div className="card-body ribbon">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <a
                            href="hr-users.html"
                            className="my_sort_cut text-muted"
                          >
                            <span className="my-1">Avg CheckOut Time</span>
                            <img src={clock} />
                          </a>
                          <div
                            className="small-card-title"
                            style={{
                              borderLeft: "2px solid #f76c24",
                              paddingLeft: "10px",
                              position: "absolute",
                              right: "17.5px",
                              bottom: "17.5px",
                            }}
                          >
                            7:30 pm
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-3 col-md-4 col-xl-2"
                    style={{ width: "250px" }}
                  >
                    <div id="card" className="card">
                      <div className="card-body ribbon">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <a
                            href="hr-users.html"
                            className="my_sort_cut text-muted"
                          >
                            <span className="my-1">Attendance Rate</span>
                            <img src={clock} />
                          </a>
                          <div
                            className="small-card-title"
                            style={{
                              borderLeft: "2px solid #f76c24",
                              paddingLeft: "10px",
                              position: "absolute",
                              right: "17.5px",
                              bottom: "17.5px",
                            }}
                          >
                            80%
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
                            <img src={graph} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-lg-3 col-md-4 col-xl-2"
                    style={{ width: "250px" }}
                  >
                    <div id="card" className="card">
                      <div className="card-body ribbon">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <a
                            href="hr-users.html"
                            className="my_sort_cut text-muted"
                          >
                            <span className="my-1">Delay Rate</span>
                            <img src={clock} />
                          </a>
                          <div
                            className="small-card-title"
                            style={{
                              borderLeft: "2px solid #f76c24",
                              paddingLeft: "10px",
                              position: "absolute",
                              right: "17.5px",
                              bottom: "17.5px",
                            }}
                          >
                            20%
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
                            <img src={graph} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="col-lg-12">
                <div className="mb-4">
                  <h4
                    style={{
                      borderLeft: "4px solid #f76c24",
                      borderRadius:'3px',
                      paddingLeft: "10px",
                      marginBottom: "15px",
                      position: "relative",
                      left: "20px",
                      top: "25px",
                    }}
                  >
                    ATTENDANCE HISTORY
                  </h4>
                </div>
              </div>

              <div style={{ marginTop: "20px", marginLeft: "15px" }}>
                <div className="row clearfix">
                  {attendanceGet.map((item, index) => {
                    return (
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6" key={index}>
                        <div id="card" className="card">
                          <div className="card-body ribbon">
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <a
                                href="hr-users.html"
                                className="my_sort_cut text-muted"
                              >
                                <div
                                  style={{
                                    width: "262.77px",
                                    height: "24px",
                                    top: "10px",
                                    left: "19.48px",
                                    borderRadius: "3px",
                                    fontWeight: "600px",
                                  }}
                                >
                                  <div className="d-flex">
                                    <img src={clock} />
                                    <div className="my-1 fw-bold mx-2">
                                      {item.date}
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      width: "max-content",
                                      padding:'5px 20px',
                                      borderRadius: "3px",
                                      background: "#47024D",
                                      color: "white",
                                      fontSize: "13px",
                                      fontWeight:'600', 
                                      display:'flex',
                                      alignItems:'center',
                                      justifyContent: 'center',
                                      position:'absolute',
                                      top:'20px',
                                      right:'20px'
                                    }}
                                  >
                                    {item.late === "00:00:00" ? "On Time": "Late"}
                                  </div>
                                </div>
                                <div
                                  style={{ display: "flex", marginTop: "20px" }}
                                >
                                  <div
                                    style={{
                                      width: "86px",
                                      height: "43px",
                                      top: "87px",
                                      left: "19.48px",
                                    }}
                                  >
                                    <div>Checkin time</div>
                                    <div style={{fontWeight:'700'}}>{item.clockIn}</div>
                                  </div>

                                  <div
                                    style={{
                                      width: "98px",
                                      height: "43px",
                                      top: "87px",
                                      marginLeft: "40px",
                                    }}
                                  >
                                    <div>Checkout time</div>
                                    <div style={{fontWeight:'700'}}>{item.clockOut}</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div className="col-6 col-md-4 col-xl-2">
                    <div id="card" className="card">
                      <div className="card-body ribbon">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <a
                            href="hr-users.html"
                            className="my_sort_cut text-muted"
                          >
                            <div
                              style={{
                                display: "flex",
                                gap: "5px",
                                width: "262.77px",
                                height: "24px",
                                top: "10px",
                                left: "19.48px",
                                borderRadius: "3px",
                                fontWeight: "600px",
                              }}
                            >
                              <img src={clock} />
                              <div className="my-1">December 29,2023</div>
                              <div className="my-1"></div>
                              <button
                                style={{
                                  width: "Fixed (90.14px)",
                                  height: "Hug (24px)",
                                  top: "20px",
                                  left: "212.11px",
                                  padding: "0px, 10px, 0px, 10px",
                                  borderRadius: "3px",
                                  gap: "15px",
                                  background: "#B1B1B1",
                                  color: "white",
                                }}
                              >
                               
                                Absent
                              </button>
                            </div>
                            <div style={{ display: "flex", marginTop: "20px" }}>
                              <div
                                style={{
                                  width: "86px",
                                  height: "43px",
                                  top: "87px",
                                  left: "19.48px",
                                }}
                              >
                                <div>Checkin time</div>
                                <div>9:30 AM</div>
                              </div>

                              <div
                                style={{
                                  width: "98px",
                                  height: "43px",
                                  top: "87px",
                                  marginLeft: "40px",
                                }}
                              >
                                <div>Checkout time</div>
                                <div>7:30 AM</div>
                              </div>
                            </div>
                          </a>
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
                            <div
                              style={{
                                display: "flex",
                                gap: "5px",
                                width: "262.77px",
                                height: "24px",
                                top: "10px",
                                left: "19.48px",
                                borderRadius: "3px",
                                fontWeight: "600px",
                              }}
                            >
                              <img src={clock} />
                              <div className="my-1">December 29,2023</div>
                              <div className="my-1"></div>
                              <button
                                style={{
                                  width: "50px",
                                  height: "Hug (24px)",
                                  top: "20px",
                                  
                                  marginLeft:"5px",
                                  padding: "0px, 10px, 0px, 10px",
                                  borderRadius: "3px",
                                  gap: "15px",
                                  background: "#F76C24",
                                  color: "white",
                                }}
                              >
                               
                                Late
                              </button>
                            </div>
                            <div style={{ display: "flex", marginTop: "20px" }}>
                              <div
                                style={{
                                  width: "86px",
                                  height: "43px",
                                  top: "87px",
                                  left: "19.48px",
                                }}
                              >
                                <div>Checkin time</div>
                                <div>9:30 AM</div>
                              </div>

                              <div
                                style={{
                                  width: "98px",
                                  height: "43px",
                                  top: "87px",
                                  marginLeft: "40px",
                                }}
                              >
                                <div>Checkout time</div>
                                <div>7:30 AM</div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
