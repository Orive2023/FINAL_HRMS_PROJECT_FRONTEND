import axios from 'axios';


export const deleteReachus = async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/reachus/delete/${id}`)
    } catch(error) {
        console.error("Error deleting reachus",error)
    }
};

export const loadReachus = async () => {
    try {
       const result =  await axios.get(
            "https://api.orivehrms.com/reachus/get/reachus",
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

