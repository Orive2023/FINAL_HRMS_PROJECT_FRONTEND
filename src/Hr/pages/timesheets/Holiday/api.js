import axios from 'axios';

export const saveHoliday = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8084/holidays/create/holidays",
            formData
          );
    } catch(error) {
        console.error("saveHoliday",error)
    }
}

export const deleteHoliday = async (id) => {
    try{
        await axios.delete(`http://localhost:8084/holidays/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Holiday",error)
    }
};

export const loadHoliday = async (id) => {
    try {
       const result =  await axios.get(
        "http://localhost:8084/holidays/get/holidays",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load Holiday", error)
    }
}