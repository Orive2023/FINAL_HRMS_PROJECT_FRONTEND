import axios from "axios";
const url = "api.orivehrms.com";
const ip = "13.126.190.50:8088"
export const saveTicket = async (formData) => {
  try {
    await axios.post(
      `https://${url}/tickets/create/tickets`,
      formData
    );
  } catch (error) {
    console.error("saveTicket", error);
  }
};

export const deleteTicket = async (id) => {
  try {
    await axios.delete(`https://${url}/tickets/delete/${id}`);
  } catch (error) {
    console.error("Error deleting ticket", error);
  }
};

export const loadTicket = async () => {
  try {
    const result = await axios.get(
      `https://${url}/tickets/get/tickets`,
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error load ticket", error);
  }
};

export const fetchEmployee = async () => {
  try {
    const response = await axios.get(
      "https://api.orivehrms.com/employee/get/employee"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee data", error);
    return [];
  }
};

export const fetchProject = async () => {
  try {
    const response = await axios.get(
      "https://api.orivehrms.com/projects/get/projects"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching project data", error);
    return [];
  }
};
