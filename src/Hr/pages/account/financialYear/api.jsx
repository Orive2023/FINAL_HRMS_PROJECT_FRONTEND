import axios from "axios";

const url = "http://localhost:8093";

export const saveFinancialYear = async (formData) => {
  try {
    await axios.post(`${url}/financialyear/create/financialYear`, formData);
  } catch (error) {
    console.error("saveFinancialYear", error);
  }
};

export const loadFinancialYear = async () => {
  try {
    const result = await axios.get(`${url}/financialyear/get/financialYear`, {
      validateStatus: () => {
        return true;
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error load financial year", error);
  }
};

export const deleteFinancialYear = async (id) => {
  try {
    await axios.delete(`${url}/financialyear/delete/${id}`);
  } catch (error) {
    console.error("Error deleting financial year", error);
  }
};
