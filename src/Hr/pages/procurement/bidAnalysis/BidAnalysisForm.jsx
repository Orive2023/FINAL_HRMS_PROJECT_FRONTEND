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

import BidAnalysisState from "./BidAnalysisState";
import * as BidAnalysisApi from "./BidAnalysisApi";

const BidAnalysisForm = ({
  formData,
  setFormData,
  setFormVisible,
  setToggle,
}) => {
  const navigate = useNavigate();
  const {
    setPurchaseError,
    setDescriptionError,
    updatedTotalAmount,
    genId,
    setGenId,
    setBidAnalysis,
  } = BidAnalysisState();

  const [quant, setQuant] = useState(0);
  const [pri, setPri] = useState(0);
  const [company, setCompany] = useState([]);
  const [bidAllData, setBidAllData] = useState([]);
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
      bidAnalysisId: bidAllData.length + 1,
      name: "",
      signature: null,
      date: "",
    },
  ]);

  const addItem = async () => {
    const newItem = {
      id: items.length + 1,
      bidAnalysisId: bidAllData.length + 1,
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

    const updatedTotalAmount = updatedItems.reduce((total, item) => {
      const itemAmount = parseFloat(item.total) || 0;
      return total + itemAmount;
    }, 0);

    setTotalAmount(updatedTotalAmount);

    await axios.delete(`https://localhost:8080/companylist/delete/${id}`);
    loadBid();
  };

  const handleItemChange = (id, field, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
    setTotalAmount(updatedTotalAmount);

    if (field === "total") {
      const updatedTotalAmount = updatedItems.reduce((totalPrice, item) => {
        const itemAmount = parseFloat(item.total) || 0;
        return totalPrice + itemAmount;
      }, 0);
      setTotalAmount(updatedTotalAmount);
    }

    setFormData({
      ...formData,
      totalAmount: updatedTotalAmount,
    });
    const formDataWithUpdatedItems = {
      ...formData,
      totalAmount: updatedTotalAmount,
    };
    if (field === "totalAmount") {
      formDataWithUpdatedItems.totalAmount = value;
    }

    const formDataWithTotalAmount = {
      ...formData,
      totalAmount: updatedTotalAmount,
    };
    setFormData(formDataWithTotalAmount);

    if (field === "total") {
      formDataWithUpdatedItems.total = value;
    }

    setFormData(formDataWithUpdatedItems);
  };

  const saveBid = async () => {
    try {
      await BidAnalysisApi.saveBid(formData);
      window.location.reload();
      navigate("/hr/procurement/bidAnalysis");
      setGenId(genId + 1);
      handleClose();
    } catch (error) {
      console.error("Error saving expenses:", error);
    }
    setSaveDisable(true);
  };

  const loadAllBid = async () => {
    await BidAnalysisApi.loadAllBid().then((result) => {
      setBidAllData(result);
    });
  };

  // const loadBid = async () => {
  //   try {
  //     const result = await axios.get(
  //       `https://localhost:8080/quotationlist/${bidAllData.length + 1}`
  //     );
  //     setCompany(result.data);
  //   } catch (error) {
  //     console.error("Error loading bid:", error);
  //   }
  // };
  const loadBid = async () => {
    try {
      const result = await axios.get(
        `https://localhost:8080/companylist/${bidAllData.length + 1}`
      );
      setCompany(result.data);
    } catch (error) {
      console.error("Error loading bid:", error);
    }
  };

  useEffect(() => {
    if (bidAllData.length > 0) {
      loadBid();
    }
  }, []);

  const handleClose = () => {
    setToggle(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const [listData, setListData] = useState({
    companyListId: 0,
    bidAnalysisId: 0,
    company: "",
    description: "",
    reasonOfChoosing: "",
    remarks: "",
    unitName: "",
    quantity: 0,
    price: 0,
    total: 0,
    grandTotal: 0,
  });

  console.log(listData);

  const [quotationData, setQuotationData] = useState({
    bidAnalysisId: "",
    name: "",
    signature: null,
    date: "",
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
  //   await axios.post("https://localhost:8080/quotationlist/add", {
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
  const handleAdd = async (id) => {
    setListData({
      ...listData,
      total: quantPriceValue,
    });
    await axios.post("https://localhost:8080/companylist/add", {
      ...listData,
      total: quantPriceValue,
      bidAnalysisId: bidAllData.length + 1,
    });
    setQuantPriceValue(0);
    setQuant(0);
    setPri(0);
    loadBid();
    setListData({
      company: "",
      description: "",
      reasonOfChoosing: "",
      remarks: "",
      unitName: "",
      quantity: 0,
      price: 0,
      total: 0,
      grandTotal: 0,
    });
  };

  useEffect(() => {
    setQuantPriceValue(quant * pri);

    loadAllBid();
  }, [quant, pri]);

  const handleComAdd = async (id) => {
    setSaveDisable(false);
    await axios.post(
      "https://localhost:8080/committeelist/create/committeelist",
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

    await axios.delete(`https://localhost:8080/committeelist/delete/${id}`);
  };

  const handleQuotationChange = (e) => {
    const { name, value, files } = e.target;
    setQuotationData({
      ...quotationData,
      [e.target.name]: e.target.value,
      [name]: name === "signature" ? files[0] : value,
      bidAnalysisId: bidAllData.length + 1,
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
            label="SBA / No *"
            id="outlined-size-small"
            value={bidAllData?.length + 1}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleInputChange(e)}
            disabled
          />
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
            label="Status"
            type="text"
            fullWidth
            name="status"
            id="status"
            value={formData.status}
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
        <TableContainer component={Paper}>
          <Table style={{ border: "1px solid #ddd" }}>
            <TableHead>
              <TableRow style={{ background: "#f2f2f2" }}>
                <TableCell className="table-data">Serial No.</TableCell>
                <TableCell className="table-data">Bid Analysis Id</TableCell>
                <TableCell className="table-data">Company</TableCell>
                <TableCell className="table-data">Description</TableCell>
                <TableCell className="table-data">Reason Of Choosing</TableCell>
                <TableCell className="table-data">Remarks</TableCell>
                <TableCell className="table-data">Unit Name</TableCell>
                <TableCell className="table-data">Quantity</TableCell>
                <TableCell className="table-data">Price</TableCell>
                <TableCell className="table-data">Total</TableCell>
                <TableCell className="table-data">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {company
                ? company.map((list, index) => (
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
                          style={{ width: "70px" }}
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
                          value={list.bidAnalysisId}
                          name="quotationId"
                          disabled
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
                          value={list.company}
                          name="company"
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
                          value={list.description}
                          name="description"
                          disabled
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
                          value={list.reasonOfChoosing}
                          name="reasonOfChoosing"
                          disabled
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
                          value={list.remarks}
                          name="remarks"
                          disabled
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
                          value={list.unitName}
                          name="unitName"
                          disabled
                          style={{ width: "100%" }}
                        />
                      </TableCell>

                      {/* Amount */}
                      <TableCell
                        style={{
                          border: "1px solid #ddd",
                          padding: "8px",
                        }}
                      >
                        <TextField
                          type="number"
                          name="quantity"
                          value={list.quantity}
                          disabled
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
                          type="number"
                          name="price"
                          value={list.price}
                          disabled
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
                          type="text"
                          value={list.total}
                          name="total"
                          disabled
                          onInput={() => console.log("first")}
                          style={{ width: "90%" }}
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
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                            removeItem(list.companyListId);
                          }}
                        >
                          {/* Delete */}
                          {<DeleteIcon />}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                : ""}

              <TableRow style={{ border: "1px solid #ddd" }}>
                <TableCell
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                  }}
                >
                  <TextField
                    disabled={true}
                    value={company ? company.length + 1 : 1}
                    style={{ width: "70px" }}
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
                    value={bidAllData.length + 1}
                    name="bidAnalysisId"
                    disabled
                    onChange={(e) => {
                      handleListChange(e);
                    }}
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
                    value={listData.company}
                    name="company"
                    onChange={(e) => {
                      handleListChange(e);
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
                    value={listData.description}
                    name="description"
                    onChange={(e) => {
                      handleListChange(e);
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
                    value={listData.reasonOfChoosing}
                    name="reasonOfChoosing"
                    onChange={(e) => {
                      handleListChange(e);
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
                    value={listData.remarks}
                    name="remarks"
                    onChange={(e) => {
                      handleListChange(e);
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
                    value={listData.unitName}
                    name="unitName"
                    onChange={(e) => {
                      handleListChange(e);
                    }}
                    style={{ width: "100%" }}
                  />
                </TableCell>

                {/* Amount */}
                <TableCell
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                  }}
                >
                  <TextField
                    type="number"
                    name="quantity"
                    value={listData.quantity}
                    onChange={(e) => {
                      handleListChange(e);
                      setQuant(e.target.value);
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
                    type="number"
                    name="price"
                    value={listData.price}
                    onChange={(e) => {
                      handleListChange(e);
                      setPri(e.target.value);
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
                    type="text"
                    value={quant * pri}
                    name="total"
                    onChange={(e) => {
                      handleListChange(e);
                      handleTextFieldChange();
                    }}
                    onInput={() => console.log("first")}
                    style={{ width: "90%" }}
                  />
                </TableCell>

                {/* Action */}

                <TableCell
                  style={{
                    border: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAdd()}
                  >
                    {/* Add Item */}
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "20px",
          }}
        >
          <TextField
            name="total"
            type="number"
            label="Total Amount"
            id="outlined-size-small"
            value={totalAmount}
            style={{ margin: " 20px 0", width: "20%" }}
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              handleItemChange(items[0].id, "totalAmount", e.target.value);
              handleInputChange(e);
            }}
          />
        </div> */}
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

        <div>
          <h1
            style={{
              marginBottom: "15px",
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            Committee List
          </h1>
          <TableContainer component={Paper}>
            <Table style={{ border: "1px solid #ddd" }}>
              <TableHead>
                <TableRow style={{ background: "#f2f2f2" }}>
                  <TableCell className="table-data">Serial No.</TableCell>
                  <TableCell className="table-data">Bid Analysis Id</TableCell>
                  <TableCell className="table-data">Name</TableCell>
                  <TableCell className="table-data">Signature</TableCell>
                  <TableCell className="table-data">date</TableCell>
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
                        onChange={(e) =>
                          handleItemChange(item.id, "id", e.target.value)
                        }
                        style={{ width: "70px" }}
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
                        value={bidAllData.length + 1}
                        name="bidAnalysisId"
                        disabled
                        onChange={(e) => {
                          handleItemChange(
                            item.id,
                            "bidAnalysisId",
                            e.target.value * 2
                          );
                        }}
                        style={{ width: "70px" }}
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
                        value={item.name}
                        name="name"
                        onChange={(e) => {
                          handleItemChange(item.id, "name", e.target.value);
                          handleQuotationChange(e);
                        }}
                        style={{ width: "90%" }}
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
                        // value={item.signature}
                        name="signature"
                        type="file"
                        onChange={(e) => {
                          handleItemChange(
                            item.id,
                            "signature",
                            e.target.value
                          );
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
                        value={item.date}
                        name="date"
                        type="date"
                        onChange={(e) => {
                          handleItemChange(item.id, "date", e.target.value);
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
        </div>

        <div className="data-buttons">
          <Button
            id="input-btn-submit"
            className="submit"
            type="submit"
            onClick={saveBid}
            variant="outlined"
          >
            Submit
          </Button>
          <Button
            id="input-btn-cancel"
            className="cancel"
            onClick={() => {setFormVisible(false); setToggle(false)}}
            variant="outlined"
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BidAnalysisForm;
