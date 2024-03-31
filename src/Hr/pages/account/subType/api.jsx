import axios from "axios";

const url = "https://api.orivehrms.com"

export const saveSubType = async (formData) => {
    try{
        await axios.post(
            `${url}/subtype/create/subType`,
            formData
          );
    } catch(error) {
        console.error("saveSubType",error)
    }
}

export const loadSubType = async () => {
    try {
       const result =  await axios.get(
            `${url}/subtype/get/subType`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load subType", error)
    }
}

  export const deleteSubType = async (id) => {
    try{
        await axios.delete(`${url}/subtype/delete/${id}`)
    } catch(error) {
        console.error("Error deleting subType",error)
    }
};