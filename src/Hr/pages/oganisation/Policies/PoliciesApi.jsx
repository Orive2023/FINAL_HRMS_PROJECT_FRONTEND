import axios from "axios";

const url = "http://localhost:8081"

export const savePolicies = async (formData) => {
    try{
        await axios.post(
            `${url}/policies/create/policies`,
            formData,{headers: {
              'Content-Type': 'multipart/form-data'
            }}
          );
    } catch(error) {
        console.error("savePolicies",error)
    }
}

export const loadPolicies = async () => {
    try {
       const result =  await axios.get(
            `${url}/policies/get/policies`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load policy", error)
    }
}


export const fetchCompany = async () => {
    try {
      const response = await axios.get(
        `${url}/company/get/company`
      );
      return response.data; // Log the response data
    } catch (error) {
      console.error("Error fetching company data", error);
      return []
    }
  };

  export const deletePolicies = async (id) => {
    try{
        await axios.delete(`${url}/policies/delete/${id}`)
    } catch(error) {
        console.error("Error deleting policies",error)
    }
};