import { useState } from "react";

const StateCredit = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [dateError, setDateError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [genId, setGenId] = useState(1);
  const [fileError, setFileError] = useState("");
  const [file, setFile] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [description, setDescription] = useState("");
  const [purchaseError, setPurchaseError] = useState(false);
  const [subType, setSubType] = useState(false);
  const [credit, setCredit] = useState([]);
  const [purchaseBy, setPurchaseBy] = useState("");

  const [formData, setFormData] = useState({
    creditVoucherId: 0,
    voucherType: "",
    debitAccountHead: "",
    date: "",
    remark: "",
    creditVoucherTableEntities: [
      {
        creditVoucherTableId: 0,
        accountName: "",
        subType: "",
        ledgerComment: "",
        amount: 0,
      },
    ],
    total: 0,
  });
  return {
    genId,
    setGenId,
    file,
    toggle,
    setToggle,
    subType,
    credit,
    setCredit,
    setSubType,
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

export default StateCredit;
