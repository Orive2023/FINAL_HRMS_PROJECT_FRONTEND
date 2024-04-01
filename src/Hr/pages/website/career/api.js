import axios from 'axios';


export const deleteCareer = async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/careersgetjobAlerts/delete/${id}`)
    } catch(error) {
        console.error("Error deleting location",error)
    }
};

export const loadCareer = async () => {
    try {
       const result =  await axios.get(
            "https://api.orivehrms.com/careersgetjobAlerts/get/careersgetjobAlerts",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load location", error)
    }
}

