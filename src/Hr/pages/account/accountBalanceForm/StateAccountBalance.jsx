import { useState } from "react";

const StateAccountBalance = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [dateError, setDateError] = useState("");
  const [recDelete, setRecDelete] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [department, setDepartment] = useState([]);
  const [accountBalance, setAccountBalance] = useState([]);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [formData, setFormData] = useState({
       employeeName: "",
        username: "",
        department: "",
        position: "",
        hsaBalance: "",
        fsaBalance: "",
        retirementAccountBalance: "",
        otherBenefitsAccountsBalance: "",
        expenseReimbursementAccountBalance: "",
        details: "",
        vacationDaysBalance: "",
        sickDaysBalance: "",
        personalDaysBalance: "",
        floatingHolidaysBalance: "",
        accountType: "",
        accountBalance: "",
        purpose: "",
        comments: ""
  });

 
  return {
    accountBalance,
    setAccountBalance,
    setFormVisible,
    open,
    setOpen,
    formData,
    setFormData,
    recDelete,
    setRecDelete,
    dateError,
    setDateError,
    employee,
    setEmployee,
    department, 
    setDepartment,
    toggle, 
    setToggle,
    formVisible
  };
};

export default StateAccountBalance;
