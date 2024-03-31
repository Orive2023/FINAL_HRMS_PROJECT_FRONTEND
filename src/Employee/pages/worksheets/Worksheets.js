import React, { useEffect, useState } from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import CompanyLogoFile from "../../components/CompanyLogoFile";
import clipboard1 from "../../asset/40px/clipboard 1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ellipse104 from "../../asset/40px/Ellipse 104.png";
import appl from "../../asset/40px/appl.png";
import filter from "../../asset/40px/filter.png";
import bars from "../../asset/40px/bars.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Worksheets = () => {
  const [menu, setMenu] = useState(false);

  const [getWorksheet, setGetWorksheet] = useState([]);

  const loadWorksheet = async () => {
    try {
      const result = await axios.get(
        "https://api.orivehrms.com/worksheet/get/worksheet",
        {
          validateStatus: () => {
            return true;
          },
        }
      );
      setGetWorksheet(result.data);
    } catch (error) {
      console.error("Error load Worksheet", error);
    }
  };

  useEffect(() => {
    loadWorksheet();
  }, []);

  console.log(getWorksheet);

  const now = 60;

  const mapka = [
    {
      taskName:'orive project',
      description: 'njxbscbdskjc dslckjbshcbjsbchdsbckjabsx cghasbv hajsvnjxbscbdskjc dslckjbshcbjsbchdsbckjabsx cghasbv hajsv',
      createdDate:'23/03/2024',
      assignedTo: 'Subham Parida'
    },
    {
      taskName:'orive project',
      description: 'njxbscbdskjc dslckjbshcbjsbchdsbckjabsx cghasbv hajsv',
      createdDate:'23/03/2024',
      assignedTo: 'Subham Parida'
    },
    {
      taskName:'orive project',
      description: 'njxbscbdskjc dslckjbshcbjsbchdsbckjabsx cghasbv hajsv',
      createdDate:'23/03/2024',
      assignedTo: 'Subham Parida'
    },
    {
      taskName:'orive project',
      description: 'njxbscbdskjc dslckjbshcbjsbchdsbckjabsx cghasbv hajsv',
      createdDate:'23/03/2024',
      assignedTo: 'Subham Parida'
    },
    {
      taskName:'orive project',
      description: 'njxbscbdskjc dslckjbshcbjsbchdsbckjabsx cghasbv hajsv',
      createdDate:'23/03/2024',
      assignedTo: 'Subham Parida'
    },
    {
      taskName:'orive project',
      description: 'njxbscbdskjc dslckjbshcbjsbchdsbckjabsx cghasbv hajsv',
      createdDate:'23/03/2024',
      assignedTo: 'Subham Parida'
    },
    {
      taskName:'orive project',
      description: 'njxbscbdskjc dslckjbshcbjsbchdsbckjabsx cghasbv hajsv',
      createdDate:'23/03/2024',
      assignedTo: 'Subham Parida'
    },
  ]
  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part">
        <div className="mx-3" style={{ marginTop: "70px",marginBottom:'-50px', width: "150px" }}>
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
                    <span style={{ color: "black" }}> Task</span>
                  </div>
                </div>
              </div>
          <div
            className="worksheet-heading-head"
          >
            <div className="mb-4">
              <h4 className="heading">MY TASKS</h4>
            </div>

            <div
              className="side-icons"
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

          <div className="row mt-4 mx-2">
            {getWorksheet.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-xl-4 xol-lg-4 col-md-6 worksheet-card"
                >
                  <div
                    id="card"
                    className="card"
                    style={{
                      width: "390px",
                      height: "280px",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="card-top"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "15px 15px",
                      }}
                    >
                      <div
                        className="card-top-left"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div
                          className="profile-img"
                          style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                          }}
                        >
                          <img
                            src={clipboard1}
                            style={{
                              transform: "scale(1)",
                              margin: "5px",
                              width: "22px",
                              height: "28px",
                            }}
                            alt=""
                          />
                        </div>
                        <div
                          className="profile-name"
                          style={{
                            fontWeight: "600",
                            fontSize: "18px",
                            margin: "0 10px",
                          }}
                        >
                          {item.taskName}
                        </div>
                      </div>
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
                          Active
                        </div>
                      </div>
                    </div>
                    <div
                      className="ticket-desc"
                      style={{
                        margin: "0 20px",
                        color: "rgba(128, 132, 136, 1)",
                        fontWeight: "500",
                        lineHeight: "19.5px",
                        width:'auto'
                      }}
                    >
                      {item.description}
                    </div>

                    <div
                      className="card-bottom"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "10px",
                      }}
                    >
                      <div
                        className="ticket-status"
                        style={{
                          backgroundColor: "rgba(247, 108, 36, 0.1)",
                          color: "rgba(111, 111, 111, 1)",
                          fontWeight: "500",
                          height: "40px",
                          width: "250px",
                          padding: "10px 20px",
                          borderRadius: "5px",
                        }}
                      >
                        Created Date : {item.createdDate}
                      </div>
                      <div
                        className="ticket-priority"
                        style={{
                          backgroundColor: "rgba(72, 3, 75, 0.1)",
                          color: "rgba(111, 111, 111, 1)",
                          fontWeight: "500",
                          height: "40px",
                          width: "300px",
                          padding: "10px 20px",
                          borderRadius: "5px",
                        }}
                      >
                        Assigned by : {item.assignedTo}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div
              className="ticket-cards"
              style={{ marginLeft: "20px", paddingTop: "4%" }}
            >
              <div
                id="card"
                className="card"
                style={{
                  width: "450px",
                  height: "280px",
                  cursor: "pointer",
                }}
              >
                <div
                  className="card-top"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 15px",
                  }}
                >
                  <div
                    className="card-top-left"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div
                      className="profile-img"
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src={clipboard1}
                        style={{
                          transform: "scale(1)",
                          margin: "5px",
                          width: "22px",
                          height: "28px",
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      className="profile-name"
                      style={{
                        fontWeight: "600",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    >
                      HRM Dashboard
                    </div>
                  </div>
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
                  </div>
                </div>
                <div
                  className="ticket-desc"
                  style={{
                    margin: "0 20px",
                    color: "rgba(71, 2, 77, 1)",
                    fontWeight: "500",
                    lineHeight: "19.5px",
                  }}
                >
                  Design screens for admin dashboard, profile settings and
                  notifications
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div style={{ margin: "auto", width: "90%" }}>
                    <ProgressBar className="pb" now={now} label={${now}%} />
                  </div>
                </div>

                <div
                  className="card-bottom"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <div
                    className="ticket-status"
                    style={{
                      backgroundColor: "rgba(247, 108, 36, 0.1)",
                      color: "rgba(247, 108, 36, 1)",
                      fontWeight: "500",
                      height: "40px",
                      width: "250px",
                      padding: "10px 20px",
                      borderRadius: "5px",
                    }}
                  >
                    Deadline : December 2, 2023
                  </div>
                  <div
                    className="ticket-priority"
                    style={{
                      backgroundColor: "rgba(72, 3, 75, 0.1)",
                      color: "rgba(111, 111, 111, 1)",
                      fontWeight: "500",
                      height: "40px",
                      width: "300px",
                      padding: "10px 20px",
                      borderRadius: "5px",
                    }}
                  >
                    Assigned by : Pritam Kumar Behera
                    <img className="mx-2" src={ellipse104} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="ticket-cards"
              style={{ marginLeft: "20px", paddingTop: "4%" }}
            >
              <div
                id="card"
                className="card"
                style={{
                  width: "450px",
                  height: "280px",
                  cursor: "pointer",
                }}
              >
                <div
                  className="card-top"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 15px",
                  }}
                >
                  <div
                    className="card-top-left"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div
                      className="profile-img"
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src={clipboard1}
                        style={{
                          transform: "scale(1)",
                          margin: "5px",
                          width: "22px",
                          height: "28px",
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      className="profile-name"
                      style={{
                        fontWeight: "600",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    >
                      ERP Application
                    </div>
                  </div>
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
                      In Queue
                    </div>
                  </div>
                </div>
                <div
                  className="ticket-desc"
                  style={{
                    margin: "0 20px",
                    color: "rgba(128, 132, 136, 1)",
                    fontWeight: "500",
                    lineHeight: "19.5px",
                  }}
                >
                  Design screens for admin dashboard, profile settings and
                  notifications
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div style={{ margin: "auto", width: "90%" }}>
                    <ProgressBar className="pb" now={now} label={${now}%} />
                  </div>
                </div>

                <div
                  className="card-bottom"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <div
                    className="ticket-status"
                    style={{
                      backgroundColor: "rgba(247, 108, 36, 0.1)",
                      color: "rgba(111, 111, 111, 1)",
                      fontWeight: "500",
                      height: "40px",
                      width: "250px",
                      padding: "10px 20px",
                      borderRadius: "5px",
                    }}
                  >
                    Deadline : December 2, 2023
                  </div>
                  <div
                    className="ticket-priority"
                    style={{
                      backgroundColor: "rgba(72, 3, 75, 0.1)",
                      color: "rgba(111, 111, 111, 1)",
                      fontWeight: "500",
                      height: "40px",
                      width: "300px",
                      padding: "10px 20px",
                      borderRadius: "5px",
                    }}
                  >
                    Assigned by : Pritam Kumar Behera
                    <img className="mx-2" src={ellipse104} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ticket-cards"
              style={{ marginLeft: "20px", paddingTop: "4%" }}
            >
              <div
                id="card"
                className="card"
                style={{
                  width: "450px",
                  height: "280px",
                  cursor: "pointer",
                }}
              >
                <div
                  className="card-top"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 15px",
                  }}
                >
                  <div
                    className="card-top-left"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div
                      className="profile-img"
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src={clipboard1}
                        style={{
                          transform: "scale(1)",
                          margin: "5px",
                          width: "22px",
                          height: "28px",
                        }}
                        alt=""
                      />
                    </div>
                    <div
                      className="profile-name"
                      style={{
                        fontWeight: "600",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    >
                      Orive Solution Website
                    </div>
                  </div>
                  <div
                    style={{
                      background: "rgba(111, 111, 111, 0.2)",
                      borderRadius: "3px",
                      padding: "0px, 2px, 0px, 2px",
                      height: "30px",
                      width: "max-content",
                      color: "rgba(111, 111, 111, 1)",
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
                  </div>
                </div>
                <div
                  className="ticket-desc"
                  style={{
                    margin: "0 20px",
                    color: "rgba(128, 132, 136, 1)",
                    fontWeight: "500",
                    lineHeight: "19.5px",
                  }}
                >
                  Design screens for admin dashboard, profile settings and
                  notifications
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div style={{ margin: "auto", width: "90%" }}>
                    <ProgressBar className="pb" now={now} label={${now}%} />
                  </div>
                </div>

                <div
                  className="card-bottom"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <div
                    className="ticket-status"
                    style={{
                      backgroundColor: "rgba(247, 108, 36, 0.1)",
                      color: "rgba(111, 111, 111, 1)",
                      fontWeight: "500",
                      height: "40px",
                      width: "250px",
                      padding: "10px 20px",
                      borderRadius: "5px",
                    }}
                  >
                    Deadline : December 2, 2023
                  </div>
                  <div
                    className="ticket-priority"
                    style={{
                      backgroundColor: "rgba(72, 3, 75, 0.1)",
                      color: "rgba(111, 111, 111, 1)",
                      fontWeight: "500",
                      height: "40px",
                      width: "300px",
                      padding: "10px 20px",
                      borderRadius: "5px",
                    }}
                  >
                    Assigned by : Pritam Kumar Behera
                    <img className="mx-2" src={ellipse104} alt="" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worksheets;