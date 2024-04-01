import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { format } from "date-fns";

import axios from "axios"

import CompanyLogoFile from "../../../components/CompanyLogoFile";
import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";

import Modal from "react-modal";
const EventCalender = () => { 
  const [events, setEvents] = useState([
    {
      title: "Birthday Party",
      start: "2023-12-28",
      className: "added-event-data",
    },
  ]);

  const [newEventTitle, setNewEventTitle] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const generateSampleHolidays = (startYear, endYear) => {
    const holidays = [];
    for (let year = startYear; year <= endYear; year++) {
      holidays.push(
        { title: "New Year", date: `${year}-01-01`},
        { title: "Independence Day", date: `${year}-08-15` }
      );
    }
    return holidays;
  };

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const nextFewYears = 1;
    const endYear = currentYear + nextFewYears;

    setEvents((prevEvents) => {
      const existingEventDates = prevEvents.map((event) => event.start);
      const sampleHolidays = generateSampleHolidays(
        currentYear,
        endYear
      ).filter((holiday) => !existingEventDates.includes(holiday.date));

      const updatedHolidays = sampleHolidays.map((holiday) => ({
        title: holiday.title,
        start: format(new Date(holiday.date), "yyyy-MM-dd"),
        className: "added-holiday-data",
      }));

      return [...prevEvents, ...updatedHolidays];
    });
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setNewEventTitle("");
    setSelectedDate("");
    setSelectedEvent(null);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setNewEventTitle(info.event.title || "");
    openModal();
  };

  const handleDateClick = (info) => {
    setNewEventTitle("");
    setSelectedDate(info.dateStr);
    openModal();
  };

  const handleEventCreate = async () => {
    if (selectedEvent) {
      const updatedEvent = {
        ...selectedEvent,
        title: newEventTitle,
      };

      const updatedEvents = events.map((event) =>
        event === selectedEvent ? updatedEvent : event
      );

      setEvents(updatedEvents);
    } else {
      const newEvent = {
        title: newEventTitle,
        start: selectedDate,
        className: "added-event-data",
      };

      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }

   

    closeModal();
  };

  const handleInputChange = (e) => {
    setNewEventTitle(e.target.value);
  };

  const handleSubmit = async () => {
    try{
      axios.create("https://api.orivehrms.com/event/create/event",
        events);
  } catch(error) {
      console.error("saveEvent",error)
  }
   
  }

  const [menu, setMenu] = useState(false);

  console.log(events);
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
                        editable={true}
                        eventLimit={true}
                        selectable={true}
                        events={events}
                        eventClick={handleEventClick}
                        dateClick={handleDateClick}
                        height={520}
                      />
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Event Modal"
                        style={{
                          content: {
                            width: "50%",
                            height: "30%",
                            margin: "auto",
                          },
                          overlay: {
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            zIndex: 1000,
                          },
                        }}
                      >
                        <h2>
                          {selectedEvent ? "Edit Event" : "Create New Event"}
                        </h2>
                        {selectedDate && <p>Selected Date: {selectedDate}</p>}
                        <form onSubmit={handleSubmit}>

                        <label>
                          Event Title:
                          <input
                            type="text"
                            value={newEventTitle}
                            onChange={handleInputChange}
                            className="event-input"
                          />
                        </label>
                        <div className="data-buttons">
                          <button
                            onClick={handleEventCreate}
                            id="input-btn-submit"
                          >
                            {selectedEvent ? "Update Event" : "Create Event"}
                          </button>
                          <button onClick={closeModal} id="input-btn-cancel">
                            Cancel
                          </button>
                          </div>
                        </form>
                        
                      </Modal>
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