import axios from 'axios';

export const  saveLoan = async (formData) => {
    try{
        await axios.post(
            "https://api.orivehrms.com/grantloan/create/grantloan",
            formData
          );
    } catch(error) {
        console.error("saveLoan",error)
    }
}

export const deleteLoan = async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/grantloan/delete/${id}`)
    } catch(error) {
        console.error("Error deleting loan",error)
    }
};

export const loadLoan = async () => {
    try {
       const result =  await axios.get(
            "https://api.orivehrms.com/grantloan/get/grantloan",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error loading loan", error)
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

