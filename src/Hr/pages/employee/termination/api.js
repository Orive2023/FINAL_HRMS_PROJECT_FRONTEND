import axios from 'axios';

export const saveTermination = async (formData) => {
    try{
        await axios.post(
            "https://api.orivehrms.com/terminations/create/terminations",
            formData
          );
    } catch(error) {
        console.error("saveTermination",error)
    }
}

export const deleteTermination = async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/terminations/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Termination",error)
    }
};

export const loadTermination = async () => {
    try {
       const result =  await axios.get(
        "https://api.orivehrms.com/terminations/get/terminationsId",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load Termination", error)
    }
}

export const fetchEmployee= async () => {
    try {
        const response = await axios.get(
          "https://api.orivehrms.com/employee/get/employee"
        );
       return response.data 
      } catch (error) {
        console.error("Error fetching EmployeeName data", error);
      }
}