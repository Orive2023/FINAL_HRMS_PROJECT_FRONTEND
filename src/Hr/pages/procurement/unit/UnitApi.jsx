import axios from "axios";

const url = "https://api.orivehrms.com"

export const saveUnit = async (formData) => {
    try{
        await axios.post(
            `${url}/units/create/units`,
            formData,{headers: {
              // 'Content-Type': 'multipart/form-data'
            }}
          );
    } catch(error) {
        console.error("saveUnit",error)
    }
}

export const loadUnit = async () => {
    try {
       const result =  await axios.get(
            `${url}/units/get/units`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load unit", error)
    }
}



  export const deleteUnit = async (id) => {
    try{
        await axios.delete(`${url}/units/delete/${id}`)
    } catch(error) {
        console.error("Error deleting unit",error)
    }
};