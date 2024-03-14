import React, { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import DialogContent from "@mui/material/DialogContent";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CreditForm from "../CreditForm";
import StateCredit from "../StateCredit";
import CreditTable from "../CreditTable";
import * as CreditApi from "../CreditApi";
import CompanyLogoFile from "../../../../components/CompanyLogoFile";
import { Link } from "react-router-dom";

const CreditView = () => {
  const {
    credit,
    toggle,
    setToggle,
    formVisible,
    setFormVisible,
    setTotalAmount,
    setFileError,
    dateError,
    setDateError,
    setCredit,
    open,
    setOpen,
    recDelete,
    setRecDelete,
    formData,
    setFormData,
  } = StateCredit();

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  useEffect(() => {
    loadCredit();
  }, []);

  const loadCredit = async () => {
    const result = await CreditApi.loadCredit();
    console.log("rec", result);
    setCredit(result);
  };

  const handleDelete = async () => {
    await CreditApi.deleteCredit(recDelete);
    loadCredit();
  };

  console.log(formData);
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
            >
              <div style={{ marginTop: "60px", width: "150px" }}>
                <div
                  style={{
                    fontSize: "1.4rem",
                    width: "500px",
                    display: "flex",
                  }}
                >
                  <div style={{ paddingRight: "10px" }}>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM7SURBVHgB3VVNaBNREJ55b3ezQYrRg9Sf2m3poTeriLQquBWrvQjtSTy1god6aoIXb9aTXqS99CCC9qoHE0GKYCEpolToIYKiojXJQaziYYNISpLdcXY3Nbv9iWlv+sJmed/OvG/mm5ldgP9lYbOGFw4OjTsEcSKIIUKq8hMSKStlNePbFMmIcf6+DTi6xjEvodw/k3+a/5t/Q5K4YcZ+qTuSHL3JppZDmHBsOyslJjkbg6+8ViVzOjdb2BZJvHvQcADTDkA7ARSqUg7defvktftsjJ8pJJKAdIi3lmJXT099fJbd7Cy5EXit2zSEpqQlR6siFYCgf/rd7IfV54s/PlnH2/Y/0FDsVQX0SgXHTrZ2FV98W1poimSi54yJikgrSK1SUHZFlvum3swtr7VbWM6vvPy+lDL3dYAmwGT7c2ZrJ8wvf55vSHLzqGlKAWlFkK4gzABVL97KZhp20HM+dOBAJ0aEc4qD6j/b1mnNfcm9CtqEajLZa6ZZf5OviasLmRuwhXW71xwVAPcIoYgR6Ehk6sGJoKGukqErDuwU5RnY4uKgZti/oEs71lIu7ww+U0IksuqmRlUB21oR9hcb+IdJVBaKCFu0cGc/HOgbdxDi3oaHxlcZM6WKlrgUkCWqOu4NW2xsQKLwXPNPDZTq8eCxEUJnimp7JG5o14icEV0pxRgarvt7JKCp4aYNJRZlI5dI1+tYRKO46xwRdgIi2EE6dqpoH+asLcaH0mZPLOjvnaFDg0yk7SmhQjWIxVxQRSd54tHin9dHZvhIkW+71N3oFtmq+7tKlBqQsKaeXHYAU9ZjPk6eqEE8GmEtHQe0RjVxU3W1D2oaremsrtE5qninUxDXJdsKWmcbJvG6yyHFrgSy8zqOI66EM6l1oqpVwiQcZhBbRxLxa4KaTgZvPf29juPzFA3CJNKvm1rb50a7DYFu/Qgcu1QM2obE+3q5e4LfvNe5PzlGn4QJ2sm3LAj+8wX1AMObGf6muDh7xDiPGMeY2XP3ff+mJO4qXumaFCjibkT+Gf5crM6g61DHkXHy5wY8pTKqqI5Gp3OFhiSrqzRmGBvhukQvlRWbQr48GxZO5Zv65v+76zfuAjbSpiR+NAAAAABJRU5ErkJggg=="
                      alt="Dashboard"
                    />
                  </div>
                  <div style={{ padding: "2px" }}>
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      <Link
                        to="/HRDashboard"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Dashboard{" "}
                      </Link>{" "}
                      / Account /
                    </span>
                    <span style={{ color: "black" }}> Credit Voucher</span>
                  </div>
                </div>
              </div>
            </div>
            <Collapse in={formVisible}>
              <Card variant="outlined">
                <div style={{ marginTop: "20px" }}>
                  <h3 className="form-header">Add Credit</h3>
                  <DialogContent>
                    <Card style={{ margin: "20px" }}>
                      <CardContent>
                        <CreditForm
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
            <CreditTable
              credit={credit}
              setRecDelete={setRecDelete}
              setFormVisible={setFormVisible}
              toggle={toggle}
              setToggle={setToggle}
            />
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreditView;
