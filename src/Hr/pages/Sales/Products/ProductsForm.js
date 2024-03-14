import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as ProductsApi from "./ProductsApi";
import StateProducts from "./StateProducts";
const ProductsForm = ({ formData, setToggle, setFormData, setFormVisible }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      ...formData,
      grossRevenue: formData.noOfClients * formData.productPricePerUnit,
      netRevenue:
        parseInt(formData.grossRevenue) -
        (parseInt(formData.returns) +
          parseInt(formData.discounts) +
          parseInt(formData.allowances)),
    });
  }, [
    formData.noOfClients,
    formData.productPricePerUnit,
    formData.returns,
    formData.grossRevenue,
    formData.discounts,
    formData.allowances,
  ]);
  const {   setProducts,
    product,
     } = StateProducts();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const saveProducts = async () => {
    await ProductsApi.saveProducts(formData);
    navigate("/hr/sales/product");
    setFormData({
      productPricePerUnit: "",
      noOfClients: "",
      grossRevenue: "",
      saleDate: "",
      returns: "",
      discounts: "",
      allowances: "",
      netRevenue: "",
      moneyAddedBankName: "",
      status: "",
      productName: "",
    });
  };

  let buttonCheck = true;
  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      productPricePerUnit: "",
      noOfClients: "",
      grossRevenue: "",
      saleDate: "",
      returns: "",
      discounts: "",
      allowances: "",
      netRevenue: "",
      moneyAddedBankName: "",
      status: "",
      productName: "",
    });
  };

  const handleSubmit = (e) => {
    console.log("Form submitted:", formData);
  };

  return (
    <form onClick={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Product Name"
          type="string"
          fullWidth
          name="productName"
          id="productName"
          value={formData.productName}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="productPricePerUnit"
          type="number"
          fullWidth
          name="productPricePerUnit"
          id="productPricePerUnit"
          value={formData.productPricePerUnit}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="noOfClients"
          type="number"
          fullWidth
          name="noOfClients"
          id="noOfClients"
          value={formData.noOfClients}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="grossRevenue"
          type="number"
          fullWidth
          name="grossRevenue"
          id="grossRevenue"
          value={formData.grossRevenue}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Sale Date"
          type="date"
          fullWidth
          name="saleDate"
          id="saleDate"
          required
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.saleDate}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="returns"
          type="number"
          fullWidth
          name="returns"
          id="returns"
          value={formData.returns}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="discounts"
          type="number"
          fullWidth
          name="discounts"
          id="discounts"
          value={formData.discounts}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="allowances"
          type="number"
          fullWidth
          name="allowances"
          id="allowances"
          value={formData.allowances}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="netRevenue"
          type="number"
          fullWidth
          name="netRevenue"
          id="netRevenue"
          value={formData.netRevenue}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Bank Name"
          type="string"
          fullWidth
          name="moneyAddedBankName"
          id="moneyAddedBankName"
          value={formData.moneyAddedBankName}
          onChange={(e) => handleInputChange(e)}
          required
        />
    
      </div>

      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          type="submit"
          variant="outlined"
          disabled={buttonCheck ? false : true}
          onClick={saveProducts}
        >
          Submit
        </Button>
        <Button
          id="input-btn-cancel"
          className="cancel"
          variant="outlined"
          onClick={cancelButton}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ProductsForm;
