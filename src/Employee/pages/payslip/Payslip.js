import React, { useState, useEffect, useRef } from "react";
import "./Payslip.css";
import logo from "../../../Hr/asset/images/logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import axios from "axios";

const Payslip = () => {
  const [payslip, setPayslip] = useState([]);
  const [employee, setEmployee] = useState([]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { id } = useParams();

  useEffect(() => {
    getPayslipDetails();
    getEmployeeDetails();
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const result = await axios.get(
        `https://api.orivehrms.com/employee/get/employee`
      );
      setEmployee(result.data);
    } catch (error) {
      console.error("Fetch employee failed", error);
    }
  };

  const getPayslipDetails = async () => {
    try {
      const result = await axios.get(
        `https://api.orivehrms.com/payslipgenerate/get/${id}`
      );
      setPayslip(result.data);
    } catch (error) {
      console.error("Get payslip failed", error);
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [empData, setEmpData] = useState({
    dateOfJoining: "",
    bankName: "",
    accountNo: "",
  });
  const getEmployeeDetails = () => {
    let doj;
    let bn;
    let accNo;
    employee.map((elem) => {
      if (payslip.employeeName === elem.employeeName) {
        doj = elem.joiningDate;
        bn = elem.bankName;
        accNo = elem.accountNumber;
      }
    });
    setEmpData({
      ...empData,
      dateOfJoining: doj,
      bankName: bn,
      accountNo: accNo,
    });
  };
  console.log("loop k bahar k bahar", empData);

  return (
    <div className="payslip-print">
      <button
        onClick={handlePrint}
        style={{
          width: "max-content",
          position: "absolute",
          right: "10px",
          top: "110px",
        }}
      >
        DOWNLOAD
      </button>
      <div className="payslip-page" ref={componentRef}>
        <div className="header-img"></div>
        <div className="my-4" style={{ textAlign: "center" }}>
          <img src={logo} alt="" height={80} />
        </div>
        <div className="text-center fw-bold fs-4" style={{ color: "black" }}>
          <span style={{textTransform: 'uppercase'}}>
          PAYSLIP FOR THE MONTH OF{" "}
          {(monthNames[
            parseInt(String(payslip.createdDate).split("-")[1]) - 1
          ])}
          </span> {" "}
          {[String(payslip.createdDate).split("-")[0]]}
        </div>
        <br />
        <div
          className="text-details d-flex justify-content-center"
          style={{ gap: "200px" }}
        >
          <div
            className="left-part-text fs-5"
            style={{ fontWeight: "600", color: "black" }}
          >
            <div>Date of Joining: {empData.dateOfJoining}</div>
            <div>LOP: 0</div>
            <div>Worked Days: {payslip.workingDays}</div>
            <div>PAN: 876545678</div>
            <div>Bank Name: {empData.bankName}</div>
            <div>A/C No.: {empData.accountNo}</div>
          </div>
          <div
            className="right-part-text fs-5"
            style={{ fontWeight: "600", color: "black" }}
          >
            <div>Employee ID: {payslip.username}</div>
            <div>Employee Name: {payslip.employeeName}</div>
            <div>Designation: {payslip.designation}</div>
            <div>Department: {payslip.department}</div>
            <div>UAN Number: 7654567876</div>
            <div>Payment Mode: Bank Transfer</div>
          </div>
        </div>
        <div
          className="table-start-container"
          style={{ width: "700px", margin: "auto" }}
        >
          <table id="table" className="table table-bordered table-hover shadow">
            <thead>
              <tr className="text-center">
                <th>Earnings</th>
                <th>Amount</th>
                <th>Deductions</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Pay</td>
                <td>{payslip.basicSalary}</td>
                <td>Provident Fund</td>
                <td>{payslip.employeeDeductionProvidentFund}</td>
              </tr>
              <tr>
                <td>Incentive Pay</td>
                <td>1000</td>
                <td>Professional Tax</td>
                <td>{payslip.employeeDeductionProfessionalTax}</td>
              </tr>
              <tr>
                <td>House Rent Allowance</td>
                <td>{payslip.houserentAllowance}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Medical Allowance</td>
                <td>{payslip.medicalAllowance}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Total Earnings</td>
                <td>11600</td>
                <td>Total Deductions</td>
                <td>2100</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Net Pay</td>
                <td>{payslip.netSalary}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="mt-3 fw-bold fs-5 text-center"
          style={{ color: "black" }}
        >
          This is system generated payslip
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="footer-payslip">
          <div className="footer-text-part-payslip">
            <div className="footer-textx">
              <div
                className="py-5 top-footer-textx fs-5 fw-bold d-flex justify-content-evenly align-items-center"
                style={{ color: "white" }}
              >
                <div>
                  <MdEmail />
                  orivesolutions@gmail.com
                </div>
                <div>
                  <FaPhone />
                  +91 9777798142
                </div>
                <div>
                  <AiOutlineGlobal />
                  www.orivesolutions.com
                </div>
              </div>
            </div>
            <div
              className="footer-bottom-textx fs-5 text-center fw-bold"
              style={{ color: "white" }}
            >
              DCB-014, DLF Cyber City Rd, Chandaka Industrial Estate, Patia,
              Bhubaneswar, Odisha 751024, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payslip;
