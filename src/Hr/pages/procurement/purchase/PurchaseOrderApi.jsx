import axios from "axios";

const url = "https://api.orivehrms.com";

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
export const saveItems = async (items) => {
  try {
    await axios.post(`${url}/purchaseorderlist/add`, items);
  } catch (error) {
    console.error("saveList", error);
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

export const loadAItemPurchase = async () => {
  try {
    const result = await axios.get(`${url}/purchaseorderlist/all`, {
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

export const deletePurchaseList = async (id) => {
  try {
    await axios.delete(`${url}/purchaseorderlist/delete/${id}`);
  } catch (error) {
    console.error("Error deleting purchaseorder", error);
  }
};

export const fetchUnit = async () => {
  try {
    const response = await axios.get("https://api.orivehrms.com/units/get/units");
    return response.data;
  } catch (error) {
    console.error("Error fetching unit data", error);
    return [];
  }
};
