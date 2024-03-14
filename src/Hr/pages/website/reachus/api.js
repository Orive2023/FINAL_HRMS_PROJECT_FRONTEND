import axios from 'axios';


export const deleteReachus = async (id) => {
    try{
        await axios.delete(`http://localhost:8097/reachus/delete/${id}`)
    } catch(error) {
        console.error("Error deleting reachus",error)
    }
};

export const loadReachus = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8097/reachus/get/reachus",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load reachus", error)
    }
}

