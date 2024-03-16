import { useState } from "react";

const PurchaseOrderState = () => {
  const [dateError, setDateError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [purchaseOrder, setPurchaseOrder] = useState([]);
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
  const [purchaseBy, setPurchaseBy] = useState("");

  const [formData, setFormData] = useState({
    purchaseOrderListId: 0,
    purchaseOrderId: 0,
    description: "string",
    unitName: "string",
    quantity: 0,
    price: 0,
    total: 0,
    grandTotal: 0,
  });
  return {
    purchaseOrder,
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
    totalAmount,
    setTotalAmount,
    setFileError,
    dateError,
    setDateError,
    setPurchaseOrder,
    open,
    setOpen,
    formData,
    setFormData,
    recDelete,
    setRecDelete,
  };
};

export default PurchaseOrderState;
