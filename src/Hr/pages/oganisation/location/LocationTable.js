import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt,FaEye } from "react-icons/fa";
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

const LocationTable = ({ 
  location, 
  setRecDelete, 
  setFormVisible,
  setToggle,
  toggle,
 }) => {
  const [search, setSearch] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - location.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteLocation = (id) => {
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
            "LOCATION TYPE",
            "EMAIL",
            "LOCATION HEAD",
            "ADDRESS",
            "FAX NUMBER",
            "PHONE NUMBER",
          ],
        ],
        body: location.map((row, index) => [
          index+1,
          row.companyName,
          row.locationName,
          row.email,
          row.locationHead,
          row.address,
          row.faxNumber,
          row.phone,
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
      doc.save("location.pdf");
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
            "LOCATION NAME",
            "EMAIL",
            "LOCATION HEAD",
            "ADDRESS",
            "FAX NUMBER",
            "PHONE",
          ],
        ],
        body: location.map((row, index) => [
          index+1,
          row.companyName,
          row.locationName,
          row.email,
          row.locationHead,
          row.address,
          row.faxNumber,
          row.phone,
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
    const ws = XLSX.utils.json_to_sheet(location);

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
    XLSX.writeFile(wb, "location.xlsx");
  };

  const handleDelete = (id) => {
    setRecDelete(id);
  };
  console.log("data", location);

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

  const renderLocationData = () => {
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
        <Button
          variant="outlined"
          onClick={() => {
            setToggle(!toggle);
            handleButtonClick();
          }}
          id="add-btn"
          style={{width:'max-content', marginTop:'20px'}}
        >
          {toggle ? (
            <div className="hide">
              <BiSolidHide />
              HIDE
            </div>
          ) : (
            <div className="add">
              <MdAdd />
              ADD LOCATION
            </div>
          )}
        </Button>

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
          marginRight: "30px",
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
          data={location}
          filename="location.csv"
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
              <th>Company Name</th>
              <th>Location Name</th>
              <th>Email</th>
              <th>Location Head</th>
              <th>Address</th>
              <th>Fax Number</th>
              <th>Phone Number</th>
              <th>Status</th>

              <th colSpan="3">Action</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {location.length === 0
              ? renderLocationData()
              : (rowsPerPage > 0
                  ? location.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : location
                )
                  .filter((elem) => {
                    if (search.length === 0) return elem;
                    else
                      return (
                        elem.companyName
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.locationName
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.email
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.locationHead
                          .toString()
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.address
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.faxNumber
                        .toString()
                          .includes(search) ||
                        elem.phone.toString().includes(search) ||
                        elem.status?.toLowerCase().includes(search.toLowerCase())
                      );
                  })
                  .map((item, index) => (
                    <tr key={location.id}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{item.companyName}</td>
                      <td>{item.locationName}</td>
                      <td>{item.email}</td>
                      <td>{item.locationHead}</td>
                      <td>{item.address}</td>
                      <td>{item.faxNumber}</td>
                      <td>{item.phone}</td>
                      <td>
                      <span className={item.status === "Registered" ? "complete" : "incomplete"}>

                      {item.status?item.status:<p className="nil">--nil--</p>}
                    </span>
                      </td>

                      <td className="mx-2">
                        <Link
                          to={`/organisation/location-profile/${item.locationId}`}
                        >
                          <FaEye className="action-eye" />
                        </Link>
                      </td>

                      <td className="mx-2">
                        <Link
                          to={`/organisation/edit-location/${item.locationId}`}
                        >
                          <FaEdit className="action-edit" />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <FaTrashAlt
                          className="action-delete"
                          onClick={() => deleteLocation(item.locationId)}
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
                count={location.length}
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
    </div>
  );
};

export default LocationTable;