import axios from "axios";

const url = "http://localhost:8093";

export const saveContraVoucher = async (formData) => {
  try {
    await axios.post(`${url}/contravoucher/create/contraVoucher`, formData);
  } catch (error) {
    console.error("saveContraVoucher", error);
  }
};

export const loadContraVoucher = async () => {
  try {
    const result = await axios.get(`${url}/contravoucher/get/contraVoucher`, {
      validateStatus: () => {
        return true;
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error load Contra Voucher", error);
  }
};

export const deleteContraVoucher = async (id) => {
  try {
    await axios.delete(`${url}/contravoucher/delete/${id}`);
  } catch (error) {
    console.error("Error deleting Contra Voucher", error);
  }
};
