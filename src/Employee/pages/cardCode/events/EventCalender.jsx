import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios"
import CompanyLogoFile from "../../../components/CompanyLogoFile";
import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";

const EventCalender = () => {
  const [events, setEvents] = useState([
    {
      title: "Birthday Party",
      start: "2023-12-28",
      className: "added-event-data",
    },
    {
      title: "Party",
      start: "2023-12-22",
      className: "added-event-data",
    },
  ]);

  const getEventData = () => {
    axios
      .get("https://api.orivehrms.com/event/get/event")
      .then((result) => {
        setEvents(result.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEventData();
  }, []);

  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div
          className="head-foot-part"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            className="section-body"
            style={{ width: "100%", paddingTop: "25px" }}
          >
            <div className="container-fluid">
              <div className="row clearfix row-deck">
                <div className="col-xl-3 col-lg-12 col-md-12">
                  <div
                    id="card"
                    className="card"
                    style={{ height: "85vh", overflow: "scroll" }}
                  >
                    <div id="card-header" className="card-header">
                      <h3 className="card-title">Event List</h3>
                    </div>
                    {events.map((event, index) => (
                      <div className="event-list" key={index}>
                        <p
                          style={{
                            background:
                              event.className === "added-holiday-data"
                                ? "#501a51"
                                : "#f2711c",
                          }}
                        >
                          {event.title} {event.start}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-xl-9 col-lg-12 col-md-12">
                  <div
                    id="card"
                    className="card"
                    style={{
                      height: "85vh",
                      padding: "20px",
                      overflow: "scroll",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <FullCalendar
                        className="calendar-data-field"
                        plugins={[dayGridPlugin, interactionPlugin]}
                        header={{
                          left: "title",
                          center: "",
                          right:
                            "dayGridMonth, dayGridWeek, dayGridDay, prev, next",
                        }}
                        editable={false}
                        eventLimit={true}
                        selectable={true}
                        events={events}
                        height={520}
                      />
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

export default EventCalender;
