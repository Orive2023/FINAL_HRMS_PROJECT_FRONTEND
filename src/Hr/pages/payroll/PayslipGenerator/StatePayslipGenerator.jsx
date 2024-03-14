import {useState} from 'react'

const StatePayslipGenerator = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
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
     username:"",
      employeeName:"",
      designation:"",
      department:"",
      workingDays:0,
      presentDays:0,
      presentBasicSalary:0,
      overTimeInHrs: 0,
      overTimeSalary: 0,
      basicSalary:0,
      houserentAllowance: 0,
      conveyanceAllowance: 0,
      medicalAllowance: 0,
      educationalAllowance: 0,
      specialAllowance: 0,
      otherAllowance: 0,
      travellingAllowance: 0,
      dearnessAllowance: 0,
      grossSalary: 0,
      employeeDeductionProvidentFund:0,
      employeeDeductionEsic:0,
      employeeDeductionProfessionalTax:0,
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
      state:"",
      createdDate:getCurrentDate(),
    });
    return {
      pfVal, setPfVal, recDelete, setRecDelete, basicSalary, setBasicSalary,formVisible, setFormVisible,toggle, setToggle,salary, setSalary,search, setSearch,open, setOpen,grossSal, setGrossSal,deduction, setDeduction,netAmount, setNetAmount,formData, setFormData,employee, setEmployee
    }
}

export default StatePayslipGenerator;