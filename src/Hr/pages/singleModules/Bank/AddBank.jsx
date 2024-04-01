import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Search from "../common/Search";
import Button from "@mui/material/Button";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import TextField from "@mui/material/TextField";
import { MdAdd } from "react-icons/md";
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { Card } from "@mui/material";


const AddBankView = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  const [addbank, setAddBank] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
//   let navigate = useNavigate();
  const [formData, setFormData] = useState({
   
    bankName: "",
    accountName: "",
    accountNumber: "",
    branchName: "",
   
  });

  const {
    bankName,
    accountName,
    accountNumber,
    branchName,
  } = formData;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    // Alphabetic validation using regex
    const isAlphabetic = /^[A-Za-z]+$/.test(value);

    // Size validation
    const isValidSize = value.length >= 2 && value.length <= 100;

    if (name === 'bankName' && (!isAlphabetic || !isValidSize)) {
      // You can handle invalid input here (e.g., show an error message)
      return;
    }


    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveAddbank = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://api.orivehrms.com/addbank/create/addbank",
      formData
    );
    // navigate("/view-addbank");
    alert('Company added successfully');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    handleClose();
  };

  useEffect(() => {
    loadAddbank();
  }, []);

  const loadAddbank = async () => {
    const result = await axios.get(
      "https://api.orivehrms.com/addbank/get/addbank",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    setAddBank(result.data);
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`https://api.orivehrms.com/addbank/delete/${id}`);
    loadAddbank();
  };

  return (
    <section>
      <div
        className="above-table"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {/* <Search search={search} setSearch={setSearch} /> */}
        <div>
          <Button
            variant="outlined"
            onClick={() => {
              setToggle(!toggle);
              handleButtonClick();
            }}
            style={{ height: "35px" }}
          >
            {toggle ? (
              <div>
                <BiSolidHide style={{ fontSize: "14px", marginRight: "3px" }} />
                HIDE
              </div>
            ) : (
              <div>
                <MdAdd style={{ fontSize: "14px", marginRight: "3px" }} />
                ADD ADDBANK
              </div>
            )}
          </Button>
        </div>
      </div>

      <Collapse in={formVisible}>
      <Card variant="outlined" style={{ boxShadow: ' 1px 1px 10px black' }}>

        <div style={{ marginTop: "20px" }}>
          <h3
            style={{
              textAlign: "center",
              marginTop: "25px",
              fontWeight: "600",
            }}
          >
            ADD BANK FORM
          </h3>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex" }}>
                <TextField
                  margin="dense"
                  label=" Bank Name"
                  type="text"
                  fullWidth
                  name="bankName"
                  id="bankName"
                  value={bankName}
                  onChange={(e) => handleInputChange(e)}
                  required
                  style={{ margin: "0 3px" }}
                />
                <TextField
                  margin="dense"
                  label="accountName"
                  type="text"
                  fullWidth
                  name="accountName"
                  id="accountName"
                  value={accountName}
                  onChange={(e) => handleInputChange(e)}
                  required
                  style={{ margin: "0 3px" }}
                />
               
              </div>
              <div style={{ display: "flex" }}>
                <TextField
                  margin="dense"
                  label=" Account Number"
                  type="text"
                  fullWidth
                  name="accountNumber"
                  id="accountNumber"
                  value={accountNumber}
                  onChange={(e) => handleInputChange(e)}
                  required
                  style={{ margin: "8px 3px" }}
                />
                <TextField
                  margin="dense"
                  label="Branch Name"
                  type="text"
                  fullWidth
                  name="branchName"
                  id="branchName"
                  value={branchName}
                  onChange={(e) => handleInputChange(e)}
                  required
                  style={{ margin: "8px 3px" }}
                />
              </div>

             
              
              <DialogActions>
                <Button
                  variant="outlined"
                  type="submit"
                  onClick={saveAddbank}
                  style={{
                    display: "flex",
                    height: "40px",
                    width: "49%",
                    margin: "0 5px",
                    color: "white",
                    background: "linear-gradient(to right, #1cb5e0, #000046)",
                    
                  }}
                >
                  Submit
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  style={{
                    display: "flex",
                    height: "40px",
                    width: "49%",
                    margin: "0 5px",
                    color: "white",
                    background: "linear-gradient(to left, #1cb5e0, #000046)",
                  }}
                >
                  Cancel
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </div>
        </Card>
      </Collapse>
      <br />
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>SL.</th>
            <th>Bank Name</th>
            <th>Account Name</th>
            <th>Account Number</th>
            <th> Branch Name</th>
            <th colSpan="3">Actions</th>
            
          </tr>
        </thead>

        <tbody className="text-center">
          {addbank
            .filter(
              (addbank) =>
                addbank.bankName &&
                addbank.bankName.toLowerCase().includes(search)
            )
            .map((addbank, index) => (
              <tr key={addbank.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{addbank.bankName}</td>
                <td>{addbank.accountName}</td>
                <td>{addbank.accountNumber}</td>
                <td>{addbank.branchName}</td>
                

                <td className="mx-2">
                
                  <Link
                    to={`/addbank-profile/${addbank.addBankId}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-addbank/${addbank.addBankId}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(addbank.addBankId)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default AddBankView;
