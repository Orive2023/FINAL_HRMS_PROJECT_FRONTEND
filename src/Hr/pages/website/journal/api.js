import axios from 'axios';


export const deleteJournal = async (id) => {
    try{
        await axios.delete(`http://localhost:8097/journalsdetails/delete/${id}`)
    } catch(error) {
        console.error("Error deleting location",error)
    }
};

export const loadJournal = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8097/journalsdetails/get/journalsdetails",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load journal", error)
    }
}

