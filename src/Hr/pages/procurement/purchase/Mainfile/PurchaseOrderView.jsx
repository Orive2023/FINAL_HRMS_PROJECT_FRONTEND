import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import { MdAdd } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import PurchaseOrderForm from "../PurchaseOrderForm";
import PurchaseOrderTable from "../PurchaseOrderTable";

import * as PurchaseOrderApi from "../PurchaseOrderApi";
import PurchaseOrderState from "../PurchaseOrderState";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const PurchaseOrderView = () => {
  const {
    purchaseOrder,
    genId,
    setGenId,
    file,
    toggle,
    setToggle,
    setFile,
    formVisible,
    setFormVisible,
    fileError,
    totalAmount,
    setTotalAmount,
    setFileError,
    dateError,
    setDateError,
    setPurchaseOrder,
    open,
    setOpen,
    formData,
    setFormData,
    recDelete,
    setRecDelete,
  } = PurchaseOrderState();

  useEffect(() => {
    loadAllPurchase();
  }, []);

  const loadAllPurchase = async () => {
    const result = await PurchaseOrderApi.loadAItemPurchase();
    setPurchaseOrder(result);
  };

  const handleDelete = async () => {
    await PurchaseOrderApi.deletePurchaseList(recDelete);
    loadAllPurchase();
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
        <div className="head-foot-part">
          <section>
            <div
              className="above-table"
              style={{ display: "flex", justifyContent: "space-between" }}
            ></div>
            <Collapse in={formVisible}>
              <Card variant="outlined">
                <div style={{ marginTop: "20px" }}>
                  <h3 className="form-header">Add Purchase ORDER</h3>
                  <DialogContent>
                    <Card style={{ margin: "20px", border: "1px solid black" }}>
                      <CardContent>
                        <PurchaseOrderForm
                          formData={formData}
                          setFormData={setFormData}
                          setToggle={setToggle}
                          setFormVisible={setFormVisible}
                        />
                      </CardContent>
                    </Card>
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <PurchaseOrderTable
              purchaseOrder={purchaseOrder}
              setRecDelete={setRecDelete}
              setToggle={setToggle}
              toggle={toggle}
              setFormVisible={setFormVisible}
              setOpen={setOpen}
            />
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrderView;
