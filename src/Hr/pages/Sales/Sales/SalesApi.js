import axios from "axios";

export const saveSales = async (formData) => {
  try {
    await axios.post(
      "http://localhost:8080/sale/create/Sale",

      formData
    );
  } catch (error) {
    console.error("saveSale", error);
  }
};

export const deleteSales = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/sale/delete/${id}`);
  } catch (error) {
    console.error("Error deleting sale", error);
  }
};

export const loadSales = async () => {
  try {
    const result = await axios.get(
      "http://localhost:8080/sale/get/Sale",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error load sale", error);
  }
};




