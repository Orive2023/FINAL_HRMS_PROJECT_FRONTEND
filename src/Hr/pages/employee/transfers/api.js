import axios from 'axios';
const url = "localhost:8080";
const ip = "13.126.190.50:8082";
export const saveTransfer = async (formData) => {
    try{
        await axios.post(
            `http://${url}/transfers/create/transfers`,
            formData
          );
    } catch(error) {
        console.error("saveDepartment",error)
    }
}

export const deleteTransfer = async (id) => {
    try{
        await axios.delete(`http://${url}/transfers/delete/${id}`)
    } catch(error) {
        console.error("Error deleting department",error)
    }
};

export const loadTransfer = async () => {
    try {
       const result =  await axios.get(
            `http://${url}/transfers/get/transfers`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load transfer", error)
    }
}

export const fetchEmployee = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8080/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching employee data", error);
        return []
    }
}

export const fetchLocations = async () => {
    try {
        const response = await axios.get(
          "http://localhost:8080/location/get/location"
        );
       return response.data 
      } catch (error) {
        console.error("Error fetching department data", error);
      }
}
export const fetchDepartment = async () => {
    try {
        const response = await axios.get(
          "http://localhost:8080/department/get/department"
        );
       return response.data 
      } catch (error) {
        console.error("Error fetching department data", error);
      }
}

