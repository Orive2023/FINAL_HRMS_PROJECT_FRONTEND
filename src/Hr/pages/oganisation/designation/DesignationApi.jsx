import axios from "axios";

const url = "http://localhost:8081"

export const saveDesignation = async (formData) => {
    try{
        await axios.post(
            `${url}/designation/create/designation`,
            formData
          );
    } catch(error) {
        console.error("saveDesignation",error)
    }
}

export const loadDesignation = async () => {
    try {
       const result =  await axios.get(
            `${url}/designation/get/designation`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load department", error)
    }
}

export const fetchDepartment = async () => {
    try {
      const response = await axios.get(
        `${url}/department/get/department`
      );
      return response.data; // Log the response data
    } catch (error) {
      console.error("Error fetching department data", error);
      return []
    }
  };

  export const deleteDesignation = async (id) => {
    try{
        await axios.delete(`${url}/designation/delete/${id}`)
    } catch(error) {
        console.error("Error deleting department",error)
    }
};