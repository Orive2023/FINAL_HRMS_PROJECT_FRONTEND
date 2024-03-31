import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import Button from "@mui/material/Button";

const EditContraVoucher = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [contraVoucher, setContraVoucher] = useState({
    voucherType: "",
    reversedAccountHead: "",
    date: "",
    remark: "",
    debit: "",
    credit: "",
  });

  const { voucherType, reversedAccountHead, date, remark, debit, credit } =
    contraVoucher;

  useEffect(() => {
    loadContraVoucher();
  }, []);

  const loadContraVoucher = async () => {
    const result = await axios.get(
      `https://api.orivehrms.com/contravoucher/get/${id}`
    );
    setContraVoucher(result.data);
  };

  const handleInputChange = (e) => {
    setContraVoucher({
      ...contraVoucher,
      [e.target.name]: e.target.value,
    });
  };

  const showUpdateConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideUpdateConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleUpdate = async () => {
    hideUpdateConfirmation();
    await axios.put(
      `https://api.orivehrms.com/contravoucher/update/${id}`,
      contraVoucher
    );
    navigate("/hr/account/contra-voucher");
  };


  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5"> Edit Contra Voucher</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showUpdateConfirmation();
              }}
            >
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor=" voucherType">
                  Voucher Type
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="voucherType"
                  id=" voucherType"
                  required
                  value={voucherType}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="input-group mb-5">
                <label
                  className="input-group-text"
                  htmlFor="reversedAccountHead"
                >
                  Reverse Account Head
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="reversedAccountHead"
                  id="reversedAccountHead"
                  required
                  value={reversedAccountHead}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="date">
                  Date
                </label>
                <input
                  className="form-control col-sm-6"
                  type="date"
                  name="date"
                  id="date"
                  required
                  value={date}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="remark">
                  Remarks
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="remark"
                  id="remark"
                  required
                  value={remark}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="debit">
                  Debit
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="debit"
                  id="debit"
                  required
                  value={debit}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="credit">
                  Credit
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="credit"
                  id="credit"
                  required
                  value={credit}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="data-buttons">
                <Button id="input-btn-submit" variant="outlined" type="submit">
                  Submit
                </Button>

                <Button
                  id="input-btn-cancel"
                  variant="outlined"
                  onClick={() => navigate("/hr/account/contra-voucher")}
                >
                  Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div className="confirmation">
          <div className="confirmation-popup d-flex align-items-center justify-content-center">
            <div>
              <p className="fs-4 fw-bold">Are you sure you want to update?</p>
              <div className="d-flex" style={{ gap: "10px" }}>
                <Button
                  id="input-btn-submit"
                  style={{ width: "100%" }}
                  onClick={handleUpdate}
                  variant="contained"
                >
                  Yes
                </Button>
                <Button
                  id="input-btn-cancel"
                  style={{ width: "100%" }}
                  onClick={hideUpdateConfirmation}
                  variant="outlined"
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default EditContraVoucher;
