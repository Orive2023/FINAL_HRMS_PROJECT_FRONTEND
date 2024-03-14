import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
//import Search from "../../common/Search";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from '@mui/material/DialogTitle';
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { Card } from "@mui/material";
import { MdAdd } from "react-icons/md";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";


import * as api from "../api"
import StateWarning from "../StateWarning";
import WarningTable from "../WarningTable";
import WarningForm from "../WarningForm";



const WarningView = () => {
  const { warning, setWarning, formVisible, setFormVisible, toggle, setToggle, company, setCompany, location, setLocation, recDelete, setRecDelete, setOpen, open, setSubjectError, subjectError, setWarningError, warningError, setDescriptionError, descriptionError, setFormData, formData, navigate
  } = StateWarning()
  
  // name: '',
  // email: '',
  // message: '',

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value} = e.target;

    if(name === 'subject' ){
      const isValidSubject = value.length >= 2 && value.length <= 100;
      setSubjectError(!isValidSubject);

    }

    if(name === 'warningByEmployee' ){
      const isValidWarning = value.length >= 2 && value.length <= 60;
      setWarningError(!isValidWarning);

    }

    if (name === 'description') {
      const isValidDescription = value.length >= 2 && value.length <= 200;
      setDescriptionError(!isValidDescription);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [name] : value,

    });
  };


  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    handleClose();
  };

  useEffect(() => {
    loadwarning();
  }, []);

  const loadwarning = async () => {
    const result = await api.loadWarning()
    setWarning(result);
  };

  const handleDelete = async () => {
    await api.deleteWarning(recDelete);
    loadwarning();
  };

  useEffect(() => {
    if (recDelete !== "") {
      handleDelete();
      setRecDelete("");
    }
  });
  const [menu, setMenu] = useState(false);

  return (

    <div>
    <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part" >
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
       Employees /</span> 
       <span style={{color:'black'}}> Warnings</span>
     </div>
     </div>
      
      </div>
      

      </div>
      <Collapse className="mt-3" in={formVisible}>
              <Card
                variant="outlined"
                
              >
                <div style={{ marginTop: "20px" }}>
                  <h3
                     className="form-header"
            >
      
          <h3>WARNING FORM</h3>
          </h3>
          
            <DialogContent>
              <WarningForm  formData={formData} setFormData={setFormData} setFormVisible={setFormVisible} setToggle={setToggle}/>
            </DialogContent>
         
       
      </div>
      </Card>
            </Collapse>
      <WarningTable warning={warning} setRecDelete={setRecDelete} setFormVisible={setFormVisible} toggle={toggle} setToggle={setToggle}/>
    </section>
        </div>
      </div>
    </div>
   
  );
};

export default WarningView;

