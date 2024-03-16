import React, { useEffect,useState } from "react";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";

import * as api from "../api"
import StateCareer from "../StateCareer";
import CareerTable from "../CareerTable";


import { MdAdd } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import Collapse from "@mui/material/Collapse";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

import { Card } from "@mui/material";
import { Link } from "react-router-dom";

const  CareerView = () => {

 const {toggle,
  setToggle,
  formVisible,
  formData,
  setFormData,
  setFormVisible,
  career,
  setCareer,
  recDelete,
  setRecDelete} = StateCareer()



  useEffect(() => {
    loadCareer();
  }, []);

  const loadCareer = async () => {
    const result = await api.loadCareer()
    setCareer(result);
  };

  const handleDelete = async () => {
    await api.deleteCareer(recDelete)
    loadCareer();
  };

  useEffect(() => {
    if (recDelete !== "") {
      handleDelete()
      setRecDelete("")
    }
  })

  const [menu, setMenu] = useState(false);

  return (
    <div>
    <div id="header-container" className="header-container">
        <CompanyLogoFile />
        <Header menu={menu} setMenu={setMenu} />
      </div>
      <div className="dashboard-container">
        <SideBar menu={menu} setMenu={setMenu} />
        <div className="head-foot-part">
          <section>
            <div
              className="above-table"
              style={{ display: "flex",flexDirection:"column", justifyContent: "space-between" }}
            >
            </div>

            <Collapse className="mt-3" in={formVisible}>
              <Card
                variant="outlined"
              >
              </Card>
            </Collapse>
           <CareerTable career={career} setRecDelete={setRecDelete} setFormVisible={setFormVisible} toggle={toggle} setToggle={setToggle}/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CareerView;
