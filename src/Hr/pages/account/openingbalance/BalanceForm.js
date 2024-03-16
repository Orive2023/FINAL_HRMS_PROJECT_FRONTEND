import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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

import StateBalance from "./StateBalance";
import * as BalanceApi from "./BalanceApi";

const BalanceForm = ({ formData, setFormData, setFormVisible, setToggle }) => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const navigate = useNavigate();
  const {
    updatedTotalCredit,
    setUpdatedTotalCredit,
    updatedTotalDebit,
    setUpdatedTotalDebit,
    genId,
    setGenId,
    Balance,
    setBalance,
    open,
    setOpen,
    dateError,
    setDateError,
    recDelete,
    totalDebit,
    setTotalDebit,
    totalCredit,
    setTotalCredit,
  } = StateBalance();

  useEffect(() => {
    loadBalance();
  }, []);

  const [totalAmount, setTotalAmount] = useState(0);

  const [items, setItems] = useState([
    {
      id: 1,
      genId: "",
      financialYear: "",
      date: "",
      accountName: "",
      subType: "",
      debit: "",
      credit: "",
      totalDebit: "",
      totalCredit: "",
    },
  ]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      genId: "",
      totalCredit: "",
      financialYear: "",
      date: "",
      accountName: "",
      subType: "",
      debit: "",
      credit: "",
      totalDebit: "",
    };

    setItems([...items, newItem]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "totalCredit" || name === "totalDebit") {
      setFormData({
        ...formData,
        [name]: parseFloat(value) || 0,
      });
    } else if (name === "createdDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    const updatedTotalDebit = updatedItems.reduce((total, item) => {
      const itemAmount = parseFloat(item.debit) || 0;
      return total + itemAmount;
    }, 0);

    setTotalDebit(updatedTotalDebit);

    const updatedTotalCredit = updatedItems.reduce((total, item) => {
      const itemAmount = parseFloat(item.credit) || 0;
      return total + itemAmount;
    }, 0);

    setTotalCredit(updatedTotalCredit);
  };

  const handleItemChange = (id, field, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );

    setItems(updatedItems);

    if (field === "debit") {
      const updatedTotalDebit = updatedItems.reduce((total, item) => {
        const itemAmount = parseFloat(item.debit) || 0;
        return total + itemAmount;
      }, 0);

      setTotalDebit(updatedTotalDebit);
    } else if (field === "credit") {
      const updatedTotalCredit = updatedItems.reduce((total, item) => {
        const itemAmount = parseFloat(item.credit) || 0;
        return total + itemAmount;
      }, 0);

      setTotalCredit(updatedTotalCredit);
    }

    const formDataWithUpdatedItems = {
      ...formData,
      totalDebit: updatedTotalDebit,
      totalCredit: updatedTotalCredit,
    };

    setFormData(formDataWithUpdatedItems);
  };
  const saveBalance = async () => {
    try {
      await BalanceApi.saveBalance(formData);
      navigate("/hr/account/opening-balance");
      BalanceApi.loadBalance();
      setGenId(genId + 1);
      handleClose();
    } catch (error) {
      console.error("Error saving Balance:", error);
    }
  };

  const loadBalance = async () => {
    try {
      const result = await BalanceApi.loadBalance();
      setBalance(result);
    } catch (error) {
      console.error("Error loading Balance:", error.response.data);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    handleClose();
  };

  const Types = [
    {
      value: "",
      label: "Select Year",
    },
    {
      value: "2021",
      label: "2021",
    },
    {
      value: "2022",
      label: "2022",
    },
    {
      value: "2023",
      label: "2023",
    },
    {
      value: "2024",
      label: "2024",
    },
    {
      value: "2025",
      label: "2025",
    },
  ];

  let buttonCheck = true;
  // formData.financialYear.length > 0 &&
  // formData.date.length > 0 &&
  // formData.totalDebit.length > 0 &&
  // formData.totalCredit.length > 0;

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      genId: "",
      totalCredit: "",
      financialYear: "",
      date: "",
      accountName: "",
      subType: "",
      debit: "",
      credit: "",
      totalDebit: "",
      totalCredit: "",
    });
  };

  const handleListChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedEntities = [...prevData.openingBalanceTableEntities];
      updatedEntities[index] = {
        ...updatedEntities[index],
        [name]: value,
      };
      return {
        ...prevData,
        openingBalanceTableEntities: updatedEntities,
      };
    });
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
            gap: "30px",
          }}
        >
          <TextField
            style={{
              margin: "8px 15px",
              width: "30%",
            }}
            label="Financial Year"
            id="outlined-size-small"
            select
            SelectProps={{
              native: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            name="financialYear"
            value={formData.financialYear}
            onChange={(e) => handleInputChange(e)}
          >
            {Types.map((option) => (
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
                <TableCell className="table-data">Account Name</TableCell>
                <TableCell className="table-data">SubType</TableCell>
                <TableCell className="table-data">Debit</TableCell>
                <TableCell className="table-data">Credit</TableCell>
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
                      value={item.id}
                      onChange={(e) => {
                        handleItemChange(item.id, "id", e.target.value);
                      }}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* account name */}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      name="accountName"
                      value={
                        formData.openingBalanceTableEntities[index]?.accountName
                      }
                      onChange={(e) => {
                        handleItemChange(
                          item.id,
                          "accountName",
                          e.target.value
                        );
                        handleListChange(index, e);
                      }}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* subtype */}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      name="subType"
                      value={
                        formData.openingBalanceTableEntities[index]?.subType
                      }
                      onChange={(e) => {
                        handleItemChange(item.id, "subType", e.target.value);
                        handleListChange(index, e);
                      }}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* Debit */}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      type="number"
                      name="debit"
                      value={formData.openingBalanceTableEntities[index]?.debit}
                      onChange={(e) => {
                        handleItemChange(item.id, "debit", e.target.value);
                        handleListChange(index, e);
                      }}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* Credit   */}
                  <TableCell className="table-data">
                    <TextField
                      type="number"
                      name="credit"
                      value={
                        formData.openingBalanceTableEntities[index]?.credit
                      }
                      onChange={(e) => {
                        handleItemChange(item.id, "credit", e.target.value);
                        handleListChange(index, e);
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
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      // startIcon={<AddIcon />}
                      onClick={() => addItem(item.id)}
                      style={{
                        marginBottom: "7px",
                        justifyContent: "center",
                      }}
                    >
                      {/* Add Item */}
                      {<AddIcon />}
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      // startIcon={<DeleteIcon />}
                      onClick={() => removeItem(item.id)}
                    >
                      {/* Delete */}
                      {<DeleteIcon />}
                    </Button>
                  </TableCell>
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
            name="totalDebit"
            type="number"
            label="Total Debit"
            id="outlined-size-small"
            value={totalDebit}
            style={{ margin: " 20px 15px", width: "20%" }}
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              handleItemChange(items[0].id, "totalDebit", e.target.value);
              handleInputChange(e);
            }}
          />
          <TextField
            name="totalCredit"
            type="number"
            label="Total Credit"
            id="outlined-size-small"
            value={totalCredit}
            style={{ margin: " 20px 15px", width: "20%" }}
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              handleItemChange(items[0].id, "totalCredit", e.target.value);
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
        ></div>

        <div className="data-buttons">
          <Button
            id="input-btn-submit"
            className="submit"
            type="submit"
            onClick={saveBalance}
            variant="outlined"
            disabled={buttonCheck ? false : true}
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

export default BalanceForm;
