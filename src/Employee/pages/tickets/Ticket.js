import React, { useState, useRef, useCallback, useEffect } from "react";
import CompanyLogoFile from "../../components/CompanyLogoFile";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import logo from "../../asset/images/logo.png";
import header from "../../asset/images/Header.png";
import footer from "../../asset/images/Footer.png";
import pro from "../../asset/images/pro.png";
import appl from "../../asset/images/appl.png";
import { styled } from "@mui/system";
import burger from "../../asset/images/burger.png";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { CSVLink } from "react-csv";
import filter from "../../asset/images/filter.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";


import Webcam from "react-webcam";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";


const Ticket = ({setFormVisible}) => {
  const WebcamComponent = () => <Webcam />;
  const [cardClick, setCardClick] = useState(false);
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [ticket, setTicket] = useState([]);
  const [project, setProject] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [ticketData, setTicketData] = useState([]);

 

const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = decoded.username;

// const username = localStorage.getItem("UserName")
  useEffect(() => {
    loadTickets();
  }, []);


  const loadTickets = async () => {
    try {
      const result = await axios.get(`https://api.orivehrms.com/tickets/getticketdetails/${username}`);
      setTicketData(result.data);
    } catch (error) {
      console.error("TicketLoad Failed", error);
    }
  };


  const cardData = [
    {
      profileImg: "",
      name: "Subham Parida",
      time: "2min ago",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
      status: "Open",
      priority: "Low Priority",
    },
    {
      profileImg: "",
      name: "Praveen Kumar",
      time: "5min ago",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
      status: "In Progress",
      priority: "Low Priority",
    },
    {
      profileImg: "",
      name: "Pritam Behera",
      time: "1min ago",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
      status: "Closed",
      priority: "High Priority",
    },
    {
      profileImg: "",
      name: "Subham Parida",
      time: "2min ago",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
      status: "Open",
      priority: "Low Priority",
    },
    {
      profileImg: "",
      name: "Subham Parida",
      time: "2min ago",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
      status: "Open",
      priority: "Low Priority",
    },
    {
      profileImg: "",
      name: "Subham Parida",
      time: "2min ago",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
      status: "Open",
      priority: "Low Priority",
    },
    {
      profileImg: "",
      name: "Subham Parida",
      time: "2min ago",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
      status: "Open",
      priority: "Low Priority",
    },
  ];
  const myCardData = [
    {
      profileImg: "",
      name: "Subham Parida",
      time: "2min ago",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
      status: "Open",
      priority: "Low Priority",
    },
    {
      profileImg: "",
      name: "Praveen Kumar",
      time: "5min ago",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis!",
      status: "In Progress",
      priority: "Low Priority",
    },
  ];

  const getCardBgColor = (cardData) => {
    switch (cardData.status) {
      case "Open":
        return "rgba(21, 112, 239, 0.2)";
      case "In Progress":
        return "rgba(229, 229, 229, 1)";
      case "Closed":
        return "rgba(15, 147, 13, 0.2)";
      default:
        return "black";
    }
  };

  const getCardColor = (cardData) => {
    switch (cardData.status) {
      case "Open":
        return "rgba(21, 112, 239, 1)";
      case "In Progress":
        return "rgba(111, 111, 111, 1)";
      case "Closed":
        return "rgba(15, 147, 13, 1)";
      default:
        return "black";
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const statuses = [
    {
      label: "Low Priority",
      value: "Low Priority",
    },
    {
      label: "High Priority",
      value: "High Priority",
    },
  ];

  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  //   const capture = useCallback(() => {
  //     const imageSrc = webcamRef.current.getScreenshot();
  //     setImg(imageSrc);
  //   }, [webcamRef]);
  // console.log(img)
  const [formData, setFormData] = useState({
    employeeId: "",
    employeeName: "",
    date: "",
    priority: "",
    description: "",
    createdBy: "Praveen Kumar",
    projectTitle: "",
  });

  const [search, setSearch] = useState("");
  const CustomTablePagination = styled(TablePagination)`
    & .${classes.toolbar} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding: 0 0 0 10px;

      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
      }
    }

    & .${classes.selectLabel} {
      margin: 0;
    }

    & .${classes.displayedRows} {
      margin: 0;

      @media (min-width: 768px) {
        margin-left: auto;
      }
    }

    & .${classes.spacer} {
      display: none;
    }

    & .${classes.actions} {
      display: flex;
      gap: 0rem;
    }
  `;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
 
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ticket.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  let doc;
  const convertToPdf = () => {
    try {
      doc = new jsPDF();
      const centerX = (doc.internal.pageSize.width - 80) / 2;
      doc.addImage(header, "PNG", 0, 0 + 0, doc.internal.pageSize.width, 10);
      doc.addImage(
        footer,
        "PNG",
        0,
        doc.internal.pageSize.height - 35,
        doc.internal.pageSize.width,
        35
      );
      const logoUrl = logo;
      doc.addImage(logoUrl, "PNG", centerX, 15, 80, 15);
      const tableMargin = 20;
      const tableStartY = 15 + tableMargin;
      doc.autoTable({
        head: [["SL", "EMPLOYEE NAME", "PRIORITY", "CREATED BY", "DATE", "PROJECT TITLE"]],
        body: ticket.map((row, index) => [
          index+1,
          row.employeeName,
          row.priority,
          row.createdBy,
          row.date,
          row.projectTitle,
        ]),
        styles: { fontSize: 5, fontStyle: "normal" },
        headStyles: {
          fillColor: [206, 206, 206],
          textColor: [20, 25, 40],
          fontSize: 5,
          fontStyle: "bold",
          width: 20,
        },
        startY: tableStartY,
      });
      doc.save("Ticket.pdf");
    } catch (error) {
      console.error("Error creating PDF:", error);
    }
  };
  const createPdf = () => {
    try {
      doc = new jsPDF();
      const centerX = (doc.internal.pageSize.width - 80) / 2;
      doc.addImage(header, "PNG", 0, 0 + 0, doc.internal.pageSize.width, 10);
      doc.addImage(
        footer,
        "PNG",
        0,
        doc.internal.pageSize.height - 35,
        doc.internal.pageSize.width,
        35
      );
      const logoUrl = logo;
      doc.addImage(logoUrl, "PNG", centerX, 15, 80, 15);
      const tableMargin = 20;
      const tableStartY = 15 + tableMargin;
      doc.autoTable({
        head: [["SL", "EMPLOYEE NAME", "PRIORITY", "CREATED BY", "DATE", "PROJECT TITLE"]],
        body: ticket.map((row, index) => [
          index+1,
          row.employeeName,
          row.priority,
          row.createdBy,
          row.date,
          row.projectTitle,
        ]),
        styles: { fontSize: 5, fontStyle: "normal" },
        headStyles: {
          fillColor: [206, 206, 206],
          textColor: [20, 25, 40],
          fontSize: 5,
          fontStyle: "bold",
          width: 20,
        },
        startY: tableStartY,
      });
    } catch (error) {
      console.error("Error creating PDF:", error);
    }
  };

  const convertToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(ticket);

    ws["!cols"] = [
      { width: 20 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "Ticket.xlsx");
  };

  const handlePrint = () => {
    createPdf();
    const pdfContent = doc.output("bloburl");

    if (pdfContent) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Document</title>
            <style>
            @media print {
              body {
                margin: 0;
              }
              #pdfFrame {
                width: 100%;
                height: 100%;
              }
              @page {
                size: landscape;
              }
            }
          </style>
          </head>
          <body>
            <iframe id="pdfFrame" src="${pdfContent}" width="100%" height="100%"></iframe>
            <script>
              document.getElementById('pdfFrame').onload = function() {
                setTimeout(function() {
                  window.print();
                  window.onafterprint = function() {
                    window.close();
                  };
                }, 1000);
              };
            </script>
          </body>
        </html>
      `);
    }
  };
  


  const renderTicketData = () => {
    return (
      <tr>
        <td colSpan="12" className="text-center">
          <h1>No Data Found!</h1>
          <p>
            It Looks like there is no data to display in this table at the
            moment
          </p>
        </td>
      </tr>
    );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveTicket = async () => {
    try {
      await axios.post(
        "https://api.orivehrms.com/tickets/create/tickets",
        formData
      );
    } catch (error) {
      console.error("saveTicket", error);
    }
  };



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
                    <span style={{ color: "black" }}> Tickets</span>
                  </div>
                </div>
              </div>
          <div className="ticket-part">
            <div className="tickets-heading-head">
              <div className="ticket-header">
                <p className="ticket-header-title mt-3">MY TICKETS</p>
              </div>
              <div className="ticket-heading-head-then">
                <div className="ticket-top-head">
                  <div className="side-icons" style={{ padding: "0 20px" }}>
                    <img src={appl} style={{ cursor: "pointer" }} alt="" />
                    <img
                      src={burger}
                      style={{ cursor: "pointer", margin: "0 10px" }}
                      alt=""
                    />
                    <img src={filter} style={{ cursor: "pointer" }} alt="" />
                  </div>
                </div>
                <div
                  id="add-btn"
                  style={{
                    width: "max-content",
                    padding: "10px",
                    fontSize: "15px",
                    cursor: "pointer",
                    marginRight: "20px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                  onClick={handleOpen}
                >
                  Raise Ticket
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {ticketData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="ticket-cards"
                    style={{ marginLeft: "20px" }}
                  >
                    <div
                      id="card"
                      className="card"
                      style={{ width: "340px", height: "185px" }}
                    >
                      <div
                        className="card-top d-flex align-items-center justify-content-between"
                        style={{
                          padding: "15px 15px",
                        }}
                      >
                        <div className="card-top-left d-flex align-items-center">
                          
                          <div
                            className="profile-name"
                            style={{ marginLeft: "20px" }}
                          >
                            {data.employeeName}
                          </div>
                        </div>
                        {/* <div className="card-top-right">{data.time}</div> */}
                      </div>
                      <div className="ticket-desc" style={{ margin: "0 20px" }}>
                        {data.description}
                      </div>
                      <div className="card-bottom d-flex justify-content-between">
                        <div
                          className="ticket-status"
                          style={{
                            backgroundColor: "#502a51",
                            color: "white",
                          }}
                        >
                          {data.projectTitle}
                        </div>
                        <div
                          className="ticket-priority"
                          style={{
                            backgroundColor:
                              data.priority === "Low Priority"
                                ? "rgba(72, 3, 75, 0.2)"
                                : "rgba(247, 108, 36, 0.2)",
                            color:
                              data.priority === "Low Priority"
                                ? "rgba(72, 3, 75, 1)"
                                : "rgba(247, 108, 36, 1)",
                          }}
                        >
                          {data.priority}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="form-header-popup">Raise Ticket</DialogTitle>
                <DialogContent>
                  <form>
                    <div className="data-input-fields">
                      <TextField
                        margin="dense"
                        label="Employee Id*"
                        type="text"
                        fullWidth
                        name="employeeId"
                        id="employeeId"
                        required
                        value={formData.employeeId}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="data-input-fields">
                      <TextField
                        margin="dense"
                        label="Employee Name*"
                        type="text"
                        fullWidth
                        name="employeeName"
                        id="employeeName"
                        value={formData.employeeName}
                        required
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>

                    <div className="data-input-fields">
                      <TextField
                        margin="dense"
                        label="Date"
                        type="date"
                        fullWidth
                        name="date"
                        id="date"
                        required
                        value={formData.date}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="data-input-fields">
                      <TextField
                        margin="dense"
                        label="Project"
                        type="text"
                        fullWidth
                        name="projectTitle"
                        id="projectTitle"
                        required
                        value={formData.projectTitle}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="data-input-fields">
                      <FormControl fullWidth style={{ marginTop: "5px" }}>
                        <InputLabel id="demo-priority-select-label">
                          Priority Status
                        </InputLabel>
                        <Select
                          labelId="demo-priority-select-label"
                          id="selectedPriority"
                          value={formData.priority}
                          name="priority"
                          label="Priority"
                          onChange={(e) => handleInputChange(e)}
                        >
                          {statuses &&
                            statuses.map((item, index) => {
                              return (
                                <MenuItem key={index} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
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
                      />
                    </div>

                    <div className="data-buttons">
                      <Button
                        id="input-btn-submit"
                        variant="outlined"
                        type="submit"
                        onClick={saveTicket}
                      >
                        Submit
                      </Button>
                      <Button
                        id="input-btn-cancel"
                        variant="outlined"
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* <div
      className="d-flex"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className=" table-ka-top-btns">
       
        {
          <div className="search-print">
            <input
              type="text"
              className="search-beside-btn"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "20rem",
                borderRadius: "5px",
                height: "40px",
                padding: "10px",
                border: "1px solid rgba(247, 108, 36, 1)",
                marginLeft: "30px",
              }}
            />
            <div className="d-flex mt-4 four-btn" style={{ gap: "10px" }} y>
              <button
                className=""
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  width: "100px",
                  justifyContent: "center",
                }}
                onClick={handlePrint}
              >
                PRINT
              </button>
              <button
                onClick={convertToPdf}
                className=""
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  width: "100px",
                  justifyContent: "center",
                }}
              >
                PDF
              </button>
              <button
                onClick={convertToExcel}
                className=""
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  width: "100px",
                  justifyContent: "center",
                }}
              >
                EXCEL
              </button>
              <CSVLink
                data={ticket}
                filename="ticket.csv"
                style={{ textDecoration: "none" }}
              >
                <button
                  className=""
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    width: "100px",
                    justifyContent: "center",
                  }}
                >
                  CSV
                </button>
              </CSVLink>
            </div>
          </div>
        }
      </div>

      <div className="table-start-container">
        <table id="table" className="table table-bordered table-hover shadow">
          <thead>
            <tr className="text-center">
              <th>SL</th>
              <th>Employee Name</th>
              <th>Priority</th>
              <th>Created by</th>
              <th>Date</th>
              <th>Project Title</th>
            
            </tr>
          </thead>

          <tbody className="text-center">
            {ticket?.length === 0
              ? renderTicketData()
              : (rowsPerPage > 0
                  ? ticket?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : ticket
                )
                  .filter((elem) => {
                    if (search.length === 0) return elem;
                    return (
                      elem.employeeName
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      elem.priority
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      elem.createdBy.toLowerCase().includes(search.toLowerCase()) ||
                      elem.date.toString().includes(search) ||
                      elem.projectTitle
                          .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      elem.status?.toLowerCase().includes(search.toLowerCase())
                    );
                  })
                  .map((ticket, index) => (
                    <tr key={ticket.ticketsId}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{ticket.employeeName}</td>
                      <td>{ticket.priority}</td>
                      <td>{ticket.createdBy}</td>
                      <td>{ticket.date}</td>
                      <td>{ticket.projectTitle}</td>
                    
                    </tr>
                  ))}
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                className="pagingg"
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={12}
                count={ticket.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    "aria-label": "rows per page",
                  },
                  actions: {
                    // showFirstButton: true,
                    // showLastButton: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        </table>
      </div>
    
    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
