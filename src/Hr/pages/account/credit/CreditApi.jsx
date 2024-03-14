import axios from "axios";

const url = "http://localhost:8093";

export const saveCredit = async (formData) => {
  try {
    await axios.post(`${url}/creditvoucher/create/creditVoucher`, formData);
  } catch (error) {
    console.error("saveCredit", error);
  }
};

export const loadCredit = async () => {
  try {
    const result = await axios.get(`${url}/creditvoucher/get/creditVoucher`, {
      validateStatus: () => {
        return true;
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error load credit", error);
  }
};

export const deleteCredit = async (id) => {
  try {
    await axios.delete(`${url}/creditvoucher/delete/${id}`);
  } catch (error) {
    console.error("Error deleting credit", error);
  }
};
export const fetchsubType = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8093/subType/get/subType"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching subtype data", error);
    return [];
  }
};
