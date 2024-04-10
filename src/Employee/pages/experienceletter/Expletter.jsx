import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SideBar from "../../components/SideBar";
import CompanyLogoFile from "../../components/CompanyLogoFile";
import Header from "../../components/Header";
import jsPDF from "jspdf";
import { jwtDecode } from "jwt-decode";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { CSVLink } from "react-csv";
import logo from "../../../Hr/asset/images/logo.png";
import header from "../../../Hr/asset/images/Header.png";
import footer from "../../../Hr/asset/images/Footer.png";
import DataNotFound from "../../../Hr/asset/images/no data 1.png";
import { styled } from "@mui/system";
import { BiSolidHide } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import Button from "@mui/material/Button";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import axios from "axios";

const ExpLetterTable = ({ setRecDelete }) => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = decoded.username;
  const [getTable, setGetTable] = useState([]);
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

  const getData = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/experienceletter/findexperienceletter/${username}`
    );
    setGetTable(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - getTable.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const deleteExpLetter = (id) => {
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

  // const createPdf = () => {
  //   try {
  //     doc = new jsPDF();
  //     const centerX = (doc.internal.pageSize.width - 80) / 2;
  //     doc.addImage(header, "PNG", 0, 0 + 0, doc.internal.pageSize.width, 10);
  //     doc.addImage(
  //       footer,
  //       "PNG",
  //       0,
  //       doc.internal.pageSize.height - 35,
  //       doc.internal.pageSize.width,
  //       35
  //     );
  //     const logoUrl = logo;
  //     doc.addImage(logoUrl, "PNG", centerX, 15, 80, 15);
  //     const tableMargin = 20;
  //     const tableStartY = 15 + tableMargin;
  //     doc.autoTable({
  //       head: [
  //         [
  //           "SL",
  //           "EMPLOYEE NAME",
  //           "AWARDS NAME",
  //           "AWARDS BY",
  //           "GIFT",
  //           "AWARDS DATE",
  //         ],
  //       ],
  //       body: getTable.map((row) => [
  //         row.awardId,
  //         row.employeeName,
  //         row.awardDescription,
  //         row.awardBy,
  //         row.date,
  //       ]),
  //       styles: { fontSize: 5, fontStyle: "normal" },
  //       headStyles: {
  //         fillColor: [206, 206, 206],
  //         textColor: [20, 25, 40],
  //         fontSize: 5,
  //         fontStyle: "bold",
  //         width: 20,
  //       },
  //       startY: tableStartY,
  //     });
  //   } catch (error) {
  //     console.error("Error creating PDF:", error);
  //   }
  // };

  // const convertToExcel = () => {
  //   const ws = XLSX.utils.json_to_sheet(getTable);

  //   ws["!cols"] = [
  //     { width: 20 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //     { width: 25 },
  //   ];

  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  //   XLSX.writeFile(wb, "award.xlsx");
  // };

  // const handlePrint = () => {
  //   createPdf();
  //   const pdfContent = doc.output("bloburl");

  //   if (pdfContent) {
  //     const printWindow = window.open("", "_blank");
  //     printWindow.document.write(`
  //       <html>
  //         <head>
  //           <title>Print Document</title>
  //           <style>
  //           @media print {
  //             body {
  //               margin: 0;
  //             }
  //             #pdfFrame {
  //               width: 100%;
  //               height: 100%;
  //             }
  //             @page {
  //               size: landscape;
  //             }
  //           }
  //         </style>
  //         </head>
  //         <body>
  //           <iframe id="pdfFrame" src="${pdfContent}" width="100%" height="100%"></iframe>
  //           <script>
  //             document.getElementById('pdfFrame').onload = function() {
  //               setTimeout(function() {
  //                 window.print();
  //                 window.onafterprint = function() {
  //                   window.close();
  //                 };
  //               }, 1000);
  //             };
  //           </script>
  //         </body>
  //       </html>
  //     `);
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api.orivehrms.com/experienceletter/delete/${id}`);
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  const renderCertificateTable = () => {
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
    <div>
      <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part">
        <div
            className="mx-3"
            style={{ marginTop: "70px", marginBottom: "-50px", width: "150px" }}
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
                <span style={{ color: "black" }}> Experience Letter</span>
              </div>
            </div>
          </div>
          <div
            className="d-flex"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "70px",
            }}
          >
            <div className="table-start-container">
              <table
                id="table"
                className="table table-bordered table-hover shadow"
              >
                <thead>
                  <tr className="text-center">
                    <th>Sl No</th>
                    <th>Employee Name</th>
                    <th>Reference No.</th>
                    <th>Registration No</th>
                    <th>Releasing Date</th>
                    <th>Employee Id</th>
                    <th>Employee Designation</th>
                    <th>Joining Date</th>
                    <th>Leave Date</th>
                  </tr>
                </thead>

                <tbody className="text-center">
                  {getTable?.length === 0
                    ? renderCertificateTable()
                    : (rowsPerPage > 0
                        ? getTable?.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                        : getTable
                      )
                        .filter((elem) => {
                          if (search.length === 0) return elem;
                          else
                            return (
                              elem.employeeName
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase()) ||
                              elem.referrenceNumber
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase()) ||
                              elem.date
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase()) ||
                              elem.formReleaseDate
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase()) ||
                              elem.employeeId
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase()) ||
                              elem.designation
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase()) ||
                              elem.joiningDate
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase()) ||
                              elem.leavesDate
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase())
                            );
                        })
                        .map((item, index) => (
                          <tr key={index}>
                            <th scope="row" key={index}>
                              {index + 1}
                            </th>
                            <td>{item.employeeName}</td>
                            <td>{item.referrenceNumber}</td>
                            <td>{item.date}</td>
                            <td>{item.formReleaseDate}</td>
                            <td>{item.employeeId}</td>
                            <td>{item.designation}</td>
                            <td>{item.joiningDate}</td>
                            <td>{item.leavesDate}</td>
                          </tr>
                        ))}
                </tbody>
                <tfoot>
                  <tr>
                    <CustomTablePagination
                      className="pagingg"
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      colSpan={12}
                      count={getTable.length}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpLetterTable;
