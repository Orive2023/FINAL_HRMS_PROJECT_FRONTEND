// import React, { useState, useEffect } from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import appl from "../../asset/images/appl.png";
// import filter from "../../asset/images/filter.png";
// import bars from "../../asset/images/burger.png";
// import SideBar from "../../components/SideBar";
// import Header from "../../components/Header";
// import CompanyLogoFile from "../../components/CompanyLogoFile";
// import avatar1 from "../../asset/40px/avatar1.jpeg";
// import { styled } from "@mui/material/styles";
// import clipboard1 from "../../asset/40px/clipboard 1.png";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import calender from "../../asset/images/calendarr.jpeg";
// import ChartApex from "react-apexcharts";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import axios from "axios";
// import jwtDecode from 

// import { useLocation, useNavigate, useParams } from "react-router-dom";
// const Projects = () => {
//   const [menu, setMenu] = useState(false);
//   const { id } = useParams();

//   const token = localStorage.getItem("AuthToken");
//     const decoded = jwtDecode(String(token));
//     const usernameRec = decoded.preferred_username;
//     const username = usernameRec.toUpperCase();
  
//     const [project, setProject] = useState([]);
//   const now = 60;
//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.white,
//       color: theme.palette.common.black,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     "&:last-child td, &:last-child th": {
//       border: 0,
//     },
//   }));

//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
//   const revenueData = {
//     series: [100],
//     options: {
//       chart: {
//         height: 350,
//         type: "radialBar",
//       },
//       plotOptions: {
//         radialBar: {
//           hollow: {
//             size: "70%",
//           },
//         },
//       },
//       labels: ["100%"],
//       toolbar: {
//         show: false,
//       },
//       colors: ["#501A51"],
//     },
//   };

//   const revenueData2 = {
//     series: [82],
//     options: {
//       chart: {
//         height: 350,
//         type: "radialBar",
//       },
//       plotOptions: {
//         radialBar: {
//           hollow: {
//             size: "70%",
//           },
//         },
//       },
//       labels: ["82%"],
//       toolbar: {
//         show: false,
//       },
//       colors: ["rgba(247, 108, 36, 1)"],
//     },
//   };

//   const revenueData3 = {
//     series: [82],
//     options: {
//       chart: {
//         height: 350,
//         type: "radialBar",
//       },
//       plotOptions: {
//         radialBar: {
//           hollow: {
//             size: "70%",
//           },
//         },
//       },
//       labels: ["82%"],
//       toolbar: {
//         show: false,
//       },
//       colors: ["#501A51"],
//     },
//   };

//   const revenueData4 = {
//     series: [0],
//     options: {
//       chart: {
//         height: 350,
//         type: "radialBar",
//       },
//       plotOptions: {
//         radialBar: {
//           hollow: {
//             size: "70%",
//           },
//         },
//       },
//       labels: ["0%"],
//       toolbar: {
//         show: false,
//       },
//       colors: ["rgba(247, 108, 36, 1)"],
//     },
//   };

//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [formData, setFormData] = useState({
//     projectsId: "",
//     projectTitle: "",
//     clientName: "",
//     companyName: "",
//     startDate: "",
//     endDate: "",
//     priority: "",
//     budget: "",
//     projectManagers: "",
//     managerEmployeeId: "",
//     summary: "",
//     description: "",
//     employeeProjectManagementEntities: [
//       {
//         employeeProjectManagementId: "",
//         employeeId: "",
//         projectName: "",
//         employeeName: "",
//         taskAssignedFor: "",
//         typeTheTaskHere: "",
//       },
//     ],
//   });

//   const { state } = useLocation();

//   const handleEmployeeInputChange = (index, e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => {
//       const updatedEntities = [...prevData.employeeProjectManagementEntities];
//       updatedEntities[index] = {
//         ...updatedEntities[index],
//         [name]: value,
//         projectName: state.project,
//       };
//       return {
//         ...prevData,
//         employeeProjectManagementEntities: updatedEntities,
//       };
//     });
//   };

//   const getProject = async () => {
//     try {
//       const result = await axios.get(
//         `https://localhost:8086/projects/get/${username}`
//       );

//       console.log(result);
//       if (result.data) {
//         console.log(result.data);
//         const projectData = result.data;
//         setFormData({
//           ...formData,
//           projectsId: projectData.projectsId || "",
//           projectTitle: projectData.projectTitle || "",
//           clientName: projectData.clientName || "",
//           companyName: projectData.companyName || "",
//           startDate: projectData.startDate || "",
//           endDate: projectData.endDate || "",
//           priority: projectData.priority || "",
//           budget: projectData.budget || "",
//           projectManagers: projectData.projectManagers || "",
//           managerEmployeeId: projectData.managerEmployeeId || "",
//           summary: projectData.summary || "",
//           description: projectData.description || "",
//         });
//       } else {
//         console.error("Unexpected API response format");
//       }
//     } catch (error) {
//       console.error("Error loading attendance", error);
//     }
//   };
//   console.log(formData);
//   const navigation = useNavigate();

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     getProject();
//   }, []);

//   const updateProject = async (e) => {
//     await axios.post(
//       `https://localhost:8086/projects/create/projects`,
//       formData
//     );

//     setOpen(false);
//     getProject();
//   };

//   const handleOpen = () => {
//     if (
//       formData.employeeProjectManagementEntities[0].employeeName.length > 0 &&
//       formData.employeeProjectManagementEntities.length === 1
//     ) {
//       setCount(1);
//     } else if (formData.employeeProjectManagementEntities.length >= 2) {
//       setCount(formData.employeeProjectManagementEntities.length);
//     } else {
//       setCount(formData.employeeProjectManagementEntities.length - 1);
//     }
//     setOpen(true);
//   };

//   const loadProjectData = async () => {
//     try {
//       const result = await axios.get(
//         "https://localhost:8084/projects/get/projects",
//         {
//           validateStatus: () => {
//             return true;
//           },
//         }
//       );
//       return result.data;
//     } catch (error) {
//       console.error("Error load leave", error);
//     }
//   };

//   // console.log(state?.project);

//   // console.log("first", count);
//   // console.log(formData.employeeProjectManagementEntities.length);
//   // console.log(formData);
//   return (
//     <div>
//       <div id="header-container" className="header-container">
//         <CompanyLogoFile />
//         <Header menu={menu} setMenu={setMenu} />
//       </div>
//       <div className="dashboard-container">
//         <SideBar menu={menu} setMenu={setMenu} />
//         <div className="head-foot-part" style={{ paddingTop: "110px" }}>
//           <section>
//             <div className="">
//               <h4
//                 className="heading"
//                 style={{
//                   margin: "0 20px",
//                   paddingLeft: "10px",
//                   borderLeft: "5px solid rgba(247, 108, 36, 1)",
//                   borderRadius: "3px",
//                   fontWeight: "600",
//                 }}
//               >
//                 PROJECT DETAILS
//               </h4>
//             </div>
//             <div style={{ display: "flex" }}>
//               <div className="col-xl-9 col-lg-12 col-md-12">
//                 <div
//                   id="card"
//                   className="card"
//                   style={{
//                     height: "50vh",
//                     marginTop: "20px",
//                     marginLeft: "10px",
//                   }}
//                 >
//                   <div
//                     className="card-top"
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-between",
//                       padding: "15px 15px",
//                     }}
//                   >
//                     <div
//                       className="card-top-left"
//                       style={{ display: "flex", alignItems: "center" }}
//                     >
//                       <div
//                         className="profile-img"
//                         style={{
//                           height: "50px",
//                           width: "50px",
//                           borderRadius: "50%",
//                         }}
//                       >
//                         <img
//                           src={clipboard1}
//                           style={{
//                             transform: "scale(1)",
//                             margin: "5px",
//                             width: "22px",
//                             height: "28px",
//                           }}
//                           alt=""
//                         />
//                       </div>
//                       <div
//                         className="profile-name"
//                         style={{
//                           fontWeight: "600",
//                           fontSize: "18px",
//                           marginBottom: "10px",
//                           marginLeft: "-10px",
//                         }}
//                       >
//                         {state.project}
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       marginLeft: "40px",
//                       marginTop: "2px",
//                       width: "90%",
//                     }}
//                   >
//                     <ProgressBar className="pb" now={now} label={`${now}%`} />
//                   </div>
//                   <div>
//                     <div style={{ display: "flex" }}>
//                       <div className="mt-3">
//                         <p
//                           style={{
//                             fontWeight: "700",
//                             fontSize: "18px",
//                             textAlign: "center",
//                           }}
//                         >
//                           PLANNING
//                         </p>
//                         <ChartApex
//                           options={revenueData.options}
//                           series={revenueData.series}
//                           type="radialBar"
//                           height={250}
//                           style={{
//                             borderRadius: "5px",
//                             marginRight: "-10px",
//                             borderRight: "3px solid rgba(232, 233, 233, 1)",
//                           }}
//                         />
//                         <div className="d-flex justify-content-center">
//                           <div
//                             style={{
//                               width: "max-content",
//                               backgroundColor: "rgba(15, 147, 13, 0.1)",
//                               color: "rgba(15, 147, 13, 1)",
//                               fontWeight: "600",
//                               fontSize: "15px",
//                               padding: "5px 15px",
//                               borderRadius: "5px",
//                             }}
//                           >
//                             Completed
//                           </div>
//                         </div>
//                       </div>

//                       <div className="mt-3">
//                         <p
//                           style={{
//                             fontWeight: "700",
//                             fontSize: "18px",
//                             textAlign: "center",
//                           }}
//                         >
//                           DESIGN
//                         </p>
//                         <ChartApex
//                           options={revenueData2.options}
//                           series={revenueData2.series}
//                           type="radialBar"
//                           height={250}
//                           style={{
//                             borderRadius: "5px",
//                             marginRight: "-10px",
//                             borderRight: "3px solid rgba(232, 233, 233, 1)",
//                           }}
//                         />
//                         <div className="d-flex justify-content-center">
//                           <div
//                             style={{
//                               width: "max-content",
//                               backgroundColor: "rgba(247, 108, 36, 0.1)",
//                               color: "rgba(247, 108, 36, 1)",
//                               fontWeight: "600",
//                               fontSize: "15px",
//                               padding: "5px 15px",
//                               borderRadius: "5px",
//                             }}
//                           >
//                             In Progress
//                           </div>
//                         </div>
//                       </div>

//                       <div className="mt-3">
//                         <p
//                           style={{
//                             fontWeight: "700",
//                             fontSize: "18px",
//                             textAlign: "center",
//                           }}
//                         >
//                           DEVELOPMENT
//                         </p>
//                         <ChartApex
//                           options={revenueData3.options}
//                           series={revenueData3.series}
//                           type="radialBar"
//                           height={250}
//                           style={{
//                             borderRadius: "5px",
//                             marginRight: "-10px",
//                             borderRight: "3px solid rgba(232, 233, 233, 1)",
//                           }}
//                         />
//                         <div className="d-flex justify-content-center">
//                           <div
//                             style={{
//                               width: "max-content",
//                               backgroundColor: "rgba(247, 108, 36, 0.1)",
//                               color: "rgba(247, 108, 36, 1)",
//                               fontWeight: "600",
//                               fontSize: "15px",
//                               padding: "5px 15px",
//                               borderRadius: "5px",
//                             }}
//                           >
//                             In Progress
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mt-3">
//                         <p
//                           style={{
//                             fontWeight: "700",
//                             fontSize: "18px",
//                             textAlign: "center",
//                           }}
//                         >
//                           TESTING
//                         </p>
//                         <ChartApex
//                           options={revenueData4.options}
//                           series={revenueData4.series}
//                           type="radialBar"
//                           height={250}
//                           style={{ marginRight: "-10px" }}
//                         />
//                         <div className="d-flex justify-content-center">
//                           <div
//                             style={{
//                               width: "max-content",
//                               backgroundColor: "rgba(229, 229, 229, 1)",
//                               color: "rgba(111, 111, 111, 1)",
//                               fontWeight: "600",
//                               fontSize: "15px",
//                               padding: "5px 15px",
//                               borderRadius: "5px",
//                             }}
//                           >
//                             Not Started
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-6 col-md-9">
//                 <div
//                   id="card"
//                   className="card"
//                   style={{
//                     height: "50vh",
//                     width: "340px",
//                     marginTop: "20px",
//                     marginLeft: "25px",
//                     padding: "35px 0",
//                   }}
//                 >
//                   <h4
//                     style={{
//                       textAlign: "center",
//                       marginTop: "20px",
//                       fontWeight: "700",
//                     }}
//                   >
//                     PROJECT LAUNCH DATE
//                   </h4>
//                   <img
//                     src={calender}
//                     style={{ transform: "scale(0.75)", marginTop: "-40px" }}
//                   />
//                   <p style={{ textAlign: "center", marginTop: "-20px" }}>
//                     <span style={{ fontWeight: "600", fontSize: "30px" }}>
//                       179
//                     </span>{" "}
//                     Days
//                   </p>
//                   <p style={{ textAlign: "center", fontSize: "15px" }}>
//                     Wednesday, Mar 13 2023{" "}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <div
//                 className=""
//                 style={{
//                   margin: "20px",
//                   paddingLeft: "10px",
//                   borderLeft: "5px solid rgba(247, 108, 36, 1)",
//                   borderRadius: "3px",
//                 }}
//               >
//                 <h4 className="heading" style={{ fontWeight: "600" }}>
//                   PROJECT ASSIGNED
//                 </h4>
//               </div>

//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <div
//                   className="side-icons"
//                   style={{
//                     marginTop: "0px",
//                     marginRight: "20px",
//                   }}
//                 >
//                   <img src={appl} style={{ cursor: "pointer" }} alt="" />
//                   <img
//                     src={bars}
//                     style={{ cursor: "pointer", margin: "0px 10px" }}
//                     alt=""
//                   />
//                   <img src={filter} style={{ cursor: "pointer" }} alt="" />
//                 </div>
//                 <div
//                   id="add-btn"
//                   style={{
//                     width: "max-content",
//                     padding: "10px",
//                     fontSize: "15px",
//                     cursor: "pointer",
//                     marginRight: "20px",
//                   }}
//                   onClick={handleOpen}
//                 >
//                   Assign Task
//                 </div>
//               </div>
//             </div>
//             <div className="section-body">
//               <div className="container-fluid">
//                 <div className="row clearfix row-deck">
//                   <div className="col-xl-12 col-lg-12 col-md-12">
//                     <div
//                       id="card"
//                       className="card"
//                       style={{ margin: "30px 10px" }}
//                     >
//                       <div
//                         id="card"
//                         className="card"
//                         style={{ height: "max-content", width: "auto" }}
//                       >
//                         <TableContainer component={Paper}>
//                           <Table
//                             sx={{ minWidth: 1000 }}
//                             aria-label="customized table"
//                           >
//                             <TableHead>
//                               <TableRow>
//                                 <StyledTableCell
//                                   align="left"
//                                   className="fs-5"
//                                   style={{ fontWeight: "500" }}
//                                 >
//                                   EMPLOYEE NAME
//                                 </StyledTableCell>
//                                 <StyledTableCell
//                                   align="left"
//                                   className="fs-5"
//                                   style={{ fontWeight: "500" }}
//                                 >
//                                   PROJECT NAME
//                                 </StyledTableCell>
//                                 <StyledTableCell
//                                   align="center"
//                                   className="fs-5"
//                                   style={{ fontWeight: "500" }}
//                                 >
//                                   TASKS
//                                 </StyledTableCell>
//                                 <StyledTableCell
//                                   align="center"
//                                   className="fs-5"
//                                   style={{ fontWeight: "500" }}
//                                 >
//                                   STATUS
//                                 </StyledTableCell>
//                                 <StyledTableCell
//                                   align="left"
//                                   className="fs-5"
//                                   style={{ fontWeight: "500" }}
//                                 >
//                                   DEADLINE
//                                 </StyledTableCell>
//                               </TableRow>
//                             </TableHead>
//                             <br />
//                             <TableBody>
//                               {formData.employeeProjectManagementEntities.map(
//                                 (row, index) => (
//                                   <StyledTableRow
//                                     key={index}
//                                     className="table-row-cell"
//                                   >
//                                     <StyledTableCell align="left">
//                                       <div
//                                         style={{
//                                           display: "flex",
//                                           alignItems: "center",
//                                         }}
//                                       >
//                                         <div style={{ lineHeight: "5px" }}>
//                                           <p style={{ fontSize: "15px" }}>
//                                             {row.employeeName}
//                                           </p>
//                                           {/* <p style={{ fontSize: "12px" }}>
//                                           {row.name[1]}
//                                         </p> */}
//                                         </div>
//                                       </div>
//                                     </StyledTableCell>
//                                     <StyledTableCell align="left">
//                                       {row.projectName}
//                                     </StyledTableCell>
//                                     <StyledTableCell
//                                       align="center"
//                                       style={{
//                                         display: "flex",
//                                         justifyContent: "center",
//                                       }}
//                                     >
//                                       {row.taskAssignedFor}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="center">
//                                       {"will be updated"}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="left">
//                                       {row.typeTheTaskHere}
//                                     </StyledTableCell>
//                                   </StyledTableRow>
//                                 )
//                               )}
//                             </TableBody>
//                           </Table>
//                         </TableContainer>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <Dialog open={open} onClose={handleClose}>
//                 <DialogTitle id="form-header-popup">Assign Task</DialogTitle>
//                 <DialogContent>
//                   <form>
//                     <div
//                       className="data-input-fields"
//                       style={{ flexDirection: "column" }}
//                     >
//                       <TextField
//                         margin="dense"
//                         label="Employee Name*"
//                         type="text"
//                         fullWidth
//                         name="employeeName"
//                         id="employeeName"
//                         value={
//                           formData.employeeProjectManagementEntities[count]
//                             ?.employeeName
//                         }
//                         onChange={(e) => handleEmployeeInputChange(count, e)}
//                       />
//                       <TextField
//                         margin="dense"
//                         label="Employee Id*"
//                         type="number"
//                         fullWidth
//                         name="employeeId"
//                         id="employeeId"
//                         value={
//                           formData.employeeProjectManagementEntities[count]
//                             ?.employeeId
//                         }
//                         onChange={(e) => handleEmployeeInputChange(count, e)}
//                       />
//                       <TextField
//                         margin="dense"
//                         label="Project Name*"
//                         type="text"
//                         fullWidth
//                         name="projectName"
//                         id="projectName"
//                         // value={
//                         //   formData.employeeProjectManagementEntities[count]
//                         //     ?.projectName
//                         // }
//                         disabled
//                         value={state.project}
//                         // onChange={(e) => handleEmployeeInputChange(count, e)}
//                       />
//                       <TextField
//                         margin="dense"
//                         label="Task Assigned For*"
//                         type="text"
//                         fullWidth
//                         name="taskAssignedFor"
//                         id="taskAssignedFor"
//                         value={
//                           formData.employeeProjectManagementEntities[count]
//                             ?.taskAssignedFor
//                         }
//                         onChange={(e) => handleEmployeeInputChange(count, e)}
//                       />
//                       <TextField
//                         margin="dense"
//                         label="Type The Task Here*"
//                         type="text"
//                         fullWidth
//                         name="typeTheTaskHere"
//                         id="typeTheTaskHere"
//                         value={
//                           formData.employeeProjectManagementEntities[count]
//                             ?.typeTheTaskHere
//                         }
//                         onChange={(e) => handleEmployeeInputChange(count, e)}
//                       />
//                     </div>
//                     <div className="data-buttons">
//                       <Button
//                         id="input-btn-submit"
//                         variant="outlined"
//                         type="submit"
//                         onClick={updateProject}
//                       >
//                         Submit
//                       </Button>
//                       <Button
//                         id="input-btn-cancel"
//                         variant="outlined"
//                         onClick={handleClose}
//                       >
//                         Cancel
//                       </Button>
//                     </div>
//                   </form>
//                 </DialogContent>
//               </Dialog>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
