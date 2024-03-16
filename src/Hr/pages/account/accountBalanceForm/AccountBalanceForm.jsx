import React, { useState,useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
 import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useNavigate} from 'react-router-dom';
 import StateAccountBalance from "./StateAccountBalance";
import * as AccountBalanceApi from "./AccountBalanceApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';


const AccountBalanceForm = ({formData,setFormData, setFormVisible, setToggle}) => {
  const navigate = useNavigate()

    const {
        AccountBalance,
        setAccountBalance,
        employee,
        setEmployee,
        department,
        setDepartment,
        open,
        setOpen,
        recDelete,
        setRecDelete,
        dateError,
        setDateError,
      

   } = StateAccountBalance();
    const loadAccountBalance = async () => {
        const result = await AccountBalanceApi.loadAccountBalance()
        setAccountBalance(result);
      };

      useEffect(() => {
        loadAccountBalance()
        fetchEmployee();
        fetchDepartment();
      },[])
      const fetchEmployee = async () => {
        const employeeData = await AccountBalanceApi.fetchEmployee();
        setEmployee(employeeData);
      };
      const fetchDepartment = async () => {
        const departmentData = await AccountBalanceApi.fetchDepartment();
        setDepartment(departmentData);
      };

      const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = `${now.getMonth() + 1}`.padStart(2, '0');
        const day = `${now.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
      
    //   const handleManualEntryChange = (e) => {
    //     setFormData({
    //       ...formData,
    //       manualCompanyName: e.target.value,
    //     });
    //   };
    
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'createdDate') {
          const isValidDate = value === getCurrentDate();
          setDateError(!isValidDate);
        }

        if (name === "employeeName" && value === "addNewEmployee") {
          // Redirect to the company form in the company module
          navigate("/hr/employee/employee");
          return;
        }
        const selectedEmployee = employee.find((emp) => emp.employeeName === value);
        if (selectedEmployee) {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          username: selectedEmployee.username || "",
          email: selectedEmployee.email || "",
    
          });
        } else {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        }
      };
      const Type = [
            {
              value: "",
              label: "Select Reversed Account Head Type",
            },
            {
              value: "ABC BANK",
              label: "ABC BANK",
            },
            {
              value: "CASH IN HAND",
              label: "CASH IN HAND",
            },
            {
              value: "PETTY CASH",
              label: "PETTY CASH",
            },
            {
              value: "SCB BANK",
              label: "SCB BANK",
            },
          ];
     
          const Types= [
            {
              value: "",
              label: "Select Reversed Account Head Type",
            },
            {
              value: "ABC BANK",
              label: "ABC BANK",
            },
            {
              value: "CASH IN HAND",
              label: "CASH IN HAND",
            },
            {
              value: "PETTY CASH",
              label: "PETTY CASH",
            },
            {
              value: "SCB BANK",
              label: "SCB BANK",
            },
          ];
     
    
      const saveAccountBalance = async () => {
    
        await  AccountBalanceApi.saveAccountBalance(formData);
        navigate("/hr/accounts/AccountBalance");
        
        setFormData({
                    employeeName: "",
                    username: "",
                    department: "",
                    position: "",
                    hsaBalance: "",
                    fsaBalance: "",
                    retirementAccountBalance: "",
                    otherBenefitsAccountsBalance: "",
                    expenseReimbursementAccountBalance: "",
                    details: "",
                    vacationDaysBalance: "",
                    sickDaysBalance: "",
                    personalDaysBalance: "",
                    floatingHolidaysBalance: "",
                    accountType: "",
                    accountBalance: "",
                    purpose: "",
                    comments: "",
        });
      };

      const handleSubmit = (e) => {
     e.preventDefault()
        loadAccountBalance();
      }

      const cancelButton =() => {
        setFormVisible(false)
        setToggle(false)
        setFormData({
        employeeName: "",
        username: "",
        department: "",
        position: "",
        hsaBalance: "",
        fsaBalance: "",
        retirementAccountBalance: "",
        otherBenefitsAccountsBalance: "",
        expenseReimbursementAccountBalance: "",
        details: "",
        vacationDaysBalance: "",
        sickDaysBalance: "",
        personalDaysBalance: "",
        floatingHolidaysBalance: "",
        accountType: "",
        accountBalance: "",
        purpose: "",
        comments: "",})
      }

    let buttonCheck=true 
    // formData.complaintId.length>0 && 
    //                     formData.complaintFrom.length>0 && formData.complaintTitle.length>0 && 
    //                     formData.complaintDate.length>0 && formData.complaintAgainst.length>0 && formData.description.length>0
   
   
  return (
    <form onSubmit={handleSubmit}>
    <div className="data-input-fields">
    <FormControl fullWidth>
        <InputLabel id="demo-company-select-label">Employee Name</InputLabel>
        <Select
          labelId="demo-company-select-label"
          id="selectedEmployee"
          value={formData.employeeName}
          name="employeeName"
          label="Employee Name"
          onChange={(e) => handleInputChange(e)}
        >
          {employee && employee.map((item, index) => {
            return (
              <MenuItem key={index} value={item.employeeName}>
                {item.employeeName}
              </MenuItem>
            );
          })}
          <MenuItem className="linkStyle" value="addNewEmployee">
          <a href="#">
            <FontAwesomeIcon icon={faCirclePlus} rotation={90} className="iconStyle" />
           Create Employee
          </a>
        </MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-company-select-label">User Name</InputLabel>
        <Select
          labelId="demo-company-select-label"
          id="selectedEmployee"
          value={formData.username}
          name="username"
          label="username"
          onChange={(e) => handleInputChange(e)}
        >
          {employee && employee.map((item, index) => {
            return (
              <MenuItem key={index} value={item.username}>
                {item.username}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      </div>

    

<div className="data-input-fields" style={{ width: '100%',marginTop:'20px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-company-select-label">Department Name</InputLabel>
        <Select
          labelId="demo-company-select-label"
          id="selectedDepartment"
          value={formData.department}
          name="department"
          label="department"
          onChange={(e) => handleInputChange(e)}
        >
          {department && department.map((item, index) => {
            return (
              <MenuItem key={index} value={item.department}>
                {item.department}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      
      <TextField
       style={{ width: '100%'}}
            label="position"
            id="outlined-size-small"
            select
            SelectProps={{
              native: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            name="position"
            value={formData.position}
            onChange={(e) =>
              handleInputChange(e)
            }

          >
            {Types.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
  </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Health Saving Account(HSA)"
          type="number"
          fullWidth
          name="hsaBalance"
          id="hsaBalance"
          value={formData.hsaBalance}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Flexible Spending Account(FSA)"
          type="number"
          fullWidth
          name="fsaBalance"
          id="fsaBalance"
          value={formData.fsaBalance}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>

      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Retirement Account Balance"
          type="number"
          fullWidth
          name="retirementAccountBalance"
          id="retirementAccountBalance"
          value={formData.retirementAccountBalance}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Other Benefits Account Balance"
          type="number"
          fullWidth
          name="otherBenefitsAccountsBalance"
          id="otherBenefitsAccountsBalance"
          value={formData.otherBenefitsAccountsBalance}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Expense Reimbursement Account Balance"
          type="number"
          fullWidth
          name="expenseReimbursementAccountBalance"
          id="expenseReimbursementAccountBalance"
          value={formData.expenseReimbursementAccountBalance}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Details"
          type="text"
          fullWidth
          name="details"
          id="details"
          value={formData.details}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Vacation Days Balance "
          type="number"
          fullWidth
          name="vacationDaysBalance"
          id="vacationDaysBalance"
          value={formData.vacationDaysBalance}
          onChange={(e) => handleInputChange(e)}
          required
        />

        <TextField
          margin="dense"
          label="Sick Days Balance"
          type="number"
          fullWidth
          name="sickDaysBalance"
          id="sickDaysBalance"
          value={formData.sickDaysBalance}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          margin="dense"
          label="Personal Days Balance"
          type="number"
          fullWidth
          name="personalDaysBalance"
          id="personalDaysBalance"
          value={formData.personalDaysBalance}
          onChange={(e) => handleInputChange(e)}
          required
        />

        <TextField
          margin="dense"
          label="Floating Holidays Balance"
          type="number"
          fullWidth
          name="floatingHolidaysBalance"
          id="floatingHolidaysBalance"
          value={formData.floatingHolidaysBalance}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className="data-input-fields">
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
          }}
          value={formData.accountType}
          onChange={(e) => handleInputChange(e)}
          name="accountType"
        >
          {Type.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          margin="dense"
          label="Account Balance"
          type="number"
          fullWidth
          name="accountBalance"
          id="accountBalance"
          value={formData.accountBalance}
          onChange={(e) => handleInputChange(e)}
          required
        />

        <TextField
          margin="dense"
          label="Purpose/Usage"
          type="text"
          fullWidth
          name="purpose"
          id="purpose"
          value={formData.purpose}
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          margin="dense"
          label="Comments"
          type="text"
          fullWidth
          name="comments"
          id="comments"
          value={formData.comments}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="data-buttons">
        <Button
          id="input-btn-submit"
          className="submit"
          type="submit"
          onClick={saveAccountBalance}
          variant="outlined"
          disabled={buttonCheck?false:true}
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
  )
};


    

export default AccountBalanceForm;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import StateAccountBalance from "./StateAccountBalance";
// import * as AccountBalanceApi from "./AccountBalanceApi";

// const AccountBalanceForm = ( {formData, setFormData, setFormVisible, setToggle}) => {
//   const getCurrentDate = () => {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = `${now.getMonth() + 1}`.padStart(2, "0");
//     const day = `${now.getDate()}`.padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   const navigate = useNavigate();
//   const {
//     setAccountBalance,
//     setLedgerError,
//     setOpen,
//     setLedger,
//     file,
//     setFile,
//     dateError,
//     setEmployee,
//     employee,
//     errorMsg,
//     isValidCIN,
//     addressError,
//     isEmailValid,
//     phoneError,
//     websiteError,
//     isValidGSTNumber,
//     isValidUANNumber,
//     errorCode,
//     company,
//     setIsValidCIN,
//     setIsEmailValid,
//     setIsValidUANNumber,
//     setPhoneError,
//     setIsValidGSTNumber,
//     setWebsiteError,
//     setDateError,
    
//     setErrorCode,
//     setErrorMsg,
//     setCompanyName,
//     setAddressError,
//     setZipCode,
//     setAddress,
    
//   } = StateAccountBalance();

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,

//       [e.target.name]: e.target.value,
//     });
//   };

 

  

//   console.log(formData);

 

//   const handleItemChange = ( field, value) => {
    

   

//     setFormData({
//       ...formData,
//       [field]: value,
//     });

//   };

//   const validateInput2 = (value, setValue, setError, fieldName) => {
//     const isValid =
//       value.length >= 2 && value.length <= 30 && /^[a-zA-Z\s]+$/.test(value);
//     setLedgerError(
//       isValid
//         ? ""
//         : `${fieldName} must be between 2 to 30 characters and only alphabets must be used.`
//     );
//     setValue(value);
//   };

//   const handleDescriptionChange = (e) => {
//     setLedger(e.target.value);
//     validateInput2(e.target.value, setLedger, setLedgerError, "ledgerComment");
//   };

//   const enforceMaxLength = (value, maxLength) => {
//     return value.length <= maxLength ? value : value.slice(0, maxLength);
//   };

//   const saveAccountBalance = async () => {
//     try {
//       await AccountBalanceApi.saveAccountBalance(formData);
//       navigate("/accounts/accounts");
//       AccountBalanceApi.loadAccountBalance();
//       setFormData({
//         k
//       });

//       handleClose();
//     } catch (error) {
//       console.error("Error saving Account Balance:", error);
//     }
//   };
//   const fetchEmployee = async () => {
//     const employeeData = await AccountBalanceApi.fetchEmployee();
//     setEmployee(employeeData);
//   };
//   const loadAccountBalance = async () => {
//     try {
//       const result = await AccountBalanceApi.loadAccountBalance();
//       setAccountBalance(result);
//     } catch (error) {
//       console.error("Error loading Account Balance:", error.response.data);
//     }
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleSubmit = () => {
//     handleClose();
//   };
//   const Type = [
//     {
//       value: "",
//       label: "Select Reversed Account Head Type",
//     },
//     {
//       value: "ABC BANK",
//       label: "ABC BANK",
//     },
//     {
//       value: "CASH IN HAND",
//       label: "CASH IN HAND",
//     },
//     {
//       value: "PETTY CASH",
//       label: "PETTY CASH",
//     },
//     {
//       value: "SCB BANK",
//       label: "SCB BANK",
//     },
//   ];
//   let buttonCheck =true
//   // formData.employeeName.length > 0 &&
//   // formData.username.length > 0 &&
//   // formData.department.length > 0 &&
//   // formData.position.length > 0 &&   
//   // formData.hsaBalance.length > 0 &&
//   // formData.fsaBalance.length > 0 &&
//   // formData.retirementAccountBalance.length > 0 &&
//   // formData.otherBenefitsAccountsBalance.length > 0 &&
//   // formData.expenseReimbursementAccountBalance.length > 0 &&
//   // formData.details.length > 0 &&
//   // formData.vacationDaysBalance.length > 0 &&
//   // formData.sickDaysBalance.length > 0 &&
//   // formData.personalDaysBalance.length > 0 &&
//   // formData.floatingHolidaysBalance.length > 0 &&
//   // formData.accountType.length > 0 &&
//   // formData.accountBalance.length > 0 &&
//   // formData.purpose.length > 0 &&
//   // formData.comments.length > 0;


//   console.log(formData);

//   const cancelButton = () => {
//     setFormVisible(false);
//     setToggle(false);
//     setFormData({
//       employeeName: "",
//       username: "",
//       department: "",
//       position: "",
//       hsaBalance: "",
//       fsaBalance: "",
//       retirementAccountBalance: "",
//       otherBenefitsAccountsBalance: "",
//       expenseReimbursementAccountBalance: "",
//       details: "",
//       vacationDaysBalance: "",
//       sickDaysBalance: "",
//       personalDaysBalance: "",
//       floatingHolidaysBalance: "",
//       accountType: "",
//       accountBalance: "",
//       purpose: "",
//       comments: "",
//     });
//   };  

//   return (
//     <form onSubmit={handleSubmit}>
//       <h5>Employee Information:</h5>
//       <div className="data-input-fields">
//         <TextField
//           id="employeeName"
//           margin="dense"
//           select
//           label="Employee Name"
//           fullWidth
        
//           SelectProps={{
//             native: true,
//           }}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           value={formData.employeeName}
//           onChange={(e) => handleInputChange(e)}
//           name="employeeName"
//         >
//           {/* {
//             employee.map((option, index) => (
//               <option key={index} value={option.employeeName}>
//                 {option.employeeName}
//               </option>
//             ))} */}
//         </TextField>

//       <TextField
//           id="username"
//           margin="dense"
//           select
//           label="Employee Id"
//           fullWidth
         
//           SelectProps={{
//             native: true,
//           }}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           value={formData.username}
//           onChange={(e) => handleInputChange(e)}
//           name="username"
//         >
//           {/* {
//             employee.map((option, index) => (
//               <option key={index} value={option.username}>
//                 {option.username}
//               </option>
//             ))} */}
//         </TextField>
//       </div>

//       <div className="data-input-fields">
//       <TextField
//           id="department"
//           margin="dense"
//           select
//           label="Department"
//           fullWidth
         
//           SelectProps={{
//             native: true,
//           }}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           value={formData.department}
//           onChange={(e) => handleInputChange(e)}
//           name="department"
//         >
//           {/* {
//             department.map((option, index) => (
//               <option key={index} value={option.department}>
//                 {option.department}
//               </option>
//             ))} */}
//         </TextField>
//         <TextField
//           id="position"
//           margin="dense"
//           select
//           label="Position"
//           fullWidth
       
//           SelectProps={{
//             native: true,
//           }}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           value={formData.position}
//           onChange={(e) => handleInputChange(e)}
//           name="position"
//         >
//           {/* {
//             position.map((option, index) => (
//               <option key={index} value={option.position}>
//                 {option.position}
//               </option>
//             ))} */}
//         </TextField>
//       </div>
//       <h5> Benefits Account Balance: </h5>
//       <div className="data-input-fields">
//         <TextField
//           margin="dense"
//           label="Health Saving Account(HSA)"
//           type="number"
//           fullWidth
//           name="hsaBalance"
//           id="hsaBalance"
//           value={formData.hsaBalance}
//           onChange={(e) => handleInputChange(e)}
//           required
//         />

//         <TextField
//           margin="dense"
//           label="Flexible Spending Account(FSA)"
//           type="number"
//           fullWidth
//           name="fsaBalance"
//           id="fsaBalance"
//           value={formData.fsaBalance}
//           onChange={(e) => handleInputChange(e)}
//           required
//         />
//       </div>

//       <div className="data-input-fields">
//         <TextField
//           margin="dense"
//           label="Retirement Account Balance"
//           type="number"
//           fullWidth
//           name="retirementAccountBalance"
//           id="retirementAccountBalance"
//           value={formData.retirementAccountBalance}
//           onChange={(e) => handleInputChange(e)}
//           required
//         />
//         <TextField
//           margin="dense"
//           label="Other Benefits Account Balance"
//           type="number"
//           fullWidth
//           name="otherBenefitsAccountsBalance"
//           id="otherBenefitsAccountsBalance"
//           value={formData.otherBenefitsAccountsBalance}
//           onChange={(e) => handleInputChange(e)}
//           required
//         />
//       </div>
//       <h5> Expense Reimbursement Account Balance: </h5>
//       <div className="data-input-fields">
//         <TextField
//           margin="dense"
//           label="Expense Reimbursement Account Balance"
//           type="number"
//           fullWidth
//           name="expenseReimbursementAccountBalance"
//           id="expenseReimbursementAccountBalance"
//           value={formData.expenseReimbursementAccountBalance}
//           onChange={(e) => handleInputChange(e)}
//           required
//         />

//         <TextField
//           margin="dense"
//           label="Details"
//           type="text"
//           fullWidth
//           name="details"
//           id="details"
//           value={formData.details}
//           onChange={(e) => handleInputChange(e)}
//           required
//         />
//       </div>
//       <h5>Paid Time Off (PTO) Balances: </h5>
//       <div className="data-input-fields">
//         <TextField
//           margin="dense"
//           label="Vacation Days Balance "
//           type="number"
//           fullWidth
//           name="vacationDaysBalance"
//           id="vacationDaysBalance"
//           value={formData.vacationDaysBalance}
//           onChange={(e) => handleInputChange(e)}
//           required
//         />

//         <TextField
//           margin="dense"
//           label="Sick Days Balance"
//           type="number"
//           fullWidth
//           name="sickDaysBalance"
//           id="sickDaysBalance"
//           value={formData.sickDaysBalance}
//           onChange={(e) => handleInputChange(e)}
//           required
//         />
//         <TextField
//           margin="dense"
//           label="Personal Days Balance"
//           type="number"
//           fullWidth
//           name="personalDaysBalance"
//           id="personalDaysBalance"
//           value={formData.personalDaysBalance}
//           onChange={(e) => handleInputChange(e)}
//           required
//         />

//         <TextField
//           margin="dense"
//           label="Floating Holidays Balance"
//           type="number"
//           fullWidth
//           name="floatingHolidaysBalance"
//           id="floatingHolidaysBalance"
//           value={formData.floatingHolidaysBalance}
//           onChange={(e) => handleInputChange(e)}
//           required
//         />
//       </div>
//       <h5>Other Account Balances: </h5>
//       <div className="data-input-fields">
//         <TextField
//           id="accountType"
//           margin="dense"
//           select
//           label="Account Type"
//           fullWidth
//           defaultValue="Choose"
//           SelectProps={{
//             native: true,
//           }}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           value={formData.accountType}
//           onChange={(e) => handleInputChange(e)}
//           name="accountType"
//         >
//           {Type.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>

//         <TextField
//           margin="dense"
//           label="Account Balance"
//           type="number"
//           fullWidth
//           name="accountBalance"
//           id="accountBalance"
//           value={formData.accountBalance}
//           onChange={(e) => handleInputChange(e)}
//           required
//           error={dateError}
//           helperText={dateError && "Please select the current date"}
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />

//         <TextField
//           margin="dense"
//           label="Purpose/Usage"
//           type="text"
//           fullWidth
//           name="purpose"
//           id="purpose"
//           value={formData.purpose}
//           onChange={(e) => handleInputChange(e)}
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField
//           margin="dense"
//           label="Comments"
//           type="text"
//           fullWidth
//           name="comments"
//           id="comments"
//           value={formData.comments}
//           onChange={(e) => handleInputChange(e)}
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//       </div>
//       <div className="data-buttons">
//         <Button
//           id="input-btn-submit"
//           className="submit"
//           type="submit"
//           onClick={saveAccountBalance}
//           variant="outlined"
//           disabled={buttonCheck?false:true}
//         >
//           Submit
//         </Button>
//         <Button
//           id="input-btn-cancel"
//           className="cancel"
//           onClick={cancelButton}
//           variant="outlined"
//         >
//           Cancel
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default AccountBalanceForm;
