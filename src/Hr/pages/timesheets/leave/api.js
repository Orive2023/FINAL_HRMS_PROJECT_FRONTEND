import axios from 'axios';

export const saveLeave = async (formData) => {
    try{
        await axios.post(
            "https://api.orivehrms.com/leaves/create/leaves",
            formData
          );
    } catch(error) {
        console.error("saveLeave",error)
    }
}

export const deleteLeave= async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/leaves/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Leave",error)
    }
};

export const loadLeave = async () => {
    try {
       const result =  await axios.get(
            "https://api.orivehrms.com/leaves/get/leaves",
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
            "https://api.orivehrms.com/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching employee data", error);
        return []
    }
}
