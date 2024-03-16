import React from "react";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import * as salesApi from "./SalesApi";
import { useNavigate } from "react-router-dom";
import StateSales from "./StateSales";

const SalesForm = ({ formData, setFormData, setFormVisible }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { setSales, setToggle } = StateSales();

  useEffect(() => {
    loadSales();
  }, []);

  const loadSales = async () => {
    const result = await salesApi.loadSales();
    setSales(result);
  };

  const saveSales = async () => {
    await salesApi.saveSales(formData);
    window.location.reload();
    navigate("/hr/sales/sales");
    setFormData({
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
    })
  };

  let buttonCheck =
    formData.developerCost.length > 0 &&
    formData.researchAndDevlopment.length > 0 &&
    formData.customerSupportAndTechnicalAssitance.length > 0 &&
    formData.serverMaintance.length > 0 &&
    formData.customerSegment.length > 0 &&
    formData.distributionChannel.length > 0 &&
    formData.thirdPartySoftwareComponent.length > 0 &&
    formData.perUserPrice.length > 0 &&
    formData.totalNumberOfUser.length > 0 &&
    formData.directSalesThroughWebsite.length > 0 &&
    formData.salesTeam.length > 0 &&
    formData.gstPrice.length > 0;

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      developerCost: "",
      researchAndDevlopment: "",
      customerSupportAndTechnicalAssitance: "",
      serverMaintance: "",
      customerSegment: "",
      distributionChannel: "",
      thirdPartySoftwareComponent: "",
      perUserPrice: "",
      totalNumberOfUser: "",
      totalUserCost: "",
      directSalesThroughWebsite: "",
      totalPrice: "",
      salesTeam: "",
      totalCost: "",
      gstPrice: "",
    });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      totalUserCost:
        parseInt(formData.perUserPrice) * parseInt(formData.totalNumberOfUser),

      totalCost:
        parseInt(formData.developerCost) +
        parseInt(formData.researchAndDevlopment) +
        parseInt(formData.customerSupportAndTechnicalAssitance) +
        parseInt(formData.serverMaintance) +
        parseInt(formData.customerSegment) +
        parseInt(formData.distributionChannel) +
        parseInt(formData.thirdPartySoftwareComponent) +
        parseInt(formData.totalUserCost) +
        parseInt(formData.directSalesThroughWebsite) +
        parseInt(formData.salesTeam) +
        parseInt(formData.gstPrice),
    });
  }, [
    formData.perUserPrice,
    formData.totalNumberOfUser,
    formData.developerCost,
    formData.researchAndDevlopment,
    formData.customerSupportAndTechnicalAssitance,
    formData.serverMaintance,
    formData.customerSegment,
    formData.distributionChannel,
    formData.thirdPartySoftwareComponent,
    formData.totalUserCost,
    formData.directSalesThroughWebsite,
    formData.salesTeam,
    formData.gstPrice,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted:", formData);
    await saveSales(); // Wait for saveSales to complete
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Developer Cost"
          type="number"
          fullWidth
          name="developerCost"
          id="developerCost"
          value={formData.developerCost}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Research And Devlopment"
          type="number"
          fullWidth
          name="researchAndDevlopment"
          id="researchAndDevlopment"
          value={formData.researchAndDevlopment}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Customer Support And Technical Assitance"
          type="number"
          fullWidth
          name="customerSupportAndTechnicalAssitance"
          id="customerSupportAndTechnicalAssitance"
          value={formData.customerSupportAndTechnicalAssitance}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Server Maintance"
          type="number"
          fullWidth
          name="serverMaintance"
          id="serverMaintance"
          value={formData.serverMaintance}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Customer Segment"
          type="number"
          fullWidth
          name="customerSegment"
          id="customerSegment"
          value={formData.customerSegment}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Distribution Channel"
          type="number"
          fullWidth
          name="distributionChannel"
          id="distributionChannel"
          value={formData.distributionChannel}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Third PartySoftwareComponent"
          type="number"
          fullWidth
          name="thirdPartySoftwareComponent"
          id="thirdPartySoftwareComponent"
          value={formData.thirdPartySoftwareComponent}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="perUserPrice"
          type="number"
          fullWidth
          name="perUserPrice"
          id="perUserPrice"
          value={formData.perUserPrice}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="totalNumberOfUser"
          type="number"
          fullWidth
          name="totalNumberOfUser"
          id="totalNumberOfUser"
          value={formData.totalNumberOfUser}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="totalUserCost"
          type="number"
          fullWidth
          name="totalUserCost"
          id="totalUserCost"
          value={formData.totalUserCost}
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
        <TextField
          margin="dense"
          label="directSalesThroughWebsite"
          type="number"
          fullWidth
          name="directSalesThroughWebsite"
          id="directSalesThroughWebsite"
          value={formData.directSalesThroughWebsite}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="salesTeam"
          type="number"
          fullWidth
          name="salesTeam"
          id="salesTeam"
          value={formData.salesTeam}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="gstPrice"
          type="number"
          fullWidth
          name="gstPrice"
          id="gstPrice"
          value={formData.gstPrice}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="totalCost"
          type="number"
          fullWidth
          name="totalCost"
          id="totalCost"
          value={formData.totalCost}
          onChange={(e) => handleInputChange(e)}
          required
          disabled
        />
      </div>
      <div className="data-buttons">
        <button
          id="input-btn-submit"
          className="submit"
          type="submit"
          variant="outlined"
          onClick={saveSales}
          disabled={buttonCheck ? false : true}
        >
          Submit
        </button>

        <button
          id="input-btn-cancel"
          // className="cancel"
          variant="outlined"
          onClick={cancelButton}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SalesForm;
