// import React, {
//     useEffect,
//     useState,
//   } from "react";
//   import axios from "axios";
  
//   import {
//     Link,
//     useNavigate,
//     useParams,
//   } from "react-router-dom";

//   import Button from "@mui/material/Button";

//   import Header from "../../../../components/Header";
//   import SideBar from "../../../../components/SideBar";
//   import CompanyLogoFile from "../../../../components/CompanyLogoFile";
  
//   const EditUser = () => {
//     let navigate = useNavigate();
  
//     const { id } = useParams();
  
//     const [user, setUser] = useState({
//       name: "",
//       address: "",
//       emailId: "",
//       mobile: "",
//     });

//     useEffect(() => {
//       loadUser();
//     }, );
  
//     const loadUser = async () => {
//       const result = await axios.get(
//         `localhost:8080/user/get/${id}`
//       );
//       setUser(result.data);
//     };
  
//     const handleInputChange = (e) => {
//       setUser({
//         ...user,
//         [e.target.name]: e.target.value,
//       });
//     };
//     const updateUser = async (e) => {
//       e.preventDefault();
//       await axios.put(
//         `https://api.orivehrms.com/user/update/${id}`,
//         user
//       );
//       navigate("/hr/recruitment/user");
//     };

//     const [menu, setMenu] = useState(false);

  
//     return (

//       <div>
//       <div id="header-container" className="header-container">
//         <CompanyLogoFile />
//         <Header menu={menu} setMenu={setMenu} />
//       </div>
//       <div className="dashboard-container">
//         <SideBar menu={menu} setMenu={setMenu} />
//         <div className="head-foot-part">
//         <div className="col-sm-8 py-2 px-2 shadow">
//         <h2 className="mt-5"> Edit User</h2>
//         <form onSubmit={(e) => updateUser(e)}>
//           <div className="input-group mb-5">
//             <label
//               className="input-group-text"
//               htmlFor="departmentName">
//              Name
//             </label>
//             <input
//               className="form-control col-sm-6"
//               type="text"
//               name="name"
//               id="name"
//               required
//               value={user.name}
//               onChange={(e) => handleInputChange(e)}
//             />
//           </div>
  
//           <div className="input-group mb-5">
//             <label
//               className="input-group-text"
//               htmlFor="departmentType">
//               Address
//             </label>
//             <input
//               className="form-control col-sm-6"
//               type="text"
//               name="address"
//               id="address"
//               required
//               value={user.address}
//               onChange={(e) => handleInputChange(e)}
//             />
//           </div>
  
//           <div className="input-group mb-5">
//             <label
//               className="input-group-text"
//             >
//               Email
//             </label>
//             <input
//               className="form-control col-sm-6"
//               type="text"
//               name="emailId"
//               id="emailId"
//               required
//               value={user.emailId}
//               onChange={(e) => handleInputChange(e)}
//             />
//           </div>
  
//           <div className="input-group mb-5">
//             <label
//               className="input-group-text"
//             >
//               Mobile
//             </label>
//             <input
//               className="form-control col-sm-6"
//               type="text"
//               name="mobile"
//               id="mobile"
//               required
//               value={user.mobile}
//               onChange={(e) => handleInputChange(e)}
//             />
//           </div>
  
//           <div className="data-buttons">
//                 <Button id="input-btn-submit" variant="outlined" type="submit">
//                   Submit
//                 </Button>
//                 <Button
//                   id="input-btn-cancel"
//                   variant="outlined"
//                   onClick={() => navigate("/hr/recruitment/user")}
//                 >
//                   Back
//                 </Button>
//               </div>
//         </form>
//       </div>
//         </div>
//       </div>
//     </div>
   
//     );
//   };
  
//   export default EditUser;
  