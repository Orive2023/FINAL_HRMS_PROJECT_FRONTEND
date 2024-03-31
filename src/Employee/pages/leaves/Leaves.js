import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import CompanyLogoFile from "../../components/CompanyLogoFile";
import upload from "../../asset/40px/upload.png";
import appl from "../../asset/40px/appl.png";
import filter from "../../asset/40px/filter.png";
import bars from "../../asset/40px/bars.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "@mui/material";
import date from "date-and-time";
import axios from "axios";

import check1 from "../../asset/40px/check.png";
import remove1 from "../../asset/40px/remove (1).png";
import shape from "../../asset/40px/Shape.png" 
import { useNavigate } from "react-router-dom";
import * as api from "../../components/sidebarComponent/EmployeeDetails"
const Leaves = () => {
  const [menu, setMenu] = useState(false);
  const type = [
    {
      label: "Choose Leave Type",
      value: "Leave",
      disable: "true",
    },
    {
      label: "Casual Leave",
      value: "Casual Leave",
      disable: "false",
    },
    {
      label: "Sick Leave",
      value: "Sick Leave",
      disable: "false",
    },
  ];


  const [empData,setEmpData] = useState([])
  const loadEmployee = async () => {
    try {
      const result = await api.loadEmployee();;
      setEmpData(result.data);
    } catch (error) {
      console.error('Error loading employee data:', error);
    }
  };
  

  useEffect(() => {
    loadEmployee()
  },[])

  const now = new Date();
  let todayDate = date.format(now, "YYYY-MM-DD");

  // console.log("dd",empData[0])
  // console.log(empData[0].employeeId)
  // console.log(empData[0].employeeName)

  const [formData, setFormData] = useState({
    employeeId: empData[0]?.employeeId,
    employeeName: empData[0]?.employeeName,
    leaveType: "",
    startDate: "",
    endDate: "",
    leaveReason: "",
    appliedOn: todayDate,
    approval: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      employeeId: empData[0]?.employeeId,
    employeeName: empData[0]?.employeeName,
    });
  };
  const navigation = useNavigate();
  const handleApply = async () => {
    try {
      await axios.post("https://api.orivehrms.com/leaves/create/leaves", formData);
      navigation("/leaves");
    } catch (error) {
      console.error("saveLeave", error);
    }
  };

  const [leaveData, setLeaveData] = useState([]);

  const getLeave = async () => {
    try {
      const result = await axios.get(
        "https://api.orivehrms.com/leaves/get/leaves",
        {
          validateStatus: () => {
            return true;
          },
        }
      );
      setLeaveData(result.data);
    } catch (error) {
      console.error("Error load attendance", error);
    }
  };

  const [eventData,setEventData] = useState([])

  const getEventData = () => {
    axios
      .get("https://api.orivehrms.com/event/get/event")
      .then((result) => {
        setEventData(result.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(formData)
 console.log(eventData)

  useEffect(() => {
    getLeave();
    getEventData();
  }, []);

  const daysCalculate = (startDate, endDate) => {
    var startDate = new Date("2024-01-11");
    var endDate = new Date("2024-01-13");
    var timeDifference = endDate - startDate;
    var daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    return daysDifference;
  };

  console.log(leaveData);
  return (
    <div>
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
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="mb-4">
                      <h4
                        style={{
                          borderLeft: "2px solid #f76c24",
                          paddingLeft: "10px",
                          marginTop: "40px",
                          position: "relative",
                          left: "20px",
                          top: "25px",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        LEAVES
                      </h4>
                    </div>
                    <div style={{ marginTop: "60px", marginLeft: "75%" }}>
                      <div>
                        <button
                          style={{
                            width: "80px",
                            height: "20px",
                            fontSize: "8px",
                            background: "#DEDEDE",
                            border: "none",
                            borderRadius: "3px",
                          }}
                        >
                          Monthly
                        </button>
                      </div>
                    </div>

                    <div
                      className="side-icons"
                      style={{ marginTop: "60px", marginRight: "20px" }}
                    >
                      <img
                        src={appl}
                        style={{ cursor: "pointer" }}
                        alt=""
                        height={20}
                      />
                      <img
                        src={bars}
                        style={{ cursor: "pointer", margin: "0px 10px" }}
                        alt=""
                        height={20}
                      />
                      <img
                        src={filter}
                        style={{ cursor: "pointer" }}
                        alt=""
                        height={20}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "20px", marginLeft: "15px" }}>
                  <div className="row clearfix">
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div>
                        <div>
                          <div
                            id="card"
                            className="card"
                            style={{ width: "190px", height: "100px" }}
                          >
                            <div>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div
                                  style={{
                                    width: "98px",
                                    marginTop: "2px",
                                    padding: "13px",
                                    height: "24px",
                                    fontWeight: "400",
                                    fontSize: "10px",
                                    color: "rgba(44, 41, 69, 1)",
                                  }}
                                >
                                  Total Leaves
                                </div>
                                <div
                                  style={{
                                    marginTop: "-2px",
                                    height: "1px",
                                    padding: "13px",
                                  }}
                                >
                                  {" "}
                                  <img src={upload} height={20} />
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "auto",
                                  right: "10px",
                                  top: "60%",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "600",
                                    color: "grey",
                                  }}
                                >
                                  15.0
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div
                            id="card"
                            className="card"
                            style={{ width: "190px", height: "100px" }}
                          >
                            <div>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div
                                  style={{
                                    width: "98px",
                                    marginTop: "2px",
                                    padding: "13px",
                                    height: "24px",
                                    fontWeight: "400",
                                    fontSize: "10px",
                                    color: "rgba(44, 41, 69, 1)",
                                  }}
                                >
                                  Available Leaves
                                </div>
                                <div
                                  style={{
                                    marginTop: "-2px",
                                    height: "1px",
                                    padding: "13px",
                                  }}
                                >
                                  {" "}
                                  <img src={upload} height={20} />
                                </div>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "auto",
                                  right: "10px",
                                  top: "60%",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "600",
                                    color: "grey",
                                  }}
                                >
                                  6.0
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          id="card"
                          className="card"
                          style={{ width: "190px", height: "100px" }}
                        >
                          <div>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div
                                style={{
                                  width: "98px",
                                  marginTop: "2px",
                                  padding: "13px",
                                  height: "24px",
                                  fontWeight: "400",
                                  fontSize: "10px",
                                  color: "rgba(44, 41, 69, 1)",
                                }}
                              >
                                Casual Leave
                              </div>
                              <div
                                style={{
                                  marginTop: "-2px",
                                  height: "1px",
                                  padding: "13px",
                                }}
                              >
                                <img src={upload} height={20} />
                              </div>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "auto",
                                right: "10px",
                                top: "60%",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "17px",
                                  fontWeight: "600",
                                  color: "grey",
                                }}
                              >
                                2.0
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          id="card"
                          className="card"
                          style={{ width: "190px", height: "100px" }}
                        >
                          <div>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div
                                style={{
                                  width: "98px",
                                  marginTop: "2px",
                                  padding: "13px",
                                  height: "24px",
                                  fontWeight: "400",
                                  fontSize: "10px",
                                  color: "rgba(44, 41, 69, 1)",
                                }}
                              >
                                Sick Leave
                              </div>
                              <div
                                style={{
                                  marginTop: "-2px",
                                  height: "1px",
                                  padding: "13px",
                                }}
                              >
                                {" "}
                                <img src={upload} height={20} />
                              </div>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "auto",
                                right: "10px",
                                top: "60%",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "17px",
                                  fontWeight: "600",
                                  color: "grey",
                                }}
                              >
                                3.0
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          id="card"
                          className="card"
                          style={{ width: "190px", height: "100px" }}
                        >
                          <div>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div
                                style={{
                                  width: "98px",
                                  marginTop: "2px",
                                  padding: "13px",
                                  height: "24px",
                                  fontWeight: "400",
                                  fontSize: "10px",
                                  color: "rgba(44, 41, 69, 1)",
                                }}
                              >
                                Half-Day Leave
                              </div>
                              <div
                                style={{
                                  marginTop: "-2px",
                                  height: "1px",
                                  padding: "13px",
                                }}
                              >
                                {" "}
                                <img src={upload} height={20} />
                              </div>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                left: "auto",
                                right: "10px",
                                top: "60%",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "17px",
                                  fontWeight: "600",
                                  color: "grey",
                                }}
                              >
                                1.5
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div></div>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <div
                        id="card"
                        className="card"
                        style={{
                          height: "70vh",
                          width: "400px",
                          marginTop: "10px",
                          marginLeft: "2px",
                        }}
                      >
                        <div id="card-header" className="card-header">
                          <h5
                            style={{
                              width: "162px",
                              height: "18px",
                              fontSize: "13px",
                              fontWeight: "600",
                              color: "#2C2945",
                            }}
                          >
                            MY LEAVES
                          </h5>
                        </div>
                        {leaveData &&
                          leaveData.map((item, index) => (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                gap: "20px",
                              }}
                              key={index}
                            >
                              <img
                                style={{
                                  marginTop: "10px",
                                  marginLeft: "25px",
                                  width: "20px",
                                  height: "20px",
                                }}
                                src={item.approval === "Rejected"
                                      ? remove1
                                      : item.approval === "Approved"
                                      ? check1
                                      : shape}
                              />

                              <div
                                style={{
                                  marginTop: "8px",
                                  marginLeft: "10px",
                                  fontWeight: "500",
                                  fontSize: "8px",
                                  color: "#808488",
                                }}
                              >
                                {item.startDate} - {item.endDate}
                                <div>
                                  <ul
                                    style={{
                                      display: "flex",
                                      gap: "5px",
                                      padding: "2px 2px 2px 0",
                                      color: "rgba(128, 132, 136, 1)",
                                      fontSize: "6px",
                                      listStyle: "none",
                                      alignItems: "center",
                                    }}
                                  >
                                    <li>
                                      {daysCalculate(item.startDate,item.endDate) + " " + "days"}
                                    </li>
                                    <div
                                      style={{
                                        height: "3px",
                                        width: "3px",
                                        backgroundColor: "grey",
                                        borderRadius: "50%",
                                      }}
                                    ></div>
                                    <li>{item.leaveType} </li>
                                    <div
                                      style={{
                                        height: "3px",
                                        width: "3px",
                                        backgroundColor: "grey",
                                        borderRadius: "50%",
                                      }}
                                    ></div>
                                    <li>{item.leaveReason} </li>
                                  </ul>
                                </div>
                              </div>

                              <button
                                style={{
                                  width: "60px",
                                  height: "15px",
                                  fontSize: "8px",
                                  background:
                                    item.approval === "Rejected"
                                      ? "rgba(247, 108, 36, 0.1)"
                                      : item.approval === "Approved"
                                      ? "rgba(15, 147, 13, 0.1)"
                                      : "rgba(111, 111, 111, 0.1)",
                                  border: "none",
                                  borderRadius: "3px",
                                  color:
                                    item.approval === "Rejected"
                                      ? "rgba(247, 108, 36, 1)"
                                      : item.approval === "Approved"
                                      ? "rgba(15, 147, 13, 1)"
                                      : "rgba(111, 111, 111, 1)",
                                  alignItems: "center",
                                  marginLeft: "8px",
                                  marginTop: "10px",
                                  fontWeight: "600",
                                  padding: "0px 2px 0px 2px",
                                }}
                              >
                                {item.approval === ""? "Pending" : item.approval}
                              </button>
                            </div>
                          ))}
                      
                      </div>

                      {/* apply for leaves */}
                      <div
                        id="card"
                        className="card"
                        style={{
                          height: "70vh",
                          width: "400px",
                          marginTop: "10px",
                          marginLeft: "2px",
                        }}
                      >
                        <div id="card-header" className="card-header">
                          <h5
                            style={{
                              width: "162px",
                              height: "18px",
                              fontSize: "13px",
                              fontWeight: "600",
                              color: "#2C2945",
                            }}
                          >
                            APPLY FOR LEAVES
                          </h5>
                        </div>
                        <form>
                          <div
                            style={{
                              display: "flex",

                              alignItems: "center",
                              marginTop: "-10px",
                            }}
                          >
                            <div className="data-input-fields">
                              <label
                                style={{
                                  fontSize: "10px",
                                  fontWeight: "600",
                                  margin: "10px 20px",
                                  color: "#6C757D",
                                }}
                              >
                                TYPE:
                              </label>
                              <TextField
                                margin="dense"
                                type="text"
                                fullWidth
                                name="leaveType"
                                id="leaveType"
                                select
                                required
                                value={formData.leaveType}
                                defaultValue="Choose"
                                SelectProps={{
                                  native: true,
                                }}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                onChange={(e) => handleInputChange(e)}
                                style={{ width: "220px", marginLeft: "5px" }}
                              >
                                {type.map((e, i) => (
                                  <option key={i} value={e.value}>
                                    {e.label}
                                  </option>
                                ))}
                              </TextField>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              // justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <label
                              style={{
                                fontSize: "10px",
                                fontWeight: "600",
                                margin: "10px 20px",
                                color: "#6C757D",
                              }}
                            >
                              FROM:
                            </label>
                            <TextField
                              margin="dense"
                              type="date"
                              fullWidth
                              name="startDate"
                              id="startDate"
                              required
                              value={formData.startDate}
                              style={{ width: "220px", marginLeft: "10px" }}
                              onChange={(e) => handleInputChange(e)}
                              InputLabelProps={{
                                shrink: true,
                                InputLabelProps: true,
                              }}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              // justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <label
                              style={{
                                fontSize: "10px",
                                fontWeight: "600",
                                margin: "10px 20px",
                                color: "#6C757D",
                              }}
                            >
                              TO:
                            </label>
                            <TextField
                              margin="dense"
                              type="date"
                              fullWidth
                              name="endDate"
                              id="endDate"
                              required
                              value={formData.endDate}
                              onChange={(e) => handleInputChange(e)}
                              style={{ width: "220px", marginLeft: "28px" }}
                              InputLabelProps={{
                                shrink: true,
                                InputLabelProps: true,
                              }}
                            />
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <label
                              style={{
                                fontSize: "10px",
                                fontWeight: "600",
                                margin: "10px 20px",
                                color: "#6C757D",
                              }}
                            >
                              REASON:
                            </label>
                            <TextField
                              margin="dense"
                              type="textarea"
                              fullWidth
                              name="leaveReason"
                              id="leaveReason"
                              value={formData.leaveReason}
                              onChange={(e) => handleInputChange(e)}
                              required
                              style={{ width: "220px", marginLeft: "-1px" }}
                            />
                          </div>
                          <button
                            id="add-btn"
                            style={{
                              width: "280px",
                              margin: "25px",
                              padding: "3px",
                              fontSize: "10px",
                              fontWeight: "500",
                            }}
                            onClick={handleApply}
                          >
                            Apply
                          </button>
                        </form>
                      </div>
                      <div
                        id="card"
                        className="card"
                        style={{
                          height: "70vh",
                          width: "400px",
                          marginTop: "10px",
                          marginLeft: "2px",
                        }}
                      >
                        <div id="card-header" className="card-header">
                          <h5
                            style={{
                              width: "162px",
                              height: "18px",
                              fontSize: "13px",
                              fontWeight: "600",
                              color: "#2C2945",
                            }}
                          >
                            UPCOMING HOLIDAYS
                          </h5>
                        </div>
                         {
                            eventData && eventData.map((event,index) => (
                              event.className=== "added-holiday-data" ?
                        <div
                          id="card"
                          className="card"
                          style={{
                            height: "50px",
                            width: "290px",
                            marginTop: "-10px",
                            marginLeft: "20px",
                            background: "rgba(242, 243, 245, 1)",
                          }}
                        >
                    
                         

                          <div key={index} style={{ display: "flex",justifyContent:"space-between",
                                  alignItems:"center", gap: "75px" }}>
                            <div>
                              <h5
                                style={{
                                  margin: "14px",
                                  fontSize: "10px",
                                  color: "rgba(108, 117, 125, 1)",
                                  padding: "3px",
                                  fontWeight: "600",
                                  display:"flex",
                                  
                                }}
                              >
                                {event.title }
                              </h5>
                            </div>
                            <div
                              style={{
                                color: "rgba(111, 111, 111, 1)",
                                fontSize: "8px",
                                margin: "18px",
                                fontWeight: "500",
                              }}
                            >
                              {event.date}
                            </div>
                          </div>
                           
                        </div> : ""
                        ))
                         }

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaves;
