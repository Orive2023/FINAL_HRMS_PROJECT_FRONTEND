import axios from 'axios';

export const saveEmployeeExit = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8082/employee_exit/create/employee_exit",
            formData
          );
    } catch(error) {
        console.error("saveEmployeeExit",error)
    }
}

export const deleteEmployeeExit = async (id) => {
    try{
        await axios.delete(`http://localhost:8082/employee_exit/delete/${id}`)
    } catch(error) {
        console.error("Error deleting employeeExit",error)
    }
};

export const loadEmployeeExit = async () => {
    try {
        const result = await axios.get(
            "http://localhost:8082/employee_exit/get/employee_exit",
            {
              validateStatus: () => {
                return true;
              },
            }
          );
          return result.data
    } catch (error) {
        console.error("Error load employeeExit", error)
    }
}

export const fetchEmployee = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8082/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching company data", error);
        return []
    }
}
