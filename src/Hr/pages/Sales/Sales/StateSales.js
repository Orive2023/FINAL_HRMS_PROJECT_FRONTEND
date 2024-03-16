import { useState } from "react";

const StateSales = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [recDelete, setRecDelete] = useState("");
  const [sales, setSales] = useState([]);
  const [formData, setFormData] = useState({
    developerCost :0,
    researchAndDevlopment:0,
    customerSupportAndTechnicalAssitance:0,
    serverMaintance:0,
    customerSegment:0,
    distributionChannel:0,
    thirdPartySoftwareComponent:0,
    perUserPrice:0,
    totalNumberOfUser:0,
    totalUserCost:0,
    directSalesThroughWebsite:0,
    salesTeam:0,
    totalCost:0,
    status:0,
    gstPrice:0,
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
