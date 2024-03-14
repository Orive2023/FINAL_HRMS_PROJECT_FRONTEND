import axios from 'axios';

const url = "localhost:8082";
const ip = "13.126.190.50:8082";

export const saveComplaint = async (formData) => {
    try{
        await axios.post(
            `http://${url}/complaints/create/complaints`,
            formData
          );
    } catch(error) {
        console.error("saveComplaint",error)
    }
}

export const deleteProject = async (id) => {
    try{
        await axios.delete(`http://${url}/complaints/delete/${id}`)
    } catch(error) {
        console.error("Error deleting project",error)
    }
};

export const loadComplaint = async () => {
    try {
       const result =  await axios.get(
            `http://${url}/complaints/get/complaints`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load complaint", error)
    }
}

export const fetchEmployee = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8082/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching employee data", error);
        return []
    }
}