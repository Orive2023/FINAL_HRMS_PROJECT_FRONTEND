import axios from "axios";

const url = `https://api.orivehrms.com`

export const saveVendor = async (formData) => {
    try{
        await axios.post(
            `${url}/vendor/create/vendor`,
            formData,{headers: {
              // 'Content-Type': '/form-data'
            }}
          );
    } catch(error) {
        console.error("saveVendor",error)
    }
}

export const loadVendor = async () => {
    try {
       const result =  await axios.get(
            `${url}/vendor/get/vendor`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load vendor", error)
    }
}



  export const deleteVendor = async (id) => {
    try{
        await axios.delete(`${url}/vendor/delete/${id}`)
    } catch(error) {
        console.error("Error deleting vendor",error)
    }
};