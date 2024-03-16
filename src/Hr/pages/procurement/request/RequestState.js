import { useState } from "react";

const RequestState = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [dateError, setDateError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [request,setRequest] = useState([]);
  const [unit,setUnit] = useState([]);
  

  const [formData, setFormData] = useState({
    requestId: 0,
    requestingPerson: "",
    requestingDepartment: "",
    expectedTimeToHaveTheGoodStarts: "",
    expectedTimeToHaveTheGoodEnds: "",
    reasonForRequesting: "",
    createdDate: getCurrentDate(),
    descriptionOfMaterialEntities: [
      {
        descriptionOfMaterialId: 0,
        descriptionOfMaterialOrGoodsOrService: "",
        unitName: "",
        quantity: 0,
      },
    ],
  });
  return {
   
    toggle,
    setToggle,
    formVisible,
    setFormVisible,
    dateError,
    setDateError,
    request,setRequest,
    formData,
    open,setOpen,
    setFormData,
    recDelete,
    unit,setUnit,
    setRecDelete,
  };
};

export default RequestState;
