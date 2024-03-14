import { useState } from "react";

const BidAnalysisState = () => {
  const [dateError, setDateError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [bidAnalysis, setBidAnalysis] = useState([]);
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
    bidAnalysisId: 0,
    location: "",
    date: "",
    quotation: "",
    attachment: null,
    status: "",
  });
  return {
    bidAnalysis,
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
    setBidAnalysis,
    open,
    setOpen,
    formData,
    setFormData,
    recDelete,
    setRecDelete,
  };
};

export default BidAnalysisState;
