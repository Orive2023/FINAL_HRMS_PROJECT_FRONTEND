import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { CSVLink } from "react-csv";
import { styled } from "@mui/system";
import logo from "../../../asset/images/logo.png";
import header from "../../../asset/images/Header.png";
import footer from "../../../asset/images/Footer.png";
import { BiSolidHide } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import DataNotFound from "../../../asset/images/no data 1.png";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import Button from "@mui/material/Button";

const LandingTable = ({ 
  landing, 
  setRecDelete, 
  setFormVisible,
  setToggle,
  toggle,
 }) => {
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

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - landing.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const deleteLandingPage = (id) => {
    setDeleteItemId(id);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    setRecDelete(deleteItemId);
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setDeleteItemId(null);
    setShowDeleteConfirmation(false);
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
        head: [
          [
            "SL NO",
            "COMPANY NAME",
            "landing TYPE",
            "EMAIL",
            "landing HEAD",
            "ADDRESS",
            "FAX NUMBER",
            "PHONE NUMBER",
          ],
        ],
        body: landing.map((row, index) => [
          index+1,
          row.selectOne,
          row.name,
          row.designation,
          row.organisationName,
          row.email,
          row.phoneNumber,
          row.selectService,
          row.message,
          row.city,

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
      doc.save("landing.pdf");
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
        head: [
          [
            "SL NO",
            "COMPANY NAME",
            "landing NAME",
            "EMAIL",
            "landing HEAD",
            "ADDRESS",
            "FAX NUMBER",
            "PHONE",
          ],
        ],
        body: landing.map((row, index) => [
          index+1,
          row.selectOne,
          row.name,
          row.designation,
          row.organisationName,
          row.email,
          row.phoneNumber,
          row.selectService,
          row.message,
          row.city,
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
    const ws = XLSX.utils.json_to_sheet(landing);

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
    XLSX.writeFile(wb, "landing.xlsx");
  };

  const handleDelete = (id) => {
    setRecDelete(id);
  };
  console.log("data", landing);

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
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

  const renderlandingData = () => {
    return (
      <tr>
        <td colSpan="12" className="text-center">
          <img style={{ margin: "50px 0 50px 0" }} src={DataNotFound}></img>
          <h1>No Data Found!</h1>
          <p>
            It Looks like there is no data to display in this table at the
            moment
          </p>
        </td>
      </tr>
    );
  };

  return (
    <div
    className="d-flex"
    style={{ display: "flex", flexDirection: "column" }}>
      <div  className=" table-ka-top-btns"
      >
       

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
          marginTop:"-14px",
          marginLeft: "800px",
        }}
/>
            <div className="d-flex four-btn" style={{ gap: "10px",marginLeft:"1.7rem"  }} y>
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
          data={landing}
          filename="landing.csv"
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
              <th>Sl No</th>
              <th>selectOne</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Organisation Name</th>
              <th>email</th>
              <th>Phone Number</th>
              <th>Select Service</th>
              <th>Message</th>
              <th>city</th>

              <th colSpan="3">Action</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {landing.length === 0
              ? renderlandingData()
              : (rowsPerPage > 0
                  ? landing.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : landing
                )
                  .filter((elem) => {
                    if (search.length === 0) return elem;
                    else
                      return (
                        elem.selectOne
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.name
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.designation
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.organisationName
                          .toString()
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.email
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.phoneNumber
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.selectService.toString()
                        .includes(search) 
                        .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                          elem.message.toString()
                          .includes(search) 
                          .toLowerCase()
                            .includes(search.toLocaleLowerCase()) ||
                            elem.city.toString()
                          .includes(search) 
                          .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                          
                      
                      );
                  })
                  .map((item, index) => (
                    <tr key={landing.id}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{item.selectOne}</td>
                      <td>{item.name}</td>
                      <td>{item.designation}</td>
                      <td>{item.organisationName}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.selectService}</td>
                      <td>{item.message}</td>
                      <td>{item.city}</td>
                    
                      <td className="mx-2">
                        <FaTrashAlt
                          className="action-delete"
                          onClick={() => deleteLandingPage(item.landingPagePopUpId)}
                        />
                      </td>
                    </tr>
                  ))}
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                className="pagingg"
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={12}
                count={landing.length}
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
      {showDeleteConfirmation && (
        <div className="confirmation">
          <div className="confirmation-popup d-flex align-items-center justify-content-center">
            <div>
              <p className="fs-4 fw-bold">Are you sure you want to delete this item?</p>
              <div className="d-flex" style={{ gap: "10px" }}>
                <Button id="input-btn-submit" style={{width:'100%'}} onClick={confirmDelete} variant="contained">
                  Yes
                </Button>
                <Button id="input-btn-cancel" style={{width:'100%'}} onClick={cancelDelete} variant="outlined">
                  No
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingTable;
