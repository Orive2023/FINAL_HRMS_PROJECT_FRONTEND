import axios from "axios";

const url = "api.orivehrms.com";
const ip = "13.126.190.50:8085";

export const saveSalaryTemplate = async (formData) => {
  try {
    await axios.post(
      `https://${url}/salaryTemplate/create/salaryTemplate`,
      formData
    );
  } catch (error) {
    console.error("savePayroll", error);
  }
};

export const deleteSalaryTemplate = async (id) => {
  try {
    await axios.delete(`https://${url}/salaryTemplate/delete/${id}`);
    loadSalaryTemplate();
  } catch (error) {
    console.error("Error deleting Payroll", error);
  }
};

export const loadSalaryTemplate = async () => {
  try {
    const result = await axios.get(
      `https://${url}/salaryTemplate/get/salaryTemplate`,
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error load salaryTemplate", error);
  }
};

export const fetchEmployee = async () => {
  try {
    const response = await axios.get(
      "https://api.orivehrms.com/employee/get/employee"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee data", error);
    return [];
  }
};
