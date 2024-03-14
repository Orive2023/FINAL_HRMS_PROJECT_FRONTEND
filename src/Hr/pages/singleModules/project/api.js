import axios from "axios";

export const saveProject = async (formData) => {
  try {
    await axios.post(
      "http://localhost:8086/projects/create/projects",

      formData
    );
  } catch (error) {
    console.error("saveProject", error);
  }
};

export const deleteProject = async (id) => {
  try {
    await axios.delete(`http://localhost:8086/projects/delete/${id}`);
  } catch (error) {
    console.error("Error deleting project", error);
  }
};

export const loadProject = async () => {
  try {
    const result = await axios.get(
      "http://localhost:8086/projects/get/projects",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error load project", error);
  }
};

export const fetchCompanies = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8081/company/get/company"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching project data", error);
    return [];
  }
};
export const fetchEmployee = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8082/employee/get/employee"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching project data", error);
    return [];
  }
};
