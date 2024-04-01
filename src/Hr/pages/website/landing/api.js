import axios from 'axios';

export const deleteLanding = async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/landingpagepopup/delete/${id}`)
    } catch(error) {
        console.error("Error deleting  landing",error)
    }
};

export const loadLanding = async () => {
    try {
       const result =  await axios.get(
            "https://api.orivehrms.com/landingpagepopup/get/landingpagepopup",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load landing", error)
    }
}
