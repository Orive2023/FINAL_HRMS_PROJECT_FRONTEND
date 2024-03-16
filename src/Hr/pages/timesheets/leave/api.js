import axios from 'axios';

export const saveLeave = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8084/leaves/create/leaves",
            formData
          );
    } catch(error) {
        console.error("saveLeave",error)
    }
}

export const deleteLeave= async (id) => {
    try{
        await axios.delete(`http://localhost:8084/leaves/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Leave",error)
    }
};

export const loadLeave = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8084/leaves/get/leaves",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load leave", error)
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
