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

import StateExpenses from "./StateExpenses";
import * as ExpensesApi from "./ExpensesApi";

const ExpensesForm = ({
  formData,
  setFormData,
  setFormVisible,
  toggle,
  setToggle,
}) => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const navigate = useNavigate();
  const {
    fileError,
    setFileError,
    purchaseError,
    setPurchaseError,
    setPurchaseBy,
    file,
    descriptionError,
    setDescriptionError,
    setDescription,
    setFile,
    updatedTotalAmount,
    genId,
    setGenId,
    expenses,
    setExpenses,
    setOpen,
    dateError,
    setDateError,
  } = StateExpenses();
  useEffect(() => {
    loadExpenses();
  }, []);
  const loadExpenses = async () => {
    try {
      const result = await ExpensesApi.loadExpenses();
      setExpenses(result);
    } catch (error) {
      console.error("Error loading expenses:", error.response.data);
    }
  };
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "createdDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    if (e.target.name === "total") {
      setTotalAmount(e.target.value);
    }
    let ta;
    if (name === "amount") {
      ta = value;
    }

    setFormData({
      ...formData,
      expenceId: expenses.length+1,
      [name]: value,
      total: ta,
      [name]: name === "uploadDocument" ? files[0] : value,
      total: totalAmount,
    });
  };

  const [totalAmount, setTotalAmount] = useState(0);

  const [items, setItems] = useState([
    {
      id: 1,
      expenceListId: 0,
      expenceId: expenses.length + 1,
      purchaseDate: "",
      description: "",
      purchasedBy: "",
      amount: 0,
    },
  ]);

  const addItem = async () => {
    const newItem = {
      id: items.length + 1,
      expenceListId: 0,
      expenceId: expenses.length + 1,
      purchaseDate: "",
      description: "",
      purchasedBy: "",
      amount: 0,
    };

    setItems([...items, newItem]);
    setSaveDisable(true);
    // setListData({
    //   expenceListId: 0,
    //   expenceId: expenses.length+1,
    //   purchaseDate: "",
    //   description: "",
    //   purchasedBy: "",
    //   amount: 0,
    // });
  };
  const removeItem = async (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    const updatedTotalAmount = updatedItems.reduce((total, item) => {
      const itemAmount = parseFloat(item.amount) || 0;
      return total + itemAmount;
    }, 0);

    setTotalAmount(updatedTotalAmount);

    await axios.delete(`https://api.orivehrms.com/expencelist/delete/${id}`);
  };

  const handleItemChange = (id, field, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
    setTotalAmount(updatedTotalAmount);
    let totalAmt;
    if (field === "amount") {
      const updatedTotalAmount = updatedItems.reduce((total, item) => {
        const itemAmount = parseFloat(item.amount) || 0;
        return total + itemAmount;
      }, 0);
      setTotalAmount(updatedTotalAmount);
      totalAmt = updatedTotalAmount;
    }

    setFormData({
      ...formData,
      total: totalAmt,
    });
    const formDataWithUpdatedItems = {
      ...formData,
      total: totalAmt,
    };
    if (field === "totalAmount") {
      formDataWithUpdatedItems.totalAmount = value;
    }

    const formDataWithTotalAmount = {
      ...formData,
      total: totalAmt,
    };
    setFormData(formDataWithTotalAmount);

    if (field === "purchaseDate") {
      formDataWithUpdatedItems.purchaseDate = value;
    }

    if (field === "description") {
      formDataWithUpdatedItems.description = value;
    }

    if (field === "purchaseBy") {
      formDataWithUpdatedItems.purchaseBy = value;
    }

    if (field === "amount") {
      formDataWithUpdatedItems.amount = value;
    }

    if (field === "total") {
      formDataWithUpdatedItems.amount = value;
    }

    if (field === "expenseType") {
      formDataWithUpdatedItems.expenseType = value;
    }

    setFormData(formDataWithUpdatedItems);
  };

  const validateInput = (value, setValue, setError, fieldName) => {
    const isValid =
      value.length >= 2 && value.length <= 30 && /^[a-zA-Z\s]+$/.test(value);
    setPurchaseError(
      isValid
        ? ""
        : `${fieldName} must be between 2 to 30 characters and only alphabets must be used.`
    );
    setValue(value);
  };

  const validateInput2 = (value, setValue, setError, fieldName) => {
    const isValid =
      value.length >= 2 && value.length <= 30 && /^[a-zA-Z\s]+$/.test(value);
    setDescriptionError(
      isValid
        ? ""
        : `${fieldName} must be between 2 to 30 characters and only alphabets must be used.`
    );
    setValue(value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    validateInput2(
      e.target.value,
      setDescription,
      setDescriptionError,
      "description"
    );
  };

  const handlePurchaseChange = (e) => {
    setPurchaseBy(e.target.value);
    validateInput(
      e.target.value,
      setPurchaseBy,
      setPurchaseError,
      "purchaseBy"
    );
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.length <= maxLength ? value : value.slice(0, maxLength);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Check if the file is a PDF
      if (selectedFile.type !== "application/pdf") {
        setFileError("Please upload a PDF file.");
        setFile(null);
        return;
      }

      // Check if the file size is within the limit (1 MB)
      const fileSizeMB = selectedFile.size / (1024 * 1024);
      if (fileSizeMB > 1) {
        setFileError("File size exceeds the maximum limit of 1 MB.");
        setFile(null);
        return;
      }

      // Set the file if it passes validation
      setFile(selectedFile);
      setFileError("");
    }
  };

  const saveExpenses = async (e) => {
    try {
      await ExpensesApi.saveExpenses(formData);
      navigate("/hr/organisation/expenses");
      ExpensesApi.loadExpenses();
      setFormData({
        expenseID: "",
        expenseType: "",
        purchaseDate: "",
        description: "",
        purchaseBy: "",
        amount: "",
        totalAmount: "",
        uploadDocument: "",
      });

      handleClose();
    } catch (error) {
      console.error("Error saving expenses:", error);
    }
    setSaveDisable(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  const ExpenseTypes = [
    {
      value: "",
      label: "Select Expense Type",
    },
    {
      value: "Travel Expenses",
      label: "Travel Expenses",
    },
    {
      value: "Training and Development",
      label: "Training and Development",
    },
    {
      value: "Office Supplies",
      label: "Office Supplies",
    },
    {
      value: "Meals and Entertainment",
      label: "Meals and Entertainment",
    },
    {
      value: "Communication",
      label: "Communication",
    },
    {
      value: "Miscellaneous",
      label: "Miscellaneous",
    },
    {
      value: "Health and Wellness",
      label: "Health and Wellness",
    },
    {
      value: "Technology and Equipment",
      label: "Technology and Equipment",
    },
    {
      value: "Conferences and Events",
      label: "Conferences and Events",
    },
    {
      value: "Transportation",
      label: "Transportation",
    },
    {
      value: "Remote Work Expenses",
      label: "Remote Work Expenses",
    },
    {
      value: "Gifts and Recognition",
      label: "Gifts and Recognition",
    },
    {
      value: "Insurance",
      label: "Insurance",
    },
    {
      value: "Professional Memberships",
      label: "Professional Memberships",
    },
    {
      value: "Marketing and Advertising",
      label: "Marketing and Advertising",
    },
  ];

  const [listData, setListData] = useState({
    expenceListId: 0,
    expenceId: 0,
    purchaseDate: "",
    description: "",
    purchasedBy: "",
    amount: 0,
  });

  const handleListChange = (e) => {
    setListData({
      ...listData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async (id) => {
    setSaveDisable(false);
    await axios.post("https://api.orivehrms.com/expencelist/add", items[id - 1]);
  };

  const [increment, setIncrement] = useState(1);
  const [saveDisable, setSaveDisable] = useState(true);

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      expenceId: "",
      expenceType: "",
      createdDate: getCurrentDate(),
      total: 0,
      uploadDocument: null,
    });
  };

  console.log("len", expenses);
  console.log("formdata", formData);

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          style={{
            margin: "8px 15px",
            width: "30%",
          }}
          label="Expense ID"
          name="expenceId"
          placeholder="Expense ID"
          id="outlined-size-small"
          value={expenses.length + 1}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            setFormData({
              ...formData,
              expenceId: e.target.value,
            });
            handleInputChange(e);
          }}
          disabled
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
          }}
        >
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            label="Expense Type"
            id="outlined-size-small"
            select
            SelectProps={{
              native: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            name="expenceType"
            value={formData.expenceType}
            onChange={(e) => handleInputChange(e)}
          >
            {ExpenseTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            margin="dense"
            label="Created Date"
            type="date"
            fullWidth
            name="createdDate"
            id="createdDate"
            value={formData.createdDate}
            onChange={(e) => handleInputChange(e)}
            required
            disabled
            error={dateError}
            helperText={dateError && "Please select the current date"}
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
                <TableCell className="table-data">Expense ID</TableCell>
                <TableCell className="table-data">Purchase Date</TableCell>
                <TableCell className="table-data">Description</TableCell>
                <TableCell className="table-data">Purchased By</TableCell>
                <TableCell className="table-data">Amount</TableCell>
                <TableCell className="table-data">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id} style={{ border: "1px solid #ddd" }}>
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      disabled={true}
                      value={item.id}
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
                      value={expenses.length + 1}
                      name="expenceId"
                      disabled
                      onChange={(e) => {
                        setItems({
                          ...items,
                          expenceId: expenses.length + 1,
                        });
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
                      type="date"
                      value={item.purchaseDate}
                      name="purchaseDate"
                      onChange={(e) => {
                        handleItemChange(
                          item.id,
                          "purchaseDate",
                          e.target.value
                        );
                        handleListChange(e);
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
                      value={item.description}
                      name="description"
                      onChange={(e) => {
                        handleDescriptionChange(e);
                        handleItemChange(
                          item.id,
                          "description",
                          e.target.value
                        );
                        handleListChange(e);
                      }}
                      error={descriptionError}
                      helperText={descriptionError}
                      onInput={(e) => {
                        e.target.value = enforceMaxLength(e.target.value, 30);
                        handleDescriptionChange(e);
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
                      value={item.purchasedBy}
                      name="purchasedBy"
                      onChange={(e) => {
                        handlePurchaseChange(e);
                        handleItemChange(
                          item.id,
                          "purchasedBy",
                          e.target.value
                        );
                      }}
                      error={purchaseError}
                      helperText={purchaseError}
                      onInput={(e) => {
                        e.target.value = enforceMaxLength(e.target.value, 30);
                        handlePurchaseChange(e);
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
                      name="amount"
                      value={item.amount}
                      onChange={(e) => {
                        handleItemChange(item.id, "amount", e.target.value);
                        handleListChange(e);
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
                    {item.id === increment ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleAdd(item.id)}
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
                        removeItem(item.id);
                        setIncrement(increment - 1);
                      }}
                      disabled={items.length === 1 ? true : false}
                    >
                      {/* Delete */}
                      {<DeleteIcon />}
                    </Button>
                  </TableCell>
                  {item.id === increment ? (
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
            style={{ margin: " 20px 15px", width: "20%" }}
            required
            InputLabelProps={{
              shrink: true,
            }}
            disabled
            onChange={(e) => {
              handleItemChange(items[0].id, "total", e.target.value);
              handleInputChange(e);
            }}
          />
        </div>
        <div
          style={{
            // display: "flex",
            // justifyContent: "end",
            marginBottom: "20px",
          }}
        >
          <TextField
            margin="dense"
            label="Company Expense Report"
            type="file"
            name="uploadDocument"
            id="uploadDocument"
            inputProps={{ accept: ".pdf" }}
            onChange={(e) => {
              handleInputChange(e);
              handleFileChange(e);
            }}
            InputLabelProps={{
              shrink: true,
            }}
            error={!!fileError}
            helperText={fileError}
            style={{ margin: " 0px 15px", width: "20%" }}
          />
        </div>

        <div className="data-buttons">
          <Button
            id="input-btn-submit"
            className="submit"
            type="submit"
            onClick={saveExpenses}
            variant="outlined"
            disabled={saveDisable}
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

export default ExpensesForm;
