import { useState } from "react";

const StateSales = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [sales, setSales] = useState([]);
  const [formData, setFormData] = useState({
    developerCost :"",
    researchAndDevlopment:"",
    customerSupportAndTechnicalAssitance:"",
    serverMaintance:"",
    customerSegment:"",
    distributionChannel:"",
    thirdPartySoftwareComponent:"",
    perUserPrice:"",
    totalNumberOfUser:"",
    totalUserCost:"",
    directSalesThroughWebsite:"",
    salesTeam:"",
    totalCost:"",
    status:"",
    gstPrice:"",
    comments:"",
});

  return {
    formVisible,
    setFormVisible,
    formData,
    setFormData,
    toggle,
    setToggle,
    sales, setSales,
    recDelete, setRecDelete
  };
};

export default StateSales;
