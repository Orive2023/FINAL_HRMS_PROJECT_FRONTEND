import axios from 'axios';

const url = "api.orivehrms.com";
const ip = "13.126.190.50:8082";

export const saveTravel = async (formData) => {
    try{
        await axios.post(
            `https://${url}/travels/create/travels`,
            formData
          );
    } catch(error) {
        console.error("saveTravel",error)
    }
}

export const deleteTravel = async (id) => {
    try{
        await axios.delete(`https://${url}/travels/delete/${id}`)
    } catch(error) {
        console.error("Error deleting trvel",error)
    }
};

export const loadTravel= async () => {
    try {
       const result =  await axios.get(
            `https://${url}/travels/get/travels`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load travel", error)
    }
}
export const fetchEmployee = async () => {
    try {
        const response = await axios.get(
            "https://api.orivehrms.com/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching company data", error);
        return []
    }
}



