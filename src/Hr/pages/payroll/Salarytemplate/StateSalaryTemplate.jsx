import {useState} from 'react'
// import DepartmentView from './Mainfile/DepartmentView';

const StateSalaryTemplate = () => {
    const [basicSalary, setBasicSalary] = useState("");
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [salary, setSalary] = useState([]);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [grossSal, setGrossSal] = useState(0);
    const [deduction, setDeduction] = useState(0);
    const [netAmount, setNetAmount] = useState(0);
    const [pfVal, setPfVal] = useState(0);
    const [recDelete, setRecDelete] = useState("");
    const [employee, setEmployee] = useState([]);
    const [formData, setFormData] = useState({
      employeeName:"",
      username:"",
      designation:"",
      workingDays:0,
      basicSalary:0,
      houserentAllowance: 0,
      conveyanceAllowance: 0,
      medicalAllowance: 0,
      noOfChildren: 0,
      companyPreferredEducationalAllowance: 0,
      educationalAllowance: 0,
      travellingAllowance: 0,
      dearnessAllowance: 0,
      specialAllowance: 0,
      otherAllowance: 0,
      overtime: 0,
      overtimeSalary: 0,
      grossSalary: 0,
      employeeDeductionProvidentFund:0,
      employeeDeductionEsic:0,
      state:"",
      employeeDeductionProfessionalTax:0,
      tds: 0,
      netSalary: 0,
      employeerContributionProvidentFund: 0,
      employeerContributionEsic: 0,
      gratuity: 0,
      gratuityYear: 0,
      bonus: 0,
      employeerContributionVariablePay: 0,
      ctc: 0,

      annualIncome:0,
      standardDeduction:50000,
      totalInvestments:0,
      taxableIncome:0,

      newAnnualIncome:0,
      newStandardDeduction:50000,
      newTotalInvestments:0,
      newTaxableIncome:0,

      section80c:0,
      employeeProvidentFund:0,
      publicProvidentFund:0,
      equityLinkedSavings:0,
      lifeInsurancePremiums:0,
      others:0,

      section80ccd1b:0,
      nationalPensionScheme:0,
      atalPensionScheme:0,

      section80tta:0,
      savingAccountInterest:0,

      section80d:0,
      selfMedicalInsurance:0,
      parentsMedicalInsurance:0,

      section80eeOrSection24:0,
      homeLoanInterest:0,

      section80gg:0,
      houseRent:0,

      employeeType:"",

      section80e:0,
      educationalLoanInterest:0,

      section80g:0,
      charity:0,

      oldSlab5Percents:0,
      oldSlab10Percents:0,
      oldSlab15Percents:0,
      oldSlab20Percents:0,
      oldSlab30Percents:0,

      newSlab5Percents:0,
      newSlab10Percents:0,
      newSlab15Percents:0,
      newSlab20Percents:0,
      newSlab20Percents:0,

      oldSlumOfSlabs:0,
      newSlumOfSlabs:0,

      oldTaxAfterTaxRebate:0,
      newTaxAfterTaxRebate:0,

      oldTaxAfterTaxRebate:0,
      newTaxAfterTaxRebate:0,

      cess4Percents:0,
      newCess4Percents:0,

      totalIncomeTax:0,
      newTotalIncomeTax:0,

      oldTds:0,
      newTds:0,
    });
    return {
      pfVal, setPfVal, recDelete, setRecDelete, basicSalary, setBasicSalary,formVisible, setFormVisible,toggle, setToggle,salary, setSalary,search, setSearch,open, setOpen,grossSal, setGrossSal,deduction, setDeduction,netAmount, setNetAmount,formData, setFormData, employee, setEmployee
    }
}

export default StateSalaryTemplate;