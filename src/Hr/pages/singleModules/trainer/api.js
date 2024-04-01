import axios from 'axios';

export const saveTrainer = async (formData) => {
    try{
        await axios.post(
            "https://api.orivehrms.com/trainerslist/create/trainerslist",
            formData
          );
    } catch(error) {
        console.error("saveTrainer",error)
    }
}

export const deleteTrainer = async (trainerId) => {
    try{
        await axios.delete(`https://api.orivehrms.com/trainerslist/delete/${trainerId}`)
    } catch(error) {
        console.error("Error deleting trainer",error)
    }
};

export const loadTrainer = async () => {
    try {
       const result =  await axios.get(
        "https://api.orivehrms.com/trainerslist/get/trainerslist",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load trainer", error)
    }
}