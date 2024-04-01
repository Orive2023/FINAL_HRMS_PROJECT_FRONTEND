import axios from "axios";

export const saveWorksheet = async (formData) => {
  try {
    await axios.post(
      "https://api.orivehrms.com/worksheet/create/worksheet",
      formData
    );
  } catch (error) {
    console.error("saveWorksheet", error);
  }
};

export const deleteWorksheet = async (id) => {
  try {
    await axios.delete(`https://api.orivehrms.com/worksheet/delete/${id}`);
  } catch (error) {
    console.error("Error deleting Worksheet", error);
  }
};

export const loadWorksheet = async () => {
  try {
    const result = await axios.get(
      "https://api.orivehrms.com/worksheet/get/worksheet",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error load Worksheet", error);
  }
};

export const fetchProjects = async () => {
  try {
    const response = await axios.get(
      "https://api.orivehrms.com/projects/get/projects"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching projects data", error);
  }
};

export const fetchEmployee = async () => {
  try {
    const response = await axios.get(
      "https://api.orivehrms.com/employee/get/employee"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching EmployeeName data", error);
  }
};