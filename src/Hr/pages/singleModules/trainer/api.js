import axios from 'axios';

export const saveTrainer = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8080/trainerslist/create/trainerslist",
            formData
          );
    } catch(error) {
        console.error("saveTrainer",error)
    }
}

export const deleteTrainer = async (trainerId) => {
    try{
        await axios.delete(`http://localhost:8080/trainerslist/delete/${trainerId}`)
    } catch(error) {
        console.error("Error deleting trainer",error)
    }
};

export const loadTrainer = async () => {
    try {
       const result =  await axios.get(
        "http://localhost:8080/trainerslist/get/trainerslist",
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