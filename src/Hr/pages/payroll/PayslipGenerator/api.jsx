import axios from 'axios';

const url = "localhost:8085";
const ip = "13.126.190.50:8085";

export const savePayslipGenerator = async (formData) => {
    try{
        await axios.post(
            `http://${url}/payslipgenerate/create/paySlipGenerate`,
            formData
          );
    } catch(error) {
        console.error("savePayroll",error)
    }
}

export const deletePayslipGenerator = async (id) => {
    try{
        await axios.delete(`http://${url}/payslipgenerate/delete/${id}`)
        loadPayslipGenerator();
    } catch(error) {
        console.error("Error deleting payslip",error)
    }
};

export const loadPayslipGenerator = async () => {
    try {
       const result =  await axios.get(
            `http://${url}/payslipgenerate/get/paySlipGenerate`,
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
        "http://localhost:8082/employee/get/employee"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching employee data", error);
      return [];
    }
  };