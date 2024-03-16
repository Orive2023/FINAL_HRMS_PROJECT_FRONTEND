import axios from "axios";

const url = "http://localhost:8094";

export const savePurchase = async (formData) => {
  try {
    await axios.post(`${url}/purchaseOrder/create/purchaseOrder`, formData, {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
      },
    });
  } catch (error) {
    console.error("savePurchase", error);
  }
};

export const loadAllPurchase = async () => {
  try {
    const result = await axios.get(`${url}/purchaseOrder/get/purchaseOrder`, {
      validateStatus: () => {
        return true;
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error load purchaseorder", error);
  }
};

export const deletePurchase = async (id) => {
  try {
    await axios.delete(`${url}/purchaseOrder/delete/${id}`);
  } catch (error) {
    console.error("Error deleting purchaseorder", error);
  }
};
