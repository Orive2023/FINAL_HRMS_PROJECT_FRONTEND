import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

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

import StateDebit from "./StateDebit";
import * as DebitApi from "./DebitApi";

const DebitForm = ({ formData, setFormData, setToggle, setFormVisible }) => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const navigate = useNavigate();
  const {
    subType,
    setSubType,
    company,
    setCompany,
    setPurchaseError,
    purchaseBy,
    setPurchaseBy,
    file,
    descriptionError,
    setDescriptionError,
    description,
    setDescription,
    setFile,
    updatedTotalAmount,
    genId,
    setGenId,
    debit,
    setDebit,
    open,
    setOpen,
    dateError,
    setDateError,
    recDelete,
    setRecDelete,
  } = StateDebit();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(totalAmount, value);

    if (name === "createdDate") {
      const isValidDate = value === getCurrentDate();
      setDateError(!isValidDate);
    }
    if (name === "subType" && value === "addNewsubType") {
      // Redirect to the department form in the department module
      navigate("/hr/account/sub-type");
      return;
    }
    
    if (e.target.name === "totalAmount") {
      setTotalAmount(e.target.value);
    }
    let ta;
    if (name === "amount") {
      ta = value;
    }

    const selectedAmmount = subType.find((emp) => emp.subType === value);
    if (selectedAmmount) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      subType: selectedAmmount.subType || "",

      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    setFormData({
      ...formData,
      [name]: value,
      [e.target.name]: e.target.value,
      total: totalAmount,
    });
  };

  const [totalAmount, setTotalAmount] = useState(0);

  const [items, setItems] = useState([
    {
      id: 1,

      voucherType: "",
      creditAccountHead: "",
      date: "",
      remark: "",
      debitVoucherTableEntities: [
        {
          debitVoucherTableId: "",
          accountName: "",
          subType: "",
          ledgerComment: "",
          amount: 0,
        },
      ],
      total: 0,
    },
  ]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,

      voucherType: "",
      creditAccountHead: "",
      date: "",
      remark: "",
      debitVoucherTableEntities: [
        {
          debitVoucherTableId: 0,
          accountName: "",
          subType: "",
          ledgerComment: "",
          amount: 0,
        },
      ],
      total: 0,
    };

    setItems([...items, newItem]);
    
    
    setFormData({
      ...formData,
      remark: "",
    });
  };

  console.log(formData);

  const removeItem = (id) => {
    console.log(id);
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    const updatedTotalAmount = updatedItems.reduce((total, item) => {
      const itemAmount = parseFloat(item.amount) || 0;
      return total + itemAmount;
    }, 0);

    setTotalAmount(updatedTotalAmount);
    formData.debitVoucherTableEntities.pop();
    setFormData({
      ...formData,
      remark: "",
    });
  };

  const handleItemChange = (id, field, value) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );

    setItems(updatedItems);
    setTotalAmount(updatedTotalAmount);

    if (field === "amount") {
      const updatedTotalAmount = updatedItems.reduce((total, item) => {
        const itemAmount = parseFloat(item.amount) || 0;
        return total + itemAmount;
      }, 0);

      setTotalAmount(updatedTotalAmount);
    }
    setFormData({
      ...formData,
      total: updatedTotalAmount,
    });
    const formDataWithUpdatedItems = {
      ...formData,
      total: updatedTotalAmount,
    };
    if (field === "totalAmount") {
      formDataWithUpdatedItems.totalAmount = value;
    }

    const formDataWithTotalAmount = {
      ...formData,
      total: updatedTotalAmount,
    };
    setFormData(formDataWithTotalAmount);

    if (field === "subType") {
      formDataWithUpdatedItems.subType = value;
    }

    if (field === "ledgerComment") {
      formDataWithUpdatedItems.ledgerComment = value;
    }

    if (field === "accountName") {
      formDataWithUpdatedItems.accountName = value;
    }

    if (field === "amount") {
      formDataWithUpdatedItems.amount = value;
    }

    if (field === "total") {
      formDataWithUpdatedItems.amount = value;
    }

    if (field === "voucherType") {
      formDataWithUpdatedItems.voucherType = value;
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

  let buttonCheck = true;
  // formData.date.length > 0 &&
  // formData.remark.length > 0 &&
  // formData.accountName.length > 0 &&
  // formData.subType.length > 0 &&
  // formData.ledgerComment.length > 0 &&
  // formData.amount.length > 0 &&
  // formData.totalAmount.length > 0;

  const cancelButton = () => {
    setFormVisible(false);
    setToggle(false);
    setFormData({
      voucherType: "",
      creditAccountHead: "",
      date: "",
      remark: "",
      debitVoucherTableEntities: [
        {
          debitVoucherTableId: 0,
          accountName: "",
          subType: "",
          ledgerComment: "",
          amount: 0,
        },
      ],
      total: 0,
    });
  };

  const saveDebit = async () => {
    try {
      await DebitApi.saveDebit(formData);
      navigate("hr/account/debit");
      DebitApi.loadDebit();
      setFormData({
        voucherType: "",
        creditAccountHead: "",
        date: "",
        remark: "",
        debitVoucherTableEntities: [
          {
            debitVoucherTableId: 0,
            accountName: "",
            subType: "",
            ledgerComment: "",
            amount: 0,
          },
        ],
        total: 0,
      });
      setGenId(genId + 1);
      handleClose();
    } catch (error) {
      console.error("Error saving debit:", error);
    }
  };
  const loadDebit = async () => {
    try {
      const result = await DebitApi.loadDebit();
      setDebit(result);
    } catch (error) {
      console.error("Error loading expenses:", error.response.data);
    }
  };
  useEffect(() => {
    fetchsubType();
    loadDebit();
  },[]);
  const fetchsubType = async () => {
    const response = await  DebitApi.fetchsubType();
    setSubType(response);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const VoucherTypes = [
    {
      value: "",
      label: "Select Voucher Type",
    },
    {
      value: "ABC BANK",
      label: "ABC BANK",
    },
    {
      value: "Cash In Hand",
      label: "Cash In Hand",
    },
    {
      value: "Petty Cash",
      label: "Petty Cash",
    },
    {
      value: "SCB BANK",
      label: "SCB BANK",
    },
  ];
  const Types = [
    {
      value: "",
      label: "Select Account name",
    },
    {
      value: "HDFC",
      label: "HDFC",
    },
    {
      value: "SBI",
      label: "SBI",
    },
    {
      value: "AXIS",
      label: "AXIS",
    },
    {
      value: "PNB",
      label: "PNB",
    },
  ];

  const handle = (e) => {
    setFormData({
      ...formData,
      total: totalAmount,
    });
  };

  const handleListChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedEntities = [...prevData.debitVoucherTableEntities];
      updatedEntities[index] = {
        ...updatedEntities[index],
        [name]: value,
      };
      return {
        ...prevData,
        debitVoucherTableEntities: updatedEntities,
      };
    });
  };

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
          label="Credit Account Head"
          id="outlined-size-small"
          value={formData.creditAccountHead}
          onChange={(e) => handleInputChange(e)}
          name="creditAccountHead"
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
            label="Voucher Type"
            id="outlined-size-small"
            select
            SelectProps={{
              native: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            name="voucherType"
            value={formData.voucherType}
            onChange={(e) => handleInputChange(e)}
          >
            {VoucherTypes.map((option, index) => (
              <option key={index} value={option.value}>
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
                <TableCell className="table-data">Account Name</TableCell>
                <TableCell className="table-data">Subtype</TableCell>
                <TableCell className="table-data">Ledger Comment</TableCell>
                <TableCell className="table-data">Amount</TableCell>

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
                      style={{
                        margin: "8px 15px",
                        width: "90%",
                      }}
                      label="Account Name"
                      id="outlined-size-small"
                      select
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="accountName"
                      value={
                        formData.debitVoucherTableEntities[item.id - 1]
                          ?.accountName
                      }
                      onChange={(e) => handleListChange(item.id - 1, e)}
                    >
                      {Types.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </TableCell>

                  {/* purchaseDate */}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <FormControl fullWidth>
          <InputLabel id="demo-company-select-label">Subtype</InputLabel>
          <Select
            labelId="demo-company-select-label"
            id="selectedCompany"
            value={formData.subType}
            name="subType"
            label="subType"
            onChange={(e) => handleInputChange(e)}
            required
          >
            {subType &&
             subType.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.subType}>
                    {item.subType}
                  </MenuItem>
                );
              })}
             <MenuItem className="linkStyle" value="addNewsubType">
      <a href="#">
        <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
       Create SubType
      </a>
    </MenuItem>

          </Select>
        </FormControl>
                  </TableCell>

                  {/* description */}
                  <TableCell
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    <TextField
                      name="ledgerComment"
                      value={
                        formData.debitVoucherTableEntities[item.id - 1]
                          ?.ledgerComment
                      }
                      onChange={(e) => {
                        handleDescriptionChange(e);
                        handleItemChange(
                          item.id,
                          "ledgerComment",
                          e.target.value
                        );
                        handleListChange(item.id - 1, e);
                      }}
                      // error={descriptionError}
                      // helperText={descriptionError}
                      onInput={(e) => {
                        e.target.value = enforceMaxLength(e.target.value, 30);
                        handleDescriptionChange(e);
                      }}
                      style={{ width: "100%" }}
                    />
                  </TableCell>

                  {/* Amount */}
                  <TableCell className="table-data">
                    <TextField
                      type="number"
                      name="amount"
                      value={
                        formData.debitVoucherTableEntities[item.id - 1]?.amount
                      }
                      onChange={(e) => {
                        handleItemChange(item.id, "amount", e.target.value);
                        handleListChange(item.id - 1, e);
                      }}
                      style={{ width: "100px" }}
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
            alignItems: "center",
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
            onChange={(e) => {
              handleItemChange(items[0].id, "totalAmount", e.target.value);
              handle(e);
            }}
          />
          <TextField
            margin="dense"
            label="Remark"
            type="text"
            halfWidth
            name="remark"
            id="remark"
            value={formData.remark}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div
          style={{
            // display: "flex",
            // justifyContent: "end",
            marginBottom: "20px",
          }}
        ></div>
      </div>
      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          type="submit"
          onClick={saveDebit}
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
    </form>
  );
        
};
  

export default DebitForm;
