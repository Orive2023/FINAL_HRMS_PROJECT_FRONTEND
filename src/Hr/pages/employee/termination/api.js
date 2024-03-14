import axios from 'axios';

export const saveTermination = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8082/terminations/create/terminations",
            formData
          );
    } catch(error) {
        console.error("saveTermination",error)
    }
}

export const deleteTermination = async (id) => {
    try{
        await axios.delete(`http://localhost:8082/terminations/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Termination",error)
    }
};

export const loadTermination = async () => {
    try {
       const result =  await axios.get(
        "http://localhost:8082/terminations/get/terminationsId",
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
          "http://localhost:8082/employee/get/employee"
        );
       return response.data 
      } catch (error) {
        console.error("Error fetching EmployeeName data", error);
      }
}