import axios from 'axios';

const url = "localhost:8082";
const ip = "13.126.190.50:8082";

export const saveTravel = async (formData) => {
    try{
        await axios.post(
            `http://${url}/travels/create/travels`,
            formData
          );
    } catch(error) {
        console.error("saveTravel",error)
    }
}

export const deleteTravel = async (id) => {
    try{
        await axios.delete(`http://${url}/travels/delete/${id}`)
    } catch(error) {
        console.error("Error deleting trvel",error)
    }
};

export const loadTravel= async () => {
    try {
       const result =  await axios.get(
            `http://${url}/travels/get/travels`,
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
            "http://localhost:8082/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching company data", error);
        return []
    }
}



