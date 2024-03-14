import { useState } from "react";

const StateSubType = () => {

  const [subType, setSubType] = useState([]);
  const [open, setOpen] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [formData, setFormData] = useState({
    subtype: "",
    accountName: "",
    subTypeEndDate: "",
  });
  return {
    subType, setSubType, open, setOpen, recDelete, setRecDelete, formData, setFormData
  };
};

export default StateSubType;
