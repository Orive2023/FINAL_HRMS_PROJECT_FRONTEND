import axios from "axios";
const url = "localhost:8082";
const ip = "13.126.190.50:8082";
export const saveAward = async (formData) => {
  try {
    await axios.post(`http://${url}/awards/create/awards`, formData);
  } catch (error) {
    console.error("saveAward", error);
  }
};

export const deleteAward = async (id) => {
  try {
    await axios.delete(`http://${url}/awards/delete/${id}`);
  } catch (error) {
    console.error("Error deleting award", error);
  }
};

export const loadAward = async () => {
  try {
    const result = await axios.get(`http://${url}/awards/get/awards`, {
      validateStatus: () => {
        return true;
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error load award", error);
  }
};

export const fetchEmployee = async () => {
  try {
      const response = await axios.get(
          "http://localhost:8082/employee/get/employee"
        );
        return response.data
  } catch (error){
      console.error("Error fetching employee data", error);
      return [];
  }
}
