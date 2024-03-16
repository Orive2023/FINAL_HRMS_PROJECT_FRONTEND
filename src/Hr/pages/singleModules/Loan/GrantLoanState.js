import { useState } from 'react';

const GrantLoanState = () => {

  const [recDelete, setRecDelete] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [loan, setLoan] = useState([]);
  const [permittedByError, setPermittedByError] = useState('');
  const [loanDetailsByError, setLoanDetailsByError] = useState('');
  const [pay, setPay] = useState(0);
  const [emiPay, setEmiPay] = useState(0);
  const [employee, setEmployee] = useState(0);
  const [emiClear, setEmiClear] = useState(0);
  const [formData, setFormData] = useState({
    employeeName: "",
    permittedBy: "",
    username:"",
    loanDetails: "",
    approveDate: "",
    repaymentForm: "",
    amount: "",
    accountType:"",
    interestPersentage: "",
    installmentPeriod: "",
    status: "",
    installmentCleared: "",
  });


  return {
    formData,
    setFormData,
    recDelete,
    setRecDelete,
    formVisible,
    setFormVisible,
    toggle,
    setToggle,
    loan,
    setLoan,
    permittedByError,
    setPermittedByError,
    loanDetailsByError,
    setLoanDetailsByError,
    pay,
    setPay,
    emiPay,
    setEmiPay,
    emiClear,
    setEmiClear,
    employee,
    setEmployee
  };
};

export default GrantLoanState;