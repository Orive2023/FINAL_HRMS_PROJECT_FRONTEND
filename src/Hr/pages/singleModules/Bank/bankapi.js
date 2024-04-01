import axios from 'axios';
const url = "api.orivehrms.com";
export const saveAddbank = async (formData) => {
    try{
        await axios.post(
            `https://${url}/addbank/create/bank`,
            formData
          );
    } catch(error) {
        console.error("saveAddBank",error)
    }
}

export const deleteBank = async (id) => {
    try{
        await axios.delete(`https://${url}/addbank/delete/${id}`)
    } catch(error) {
        console.error("Error deleting addbank",error)
    }
};

const accessToken = localStorage.getItem("AuthToken")


export const loadAddbank = async () => {
    try {
       const result =  await axios.get(
          `https://api.orivehrms.com/addbank/get/addbank`, {
            headers:{
              "Authorization":`Bearer ${accessToken}`
            }
          }
           
          );
          return result.data
    } catch (error) {
        console.error("Error loading addbank", error)
    }
}

export const loadBankById = async (id) => {
    try {
       const result =  await axios.get(
            `https://${url}/addbank/get/${id}`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error loading addbank", error)
    }
}

export const updateBank = async (formData, id) => {
    try {
        const result = await axios.patch(
          `https://${url}/addbank/update/${id}`,
          formData
        );
    
        return result.data;
      } catch (error) {
        console.error('Error updating Bank Details:', error);
        throw error;
      }
};


