import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { CSVLink } from "react-csv";
import logo from "../../../../asset/images/logo.png";
import header from "../../../../asset/images/Header.png";
import footer from "../../../../asset/images/Footer.png";
import DataNotFound from "../../../../asset/images/no data 1.png";
import { styled } from "@mui/system";
import { BiSolidHide } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import Button from "@mui/material/Button";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import axios from "axios";

const CertificateTable = ({
  setRecDelete,
  getTable
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - getTable.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
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
    try{
      await axios.delete(`https://api.orivehrms.com/internshipcertificate/delete/${id}`)
  } catch(error) {
      console.error("Error deleting data",error)
  }
  };

  const deleteCertificate = (id) => {
    setDeleteItemId(id);
    setShowDeleteConfirmation(true);
  };
  const confirmDelete = async () => {
    try {
      await handleDelete(deleteItemId);
      setShowDeleteConfirmation(false);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  
  const cancelDelete = () => {
    setDeleteItemId(null);
    setShowDeleteConfirmation(false);
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
    <div
      className="d-flex"
      style={{ display: "flex", flexDirection: "column" }}
    >
 
        

      <div className="table-start-container">
        <table id="table" className="table table-bordered table-hover shadow">
          <thead>
            <tr className="text-center">
              <th>Sl No</th>
              <th>Referrence No</th>
              <th>Date</th>
             <th>Registration No</th>
              <th>Intern Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Product Name</th>
              <th colSpan={2}>Action</th>
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
                        elem.referrenceNo
                          .toStriing()
                          .includes(search) ||
                        elem.date
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.registrationNo
                          .toString()
                          .includes(search) ||
                        elem.employeeName
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase())||
                          elem.internName
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.startDate
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.endDate
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase()) ||
                        elem.productName
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase())
                      );
                  })
                  .map((item, index) => (
                    <tr key={index}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{item.referrenceNo}</td>
                      <td>{item.date}</td>
                      <td>{item.registrationNo}</td>
                      <td>{item.internsName}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>{item.productName}</td>

                    
                      <td className="mx-2">
                        <FaTrashAlt
                          className="action-delete"
                          onClick={() => deleteCertificate(item.internshipCertificateId)}
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
        {showDeleteConfirmation && (
          <div className="confirmation">
            <div className="confirmation-popup d-flex align-items-center justify-content-center">
              <div>
                <p className="fs-4 fw-bold">
                  Are you sure you want to delete this item?
                </p>
                <div className="d-flex" style={{ gap: "10px" }}>
                  <Button
                    id="input-btn-submit"
                    style={{ width: "100%" }}
                    onClick={confirmDelete}
                    variant="contained"
                  >
                    Yes
                  </Button>
                  <Button
                    id="input-btn-cancel"
                    style={{ width: "100%" }}
                    onClick={cancelDelete}
                    variant="outlined"
                  >
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

export default CertificateTable;