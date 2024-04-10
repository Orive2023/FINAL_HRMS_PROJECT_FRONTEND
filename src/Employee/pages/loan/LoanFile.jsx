import React, { useState, useEffect } from 'react'
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import CompanyLogoFile from "../../components/CompanyLogoFile";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { CSVLink } from "react-csv";
import logo from "../../asset/images/logo.png";
import header from "../../asset/images/Header.png";
import footer from "../../asset/images/Footer.png";
import axios from "axios";
import { BiSolidHide } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import Button from "@mui/material/Button";
import { jwtDecode } from "jwt-decode";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import { Link } from 'react-router-dom';


const LoanFile = ({ setFormVisible }) => {
  const [loan, setLoan] = useState([]);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");


const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = decoded.username;
  // const username = localStorage.getItem("UserName")
  const [employee, setEmployee] = useState([]);



  const url = "api.orivehrms.com";
  const ip = "13.126.190.50:8082";
  const loadLoan = async () => {
    try {
      const result = await axios.get(`https://api.orivehrms.com/grantloan/get/grantloan`, {
        validateStatus: () => {
          return true;
        },
      });
      setLoan(result.data);
    } catch (error) {
      console.error("Error load loan", error);
    }
  };

  useEffect(() => {
    loadLoan();
  }, []);

  console.log(loan);




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
        head: [
          [
            "SL",
            "EMPLOYEE NAME",
            "PERMITTED BY",
            "LOAN DETAILS",
            "AMOUNT",
            "INTEREST",
            "INSTALLMENT PERIOD",
            "INSTALLMENT CLEARED",
            "REPAYMENT TOTAL",
            "TOTAL PAYMENT CLEARED"

          ],
        ],
        body: loan.map((row, index) => [
          index + 1,
          row.employeeName,
          row.permittedBy,
          row.loanDetails,
          row.amount,
          row.installment,
          row.installmentPeriod,
          row.installmentCleared,
          row.repaymentTotal,
          row.totalPaymentCleared,
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
      doc.save("loan.pdf");
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
            "SL",
            "EMPLOYEE NAME",
            "PERMITTED BY",
            "LOAN DETAILS",
            "AMOUNT",
            "INTEREST",
            "INSTALLMENT PERIOD",
            "INSTALLMENT CLEARED",
            "REPAYMENT TOTAL",
            "TOTAL PAYMENT CLEARED"

          ],
        ],
        body: loan.map((row, index) => [
          index + 1,
          row.employeeName,
          row.permittedBy,
          row.loanDetails,
          row.amount,
          row.installment,
          row.installmentPeriod,
          row.installmentCleared,
          row.repaymentTotal,
          row.totalPaymentCleared,
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
    const ws = XLSX.utils.json_to_sheet(loan);

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
    XLSX.writeFile(wb, "loan.xlsx");
  };

  const handlePrint = () => {
    createPdf();
    const pdfContent = doc.output('bloburl');

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

  const renderGrantLoanData = () => {
    return (
      <tr>
        <td colSpan="12" className="text-center">
          <h1>No Data Found!</h1>
          <p>It Looks like there is no data to display in this table at the moment</p>
        </td>
      </tr>
    );
  };


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
    className="d-flex"
    style={{ display: "flex", flexDirection: "column" }}
  >
    <div className=" table-ka-top-btns">
    <div
            className="mx-3"
            style={{ marginTop: "70px", marginBottom: "-10px", width: "150px" }}
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
                <span style={{ color: "black" }}> Loan</span>
              </div>
            </div>
          </div>
  {
    <div className="search-print" style={{ marginTop: "70px", marginBottom: "-10px" }}>
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
          data={loan}
          filename="loan.csv"
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
      
        <table id='table' className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Sl.</th>
            <th>Employee Name</th>
            <th>Permitted By</th>
            <th>Loan Details</th>
            <th>Amount</th>
            <th>Interest</th>
            <th>Installment Period</th>
            <th>Installment Cleared</th>
            <th>Repayment Total</th>
            <th>Total Payment Cleared</th>
          
          </tr>
        </thead>

        <tbody className="text-center">
          {loan.length === 0 ? renderGrantLoanData() : (rowsPerPage > 0
            ? loan.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : loan
          )
          .filter((elem)=>{
            if(search.length===0)
              return elem;
            else  
              return (elem.employeeName.toLowerCase().includes(search.toLocaleLowerCase()) ||
              elem.permittedBy.toLowerCase().includes(search.toLocaleLowerCase()) ||
              elem.loanDetails.toLowerCase().includes(search.toLocaleLowerCase()) ||
              elem.amount.toString().toLowerCase().includes(search.toLocaleLowerCase()) ||
              elem.installment.toString().toLowerCase().includes(search.toLocaleLowerCase()) ||
              elem.installmentPeriod.toString().toLowerCase().includes(search.toLocaleLowerCase()) ||
              elem.installmentCleared.toString().toString().toLowerCase().includes(search.toLocaleLowerCase()) ||
              elem.repaymentTotal.toString().toLowerCase().includes(search.toLocaleLowerCase()) ||
              elem.totalPaymentCleared.toString().toLowerCase().includes(search.toLocaleLowerCase())  
              )
          }).map((loan, index) => (
              <tr key={loan.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{loan.employeeName}</td>
                <td>{loan.permittedBy}</td>
                <td>{loan.loanDetails}</td>
                <td>{loan.amount}</td>
                <td>{loan.installment}</td>
                <td>{loan.installmentPeriod}</td>
                <td>{loan.installmentCleared}</td>
                <td>{loan.repaymentTotal}</td>
                <td>{loan.totalPaymentCleared}</td>
               
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
            className="pagingg"
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={13}
              count={loan.length}
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
  )
}

export default LoanFile