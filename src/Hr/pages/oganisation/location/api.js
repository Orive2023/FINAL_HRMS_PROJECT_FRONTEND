import axios from 'axios';

export const saveLocation = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8081/location/create/location",
            formData
          );
    } catch(error) {
        console.error("saveLocation",error)
    }
}

export const deleteLocation = async (id) => {
    try{
        await axios.delete(`http://localhost:8081/location/delete/${id}`)
    } catch(error) {
        console.error("Error deleting location",error)
    }
};

export const loadLocation = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8081/location/get/location",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load location", error)
    }
}

export const fetchCompanies = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8081/company/get/company"
          );
          return response.data
    } catch (error){
        console.error("Error fetching company data", error);
        return []
    }
}