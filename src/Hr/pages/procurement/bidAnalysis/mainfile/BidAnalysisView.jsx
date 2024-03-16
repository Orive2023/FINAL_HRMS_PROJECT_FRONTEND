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

import BidAnalysisForm from "../BidAnalysisForm";
import BidAnalysisTable from "../BidAnalysisTable";

import * as BidAnalysisApi from "../BidAnalysisApi";
import BidAnalysisState from "../BidAnalysisState";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const BidAnalysisView = () => {
  const {
    bidAnalysis,
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
    setBidAnalysis,
    open,
    setOpen,
    formData,
    setFormData,
    recDelete,
    setRecDelete,
  } = BidAnalysisState();

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  useEffect(() => {
    loadAllBid();
  }, []);

  const loadAllBid = async () => {
    const result = await BidAnalysisApi.loadAllBid();
    setBidAnalysis(result);
  };
  const handleDelete = async () => {
    await BidAnalysisApi.deleteBid(recDelete);
    loadAllBid();
  };

  useEffect(() => {
    if (recDelete !== "") {
      handleDelete();
      setRecDelete("");
    }
  });

  console.log(formData);

  useEffect(() => {
    loadAllBid();
  }, []);
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
            >
              <div>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setToggle(!toggle);
                    handleButtonClick();
                  }}
                  id="add-btn"
                >
                  {toggle ? (
                    <div className="hide">
                      <BiSolidHide />
                      HIDE
                    </div>
                  ) : (
                    <div className="add">
                      <MdAdd />
                      ADD Bid Analysis
                    </div>
                  )}
                </Button>
              </div>
            </div>
            <Collapse in={formVisible}>
              <Card variant="outlined">
                <div style={{ marginTop: "20px" }}>
                  <h3 className="form-header">Add Bid Analysis</h3>
                  <DialogContent>
                    <Card style={{ margin: "20px", border: "1px solid black" }}>
                      <CardContent>
                        <BidAnalysisForm
                          formData={formData}
                          setFormData={setFormData}
                          setFormVisible={setFormVisible}
                      setToggle={setToggle}
                        />
                      </CardContent>
                    </Card>
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <BidAnalysisTable
              bidAnalysis={bidAnalysis}
              setRecDelete={setRecDelete}
            />
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BidAnalysisView;
