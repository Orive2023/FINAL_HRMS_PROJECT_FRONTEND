import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import PurchaseOrderState from "./PurchaseOrderState";
import * as PurchaseOrderApi from "./PurchaseOrderApi";

const PurchaseOrderForm = ({
  purchaseOrder,
  formData,
  setFormVisible,
  setFormData,
  setToggle,
}) => {
  const navigate = useNavigate();
  const {
    genId,
    setGenId,
    file,
    toggle,
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
    fileError,
    setFileError,
    dateError,
    setDateError,

    open,
    setOpen,
    recDelete,
    setRecDelete,
    purchaseorder,
    setPurchaseOrder,
    unit,
    setUnit,
    purchaseData,
    setPurchaseData,
  } = PurchaseOrderState();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (e.target.name === "vendorName" && e.target.value === "addNewunit") {
      navigate("/hr/procurement/vendor");
      return;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [name]: name === "signatureAndStamp" ? files[0] : value,
    });
  };

  useEffect(() => {
    fetchUnit();
    fetchList();
    fetchVendor();
  }, []);

  const [vendor, setVendor] = useState([]);

  const fetchVendor = async () => {
    const data = await axios.get("https://api.orivehrms.com/vendor/get/vendor");
    setVendor(data.data);
  };

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const data = await axios.get("https://api.orivehrms.com/purchaseorderlist/all");
    setList(data.data);
  };

  const fetchUnit = async () => {
    const data = await PurchaseOrderApi.fetchUnit();
    setUnit(data);
  };

  const [items, setItems] = useState([]);

  const addItem = async () => {
    const newItem = {
      id: new Date().getTime().toString(),
      purchaseorderId: list.length,
      description: "",
      unitName: "",
      quantity: 0,
      price: 0,
      total: 0,

    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const updatedData = items.filter((elem) => {
      return elem.id !== id;
    });
    setItems(updatedData);
  };

  const handleItemChange = (id, e) => {
    if (e.target.name === "unitName" && e.target.value === "addNewunit") {
      navigate("/hr/procurement/unit");
      return;
    }
    const updatedItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            [e.target.name]: e.target.value,
            ["total"]: item.quantity * item.price,
          }
        : item
    );
    setItems(updatedItems);

    setFormData({
      ...formData,
    });
  };

  const [gt, setGt] = useState(0);

  useEffect(() => {
    const calcTotal = items.reduce((total, elem) => {
      return total + parseInt(elem.total || 0);
    }, 0);
    setGt(calcTotal);
  });

  useEffect(() => {
    const data = items.map((elem) => {
      let qty = elem.quantity || 0;
      let pr = elem.price || 0;
      let tot = qty * pr;
      if (tot !== elem.total) {
        return {
          ...elem,
          total: tot,
        };
      }
      return elem;
    });
    if (JSON.stringify(data) !== JSON.stringify(items)) {
      setItems(data);
    }
  }, [items]);

  console.log("itemsData", items);

  const savePurchase = async () => {
    try {
      await PurchaseOrderApi.savePurchase(formData);
      // await PurchaseOrderApi.saveItems(items);
      navigate("/hr/procurement/purchase-order");
      handleClose();
    } catch (error) {
      console.error("Error saving purchaseorder:", error);
    }
  };

  const loadAllPurchase = async () => {
    await PurchaseOrderApi.loadAllPurchase().then((result) => {
      setPurchaseData(result);
    });
  };

  const loadPurchase = async () => {
    try {
      const result = await axios.get(
        `https://api.orivehrms.com/purchaseorder/${purchaseOrder}`
      );
      setPurchaseData(result.data);
    } catch (error) {
      console.error("Error loading purchase:", error);
    }
  };

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      description: "",
      unitName: "",
      quantity: "",
      price: "",
      total: "",
      status:"",
      grandTotal: 0,
    });
  };

  useEffect(() => {
    // if (purchaseData.length > 0) {
    //   loadPurchase();
    // }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  const saveItems = async (id) => {
    await axios.post(
      `https://api.orivehrms.com/purchaseOrder/create/purchaseOrder`,
      items,
      {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      }
    );
  };

  const saveSingleItem = async (id) => {
    const data = items.filter((elem) => {
      return elem.id === id;
    });
    await PurchaseOrderApi.saveItems(data[0]);
  };

  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            margin="dense"
            label="Location"
            type="text"
            fullWidth
            name="location"
            id="location"
            value={formData.location}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            margin="dense"
            label="Quotation"
            type="text"
            fullWidth
            name="quotation"
            id="quotation"
            value={formData.quotation}
            onChange={(e) => handleInputChange(e)}
            required
          />

          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            name="date"
            id="date"
            value={formData.date}
            onChange={(e) => handleInputChange(e)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormControl
            fullWidth
            className="mx-3"
            style={{
              width: "30%",
            }}
          >
            <InputLabel id="demo-company-select-label">unit Name</InputLabel>
            <Select
              labelId="demo-company-select-label"
              value={formData.vendorName}
              name="vendorName"
              label="Vendor Name"
              onChange={(e) => handleInputChange(e)}
            >
              {vendor &&
                vendor.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.vendorName}>
                      {item.vendorName}
                    </MenuItem>
                  );
                })}
              <MenuItem className="linkStyle" value="addNewunit">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    rotation={90}
                    className="iconStyle"
                  />
                  Create Vendor
                </a>
              </MenuItem>
            </Select>
          </FormControl>
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            name="address"
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange(e)}
            required
          />
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            margin="dense"
            label="Authorized By Name"
            type="text"
            fullWidth
            name="authorizedByName"
            id="authorizedByName"
            value={formData.authorizedByName}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>

        <div>
          <h1
            style={{
              marginBottom: "15px",
              fontSize: "2rem",
              fontWeight: "600",
            }}
          ></h1>
        </div>

        <TableContainer component={Paper}>
          <Table style={{ border: "1px solid #ddd" }}>
            <TableHead>
              <TableRow style={{ background: "#f2f2f2" }}>
                <TableCell className="table-data">SL</TableCell>
                <TableCell className="table-data">Id</TableCell>
                <TableCell className="table-data">Description</TableCell>
                <TableCell className="table-data">Unit Name</TableCell>
                <TableCell className="table-data">Quantity</TableCell>
                <TableCell className="table-data">Price</TableCell>
                <TableCell className="table-data">Total</TableCell>
                <TableCell className="table-data">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={item.id} style={{ border: "1px solid #ddd" }}>
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      disabled={true}
                      value={index + 1}
                      style={{ width: "70px" }}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      name="purchaseorderId"
                      type="number"
                      value={item.purchaseorderId}
                      onChange={(e) => handleItemChange(item.id, e)}
                      style={{ width: "70px" }}
                      disabled
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      name="description"
                      type="text"
                      value={item.description}
                      onChange={(e) => handleItemChange(item.id, e)}
                      style={{ width: "70px" }}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <FormControl
                      fullWidth
                      style={{
                        // margin: "8px 15px",
                        width: "100%",
                      }}
                    >
                      <InputLabel id="demo-company-select-label">
                        unit Name
                      </InputLabel>
                      <Select
                        labelId="demo-company-select-label"
                        id="selectedCompany"
                        value={formData.unitName}
                        name="unitName"
                        label="unitName"
                        onChange={(e) => handleItemChange(item.id, e)}
                      >
                        {unit &&
                          unit.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.unitName}>
                                {item.unitName}
                              </MenuItem>
                            );
                          })}
                        <MenuItem className="linkStyle" value="addNewunit">
                          <a href="#">
                            <FontAwesomeIcon
                              icon={faCirclePlus}
                              rotation={90}
                              className="iconStyle"
                            />
                            Create unit
                          </a>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>

                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      name="quantity"
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(item.id, e)}
                      style={{ width: "100%" }}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      name="price"
                      type="number"
                      value={item.price}
                      onChange={(e) => handleItemChange(item.id, e)}
                      style={{ width: "100%" }}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      name="total"
                      type="number"
                      value={item.total}
                      onChange={(e) => handleItemChange(item.id, e)}
                      style={{ width: "100%" }}
                      disabled
                    />
                  </TableCell>

                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    {" "}
                    <Button
                      variant="contained"
                      onClick={() => saveSingleItem(item.id)}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => removeItem(item.id)}
                    >
                      {<DeleteIcon />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <Button
                variant="contained"
                className="m-2"
                style={{
                  marginBottom: "7px",
                  justifyContent: "center",
                  background: "#f76c24",
                  color: "white",
                  marginTop: "10px",
                  width: "max-content",
                }}
                onClick={addItem}
              >
                Add Item
              </Button>
            </TableBody>
          </Table>
        </TableContainer>

        <div className="d-flex align-items-center justify-content-end">
          <TextField
            style={{
              margin: "30px 0",
              width: "20%",
            }}
            margin="dense"
            label="Grand Total"
            type="number"
            fullWidth
            name="grandTotal"
            id="grandTotal"
            value={gt}
            onChange={(e) => handleInputChange(e)}
            required
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
        </div>

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <TextField
            style={{
              margin: "30px 0",
              width: "20%",
            }}
            margin="dense"
            label="Signature And Stamp"
            type="file"
            fullWidth
            name="signatureAndStamp"
            id="signatureAndStamp"
            onChange={(e) => handleInputChange(e)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            style={{
              margin: "30px 10px",
              width: "20%",
            }}
            margin="dense"
            label="Status"
            type="text"
            fullWidth
            name="status"
            id="status"
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>

        <div className="data-buttons">
          <Button
            id="input-btn-submit"
            className="submit"
            type="submit"
            onClick={savePurchase}
            variant="outlined"
          >
            Submit
          </Button>
          <Button
            id="input-btn-cancel"
            className="cancel"
            onClick={cancelButton}
            variant="outlined"
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PurchaseOrderForm;
