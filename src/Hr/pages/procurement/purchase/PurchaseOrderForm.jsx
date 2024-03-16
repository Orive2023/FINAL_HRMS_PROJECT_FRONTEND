import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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

const PurchaseOrderForm = ({ purchaseOrder,formData, setFormData, setToggle }) => {
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
    setFormVisible,
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
  } = PurchaseOrderState();

  const [quant, setQuant] = useState(0);
  const [pri, setPri] = useState(0);
  const [company, setCompany] = useState([]);
  const [purchaseData, setPurchaseData] = useState([]);
  const [saveDisable, setSaveDisable] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantPriceValue, setQuantPriceValue] = useState(0);

  const handleTextFieldChange = (event) => {
    setQuantPriceValue(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [name]: name === "attachment" ? files[0] : value,
    });
  };

  const [items, setItems] = useState([
    {
      id: 1,
      purchaseorderId: purchaseData.length + 1,
      name: "",
      signature: null,
      date: "",
    },
  ]);

  const addItem = async () => {
    const newItem = {
      id: items.length + 1,
      purchaseorderId: purchaseData.length + 1,
      name: "",
      signature: null,
      date: "",
    };

    setItems([...items, newItem]);
    setSaveDisable(true);
  };

  const removeItem = async (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    // const updatedTotalAmount = updatedItems.reduce((total, item) => {
    //   const itemAmount = parseFloat(item.total) || 0;
    //   return total + itemAmount;
    // }, 0);

    // setTotalAmount(updatedTotalAmount);

    await axios.delete(`http://localhost:8094/purchaseOrder/delete/${id}`);
    loadAllPurchase();
  };

  const handleItemChange = (id, field, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    // setItems(updatedItems);
    // setTotalAmount(updatedTotalAmount);

    // if (field === "total") {
    //   const updatedTotalAmount = updatedItems.reduce((totalPrice, item) => {
    //     const itemAmount = parseFloat(item.total) || 0;
    //     return totalPrice + itemAmount;
    //   }, 0);
    //   setTotalAmount(updatedTotalAmount);
    // }

    setFormData({
      ...formData,
      //   totalAmount: updatedTotalAmount,
    });
    const formDataWithUpdatedItems = {
      ...formData,
      //    totalAmount: updatedTotalAmount,
    };
    if (field === "totalAmount") {
      formDataWithUpdatedItems.totalAmount = value;
    }

    const formDataWithTotalAmount = {
      ...formData,
      //   totalAmount: updatedTotalAmount,
    };
    setFormData(formDataWithTotalAmount);

    if (field === "total") {
      formDataWithUpdatedItems.total = value;
    }

    setFormData(formDataWithUpdatedItems);
  };

  const savePurchase = async () => {
    try {
      await PurchaseOrderApi.savePurchase(formData);
      navigate("/hr/procurement/purchaseorder");
      setGenId(genId + 1);
      handleClose();
    } catch (error) {
      console.error("Error saving purchaseorder:", error);
    }
    setSaveDisable(true);
  };

  const loadAllPurchase = async () => {
    await PurchaseOrderApi.loadAllPurchase().then((result) => {
      setPurchaseData(result);
    });
  };

  // const loadBid = async () => {
  //   try {
  //     const result = await axios.get(
  //       `http://13.126.190.50:5000/quotationlist/${bidAllData.length + 1}`
  //     );
  //     setCompany(result.data);
  //   } catch (error) {
  //     console.error("Error loading bid:", error);
  //   }
  // };
  const loadPurchase = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8094/purchaseorder/${purchaseOrder}`
      );
      setCompany(result.data);
    } catch (error) {
      console.error("Error loading purchase:", error);
    }
  };

  const cancelButton = () =>{
    setFormVisible(false);
    setToggle(false);
    setFormData({
      description:"",
      unitName:"",
      quantity:"",
      price:"",
      total:"",
      grandTotal:"",

    })
  }

  useEffect(() => {
    if (purchaseData.length > 0) {
      loadPurchase();
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  // const [listData, setListData] = useState({
  //   id: 1,
  //   quotationListId: 0,
  //   quotationId: bidAllData.length + 1,
  //   descriptionOfMaterials: "",
  //   unitName: "",
  //   quantity: 0,
  //   price: 0,
  //   total: 0,
  //   grandTotal: 0,
  // });
  const [listData, setListData] = useState({
    purchaseOrderListId: 0,
    purchaseOrderId: 0,
    description: "string",
    unitName: "string",
    quantity: 0,
    price: 0,
    total: 0,
    grandTotal: 0,
  });

  console.log(listData);

  const [quotationData, setQuotationData] = useState({
    purchaseOrderListId: 0,
    purchaseOrderId: 0,
    description: "string",
    unitName: "string",
    quantity: 0,
    price: 0,
    total: 0,
    grandTotal: 0,
  });

  const handleListChange = (e) => {
    setListData({
      ...listData,
      [e.target.name]: e.target.value,
      total: quantPriceValue,
    });
  };

  // const handleAdd = async (id) => {
  //   setListData({
  //     ...listData,
  //     total: quantPriceValue,
  //   });
  //   await axios.post("http://13.126.190.50:5000/quotationlist/add", {
  //     ...listData,
  //     total: quantPriceValue,
  //     quotationId: bidAllData.length + 1,
  //   });
  //   setQuantPriceValue(0);
  //   setQuant(0);
  //   setPri(0);
  //   loadBid();
  //   setListData({
  //     descriptionOfMaterials: "",
  //     unitName: "",
  //     quantity: 0,
  //     price: 0,
  //     total: 0,
  //     grandTotal: 0,
  //   });
  // };
  //   const handleAdd = async (id) => {
  //     setListData({
  //       ...listData,
  //       total: quantPriceValue,
  //     });
  //     await axios.post("http://13.126.190.50:5000/companylist/add", {
  //       ...listData,
  //       total: quantPriceValue,
  //       purchaseorderId: bidAllData.length + 1,
  //     });
  //     setQuantPriceValue(0);
  //     setQuant(0);
  //     setPri(0);
  //     loadBid();
  //     setListData({
  //       company: "",
  //       description: "",
  //       reasonOfChoosing: "",
  //       remarks: "",
  //       unitName: "",
  //       quantity: 0,
  //       price: 0,
  //       total: 0,
  //       grandTotal: 0,
  //     });
  //   };

  //   useEffect(() => {
  //     setQuantPriceValue(quant * pri);

  //     loadAllBid();
  //   }, [quant, pri]);

  const handleComAdd = async (id) => {
    setSaveDisable(false);
    await axios.post(
      `http://localhost:8094/purchaseOrder/create/purchaseOrder`,
      quotationData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      }
    );
  };

  const removeComItem = async (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    const updatedTotalAmount = updatedItems.reduce((total, item) => {
      const itemAmount = parseFloat(item.amount) || 0;
      return total + itemAmount;
    }, 0);

    setTotalAmount(updatedTotalAmount);

    await axios.delete(`http://localhost:8094/purchaseOrder/delete/${id}`);
  };

  const handleQuotationChange = (e) => {
    const { name, value, files } = e.target;
    setQuotationData({
      ...quotationData,
      [e.target.name]: e.target.value,
      [name]: name === "signature" ? files[0] : value,
      purchaseorderId: purchaseData.length + 1,
    });
  };

  console.log(quotationData);

  const [increment, setIncrement] = useState(1);

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
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            margin="dense"
            label="Vendor Name"
            type="text"
            fullWidth
            name="vendorName"
            id="vendorName"
            value={formData.vendorName}
            onChange={(e) => handleInputChange(e)}
            required
          />
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
                <TableCell className="table-data">Serial No.</TableCell>
                <TableCell className="table-data">Purchase Order ID</TableCell>
                <TableCell className="table-data">Description</TableCell>
                <TableCell className="table-data">Unit Name</TableCell>
                <TableCell className="table-data">Price</TableCell>
                <TableCell className="table-data">Total</TableCell>
                <TableCell className="table-data">GrandTotal</TableCell>
                <TableCell className="table-data">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index} style={{ border: "1px solid #ddd" }}>
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      disabled={true}
                      value={index + 1}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* expense id  */}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      value={purchaseData.length + 1}
                      name="purchaseorderId"
                      disabled
                      onChange={(e) => {
                        handleItemChange(
                          item.id,
                          "purchaseorderId",
                          e.target.value * 2
                        );
                      }}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* purchaseDate */}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      type="text"
                      value={item.description}
                      name="description"
                      onChange={(e) => {
                        handleItemChange(
                          item.id,
                          "description",
                          e.target.value
                        );
                        handleQuotationChange(e);
                      }}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* description */}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      value={item.unitName}
                      name="signature"
                      type="text"
                      onChange={(e) => {
                        handleItemChange(item.id, "unitName", e.target.value);
                        handleQuotationChange(e);
                      }}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* purchasedby */}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      value={item.quantity}
                      name="quantity"
                      type="number"
                      onChange={(e) => {
                        handleItemChange(item.id, "quantity", e.target.value);
                        handleQuotationChange(e);
                      }}
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
                      value={item.total}
                      name="total"
                      type="number"
                      onChange={(e) => {
                        handleItemChange(item.id, "total", e.target.value);
                        handleQuotationChange(e);
                      }}
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
                      value={item.grandTotal}
                      name="grandTotal"
                      type="number"
                      onChange={(e) => {
                        handleItemChange(item.id, "grandTotal", e.target.value);
                        handleQuotationChange(e);
                      }}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* Action */}

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
                    {index + 1 === items.length ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleComAdd(item.id)}
                      >
                        {/* Add Item */}
                        Save
                      </Button>
                    ) : (
                      ""
                    )}
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        removeComItem(item.id);
                        setIncrement(increment - 1);
                      }}
                      disabled={items.length === 1 ? true : false}
                    >
                      {/* Delete */}
                      {<DeleteIcon />}
                    </Button>
                  </TableCell>
                  {index + 1 === items.length ? (
                    <TableCell
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        variant="contained"
                        // startIcon={<AddIcon />}
                        onClick={() => {
                          addItem(item.id);
                          setIncrement(increment + 1);
                        }}
                        disabled={saveDisable}
                        style={{
                          marginBottom: "7px",
                          justifyContent: "center",
                          background: "#f76c24",
                          color: "white",
                        }}
                      >
                        {/* Add Item */}
                        Add More
                      </Button>
                    </TableCell>
                  ) : (
                    ""
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div
          style={{
            // display: "flex",
            // justifyContent: "end",
            marginBottom: "20px",
          }}
        >
          <TextField
            style={{
              margin: "30px 0",
              width: "20%",
            }}
            margin="dense"
            label="Attachment"
            type="file"
            fullWidth
            name="attachment"
            id="attachment"
            onChange={(e) => handleInputChange(e)}
            required
            InputLabelProps={{
              shrink: true,
            }}
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
