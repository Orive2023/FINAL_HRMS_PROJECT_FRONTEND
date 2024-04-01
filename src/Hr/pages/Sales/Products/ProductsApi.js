import axios from "axios";

export const saveProducts = async (formData) => {
  try {
    await axios.post(
      "https://api.orivehrms.com/revenue/create/Revenue",

      formData
    );
  } catch (error) {
    console.error("saveProduct", error);
  }
};

export const deleteProducts = async (id) => {
  try {
    await axios.delete(`https://api.orivehrms.com/revenue/delete/${id}`);
  } catch (error) {
    console.error("Error deleting Revenue", error);
  }
};

export const loadProducts = async () => {
  try {
    const result = await axios.get(
      "https://api.orivehrms.com/revenue/get/Revenue",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error load Revenue", error);
  }
};




