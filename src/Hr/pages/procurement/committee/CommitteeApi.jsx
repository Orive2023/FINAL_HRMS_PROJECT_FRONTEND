import axios from "axios";

const url = "https://api.orivehrms.com"

export const saveCommittee = async (formData) => {
    try{
        await axios.post(
            `${url}/committees/create/company`,
            formData,{headers: {
              'Content-Type': 'multipart/form-data'
            }}
          );
    } catch(error) {
        console.error("saveCommittee",error)
    }
}

export const loadCommittee = async () => {
    try {
       const result =  await axios.get(
            `${url}/committees/get/committees`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load committee", error)
    }
}



  export const deleteCommittee = async (id) => {
    try{
        await axios.delete(`${url}/committees/delete/${id}`)
    } catch(error) {
        console.error("Error deleting committee",error)
    }
};