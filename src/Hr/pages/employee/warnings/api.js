import axios from 'axios';

export const saveWarning = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8080/warnings/create/warnings",
            formData
          );
    } catch(error) {
        console.error("saveWarning",error)
    }
}

export const deleteWarning = async (id) => {
    try{
        await axios.delete(`http://localhost:8080/warnings/delete/${id}`)
    } catch(error) {
        console.error("Error deleting project",error)
    }
};

export const loadWarning = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8080/warnings/get/warnings",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load warning", error)
    }
}
export const fetchEmployee = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8080/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching employee data", error);
        return []
    }
}

