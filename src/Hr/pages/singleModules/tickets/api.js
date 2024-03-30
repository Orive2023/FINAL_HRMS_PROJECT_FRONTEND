import axios from "axios";
const url = "localhost:8080";
const ip = "13.126.190.50:8088"
export const saveTicket = async (formData) => {
  try {
    await axios.post(
      `http://${url}/tickets/create/tickets`,
      formData
    );
  } catch (error) {
    console.error("saveTicket", error);
  }
};

export const deleteTicket = async (id) => {
  try {
    await axios.delete(`http://${url}/tickets/delete/${id}`);
  } catch (error) {
    console.error("Error deleting ticket", error);
  }
};

export const loadTicket = async () => {
  try {
    const result = await axios.get(
      `http://${url}/tickets/get/tickets`,
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
      "http://localhost:8080/employee/get/employee"
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
      "http://localhost:8080/projects/get/projects"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching project data", error);
    return [];
  }
};
