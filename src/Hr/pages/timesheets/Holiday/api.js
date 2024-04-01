import axios from 'axios';

export const saveHoliday = async (formData) => {
    try{
        await axios.post(
            "https://api.orivehrms.com/holidays/create/holidays",
            formData
          );
    } catch(error) {
        console.error("saveHoliday",error)
    }
}

export const deleteHoliday = async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/holidays/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Holiday",error)
    }
};

export const loadHoliday = async (id) => {
    try {
       const result =  await axios.get(
        "https://api.orivehrms.com/holidays/get/holidays",
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