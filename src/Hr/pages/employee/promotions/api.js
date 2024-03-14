import axios from 'axios';

const url = "localhost:8082";
const ip = "13.126.190.50:8082";

export const savePromotion = async (formData) => {
    try{
        await axios.post(
            `http://${url}/promotions/create/promotions`,
            formData
          );
    } catch(error) {
        console.error("savePromotion",error)
    }
}

export const deletePromotion = async (id) => {
    try{
        await axios.delete(`http://${url}/promotions/delete/${id}`)
    } catch(error) {
        console.error("Error deleting project",error)
    }
};

export const loadPromotion = async () => {
    try {
       const result =  await axios.get(
            `http://${url}/promotions/get/promotions`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load promotion", error)
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