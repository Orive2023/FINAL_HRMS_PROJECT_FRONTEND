// import axios from "axios";

// export const loadEmployee = async () => {
//   try {
//     const result = await axios.get(
//       `http://localhost:8082/employee/byId/${11}`,
//       {
//         validateStatus: () => {
//           return true;
//         },
//       }
//     );
//     return result;
//   } catch (error) {
//     console.log("Error Loading Employee Details", error);
//   }
// };

import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeDetails = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const loadEmployee = async () => {
    try {
      const result = await axios.get(`http://localhost:8082/employee/byId/11`, {
        validateStatus: () => {
          return true;
        },
      });
      console.log(result);
      setEmployeeData(result.data);
    } catch (error) {
      console.log("Error Loading Employee Details", error);
    }
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  console.log(employeeData);

  return { employeeData };
};

export default EmployeeDetails;
