import axios from "axios";

const url = "https://api.orivehrms.com";

export const saveDebit = async (formData) => {
  try {
    await axios.post(`${url}/debitvoucher/create/debitVoucher`, formData);
  } catch (error) {
    console.error("saveDebit", error);
  }
};

export const saveDebitByID = async (formData,id) => {
  try {
    await axios.get(`${url}/debitvoucher/get/${id}`, formData);
  } catch (error) {
    console.error("saveDebit", error);
  }
};



export const loadDebit = async () => {
  try {
    const result = await axios.get(`${url}/debitvoucher/get/debitVoucher`, {
      validateStatus: () => {
        return true;
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error load debit", error);
  }
};

export const deleteDebit = async (id) => {
  try {
    await axios.delete(`${url}/debitvoucher/delete/${id}`);
  } catch (error) {
    console.error("Error deleting debit", error);
  }
};

export const fetchsubType = async () => {
  try {
    const response = await axios.get(
      "https://api.orivehrms.com/subType/get/subType"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching subtype data", error);
    return [];
  }
};
