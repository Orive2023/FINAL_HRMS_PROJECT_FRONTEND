import axios from 'axios';

const url = "api.orivehrms.com";
const ip = "13.126.190.50:8080";

export const saveComplaint = async (formData) => {
    try{
        await axios.post(
            `https://${url}/complaints/create/complaints`,
            formData
          );
    } catch(error) {
        console.error("saveComplaint",error)
    }
}

export const deleteProject = async (id) => {
    try{
        await axios.delete(`https://${url}/complaints/delete/${id}`)
    } catch(error) {
        console.error("Error deleting project",error)
    }
};

export const loadComplaint = async () => {
    try {
       const result =  await axios.get(
            `https://${url}/complaints/get/complaints`,
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
            "https://api.orivehrms.com/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching employee data", error);
        return []
    }
}