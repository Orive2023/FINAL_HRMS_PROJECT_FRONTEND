import { useState } from "react";

const StateReachus = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [reachus, setReachus] = useState([]);
  const [recDelete, setRecDelete] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectService: "",
    message: "",
  });
  return {
    recDelete,
    setRecDelete,
    isEmailValid,
    setIsEmailValid,
    toggle,
    setToggle,
    formVisible,
    setFormVisible,
    reachus,
    setReachus,
    formData,
    setFormData,
  };
};

export default StateReachus;
