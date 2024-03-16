import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MdAdd } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StateSalaryTemplate from "./StateSalaryTemplate";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useToastContainer } from "react-toastify";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const SalaryTemplateForm = ({
  formData,
  setFormData,
  setFormVisible,
  setToggle,
  period,
  setPeriod,
}) => {
  const navigate = useNavigate();
  const [showIT, setShowIT] = useState(false);
  const { setSalary, employee, setEmployee } = StateSalaryTemplate();
  const [openDialog, setOpenDialog] = useState(false);
  const DialogClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    loadSalaryTemplate();
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    const employee = await api.fetchEmployee();
    setEmployee(employee);
  };

  const loadSalaryTemplate = async () => {
    const result = await api.loadSalaryTemplate();
    setSalary(result);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "employeeName" && value === "addNewEmployee") {
      // Redirect to the company form in the company module
      navigate("/hr/employee/employee");
      return;
    }

    let eID;
    let des;
    if (e.target.name === "employeeName") {
      employee.map((elem) => {
        if (elem.employeeName === e.target.value) {
        
          setFormData({
            ...formData,
            employeeName: elem.employeeName,
            username: elem.username,
            designation: elem.designationName,
          });
        }
      });
     
    } else{
      setFormData({
        ...formData,
        [name]: value,
        // username: eID,
        // designation: des,
      });

    }
  };

  useEffect(() => {
    setFormData({
      ...formData,
      houserentAllowance: formData.basicSalary * 0.4,
      educationalAllowance:
        formData.noOfChildren * formData.companyPreferredEducationalAllowance,
      overtimeSalary: (formData.basicSalary / 26 / 8) * formData.overtime,
      grossSalary:
        parseInt(formData.basicSalary) +
        parseInt(formData.houserentAllowance) +
        parseInt(formData.conveyanceAllowance) +
        parseInt(formData.medicalAllowance) +
        parseInt(formData.educationalAllowance) +
        parseInt(formData.travellingAllowance) +
        parseInt(formData.dearnessAllowance) +
        parseInt(formData.overtimeSalary) +
        parseInt(formData.specialAllowance) +
        parseInt(formData.otherAllowance),
      employeeDeductionProvidentFund: formData.basicSalary * 0.12,
      employeeDeductionEsic:
        formData.grossSalary < 21000 ? formData.grossSalary * 0.0075 : 0,
      netSalary:
        parseInt(formData.grossSalary) -
        (parseInt(formData.employeeDeductionProvidentFund) +
          parseInt(formData.employeeDeductionEsic) +
          parseInt(formData.employeeDeductionProfessionalTax) +
          parseInt(formData.tds)),
      employeerContributionProvidentFund: formData.basicSalary * 0.13,
      employeerContributionEsic: formData.grossSalary * 0.0325,
      employeeDeductionProfessionalTax: formData.state == "Odisha" ? 200 : 0,
      gratuity: ((formData.basicSalary / 26) * 15 * formData.gratuityYear) / 12,
      ctc:
        parseInt(formData.grossSalary) +
        parseInt(formData.employeerContributionProvidentFund) +
        parseInt(formData.employeerContributionEsic) +
        parseInt(formData.gratuity) +
        parseInt(formData.bonus) +
        parseInt(formData.employeerContributionVariablePay),
      // annualIncome: formData.ctc * 12,
      // newAnnualIncome: formData.ctc * 12,
      section80c:
        parseInt(formData.employeeProvidentFund) +
          parseInt(formData.publicProvidentFund) +
          parseInt(formData.equityLinkedSavings) +
          parseInt(formData.lifeInsurancePremiums) +
          parseInt(formData.others) >=
        150000
          ? 150000
          : parseInt(formData.employeeProvidentFund) +
            parseInt(formData.publicProvidentFund) +
            parseInt(formData.equityLinkedSavings) +
            parseInt(formData.lifeInsurancePremiums) +
            parseInt(formData.others),
      section80ccd1b:
        parseInt(formData.nationalPensionScheme) +
          parseInt(formData.atalPensionScheme) >=
        50000
          ? 50000
          : parseInt(formData.nationalPensionScheme) +
            parseInt(formData.atalPensionScheme),
      section80tta:
        formData.savingAccountInterest >= 10000
          ? 10000
          : formData.savingAccountInterest,
      section80d:
        parseInt(formData.selfMedicalInsurance) +
          parseInt(formData.parentsMedicalInsurance) >=
        55000
          ? 55000
          : parseInt(formData.selfMedicalInsurance) +
            parseInt(formData.parentsMedicalInsurance),
      section80eeOrSection24:
        formData.homeLoanInterest >= 250000
          ? 250000
          : formData.homeLoanInterest,
      section80gg:
        formData.employeeType === "Employee"
          ? formData.houseRent
          : formData.houseRent >= 60000
          ? 60000
          : formData.houseRent,
      section80e: formData.educationalLoanInterest,
      section80g: formData.charity,
      totalInvestments:
        parseInt(formData.section80c) +
        parseInt(formData.section80ccd1b) +
        parseInt(formData.section80tta) +
        parseInt(formData.section80d) +
        parseInt(formData.section80eeOrSection24) +
        parseInt(formData.section80gg) +
        parseInt(formData.section80e) +
        parseInt(formData.section80g),
      taxableIncome:
        parseInt(formData.annualIncome) -
        (parseInt(formData.standardDeduction) +
          parseInt(formData.totalInvestments)),
      newTaxableIncome:
        parseInt(formData.newAnnualIncome) -
        (parseInt(formData.newStandardDeduction) +
          parseInt(formData.newTotalInvestments)),
      oldSlab5Percents:
        formData.taxableIncome > 500000
          ? 12500
          : formData.taxableIncome > 250000 && formData.taxableIncome <= 500000
          ? (parseInt(formData.taxableIncome) - 250000) * 0.05
          : 0,
      oldSlab10Percents: 0,
      oldSlab15Percents: 0,
      oldSlab20Percents:
        formData.taxableIncome > 1000000
          ? 100000
          : formData.taxableIncome > 500000 && formData.taxableIncome <= 1000000
          ? (parseInt(formData.taxableIncome) - 500000) * 0.2
          : 0,
      oldSlab30Percents:
        formData.taxableIncome > 1000000
          ? (parseInt(formData.taxableIncome) - 1000000) * 0.3
          : 0,

      newSlab5Percents:
        formData.newTaxableIncome > 600000
          ? 15000
          : formData.newTaxableIncome > 300000 &&
            formData.newTaxableIncome <= 600000
          ? (parseInt(formData.newTaxableIncome) - 300000) * 0.05
          : 0,
      newSlab10Percents:
        formData.newTaxableIncome > 900000
          ? 30000
          : formData.newTaxableIncome > 600000 &&
            formData.newTaxableIncome <= 900000
          ? (parseInt(formData.newTaxableIncome) - 600000) * 0.1
          : 0,
      newSlab15Percents:
        formData.newTaxableIncome > 1200000
          ? 45000
          : formData.newTaxableIncome > 900000 &&
            formData.newTaxableIncome <= 1200000
          ? (parseInt(formData.newTaxableIncome) - 900000) * 0.15
          : 0,
      slab20New:
        formData.newTaxableIncome > 1500000
          ? 60000
          : formData.newTaxableIncome > 1200000 &&
            formData.newTaxableIncome <= 1500000
          ? (parseInt(formData.newTaxableIncome) - 1200000) * 0.2
          : 0,
      newSlab20Percents:
        formData.newTaxableIncome > 1500000
          ? (parseInt(formData.taxableIncome) - 1500000) * 0.3
          : 0,
      oldSlumOfSlabs:
        parseInt(formData.oldSlab5Percents) +
        parseInt(formData.oldSlab10Percents) +
        parseInt(formData.oldSlab15Percents) +
        parseInt(formData.oldSlab20Percents) +
        parseInt(formData.oldSlab30Percents),
      newSlumOfSlabs:
        parseInt(formData.newSlab5Percents) +
        parseInt(formData.newSlab10Percents) +
        parseInt(formData.newSlab15Percents) +
        parseInt(formData.slab20New) +
        parseInt(formData.newSlab20Percents),
      taxRebate87aOld: formData.taxableIncome <= 500000 ? 12500 : 0,
      taxRebate87aNew: formData.newTaxableIncome <= 700000 ? 12500 : 0,
      oldTaxAfterTaxRebate:
        formData.taxRebate87aOld === 0
          ? formData.oldSlumOfSlabs
          : formData.taxRebate87aOld == 12500 && formData.oldSlumOfSlabs < 12500
          ? 0
          : parseInt(formData.oldSlumOfSlabs) - 12500,
      newTaxAfterTaxRebate:
        formData.taxRebate87aNew === 0
          ? formData.newSlumOfSlabs
          : formData.taxRebate87aNew == 12500 && formData.newSlumOfSlabs < 12500
          ? 0
          : parseInt(formData.newSlumOfSlabs) - 12500,
      cess4Old: formData.oldSlumOfSlabs * 0.04,
      cess4New: formData.newSlumOfSlabs * 0.04,
      totalIncomeTax:
        parseInt(formData.oldTaxAfterTaxRebate) + parseInt(formData.cess4Old),
      newTotalIncomeTax:
        parseInt(formData.newTaxAfterTaxRebate) + parseInt(formData.cess4New),
      oldTds: formData.totalIncomeTax / 12,
      newTds: formData.newTotalIncomeTax / 12,
      annualIncome: formData.grossSalary * 12,
      newAnnualIncome: formData.grossSalary * 12,
    });
  }, [
    formData.basicSalary,
    formData.companyPreferredEducationalAllowance,
    formData.noOfChildren,
    formData.overtime,
    formData.houserentAllowance,
    formData.conveyanceAllowance,
    formData.medicalAllowance,
    formData.educationalAllowance,
    formData.travellingAllowance,
    formData.dearnessAllowance,
    formData.overtimeSalary,
    formData.specialAllowance,
    formData.otherAllowance,
    formData.grossSalary,
    formData.employeeDeductionProvidentFund,
    formData.employeeDeductionEsic,
    formData.employeeDeductionProfessionalTax,
    formData.tds,
    formData.state,
    formData.gratuityYear,
    formData.gratuity,
    formData.bonus,
    formData.employeerContributionVariablePay,
    formData.employeeProvidentFund,
    formData.publicProvidentFund,
    formData.equityLinkedSavings,
    formData.lifeInsurancePremiums,
    formData.others,
    formData.nationalPensionScheme,
    formData.atalPensionScheme,
    formData.savingAccountInterest,
    formData.selfMedicalInsurance,
    formData.parentsMedicalInsurance,
    formData.homeLoanInterest,
    formData.houseRent,
    formData.educationalLoanInterest,
    formData.charity,
    formData.section80c,
    formData.section80ccd1b,
    formData.section80tta,
    formData.section80d,
    formData.section80eeOrSection24,
    formData.section80gg,
    formData.section80e,
    formData.section80g,
    formData.annualIncome,
    formData.standardDeduction,
    formData.totalInvestments,
    formData.newAnnualIncome,
    formData.newStandardDeduction,
    formData.newTotalInvestments,
    formData.taxableIncome,
    formData.newTaxableIncome,
    formData.oldSlab5Percents,
    formData.oldSlab10Percents,
    formData.oldSlab15Percents,
    formData.oldSlab20Percents,
    formData.oldSlab30Percents,
    formData.newSlab5Percents,
    formData.newSlab10Percents,
    formData.newSlab15Percents,
    formData.slab20New,
    formData.newSlab20Percents,
    formData.taxRebate87aOld,
    formData.oldSlumOfSlabs,
    formData.taxRebate87aNew,
    formData.newSlumOfSlabs,
    formData.oldTaxAfterTaxRebate,
    formData.cess4Old,
    formData.newTaxAfterTaxRebate,
    formData.cess4New,
    formData.totalIncomeTax,
    formData.newTaxAfterTaxRebate,
  ]);
  console.log(formData);

  const saveSalaryTemplate = async (e) => {
    await api.saveSalaryTemplate(formData);
    loadSalaryTemplate();
    navigate("/hr/payroll/salary-template");
    setPeriod("monthly");
    setFormData({
      employeeName: "",
      username: "",
      designation: "",
      workingDays: "",
      basicSalary: "",
      houserentAllowance: "",
      conveyanceAllowance: "",
      medicalAllowance: "",
      noOfChildren: "",
      companyPreferredEducationalAllowance: "",
      educationalAllowance: "",
      travellingAllowance: "",
      dearnessAllowance: "",
      specialAllowance: "",
      otherAllowance: "",
      overtime: "",
      overtimeSalary: "",
      grossSalary: "",
      employeeDeductionProvidentFund: "",
      employeeDeductionEsic: "",
      state: "",
      employeeDeductionProfessionalTax: "",
      tds: "",
      netSalary: "",
      employeerContributionProvidentFund: "",
      employeerContributionEsic: "",
      gratuity: "",
      gratuityYear: "",
      bonus: "",
      employeerContributionVariablePay: "",
      ctc: "",
      annualIncome: 0,
      standardDeduction: 50000,
      totalInvestments: 0,
      taxableIncome: 0,
      newAnnualIncome: 0,
      newStandardDeduction: 50000,
      newTotalInvestments: 0,
      newTaxableIncome: 0,
      section80c: 0,
      employeeProvidentFund: 0,
      publicProvidentFund: 0,
      equityLinkedSavings: 0,
      lifeInsurancePremiums: 0,
      others: 0,
      section80ccd1b: 0,
      nationalPensionScheme: 0,
      atalPensionScheme: 0,
      section80tta: 0,
      savingAccountInterest: 0,
      section80d: 0,
      selfMedicalInsurance: 0,
      parentsMedicalInsurance: 0,
      homeLoanInterest: 0,
      section80gg: 0,
      houseRent: 0,
      employeeType: "",
      section80e: 0,
      educationalLoanInterest: 0,
      section80g: 0,
      charity: 0,
      oldSlab5Percents: 0,
      oldSlab10Percents: 0,
      oldSlab15Percents: 0,
      oldSlab20Percents: 0,
      oldSlab30Percents: 0,
      newSlab5Percents: 0,
      newSlab10Percents: 0,
      newSlab15Percents: 0,
      slab20New: 0,
      newSlab20Percents: 0,
    });
  };
  const handleSubmit = (e) => {
    loadSalaryTemplate();
    setPeriod("monthly");
  };

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setPeriod("monthly");
    setFormData({
      employeeName: "",
      username: "",
      designation: "",
      workingDays: "",
      basicSalary: "",
      houserentAllowance: "",
      conveyanceAllowance: "",
      medicalAllowance: "",
      noOfChildren: "",
      companyPreferredEducationalAllowance: "",
      educationalAllowance: "",
      travellingAllowance: "",
      dearnessAllowance: "",
      specialAllowance: "",
      otherAllowance: "",
      overtime: "",
      overtimeSalary: "",
      grossSalary: "",
      employeeDeductionProvidentFund: "",
      employeeDeductionEsic: "",
      state: "",
      employeeDeductionProfessionalTax: "",
      tds: "",
      netSalary: "",
      employeerContributionProvidentFund: "",
      employeerContributionEsic: "",
      gratuity: "",
      gratuityYear: "",
      bonus: "",
      employeerContributionVariablePay: "",
      ctc: "",
      annualIncome: 0,
      standardDeduction: 50000,
      totalInvestments: 0,
      taxableIncome: 0,
      newAnnualIncome: 0,
      newStandardDeduction: 50000,
      newTotalInvestments: 0,
      newTaxableIncome: 0,
      section80c: 0,
      employeeProvidentFund: 0,
      publicProvidentFund: 0,
      equityLinkedSavings: 0,
      lifeInsurancePremiums: 0,
      others: 0,
      section80ccd1b: 0,
      nationalPensionScheme: 0,
      atalPensionScheme: 0,
      section80tta: 0,
      savingAccountInterest: 0,
      section80d: 0,
      selfMedicalInsurance: 0,
      parentsMedicalInsurance: 0,
      homeLoanInterest: 0,
      section80gg: 0,
      houseRent: 0,
      employeeType: "",
      section80e: 0,
      educationalLoanInterest: 0,
      section80g: 0,
      charity: 0,
      oldSlab5Percents: 0,
      oldSlab10Percents: 0,
      oldSlab15Percents: 0,
      oldSlab20Percents: 0,
      oldSlab30Percents: 0,
      newSlab5Percents: 0,
      newSlab10Percents: 0,
      newSlab15Percents: 0,
      slab20New: 0,
      newSlab20Percents: 0,
    });
  };

  const States = [
    {
      value: "Choose",
      label: "Select State",
    },
    {
      value: "Odisha",
      label: "Odisha",
    },
  ];
  const employeeTypes = [
    {
      value: "Choose",
      label: "Select State",
    },
    {
      value: "Employee",
      label: "Employee",
    },
    {
      value: "Non-Employee",
      label: "Non-Employee",
    },
  ];

  let buttonCheck = formData.employeeName.length > 0;
  // formData.basicSalary.length > 0 &&
  // formData.conveyanceAllowance.length > 0 &&
  // formData.medicalAllowance.length > 0 &&
  // formData.noOfChildren.length > 0 &&
  // formData.companyPreferredEducationalAllowance.length > 0 &&
  // formData.travellingAllowance.length > 0 &&
  // formData.dearnessAllowance.length > 0 &&
  // formData.specialAllowance.length > 0 &&
  // formData.otherAllowance.length > 0 &&
  // formData.overtime.length > 0 &&
  // formData.state.length > 0 &&
  // formData.tds.length > 0 &&
  // formData.gratuityYear.length > 0 &&
  // formData.bonus.length > 0 &&
  // formData.employeerContributionVariablePay.length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <FormControl fullWidth>
          <InputLabel id="demo-company-select-label">Employee Name</InputLabel>
          <Select
            labelId="demo-company-select-label"
            id="selectedCompany"
            value={formData.employeeName}
            name="employeeName"
            label="employeeName"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {employee &&
              employee.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.employeeName}>
                    {item.employeeName}
                  </MenuItem>
                );
              })}
            <MenuItem className="linkStyle" value="addNewEmployee">
              <a href="#">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  rotation={90}
                  className="iconStyle"
                />
                Create Employee
              </a>
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          name="username"
          id="username"
          value={formData.username}
          onChange={(e) => {
            handleInputChange(e);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          required
          disabled
          style={{ color: "red" }}
        />
        <TextField
          margin="dense"
          label="Designation"
          type="text"
          fullWidth
          name="designation"
          id="designation"
          value={formData.designation}
          onChange={(e) => {
            handleInputChange(e);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="Working Days"
          type="number"
          fullWidth
          name="workingDays"
          id="workingDays"
          value={formData.workingDays}
          onChange={(e) => {
            handleInputChange(e);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Basic Salary"
          type="number"
          fullWidth
          name="basicSalary"
          id="basicSalary"
          value={
            period == "yearly"
              ? formData.basicSalary * 12
              : formData.basicSalary
          }
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          disabled={period == "yearly" ? true : false}
        />
        <TextField
          margin="dense"
          label="House Rent Allowance"
          type="number"
          fullWidth
          name="houserentAllowance"
          id="houserentAllowance"
          value={
            period == "yearly"
              ? formData.houserentAllowance * 12
              : formData.houserentAllowance
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="Conveyance Allowance"
          type="number"
          fullWidth
          name="conveyanceAllowance"
          id="conveyanceAllowance"
          value={
            period == "yearly"
              ? formData.conveyanceAllowance * 12
              : formData.conveyanceAllowance
          }
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          disabled={period == "yearly" ? true : false}
        />
        <TextField
          margin="dense"
          label="Medical Allowance"
          type="number"
          fullWidth
          name="medicalAllowance"
          id="medicalAllowance"
          value={
            period == "yearly"
              ? formData.medicalAllowance * 12
              : formData.medicalAllowance
          }
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          disabled={period == "yearly" ? true : false}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="No. Of Children"
          type="number"
          fullWidth
          name="noOfChildren"
          id="noOfChildren"
          value={formData.noOfChildren}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          disabled={period == "yearly" ? true : false}
        />
        <TextField
          margin="dense"
          label="Company Prefered Allowance"
          type="number"
          fullWidth
          name="companyPreferredEducationalAllowance"
          id="companyPreferredEducationalAllowance"
          value={
            period == "yearly"
              ? formData.companyPreferredEducationalAllowance * 12
              : formData.companyPreferredEducationalAllowance
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled={period == "yearly" ? true : false}
        />
        <TextField
          margin="dense"
          label="Educational Allowance"
          type="number"
          fullWidth
          name="educationalAllowance"
          id="educationalAllowance"
          value={
            period == "yearly"
              ? formData.educationalAllowance * 12
              : formData.educationalAllowance
          }
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          disabled
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Travelling Allowance"
          type="number"
          fullWidth
          name="travellingAllowance"
          id="travellingAllowance"
          value={
            period == "yearly"
              ? formData.travellingAllowance * 12
              : formData.travellingAllowance
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled={period == "yearly" ? true : false}
        />
        <TextField
          margin="dense"
          label="Dearness Allowance"
          type="number"
          fullWidth
          name="dearnessAllowance"
          id="dearnessAllowance"
          value={
            period == "yearly"
              ? formData.dearnessAllowance * 12
              : formData.dearnessAllowance
          }
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          disabled={period == "yearly" ? true : false}
        />
        <TextField
          margin="dense"
          label="Special Allowance"
          type="number"
          fullWidth
          name="specialAllowance"
          id="specialAllowance"
          value={
            period == "yearly"
              ? formData.specialAllowance * 12
              : formData.specialAllowance
          }
          onChange={(e) => handleInputChange(e)}
          disabled={period == "yearly" ? true : false}
        />
        <TextField
          margin="dense"
          label="Other Allowance"
          type="number"
          fullWidth
          name="otherAllowance"
          id="otherAllowance"
          value={
            period == "yearly"
              ? formData.otherAllowance * 12
              : formData.otherAllowance
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled={period == "yearly" ? true : false}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Overtime (in hours)"
          type="number"
          fullWidth
          name="overtime"
          id="overtime"
          value={
            period == "yearly" ? formData.overtime * 12 : formData.overtime
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled={period == "yearly" ? true : false}
        />
        <TextField
          margin="dense"
          label="Overtime Salary"
          type="number"
          fullWidth
          name="overtimeSalary"
          id="overtimeSalary"
          value={
            period == "yearly"
              ? formData.overtimeSalary * 12
              : formData.overtimeSalary
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="Gross Salary"
          type="number"
          fullWidth
          name="grossSalary"
          id="grossSalary"
          value={
            period == "yearly"
              ? formData.grossSalary * 12
              : formData.grossSalary
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
      </div>
      <h4 className="my-2">Employee Deduction</h4>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Provident Fund"
          type="number"
          fullWidth
          name="employeeDeductionProvidentFund"
          id="employeeDeductionProvidentFund"
          value={
            period == "yearly"
              ? formData.employeeDeductionProvidentFund * 12
              : formData.employeeDeductionProvidentFund
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="ESIC"
          type="number"
          fullWidth
          name="employeeDeductionEsic"
          id="employeeDeductionEsic"
          value={
            period == "yearly"
              ? formData.employeeDeductionEsic * 12
              : formData.employeeDeductionEsic
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
      </div>
      <div className="data-input-fields">
        <TextField
          id="state"
          margin="dense"
          select
          label="State"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.state}
          onChange={(e) => handleInputChange(e)}
          name="state"
          disabled={period == "yearly" ? true : false}
        >
          {States.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          margin="dense"
          label="Professional Tax"
          type="number"
          fullWidth
          name="employeeDeductionProfessionalTax"
          id="employeeDeductionProfessionalTax"
          value={
            period == "yearly"
              ? formData.employeeDeductionProfessionalTax * 12
              : formData.employeeDeductionProfessionalTax
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="tds"
          type="number"
          fullWidth
          name="tds"
          id="tds"
          value={period == "yearly" ? formData.tds * 12 : formData.tds}
          onChange={(e) => handleInputChange(e)}
          required
          disabled={period == "yearly" ? true : false}
        />
      </div>
      <h4 className="my-2">Net Salary</h4>
      <TextField
        margin="dense"
        label="Net Salary"
        type="number"
        fullWidth
        name="netSalary"
        id="netSalary"
        value={
          period == "yearly" ? formData.netSalary * 12 : formData.netSalary
        }
        onChange={(e) => handleInputChange(e)}
        required
        disabled
      />
      <h4 className="my-2">Employer Contribution</h4>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Provident Fund"
          type="number"
          fullWidth
          name="employeerContributionProvidentFund"
          id="employeerContributionProvidentFund"
          value={
            period == "yearly"
              ? formData.employeerContributionProvidentFund * 12
              : formData.employeerContributionProvidentFund
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="ESIC"
          type="number"
          fullWidth
          name="employeerContributionEsic"
          id="employeerContributionEsic"
          value={
            period == "yearly"
              ? formData.employeerContributionEsic * 12
              : formData.employeerContributionEsic
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="Gratuity Year"
          type="number"
          fullWidth
          name="gratuityYear"
          id="gratuityYear"
          value={formData.gratuityYear}
          onChange={(e) => handleInputChange(e)}
          required
          disabled={period == "yearly" ? true : false}
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Gratuity"
          type="number"
          fullWidth
          name="gratuity"
          id="gratuity"
          value={
            period == "yearly" ? formData.gratuity * 12 : formData.gratuity
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="bonus"
          type="number"
          fullWidth
          name="bonus"
          id="bonus"
          value={period == "yearly" ? formData.bonus * 12 : formData.bonus}
          onChange={(e) => handleInputChange(e)}
          required
          disabled={period == "yearly" ? true : false}
        />
        <TextField
          margin="dense"
          label="Variable Pay"
          type="number"
          fullWidth
          name="employeerContributionVariablePay"
          id="employeerContributionVariablePay"
          value={
            period == "yearly"
              ? formData.employeerContributionVariablePay * 12
              : formData.employeerContributionVariablePay
          }
          onChange={(e) => handleInputChange(e)}
          required
          disabled={period == "yearly" ? true : false}
        />
      </div>

      <TextField
        margin="dense"
        label="Cost To Company"
        type="number"
        fullWidth
        name="ctc"
        id="ctc"
        value={period == "yearly" ? formData.ctc * 12 : formData.ctc}
        onChange={(e) => handleInputChange(e)}
        required
        disabled
      />
      <Button
        variant="outlined"
        id="add-btn"
        onClick={() => setShowIT(!showIT)}
      >
        {showIT ? (
          <div className="hide">
            <BiSolidHide />
            HIDE
          </div>
        ) : (
          <div className="add">
            <MdAdd />
            ADD INCOME TAX
          </div>
        )}
      </Button>
      {showIT && (
        <>
          <h2 className="mb-3" style={{ fontWeight: "600" }}>
            Income Tax
          </h2>

          <div className="d-flex" style={{ gap: "20px" }}>
            <div className="lefttt">
              <h3>Old Slab</h3>
              <TextField
                margin="dense"
                label="Gross Income"
                type="number"
                fullWidth
                name="annualIncome"
                id="annualIncome"
                value={formData.annualIncome}
                onChange={(e) => handleInputChange(e)}
                required
                disabled
              />
              <TextField
                margin="dense"
                label="standardDeduction"
                type="number"
                fullWidth
                name="standardDeduction"
                id="standardDeduction"
                value={formData.standardDeduction}
                onChange={(e) => handleInputChange(e)}
                required
                disabled
              />
              <Button
                variant="outlined"
                id="add-btn"
                style={{ width: "max-content" }}
              >
                {
                  <div className="add" onClick={() => setOpenDialog(true)}>
                    <MdAdd />
                    ADD INVESTMENT
                  </div>
                }
              </Button>
              <Dialog open={openDialog} onClose={DialogClose}>
                <h3 className="mx-auto mt-5" style={{ fontWeight: "600" }}>
                  Investment
                </h3>
                <DialogTitle
                  id="form-header-popup"
                  className="d-flex justify-content-between align-items-center"
                >
                  SECTION 80C
                  <TextField
                    margin="dense"
                    type="number"
                    fullWidth
                    name="section80c"
                    id="section80c"
                    value={formData.section80c}
                    onChange={(e) => handleInputChange(e)}
                    required
                    disabled
                    style={{ width: "200px" }}
                  />
                </DialogTitle>
                <DialogContent id="dcc" style={{ overflowY: "none" }}>
                  <div className="data-input-fields">
                    <TextField
                      label="Employee Provident Fund"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="employeeProvidentFund"
                      id="employeeProvidentFund"
                      value={formData.employeeProvidentFund}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <TextField
                      label="Public Provident Fund"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="publicProvidentFund"
                      id="publicProvidentFund"
                      value={formData.publicProvidentFund}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>
                  <div className="data-input-fields">
                    <TextField
                      label="Equity Linked Saving"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="equityLinkedSavings"
                      id="equityLinkedSavings"
                      value={formData.equityLinkedSavings}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      label="Life Insurance Premium"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="lifeInsurancePremiums"
                      id="lifeInsurancePremiums"
                      value={formData.lifeInsurancePremiums}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <TextField
                      label="Others"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="others"
                      id="others"
                      value={formData.others}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>
                </DialogContent>
                <DialogTitle
                  id="form-header-popup"
                  className="d-flex justify-content-between align-items-center"
                >
                  SECTION 80CCD (1B)
                  <TextField
                    margin="dense"
                    type="number"
                    fullWidth
                    name="section80ccd1b"
                    id="section80ccd1b"
                    value={formData.section80ccd1b}
                    onChange={(e) => handleInputChange(e)}
                    required
                    disabled
                    style={{ width: "200px" }}
                  />
                </DialogTitle>
                <DialogContent id="dcc">
                  <div className="data-input-fields">
                    <TextField
                      label="National Pension Scheme"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="nationalPensionScheme"
                      id="nationalPensionScheme"
                      value={formData.nationalPensionScheme}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <TextField
                      label="Atal Pension Scheme"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="atalPensionScheme"
                      id="atalPensionScheme"
                      value={formData.atalPensionScheme}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>
                </DialogContent>
                <DialogTitle
                  id="form-header-popup"
                  className="d-flex justify-content-between align-items-center"
                >
                  SECTION 80TTA
                  <TextField
                    margin="dense"
                    type="number"
                    fullWidth
                    name="section80tta"
                    id="section80tta"
                    value={formData.section80tta}
                    onChange={(e) => handleInputChange(e)}
                    required
                    disabled
                    style={{ width: "200px" }}
                  />
                </DialogTitle>
                <DialogContent id="dcc">
                  <div className="data-input-fields">
                    <TextField
                      label="Saving Account Interest"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="savingAccountInterest"
                      id="savingAccountInterest"
                      value={formData.savingAccountInterest}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </DialogContent>
                <DialogTitle
                  id="form-header-popup"
                  className="d-flex justify-content-between align-items-center"
                >
                  SECTION 80D
                  <TextField
                    margin="dense"
                    type="number"
                    fullWidth
                    name="section80d"
                    id="section80d"
                    value={formData.section80d}
                    onChange={(e) => handleInputChange(e)}
                    required
                    disabled
                    style={{ width: "200px" }}
                  />
                </DialogTitle>
                <DialogContent id="dcc">
                  <div className="data-input-fields">
                    <TextField
                      label="Self Medical Insurance"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="selfMedicalInsurance"
                      id="selfMedicalInsurance"
                      value={formData.selfMedicalInsurance}
                      onChange={(e) => handleInputChange(e)}
                    />
                    <TextField
                      label="Parents Medical Insurance"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="parentsMedicalInsurance"
                      id="parentsMedicalInsurance"
                      value={formData.parentsMedicalInsurance}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </DialogContent>
                <DialogTitle
                  id="form-header-popup"
                  className="d-flex justify-content-between align-items-center"
                >
                  SECTION 80EE / SECTION 24
                  <TextField
                    margin="dense"
                    type="number"
                    fullWidth
                    name="section80eeOrSection24"
                    id="section80eeOrSection24"
                    value={formData.section80eeOrSection24}
                    onChange={(e) => handleInputChange(e)}
                    required
                    disabled
                    style={{ width: "200px" }}
                  />
                </DialogTitle>
                <DialogContent id="dcc">
                  <div className="data-input-fields">
                    <TextField
                      label="Home Loan Interest"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="homeLoanInterest"
                      id="homeLoanInterest"
                      value={formData.homeLoanInterest}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </DialogContent>
                <DialogTitle
                  id="form-header-popup"
                  className="d-flex justify-content-between align-items-center"
                >
                  SECTION 80GG
                  <TextField
                    margin="dense"
                    type="number"
                    fullWidth
                    name="section80gg"
                    id="section80gg"
                    value={formData.section80gg}
                    onChange={(e) => handleInputChange(e)}
                    required
                    disabled
                    style={{ width: "200px" }}
                  />
                </DialogTitle>
                <DialogContent id="dcc">
                  <div className="data-input-fields">
                    <TextField
                      id="state"
                      margin="dense"
                      select
                      label="employeeType"
                      fullWidth
                      defaultValue="Choose"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={formData.employeeType}
                      onChange={(e) => handleInputChange(e)}
                      name="employeeType"
                    >
                      {employeeTypes.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    <TextField
                      label="House Rent"
                      margin="dense"
                      type="number"
                      fullWidth
                      name="houseRent"
                      id="houseRent"
                      value={formData.houseRent}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </DialogContent>
                <DialogTitle
                  id="form-header-popup"
                  className="d-flex justify-content-between align-items-center"
                >
                  SECTION 80E
                  <TextField
                    margin="dense"
                    type="number"
                    fullWidth
                    name="section80e"
                    id="section80e"
                    value={formData.section80e}
                    onChange={(e) => handleInputChange(e)}
                    required
                    disabled
                    style={{ width: "200px" }}
                  />
                </DialogTitle>
                <DialogContent id="dcc">
                  <TextField
                    label="Educational Loan Interest"
                    margin="dense"
                    type="number"
                    fullWidth
                    name="educationalLoanInterest"
                    id="educationalLoanInterest"
                    value={formData.educationalLoanInterest}
                    onChange={(e) => handleInputChange(e)}
                  />
                </DialogContent>
                <DialogTitle
                  id="form-header-popup"
                  className="d-flex justify-content-between align-items-center"
                >
                  SECTION 80G
                  <TextField
                    margin="dense"
                    type="number"
                    fullWidth
                    name="section80g"
                    id="section80g"
                    value={formData.section80g}
                    onChange={(e) => handleInputChange(e)}
                    required
                    disabled
                    style={{ width: "200px" }}
                  />
                </DialogTitle>
                <DialogContent id="dcc">
                  <TextField
                    label="Charity"
                    margin="dense"
                    type="number"
                    fullWidth
                    name="charity"
                    id="charity"
                    value={formData.charity}
                    onChange={(e) => handleInputChange(e)}
                  />
                </DialogContent>

                <Button
                  variant="outlined"
                  id="add-btn"
                  onClick={() => setOpenDialog(false)}
                  style={{ width: "90%", margin: "auto", marginBottom: "30px" }}
                >
                  <div className="add">OK</div>
                </Button>
              </Dialog>
              <TextField
                margin="dense"
                label="totalInvestments"
                type="number"
                fullWidth
                name="totalInvestments"
                id="totalInvestments"
                value={formData.totalInvestments}
                onChange={(e) => handleInputChange(e)}
                required
                disabled
              />
              <TextField
                margin="dense"
                label="Taxable Income"
                type="number"
                fullWidth
                name="taxableIncome"
                id="taxableIncome"
                value={formData.taxableIncome}
                onChange={(e) => handleInputChange(e)}
                required
                disabled
              />
            </div>
            <div className="righttt">
              <h3>New Slab</h3>
              <TextField
                margin="dense"
                label="Gross Income"
                type="number"
                fullWidth
                name="newAnnualIncome"
                id="newAnnualIncome"
                value={formData.newAnnualIncome}
                onChange={(e) => handleInputChange(e)}
                required
                disabled
              />
              <TextField
                margin="dense"
                label="Standard Deduction"
                type="number"
                fullWidth
                name="newStandardDeduction"
                id="newStandardDeduction"
                value={formData.newStandardDeduction}
                onChange={(e) => handleInputChange(e)}
                required
                disabled
              />
              <TextField
                margin="dense"
                label="Investment"
                type="number"
                fullWidth
                name="newTotalInvestments"
                id="newTotalInvestments"
                value={formData.newTotalInvestments}
                onChange={(e) => handleInputChange(e)}
                required
                disabled
              />
              <TextField
                margin="dense"
                label="Taxable Income"
                type="number"
                fullWidth
                name="taxableIncomeNew"
                id="taxableIncomeNew"
                value={formData.newTaxableIncome}
                onChange={(e) => handleInputChange(e)}
                required
                disabled
              />
            </div>
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>Slab 5%:</h5>
            <TextField
              margin="dense"
              label="Old Slab 5%"
              type="number"
              fullWidth
              name="oldSlab5Percents"
              id="oldSlab5Percents"
              value={formData.oldSlab5Percents}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              label="New Slab 5%"
              type="number"
              fullWidth
              name="newSlab5Percents"
              id="newSlab5Percents"
              value={formData.newSlab5Percents}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>Slab 10%:</h5>
            <TextField
              margin="dense"
              label="Old Slab 10%"
              type="number"
              fullWidth
              name="oldSlab10Percents"
              id="oldSlab10Percents"
              value={formData.oldSlab10Percents}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              label="New Slab 10%"
              type="number"
              fullWidth
              name="newSlab10Percents"
              id="newSlab10Percents"
              value={formData.newSlab10Percents}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>Slab 15%:</h5>
            <TextField
              margin="dense"
              label="Old Slab 15%"
              type="number"
              fullWidth
              name="oldSlab15Percents"
              id="oldSlab15Percents"
              value={formData.oldSlab15Percents}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              label="New Slab 15%"
              type="number"
              fullWidth
              name="newSlab15Percents"
              id="newSlab15Percents"
              value={formData.newSlab15Percents}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>Slab 20%:</h5>
            <TextField
              margin="dense"
              label="Old Slab 20%"
              type="number"
              fullWidth
              name="oldSlab20Percents"
              id="oldSlab20Percents"
              value={formData.oldSlab20Percents}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              label="New Slab 20%"
              type="number"
              fullWidth
              name="slab20New"
              id="slab20New"
              value={formData.slab20New}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>Slab 30%:</h5>
            <TextField
              margin="dense"
              label="Old Slab 30%"
              type="number"
              fullWidth
              name="oldSlab30Percents"
              id="oldSlab30Percents"
              value={formData.oldSlab30Percents}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              label="New Slab 30%"
              type="number"
              fullWidth
              name="newSlab20Percents"
              id="newSlab20Percents"
              value={formData.newSlab20Percents}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>Sum of Slabs</h5>
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="oldSlumOfSlabs"
              id="oldSlumOfSlabs"
              value={formData.oldSlumOfSlabs}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="newSlumOfSlabs"
              id="newSlumOfSlabs"
              value={formData.newSlumOfSlabs}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>Tax Rebate 87A</h5>
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="taxRebate87aOld"
              id="taxRebate87aOld"
              value={formData.taxRebate87aOld}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="taxRebate87aNew"
              id="taxRebate87aNew"
              value={formData.taxRebate87aNew}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>Tax after Tax Rebate</h5>
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="oldTaxAfterTaxRebate"
              id="oldTaxAfterTaxRebate"
              value={formData.oldTaxAfterTaxRebate}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="newTaxAfterTaxRebate"
              id="newTaxAfterTaxRebate"
              value={formData.newTaxAfterTaxRebate}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>Cess 4%</h5>
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="cess4Old"
              id="cess4Old"
              value={formData.cess4Old}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="cess4New"
              id="cess4New"
              value={formData.cess4New}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>Total Income Tax</h5>
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="totalIncomeTax"
              id="totalIncomeTax"
              value={formData.totalIncomeTax}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="newTotalIncomeTax"
              id="newTotalIncomeTax"
              value={formData.newTotalIncomeTax}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
          <div
            className="slabs d-flex align-items-center"
            style={{ gap: "20px" }}
          >
            <h5 style={{ width: "210px" }}>tds</h5>
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="oldTds"
              id="oldTds"
              value={formData.oldTds}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
            <TextField
              margin="dense"
              type="number"
              fullWidth
              name="newTds"
              id="newTds"
              value={formData.newTds}
              onChange={(e) => handleInputChange(e)}
              required
              disabled
            />
          </div>
        </>
      )}

      <div className="data-buttons">
        <Button
          type="submit"
          onClick={(e) => saveSalaryTemplate(e)}
          variant="outlined"
          // disabled={buttonCheck ? false : true}
          id="input-btn-submit"
        >
          Submit
        </Button>
        <Button onClick={cancelButton} variant="outlined" id="input-btn-cancel">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default SalaryTemplateForm;
