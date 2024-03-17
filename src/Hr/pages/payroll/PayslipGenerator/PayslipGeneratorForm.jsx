import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as api from "./api";
import { useNavigate } from "react-router-dom";
import StatePayslipGenerator from "./StatePayslipGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import { useToastContainer } from "react-toastify";

const PayslipGeneratorForm = ({
  formData,
  setFormData,
  setFormVisible,
  setToggle,
}) => {
  const navigate = useNavigate();

  const { setSalary, employee, setEmployee } = StatePayslipGenerator();

  useEffect(() => {
    loadPayslipGenerator();
    fetchEmployee();
  }, []);

  const loadPayslipGenerator = async () => {
    const result = await api.loadPayslipGenerator();
    setSalary(result);
  };

  const fetchEmployee = async () => {
    const result = await api.fetchEmployee();
    setEmployee(result);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (e.target.name === "employeeName") {
      employee.map((elem) => {
        if (elem.employeeName === e.target.value) {
          setFormData({
            ...formData,
            employeeName: elem.employeeName,
            username: elem.username,
            designation: elem.designationName,
            deapartment: elem.deapartmentName,
          });
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (name === "employeeName" && value === "addNewEmployee") {
      // Redirect to the company form in the company module
      navigate("/hr/employee/employee");
      return;
    }
  };

  useEffect(() => {
    setFormData({
      ...formData,
      presentBasicSalary:
        (parseInt(formData.basicSalary) / parseInt(formData.workingDays)) *
        parseInt(formData.presentDays),
      houserentAllowance: parseInt(formData.presentBasicSalary) * 0.4,
      educationalAllowance:
        parseInt(formData.noOfChildren) *
        parseInt(formData.companyPreferredEducationalAllowance),
      overTimeSalary:
        (parseInt(formData.basicSalary) / 26 / 8) *
        parseInt(formData.overTimeInHrs),
      grossSalary:
        parseInt(formData.presentBasicSalary) +
        parseInt(formData.houserentAllowance) +
        parseInt(formData.conveyanceAllowance) +
        parseInt(formData.medicalAllowance) +
        parseInt(formData.educationalAllowance) +
        parseInt(formData.travellingAllowance) +
        parseInt(formData.dearnessAllowance) +
        parseInt(formData.overTimeSalary) +
        parseInt(formData.specialAllowance) +
        parseInt(formData.otherAllowance),
      employeeDeductionProvidentFund: formData.presentBasicSalary * 0.12,
      employeeDeductionEsic:
        formData.grossSalary < 21000 ? formData.grossSalary * 0.0075 : 0,
      netSalary:
        parseInt(formData.grossSalary) -
        (parseInt(formData.employeeDeductionProvidentFund) +
          parseInt(formData.employeeDeductionEsic) +
          parseInt(formData.employeeDeductionProfessionalTax) +
          parseInt(formData.tds)),
      employeerContributionProvidentFund: formData.presentBasicSalary * 0.13,
      employeerContributionEsic: formData.grossSalary * 0.0325,
      employeeDeductionProfessionalTax: formData.state === "Odisha" ? 200 : 0,
      gratuity:
        ((formData.presentBasicSalary / 26) * 15 * formData.gratuityYear) / 12,
    });
  }, [
    formData.basicSalary,
    formData.workingDays,
    formData.presentDays,
    formData.noOfChildren,
    formData.companyPreferredEducationalAllowance,
    formData.overTimeInHrs,
    formData.presentBasicSalary,
    formData.houserentAllowance,
    formData.conveyanceAllowance,
    formData.medicalAllowance,
    formData.educationalAllowance,
    formData.travellingAllowance,
    formData.dearnessAllowance,
    formData.overTimeSalary,
    formData.specialAllowance,
    formData.otherAllowance,
    formData.grossSalary,
    formData.employeeDeductionProvidentFund,
    formData.employeeDeductionEsic,
    formData.employeeDeductionProfessionalTax,
    formData.tds,
    formData.state,
    formData.gratuityYear,
  ]);
  console.log(formData);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const savePayslipGenerator = async () => {
    await api.savePayslipGenerator(formData);
    navigate("/hr/payroll/salary-template ");
    loadPayslipGenerator();
    setFormData({
      username: "",
      employeeName: "",
      designation: "",
      department: "",
      workingDays: 0,
      presentDays: 0,
      presentBasicSalary: 0,
      overTimeInHrs: 0,
      overTimeSalary: 0,
      basicSalary: 0,
      houserentAllowance: 0,
      conveyanceAllowance: 0,
      medicalAllowance: 0,
      educationalAllowance: 0,
      specialAllowance: 0,
      otherAllowance: 0,
      travellingAllowance: 0,
      dearnessAllowance: 0,
      grossSalary: 0,
      employeeDeductionProvidentFund: 0,
      employeeDeductionEsic: 0,
      employeeDeductionProfessionalTax: 0,
      tds: 0,
      netSalary: 0,
      employeerContributionProvidentFund: 0,
      employeerContributionEsic: 0,
      gratuity: 0,
      gratuityYear: 0,
      employeerContributionVariablePay: 0,
      noOfChildren: 0,
      companyPreferredEducationalAllowance: 0,
      bonus: 0,
      state: "",
      createdDate: getCurrentDate(),
    });
  };

  const handleSubmit = (e) => {
    console.log("formData", formData);
  };

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      username: "",
      employeeName: "",
      designation: "",
      department: "",
      workingDays: 0,
      presentDays: 0,
      presentBasicSalary: 0,
      overTimeInHrs: 0,
      overTimeSalary: 0,
      basicSalary: 0,
      houserentAllowance: 0,
      conveyanceAllowance: 0,
      medicalAllowance: 0,
      educationalAllowance: 0,
      specialAllowance: 0,
      otherAllowance: 0,
      travellingAllowance: 0,
      dearnessAllowance: 0,
      grossSalary: 0,
      employeeDeductionProvidentFund: 0,
      employeeDeductionEsic: 0,
      employeeDeductionProfessionalTax: 0,
      tds: 0,
      netSalary: 0,
      employeerContributionProvidentFund: 0,
      employeerContributionEsic: 0,
      gratuity: 0,
      gratuityYear: 0,
      employeerContributionVariablePay: 0,
      noOfChildren: 0,
      companyPreferredEducationalAllowance: 0,
      bonus: 0,
      state: "",
      createdDate: getCurrentDate(),
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

  let buttonCheck = formData.employeeName.length > 0;

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
          required
          disabled
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
          disabled
        />
        <TextField
          margin="dense"
          label="Department"
          type="text"
          fullWidth
          name="department"
          id="department"
          value={formData.department}
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
          label="Basic Salary"
          type="number"
          fullWidth
          name="basicSalary"
          id="basicSalary"
          value={formData.basicSalary}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
        />
        <TextField
          margin="dense"
          label="No. of working days"
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
        <TextField
          margin="dense"
          label="No. of present days"
          type="number"
          fullWidth
          name="presentDays"
          id="presentDays"
          value={formData.presentDays}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Employee Basic Salary"
          type="number"
          fullWidth
          name="presentBasicSalary"
          id="presentBasicSalary"
          value={formData.presentBasicSalary}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="House Rent Allowance"
          type="number"
          fullWidth
          name="houserentAllowance"
          id="houserentAllowance"
          value={formData.houserentAllowance}
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
          value={formData.conveyanceAllowance}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
        />
        <TextField
          margin="dense"
          label="Medical Allowance"
          type="number"
          fullWidth
          name="medicalAllowance"
          id="medicalAllowance"
          value={formData.medicalAllowance}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
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
        />
        <TextField
          margin="dense"
          label="Company Prefered Allowance"
          type="number"
          fullWidth
          name="companyPreferredEducationalAllowance"
          id="companyPreferredEducationalAllowance"
          value={formData.companyPreferredEducationalAllowance}
          onChange={(e) => handleInputChange(e)}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          margin="dense"
          label="Educational Allowance"
          type="number"
          fullWidth
          name="educationalAllowance"
          id="educationalAllowance"
          value={formData.educationalAllowance}
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
          value={formData.travellingAllowance}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Dearness Allowance"
          type="number"
          fullWidth
          name="dearnessAllowance"
          id="dearnessAllowance"
          value={formData.dearnessAllowance}
          onChange={(e) => {
            handleInputChange(e);
          }}
          required
        />
        <TextField
          margin="dense"
          label="Special Allowance"
          type="number"
          fullWidth
          name="specialAllowance"
          id="specialAllowance"
          value={formData.specialAllowance}
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          margin="dense"
          label="Other Allowance"
          type="number"
          fullWidth
          name="otherAllowance"
          id="otherAllowance"
          value={formData.otherAllowance}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Overtime (in hours)"
          type="number"
          fullWidth
          name="overTimeInHrs"
          id="overTimeInHrs"
          value={formData.overTimeInHrs}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          label="Overtime Salary"
          type="number"
          fullWidth
          name="overTimeSalary"
          id="overTimeSalary"
          value={formData.overTimeSalary}
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
          value={formData.grossSalary}
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
          value={formData.employeeDeductionProvidentFund}
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
          value={formData.employeeDeductionEsic}
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
          value={formData.employeeDeductionProfessionalTax}
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="TDS"
          type="number"
          fullWidth
          name="tds"
          id="tds"
          value={formData.tds}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
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
        value={formData.netSalary}
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
          value={formData.employeerContributionProvidentFund}
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
          value={formData.employeerContributionEsic}
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
          value={formData.gratuity}
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
          value={formData.bonus}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Variable Pay"
          type="number"
          fullWidth
          name="employeerContributionVariablePay"
          id="employeerContributionVariablePay"
          value={formData.employeerContributionVariablePay}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          label="Created Date"
          type="date"
          fullWidth
          name="createdDate"
          id="createdDate"
          value={formData.createdDate}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
          disabled
        />
      </div>

      <div className="data-buttons">
        <Button
          type="submit"
          onClick={savePayslipGenerator}
          variant="outlined"
          disabled={buttonCheck ? false : true}
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

export default PayslipGeneratorForm;
