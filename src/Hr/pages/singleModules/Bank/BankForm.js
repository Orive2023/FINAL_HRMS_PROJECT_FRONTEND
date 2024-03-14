import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as bankapi from "./bankapi";
import { useNavigate } from "react-router-dom";
import BankState from "./BankState";

const BankForm = ({ formData,setFormData, setFormVisible,setToggle }) => {
  const navigate = useNavigate();

  const {
    
    formVisible,
    toggle,
    addbank,
    setAddBank,
    open,
    setOpen,
    bankNameError,
    accountName,
    setBankNameError,
    accountNameError,
    setAccountNameError,
    accountNumber,
    accountNumberError,
    setAccountNumberError,
    branchNameError,
    setBranchNameError,
    recDelete,
    setRecDelete,
  } = BankState();
  const loadAddbank = async () => {
    const result = await bankapi.loadAddbank();
    setAddBank(result);
  };

  useEffect(() => {
    loadAddbank();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Alphabetic validation using regex
    const isAlphabetic = /^[A-Za-z\s]+$/.test(value);

    // Size validation
    const isValidSize = value.length >= 2 && value.length <= 100;

    // Required validation
    const isRequired = value.trim() !== "";

    // Numeric validation with 1 to 15 digits
    const isNumeric = /^\d{1,15}$/.test(value);

    if (name === "bankName") {
      if (!isRequired) {
        setBankNameError("Bank Name is required");
        // console.log("Bank Name is required")
      } else if (!isAlphabetic) {
        setBankNameError("Bank Name should only contain alphabetic characters");
      } else if (!isValidSize) {
        setBankNameError("Bank Name should be between 2 and 100 characters");
      } else {
        setBankNameError("");
      }
    } else if (name === "accountName") {
      // Account Name validation
      if (!isRequired) {
        setAccountNameError("Account Name is required");
      } else if (!isAlphabetic) {
        setAccountNameError(
          "Account Name should only contain alphabetic characters"
        );
      } else if (!isValidSize) {
        setAccountNameError(
          "Account Name should be between 2 and 100 characters"
        );
      } else {
        setAccountNameError("");
      }
    } else if (name === "accountNumber") {
      // Account Number validation
      if (!isRequired) {
        setAccountNumberError("Account Number is required");
      } else if (!isNumeric) {
        setAccountNumberError(
          "Account Number should be numeric with at least 15 digits"
        );
      } else {
        setAccountNumberError("");
      }
    } else if (name === "branchName") {
      //Branch Name validation
      if (!isRequired) {
        setBranchNameError("Branch Name is required");
      } else if (!isAlphabetic) {
        setBranchNameError(
          "Branch Name should only contain alphabetic characters"
        );
      } else if (!isValidSize) {
        setBranchNameError(
          "Branch Name should be between 2 and 100 characters"
        );
      } else {
        setBranchNameError("");
      }
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const accountTypeList = [
    {
      value: "Savings Account",
      label: "Savings Account",
    },
    {
      value: "Checking Account",
      label: "Checking Account",
    },
    {
      value: "Certificate of Deposit (CD)",
      label: "Certificate of Deposit (CD)",
    },
    {
      value: "Money Market Account",
      label: "Money Market Account",
    },
    {
      value: "Joint Account",
      label: "Joint Account",
    },
    {
      value: "Business Account",
      label: "Business Account",
    },
    {
      value: "Individual Retirement Account (IRA)",
      label: "Individual Retirement Account (IRA)",
    },
    {
      value: "Trust Account",
      label: "Trust Account",
    },
    {
      value: "Student Account",
      label: "Student Account",
    },
  ];

  const saveAddbank = async () => {
    await bankapi.saveAddbank(formData);
    navigate("/hr/bank/add-bank ");
    setFormData({
      bankName: "",
      accountName: "",
      accountNumber: "",
      accountType: "",
      branchName: "",
    });
  };
  const handleSubmit = (e) => { 
    // e.preventDefault();
    loadAddbank();
    console.log("Form submitted:", formData);
  };
  

  let buttonCheck = 
  formData.bankName.length > 0
   && formData.accountName.length > 0 && formData.accountNumber.length > 0 && (formData.accountType.length > 0) && (formData.branchName.length > 0)


  const cancelButton = () => {
    setFormVisible(false)
    setToggle(false)
    setFormData({
      bankName: "",
      accountName: "",
      accountNumber: "",
      accountType: "",
      branchName: "",
    })
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="data-input-fields">
      <TextField
        margin="dense"
        label="Bank Name"
        type="text"
        fullWidth
        name="bankName"
        id="bankName"
        value={formData.bankName}
        onChange={(e) => handleInputChange(e)}
        required
        helperText={bankNameError}
        error={Boolean(bankNameError === "" ? false : true)}
      />
      <TextField
        margin="dense"
        label="Account Name"
        type="text"
        fullWidth
        name="accountName"
        id="accountName"
        value={formData.accountName}
        onChange={(e) => handleInputChange(e)}
        required
        helperText={accountNameError}
        error={Boolean(accountNameError)}
      />
    </div>
    <div className="data-input-fields">
      <TextField
        margin="dense"
        label="Account Number"
        type="number"
        fullWidth
        name="accountNumber"
        id="accountNumber"
        value={formData.accountNumber}
        onChange={(e) => handleInputChange(e)}
        inputProps={{
    inputMode: 'numeric',
    pattern: '[0-9]*' // Only allow numeric input
  }}
        required
        helperText={accountNumberError}
        error={Boolean(accountNumberError)}
      />
      <TextField
        margin="dense"
        label="Branch Name"
        type="text"
        fullWidth
        name="branchName"
        id="branchName"
        value={formData.branchName}
        onChange={(e) => handleInputChange(e)}
        required
        helperText={branchNameError}
        error={Boolean(branchNameError)}
      />
      <TextField
        id="accountType"
        margin="dense"
        select
        label="Account Type"
        fullWidth
        defaultValue="Choose"
        SelectProps={{
          native: true,
        }}
        InputLabelProps={{
          shrink: true,
          htmlFor: "accountType", // Add the 'htmlFor' property with the ID of the input field
        }}
        value={formData.accountType}
        onChange={(e) => handleInputChange(e)}
        name="accountType"
        required
      >
        <option disabled value="">
          Choose Account Type
        </option>
        {accountTypeList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>

    <div className="data-buttons">
      <Button
        id="input-btn-submit"
        variant="outlined"
        type="submit"
        onClick={saveAddbank}
        disabled={buttonCheck ? false : true}
      >
        Submit
      </Button>
      <Button
        id="input-btn-cancel"
        variant="outlined"
        onClick={cancelButton}
      >
        Cancel
      </Button>
    </div>
  </form>
  );
};

export default BankForm;
