import axios from "axios";

const url = "localhost:8080";
const ip = "13.126.190.50:8085";

export const saveSalaryTemplate = async (formData) => {
  try {
    await axios.post(
      `http://${url}/salaryTemplate/create/salaryTemplate`,
      formData
    );
  } catch (error) {
    console.error("savePayroll", error);
  }
};

export const deleteSalaryTemplate = async (id) => {
  try {
    await axios.delete(`http://${url}/salaryTemplate/delete/${id}`);
    loadSalaryTemplate();
  } catch (error) {
    console.error("Error deleting Payroll", error);
  }
};

export const loadSalaryTemplate = async () => {
  try {
    const result = await axios.get(
      `http://${url}/salaryTemplate/get/salaryTemplate`,
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
      "http://localhost:8080/employee/get/employee"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee data", error);
    return [];
  }
};
