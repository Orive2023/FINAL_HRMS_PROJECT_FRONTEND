import axios from "axios";

export const saveProducts = async (formData) => {
  try {
    await axios.post(
      "http://localhost:8096/revenue/create/Revenue",

      formData
    );
  } catch (error) {
    console.error("saveProduct", error);
  }
};

export const deleteProducts = async (id) => {
  try {
    await axios.delete(`http://localhost:8096/revenue/delete/${id}`);
  } catch (error) {
    console.error("Error deleting Revenue", error);
  }
};

export const loadProducts = async () => {
  try {
    const result = await axios.get(
      "http://localhost:8096/revenue/get/Revenue",
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




