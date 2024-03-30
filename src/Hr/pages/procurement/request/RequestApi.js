import axios from "axios";

const url = "http://localhost:8080"

export const saveRequest = async (formData) => {
    try{
        await axios.post(
            `${url}/request/create/request`,
            formData
          );
    } catch(error) {
        console.error("saveRequest",error)
    }
}

export const loadRequest = async () => {
    try {
       const result =  await axios.get(
            `${url}/request/get/request`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load request", error)
    }
}



  export const deleteRequest = async (id) => {
    try{
        await axios.delete(`${url}/request/delete/${id}`)
    } catch(error) {
        console.error("Error deleting request",error)
    }
};
export const fetchUnit = async () => {
  try {
     const result =  await axios.get(
          `http://localhost:8080/units/get/units`,
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