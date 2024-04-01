import axios from 'axios';

const url = "api.orivehrms.com";
const ip = "13.126.190.50:8085";

export const savePayslipGenerator = async (formData) => {
    try{
        await axios.post(
            `https://${url}/payslipgenerate/create/paySlipGenerate`,
            formData
          );
    } catch(error) {
        console.error("savePayroll",error)
    }
}

export const deletePayslipGenerator = async (id) => {
    try{
        await axios.delete(`https://${url}/payslipgenerate/delete/${id}`)
        loadPayslipGenerator();
    } catch(error) {
        console.error("Error deleting payslip",error)
    }
};

export const loadPayslipGenerator = async () => {
    try {
       const result =  await axios.get(
            `https://${url}/payslipgenerate/get/paySlipGenerate`,
            {
              validateStatus: () => {
                return true;
              },
            }
          );
          return result.data
    } catch (error) {
        console.error("Error load payslip", error)
    }
}

export const fetchEmployee = async () => {
    try {
      const response = await axios.get(
        "https://localhost:8080/employee/get/employee"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching employee data", error);
      return [];
    }
  };