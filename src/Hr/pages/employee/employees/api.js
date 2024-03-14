import axios from "axios";

const url = "localhost:8082";
const ip = "13.126.190.50:8082";

export const saveEmployees = async (formData) => {
  try {
    await axios.post(`http://${url}/employee/create/employee`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error("Error in saving Employees", error);
  }
};

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`http://${url}/employee/delete/ID/${id}`);
  } catch (error) {
    console.error("Error deleting employee", error);
  }
};

export const loademployees = async () => {
  try {
    const result = await axios.get(`http://${url}/employee/get/employee`, {
      validateStatus: () => {
        return true;
      },
    });
    return result.data;
  } catch (error) {
    console.log("Error Loading Employee Details", error);
  }
};
export const fetchDesignation = async () => {
  try {
      const response = await axios.get(
          "http://localhost:8081/designation/get/designation"
        );
        return response.data
  } catch (error){
      console.error("Error fetching designation data", error);
      return []
  }
}
