import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import Search from "../common/Search";
import Button from "@mui/material/Button";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { MdAdd } from "react-icons/md";
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { Card } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";

const PerformanceIndicatorView = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [rating, setRating] = useState(0);
  const [communicationsSkillsRating, setCommunicationSkillsRating] =
    useState(0);
  const [teamworkRating, setTeamWorkRating] = useState(0);
  const [punctualityRating, setPunctualityRating] = useState(0);
  const [problemSolvingAbilityRating, setProblemSolvingAbilityRating] =
    useState(0);
  const [adaptabilityRating, setAdaptabilityRating] = useState(0);

  const [qualityOfWorkRating, setQualityOfWorkRating] = useState(0);

  const [leadershipSkillsRating, setLeadershipSkillsRating] = useState(0);

  const [overallPerformanceRating, setOverallPerformanceRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommunicationChange = (event, communicationSkillsRating) => {
    setCommunicationSkillsRating(communicationSkillsRating);
  };

  const handleTeamWorkChange = (event, teamworkRating) => {
    setTeamWorkRating(teamworkRating);
  };

  const handleAdaptabilityChange = (event, adaptabilityRating) => {
    setAdaptabilityRating(adaptabilityRating);
  };

  const handlePunctualityRating = (event, punctualityRating) => {
    setPunctualityRating(punctualityRating);
  };

  const handleProblemSolvingChange = (event, problemSolvingAbilityRating) => {
    setProblemSolvingAbilityRating(problemSolvingAbilityRating);
  };

  const handleQualityWorkRating = (event, qualityOfWorkRating) => {
    setQualityOfWorkRating(qualityOfWorkRating);
  };

  const handleLeaderShipRating = (event, leadershipSkillsRating) => {
    setLeadershipSkillsRating(leadershipSkillsRating);
  };

  const handleOverAllRating = (event, overallPerformanceRating) => {
    setOverallPerformanceRating(overallPerformanceRating);
  };

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  let navigate = useNavigate();
  const [performance, setPerformance] = useState([]);
  // const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    reviewRating: 0,
    performanceType: "",
    employeeName: "",
    employeeId: "",
    department: "",
    jobTitle: "",
    reviewPeriod: "",
    communicationSkillsRating: "",
    communicationSkillsComments: "",
    teamworkRating: "",
    teamworkComments: "",
    punctualityRating: "",
    punctualityComments: "",
    problemSolvingAbilityRating: "",
    problemSolvingAbilityComments: "",
    adaptabilityRating: "",
    adaptabilityComments: "",
    qualityOfWorkRating: "",
    qualityOfWorkComments: "",
    leadershipSkillsRating: "",
    leadershipSkillsComments: "",
    managersComments: "",
    overallPerformanceRating: "",
    overallPerformanceComments: "",
    goalsAndDevelopmentPlan: "",
  });

  const {
    performanceType,
    employeeName,
    employeeId,
    department,
    jobTitle,
    reviewPeriod,
    communicationSkillsRating,
    communicationSkillsComments,
    teamworkComments,
    punctualityComments,
    problemSolvingAbilityComments,
    adaptabilityComments,
    qualityOfWorkComments,
    leadershipSkillsComments,
    managersComments,
    overallPerformanceComments,
    goalsAndDevelopmentPlan,
  } = performance;
  // name: '',
  // email: '',
  // message: '',

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      reviewRating: rating,
      communicationSkillsRating: communicationSkillsRating,
      teamworkRating: communicationSkillsRating,
      punctualityRating: punctualityRating,
      problemSolvingAbilityRating: problemSolvingAbilityRating,
      adaptabilityRating: adaptabilityRating,
      qualityOfWorkRating: qualityOfWorkRating,
      leadershipSkillsRating: leadershipSkillsRating,
      overallPerformanceRating: overallPerformanceRating,
    });
  };
  console.log(formData);

  const savePerformance = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://api.orivehrms.com/performance/create/performance",
      formData
    );
    navigate("/performance");
    alert("performance added successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // handleClose();
  };

  useEffect(() => {
    loadPerformance();
  }, []);

  // function getLabelText(value) {
  //   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  // }

  const loadPerformance = async () => {
    const result = await axios.get(
      "https://api.orivehrms.com/performance/get/performance",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    // console.log(result.data);
    setPerformance(result.data);
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`https://api.orivehrms.com/performance/delete/${id}`);
    loadPerformance();
  };

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part">
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
                      <BiSolidHide
                        style={{ fontSize: "14px", marginRight: "3px" }}
                      />
                      HIDE
                    </div>
                  ) : (
                    <div>
                      <MdAdd style={{ fontSize: "14px", marginRight: "3px" }} />
                      ADD Performance
                    </div>
                  )}
                </Button>
              </div>
            </div>
            <Collapse in={formVisible}>
              <Card
                variant="outlined"
                style={{ boxShadow: " 1px 1px 10px black" }}
              >
                <div style={{ marginTop: "20px" }}>
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "25px",
                      fontWeight: "600",
                    }}
                  >
                    PERFORMANCE INDICATOR ID
                  </h3>
                  <DialogContent>
                    <form onSubmit={handleSubmit}>
                      <div style={{ display: "flex" }}>
                        <TextField
                          margin="dense"
                          label="performanceType"
                          type="text"
                          fullWidth
                          name="performanceType"
                          id="performanceType"
                          value={performanceType}
                          onChange={(e) => handleInputChange(e)}
                          required
                          style={{ margin: "0 3px" }}
                        />
                      </div>

                      <div style={{ display: "flex" }}>
                        <TextField
                          margin="dense"
                          label="Employee Name"
                          type="text"
                          fullWidth
                          name="employeeName"
                          id="employeeName"
                          value={employeeName}
                          onChange={(e) => handleInputChange(e)}
                          required
                          style={{ margin: "8px 3px" }}
                        />
                        <TextField
                          margin="dense"
                          label="Employee ID"
                          type="number"
                          fullWidth
                          name=" employeeId"
                          id=" employeeId"
                          value={employeeId}
                          onChange={(e) => handleInputChange(e)}
                          required
                          style={{ margin: "8px 3px" }}
                        />
                        <TextField
                          margin="dense"
                          label="Department"
                          type="text"
                          fullWidth
                          name="department"
                          id="department"
                          value={department}
                          onChange={(e) => handleInputChange(e)}
                          required
                          style={{ margin: "8px 3px" }}
                        />
                      </div>

                      <div style={{ display: "flex" }}>
                        <TextField
                          margin="dense"
                          label="Job Title"
                          type="text"
                          fullWidth
                          name=" jobTitle"
                          id=" jobTitle"
                          value={jobTitle}
                          onChange={(e) => handleInputChange(e)}
                          required
                          style={{ margin: "0 3px" }}
                        />
                        <TextField
                          margin="dense"
                          label="Review Period"
                          type="text"
                          fullWidth
                          name="reviewPeriod"
                          id="reviewPeriod"
                          value={reviewPeriod}
                          onChange={(e) => handleInputChange(e)}
                          required
                          style={{ margin: "0 3px" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "5px",
                          marginTop: "5px",
                        }}
                      >
                        <Box>
                          <TextField
                            label=" Communication Skill Rating"
                            variant="outlined"
                            fullWidth
                            style={{ margin: "6px 5px", marginTop: "9px" }}
                            InputProps={{
                              startAdornment: (
                                <Rating
                                  name="setCommunicationSkillsRating"
                                  value={communicationSkillsRating}
                                  onChange={handleCommunicationChange}
                                  precision={0.5}
                                />
                              ),
                            }}
                          />
                        </Box>
                        {/* <TextField
                    margin="dense"
                    label="Communication Skill Comments"
                    type="text"
                    fullWidth
                    name="communicationSkillsComments"
                    id="communicationSkillsComments"
                    value={communicationSkillsComments}
                    onChange={(e) => handleInputChange(e)}
                    required
                    style={{ margin: "0px 3px", marginTop: "8px" }}
                  /> */}

                        <Box>
                          <TextField
                            label=" Team Work Rating"
                            variant="outlined"
                            fullWidth
                            style={{ margin: "0px 5px", marginTop: "9px" }}
                            InputProps={{
                              startAdornment: (
                                <Rating
                                  name="teamworkRating"
                                  value={teamworkRating}
                                  onChange={handleTeamWorkChange}
                                  precision={0.5}
                                />
                              ),
                            }}
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=" Punctuality Rating"
                            variant="outlined"
                            fullWidth
                            style={{ margin: "0px 5px", marginTop: "9px" }}
                            InputProps={{
                              startAdornment: (
                                <Rating
                                  name="punctualityRating"
                                  value={punctualityRating}
                                  onChange={handlePunctualityRating}
                                  precision={0.5}
                                />
                              ),
                            }}
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=" Problem Solving Rating"
                            variant="outlined"
                            fullWidth
                            style={{ margin: "0px 5px", marginTop: "9px" }}
                            InputProps={{
                              startAdornment: (
                                <Rating
                                  name="problemSolvingAbilityRating"
                                  value={problemSolvingAbilityRating}
                                  onChange={handleProblemSolvingChange}
                                  precision={0.5}
                                />
                              ),
                            }}
                          />
                        </Box>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          marginTop: "8px",
                        }}
                      >
                        <Box>
                          <TextField
                            label=" Adaptability Rating"
                            variant="outlined"
                            fullWidth
                            style={{
                              margin: "0px 5px",
                              marginTop: "9px",
                              width: "350px",
                            }}
                            InputProps={{
                              startAdornment: (
                                <Rating
                                  name=" adaptabilityRating"
                                  value={adaptabilityRating}
                                  onChange={handleAdaptabilityChange}
                                  precision={0.5}
                                />
                              ),
                            }}
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=" LeaderShip Skill Rating"
                            variant="outlined"
                            fullWidth
                            style={{
                              margin: "0px 5px",
                              marginTop: "9px",
                              width: "350px",
                            }}
                            InputProps={{
                              startAdornment: (
                                <Rating
                                  name=" leadershipSkillsRating"
                                  value={leadershipSkillsRating}
                                  onChange={handleLeaderShipRating}
                                  precision={0.5}
                                />
                              ),
                            }}
                          />
                        </Box>
                        <Box>
                          <TextField
                            label=" Quality of Working Rating"
                            variant="outlined"
                            fullWidth
                            style={{
                              margin: "0px 5px",
                              marginTop: "9px",
                              width: "350px",
                            }}
                            InputProps={{
                              startAdornment: (
                                <Rating
                                  name="qualityOfWorkRating"
                                  value={qualityOfWorkRating}
                                  onChange={handleQualityWorkRating}
                                  precision={0.5}
                                />
                              ),
                            }}
                          />
                        </Box>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "20px",
                          margin: "5px",
                        }}
                      ></div>

                      <TextField
                        margin="dense"
                        label="Manager Comments"
                        type="text"
                        fullWidth
                        name="managersComments"
                        id="managersComments"
                        value={managersComments}
                        onChange={(e) => handleInputChange(e)}
                        required
                        style={{ margin: "0px 3px", marginTop: "8px" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "20px",
                          marginTop: "10px",
                        }}
                      >
                        <Box>
                          <TextField
                            label=" OverAll Performance Rating"
                            variant="outlined"
                            fullWidth
                            style={{
                              margin: "8px 5px",
                              marginTop: "9px",
                              gap: "20px",
                              width: "300px",
                            }}
                            InputProps={{
                              startAdornment: (
                                <Rating
                                  name="overallPerformanceRating"
                                  value={overallPerformanceRating}
                                  onChange={handleOverAllRating}
                                  precision={0.5}
                                />
                              ),
                            }}
                          />
                        </Box>
                        <TextField
                          margin="dense"
                          label="Overall Performance Comments"
                          type="text"
                          fullWidth
                          name="overallPerformanceComments"
                          id="overallPerformanceComments"
                          value={overallPerformanceComments}
                          onChange={(e) => handleInputChange(e)}
                          required
                          style={{ margin: "0px 3px", marginTop: "8px" }}
                        />
                        <TextField
                          margin="dense"
                          label="Goals And Development Plan"
                          type="text"
                          fullWidth
                          name="goalsAndDevelopmentPlan"
                          id="goalsAndDevelopmentPlan"
                          value={goalsAndDevelopmentPlan}
                          onChange={(e) => handleInputChange(e)}
                          required
                          style={{ margin: "0px 3px", marginTop: "8px" }}
                        />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          marginTop: "8px",
                        }}
                      >
                        <Button
                          type="submit"
                          onClick={savePerformance}
                          style={{
                            background:
                              "linear-gradient(to right, #1cb5e0, #000046)",
                            height: "35px",
                            width: "49%",
                            color: "white",
                            margin: "0 5px",
                          }}
                          variant="outlined"
                        >
                          Submit
                        </Button>
                        <Button
                          onClick={"/performance"}
                          style={{
                            background:
                              "linear-gradient(to left, #1cb5e0, #000046)",
                            height: "35px",
                            width: "49%",
                            color: "white",
                            margin: "0 5px",
                          }}
                          variant="outlined"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <br />

            <table className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                  <th>Serial No</th>
                  <th>Employee name</th>
                  <th>Employee id </th>
                  <th>Department</th>
                  <th>TeamWork Rating</th>
                  <th>Punctuality Rating</th>
                  <th>Problem Solving Skills Rating Rating</th>

                  <th colSpan="3">Actions</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {performance
                  .filter(
                    (st) =>
                      st.performanceName &&
                      st.performanceName.toLowerCase().includes()
                  )
                  .map((performance, index) => (
                    <tr key={performance.id}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{performance.performanceName}</td>
                      <td>{performance.performanceType}</td>
                      <td>{performance.email}</td>
                      <td>{performance.website}</td>
                      <td className="mx-2">
                        <Link
                          to={`/performance-profile/${performance.performanceId}`}
                          className="btn btn-info"
                        >
                          <FaEye />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <Link
                          to={`/edit-performance/${performance.performanceId}`}
                          className="btn btn-warning"
                        >
                          <FaEdit />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            handleDelete(performance.performanceId)
                          }
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PerformanceIndicatorView;
