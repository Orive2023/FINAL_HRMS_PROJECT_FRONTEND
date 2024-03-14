import { useState } from "react";

const StateFinancialYear = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [financialYearSection, setFinancialYearSection] = useState([]);
  const [open, setOpen] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState("");
  const [formData, setFormData] = useState({
    financialYear: "",
    financialYearStartDate: "",
    financialYearEndDate: "",
    cretaedDate: getCurrentDate(),
  });
  return {
    financialYearSection,
    setFinancialYearSection,
    open,
    setOpen,
    recDelete,
    setRecDelete,
    formData,
    setFormData,
    dateError,
    setDateError,
  };
};

export default StateFinancialYear;
