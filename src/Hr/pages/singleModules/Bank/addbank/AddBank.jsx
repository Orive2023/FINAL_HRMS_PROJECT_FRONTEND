import React, { useEffect,useState} from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import TextField from "@mui/material/TextField";
import { MdAdd } from "react-icons/md";
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { Card } from "@mui/material";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import BankState from "../BankState";
import BankTable from "../BankTable";
import BankForm from "../BankForm";
import * as bankapi from "../bankapi";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const AddBankView = () => {
  const {
    formData,
    setFormData,
    formVisible,
    setFormVisible,
    toggle,
    setToggle,
    addbank,
    setAddBank,
    open,
    setOpen,
    bankNameError,
    setBankNameError,
    accountNameError,
    setAccountNameError,
    setAccountNumberError,
    branchNameError,
    setBranchNameError,
    recDelete,
    setRecDelete,
  } = BankState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    loadAddbank();
  }, []);

  const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJTNHlYbmxRajlIdE0tNXdVQjR5VFFETHctdHZXVW10aDhBZDlIeGZ3N1dBIn0.eyJleHAiOjE3MTAyMzg3NzcsImlhdCI6MTcxMDIzODQ3NywiYXV0aF90aW1lIjoxNzEwMjM3NTkyLCJqdGkiOiJiMzg2YzFkYS0zN2MwLTQwYjgtYTgyMS0zYWFkYmY3MjBiNGIiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL215cmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYmRlNmEzMTMtNzlmYi00ZWIxLWFkZjYtZWI2OWY0YmQ5ZDI0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibXljbGllbnQiLCJub25jZSI6ImExZmNjODE0LTQ2NmMtNDkyNi04OGFjLTUxNWIzYTQ5OGM5NSIsInNlc3Npb25fc3RhdGUiOiI0NGNjYmM1Zi0xNWFjLTQ5MDUtOTQzNi04NTY3Yzc2MDAyM2YiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1teXJlYWxtIiwib2ZmbGluZV9hY2Nlc3MiLCJociIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsibXljbGllbnQiOnsicm9sZXMiOlsiY2xpZW50X0hSIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiNDRjY2JjNWYtMTVhYy00OTA1LTk0MzYtODU2N2M3NjAwMjNmIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoic291cmF2IG1vaGFyYW5hIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic291cmF2IiwiZ2l2ZW5fbmFtZSI6InNvdXJhdiIsImZhbWlseV9uYW1lIjoibW9oYXJhbmEiLCJlbWFpbCI6InNzbW9oYXJhbmEyMDIzQGdtYWlsLmNvbSJ9.utp-0Qx55yJ9KQ3bskujqDdapUuo8HR4uyXBAlaDYuM60_mdEoAWtYC7PMKoLoC3iHnYpWbVc2XpeqXdqpBQT6Gxkr_Bc9KgKqwv7ecKDWcCRppj9-5PUaMR7KbtelnpoYrdKAu9gKwWKpn6xtfDWpKBRxwd5eZfaFVQvS4G179ROGdEH2NdlcD_Q97Yfn_lpSdF9-IeyrtWzxBx16XRoYuwqIQwT4mSxRlQ2xGnOd30PPclE9WVnz0R4TaTP2MZYYM3AlOMLE4CC1VnZ4r-XUmqOp4akNr2z4zSziZJszb51Z0ImTs6qXLPROmguHiQGt0rU29dIUAKZDxmWvYqkg"
console.log(accessToken)

  const loadAddbank = async () => {
    try {
      const result = await axios.get(
        'https://api.orivehrms.com/addbank/get/addbank', 
        {
          headers: {'Authorization': `Bearer ${accessToken}`,
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true }
        }
      );
         setAddBank(result.data)
   } catch (error) {
       console.error("Error loading addbank", error)
   }
    
  };


console.log("first",addbank)
  const handleDelete = async () => {
    await bankapi.deleteBank(recDelete);
    loadAddbank();
  };

  useEffect(() => {
    if (recDelete !== "") {
      handleDelete();
      setRecDelete("");
    }
  });
  console.log(bankNameError);
  const [menu, setMenu] = useState(false);

  return (
    <div>
  <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div
          className="head-foot-part"
          // style={{ padding: "0", marginTop: "10px" }}
        >
          <section>
            <div
              className="above-table"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
            <div style={{marginTop:"60px",width:'150px'}}>
              <div style={{fontSize:"1.4rem",width:'500px',display:'flex'}}>
              <div style={{paddingRight:'10px'}}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM7SURBVHgB3VVNaBNREJ55b3ezQYrRg9Sf2m3poTeriLQquBWrvQjtSTy1god6aoIXb9aTXqS99CCC9qoHE0GKYCEpolToIYKiojXJQaziYYNISpLdcXY3Nbv9iWlv+sJmed/OvG/mm5ldgP9lYbOGFw4OjTsEcSKIIUKq8hMSKStlNePbFMmIcf6+DTi6xjEvodw/k3+a/5t/Q5K4YcZ+qTuSHL3JppZDmHBsOyslJjkbg6+8ViVzOjdb2BZJvHvQcADTDkA7ARSqUg7defvktftsjJ8pJJKAdIi3lmJXT099fJbd7Cy5EXit2zSEpqQlR6siFYCgf/rd7IfV54s/PlnH2/Y/0FDsVQX0SgXHTrZ2FV98W1poimSi54yJikgrSK1SUHZFlvum3swtr7VbWM6vvPy+lDL3dYAmwGT7c2ZrJ8wvf55vSHLzqGlKAWlFkK4gzABVL97KZhp20HM+dOBAJ0aEc4qD6j/b1mnNfcm9CtqEajLZa6ZZf5OviasLmRuwhXW71xwVAPcIoYgR6Ehk6sGJoKGukqErDuwU5RnY4uKgZti/oEs71lIu7ww+U0IksuqmRlUB21oR9hcb+IdJVBaKCFu0cGc/HOgbdxDi3oaHxlcZM6WKlrgUkCWqOu4NW2xsQKLwXPNPDZTq8eCxEUJnimp7JG5o14icEV0pxRgarvt7JKCp4aYNJRZlI5dI1+tYRKO46xwRdgIi2EE6dqpoH+asLcaH0mZPLOjvnaFDg0yk7SmhQjWIxVxQRSd54tHin9dHZvhIkW+71N3oFtmq+7tKlBqQsKaeXHYAU9ZjPk6eqEE8GmEtHQe0RjVxU3W1D2oaremsrtE5qninUxDXJdsKWmcbJvG6yyHFrgSy8zqOI66EM6l1oqpVwiQcZhBbRxLxa4KaTgZvPf29juPzFA3CJNKvm1rb50a7DYFu/Qgcu1QM2obE+3q5e4LfvNe5PzlGn4QJ2sm3LAj+8wX1AMObGf6muDh7xDiPGMeY2XP3ff+mJO4qXumaFCjibkT+Gf5crM6g61DHkXHy5wY8pTKqqI5Gp3OFhiSrqzRmGBvhukQvlRWbQr48GxZO5Zv65v+76zfuAjbSpiR+NAAAAABJRU5ErkJggg==" alt="Dashboard"/>
            </div>
            <div style={{padding:'2px'}}>
              <span style={{color:'black',fontWeight:'bold'}}> 
            <Link to="/HRDashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
             Dashboard </Link> / 
              Bank /</span> 
              <span style={{color:'black'}}> Banks</span>
            </div>
            </div>
               
              </div>
            </div>

            <Collapse className="mt-3" in={formVisible}>
              <Card variant="outlined">
                <div style={{ marginTop: "20px" }}>
                  <h3 className="form-header">ADD BANK FORM</h3>
                  <DialogContent>
                    <BankForm
                      formData={formData}
                      setFormData={setFormData}
                      setFormVisible={setFormVisible}
                      setToggle={setToggle}
                    />
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <BankTable addbank={addbank} setRecDelete={setRecDelete} setFormVisible={setFormVisible} toggle={toggle} setToggle={setToggle}/>
            <br />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddBankView;
