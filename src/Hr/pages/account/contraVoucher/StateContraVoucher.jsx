import { useState } from "react";

const StateContraVoucher = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [dateError, setDateError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [contraVoucher, setContraVoucher] = useState([]);
  const [open, setOpen] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [genId, setGenId] = useState(1);
  const [fileError, setFileError] = useState("");
  const [file, setFile] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [ledgerError, setLedgerError] = useState(false);
  const [ledgerComment, setLedger] = useState("");
  const [purchaseError, setPurchaseError] = useState(false);
  const [purchaseBy, setPurchaseBy] = useState("");

  const [formData, setFormData] = useState({
    contraVoucherId: 0,
    voucherType: "",
    reversedAccountHead: "",
    date: "",
    remark: "",
    contraVoucherListEntities: [
      {
        contraVoucherListId: 0,
        accountName: "",
        ledgerComment: "",
        debit: 0,
        credit: 0,
      },
    ],
  });
  return {
    contraVoucher,
    setContraVoucher,
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
    formVisible,
    ledgerError,
    setLedgerError,
    ledgerComment,
    setLedger,
    setFormVisible,
    fileError,
    totalAmount,
    setTotalAmount,
    setFileError,
    dateError,
    setDateError,
    open,
    setOpen,
    formData,
    setFormData,
    recDelete,
    setRecDelete,
  };
};

export default StateContraVoucher;
