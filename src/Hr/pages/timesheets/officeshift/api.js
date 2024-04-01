import axios from "axios";

export const saveOfficeShift = async (formData) => {
  try {
    await axios.post(
      "https://api.orivehrms.com/officeshifts/create/officeShifts",
      formData
    );
  } catch (error) {
    console.error("saveOfficeShift", error);
  }
};

export const deleteOfficeShift = async (id) => {
  try {
    await axios.delete(`https://api.orivehrms.com/officeshifts/delete/${id}`);
  } catch (error) {
    console.error("Error deleting Office Shift", error);
  }
};

export const loadOfficeShift = async () => {
  try {
    const result = await axios.get(
      "https://api.orivehrms.com/officeshifts/get/officeShifts",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error load Office Shift", error);
  }
};
