import { useState } from "react";

const StatePromotion = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [recDelete, setRecDelete] = useState("");
  const [dateError, setDateError] = useState(false);
  const [promotion, setPromotion] = useState([]);
  const [open, setOpen] = useState(false);
  const [descriptionError, setDescriptionError] = useState("");
  const [company,setCompany] = useState("")
  const [description, setDescription] =  useState("");
  const [employee, setEmployee]= useState([]);
  const [titleError, setTitleError] = useState("");
  const [title, setTitle] =  useState("");
  const [location,setLocation] = useState("")

  
  const [formData, setFormData] = useState({
    employeeName: "",
    promotionTitle: "",
    promotionDate: "",
    description: "",
  });
  return {
    location,setLocation,setEmployee,
    company,setCompany,
    formData,
    formVisible,
    toggle,
    setToggle,
    recDelete,
    dateError,
    title,
    setTitle,
    titleError,
    setTitleError,
    promotion,
    setPromotion,
    setDateError,
    setRecDelete,
    setToggle,
    setFormVisible,
    setFormData,
    
    descriptionError,
    setDescriptionError,
    setDescription,
    employee,
  };
};

export default StatePromotion;
