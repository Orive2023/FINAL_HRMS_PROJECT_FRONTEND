import { useState } from "react";

const StateBalance = () => {
  const [dateError, setDateError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [Balance, setBalance] = useState([]);
  const [open, setOpen] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [genId, setGenId] = useState(1);
  const [fileError, setFileError] = useState("");
  const [file, setFile] = useState("");
  const [totalDebit, setTotalDebit] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [description, setDescription] = useState("");
  const [purchaseError, setPurchaseError] = useState(false);
  const [purchaseBy, setPurchaseBy] = useState("");
  const [updatedTotalDebit, setUpdatedTotalDebit] = useState(0);
  const [updatedTotalCredit, setUpdatedTotalCredit] = useState(0);

  const [formData, setFormData] = useState({
    openingBalanceId: 0,
    financialYear: "",
    date: "",
    openingBalanceTableEntities: [
      {
        openingBalanceTableId: 0,
        accountName: "",
        subType: "",
        debit: 0,
        credit: 0,
      },
    ],
    totalDebit: 0,
    totalCredit: 0,
  });
  return {
    Balance,
    genId,
    setGenId,
    file,
    toggle,
    setToggle,
    purchaseError,
    setPurchaseError,
    purchaseBy,
    setPurchaseBy,
    setFile,
    description,
    setDescription,
    descriptionError,
    setDescriptionError,
    formVisible,
    setFormVisible,
    fileError,
    totalDebit,
    setTotalDebit,
    setFileError,
    dateError,
    setDateError,
    setBalance,
    open,
    setOpen,
    formData,
    setFormData,
    recDelete,
    setRecDelete,
    totalCredit,
    setTotalCredit,
    updatedTotalCredit,
    setUpdatedTotalCredit,
    updatedTotalDebit,
    setUpdatedTotalDebit,
  };
};

export default StateBalance;
