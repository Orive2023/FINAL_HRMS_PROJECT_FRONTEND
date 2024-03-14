import axios from 'axios';


export const deleteCareer = async (id) => {
    try{
        await axios.delete(`http://localhost:8097/careersgetjobAlerts/delete/${id}`)
    } catch(error) {
        console.error("Error deleting location",error)
    }
};

export const loadCareer = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8097/careersgetjobAlerts/get/careersgetjobAlerts",
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

