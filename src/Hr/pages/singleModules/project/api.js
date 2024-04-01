import axios from "axios";

export const saveProject = async (formData) => {
  try {
    await axios.post(
      "https://api.orivehrms.com/projects/create/projects",

      formData
    );
  } catch (error) {
    console.error("saveProject", error);
  }
};

export const deleteProject = async (id) => {
  try {
    await axios.delete(`https://api.orivehrms.com/projects/delete/${id}`);
  } catch (error) {
    console.error("Error deleting project", error);
  }
};

export const loadProject = async () => {
  try {
    const result = await axios.get(
      "https://api.orivehrms.com/projects/get/projects",
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
      "https://api.orivehrms.com/company/get/company"
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
      "https://api.orivehrms.com/employee/get/employee"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching project data", error);
    return [];
  }
};
