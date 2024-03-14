import axios from 'axios';
const url = "localhost:8092";
export const saveAddbank = async (formData) => {
    try{
        await axios.post(
            `http://${url}/addbank/create/bank`,
            formData
          );
    } catch(error) {
        console.error("saveAddBank",error)
    }
}

export const deleteBank = async (id) => {
    try{
        await axios.delete(`http://${url}/addbank/delete/${id}`)
    } catch(error) {
        console.error("Error deleting addbank",error)
    }
};

const accessToken = localStorage.getItem("AuthToken")


export const loadAddbank = async () => {
    try {
       const result =  await axios.get(
          `http://localhost:8092/addbank/get/addbank`, {
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
            `http://${url}/addbank/get/${id}`,
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
          `http://${url}/addbank/update/${id}`,
          formData
        );
    
        return result.data;
      } catch (error) {
        console.error('Error updating Bank Details:', error);
        throw error;
      }
};


