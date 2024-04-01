import axios from 'axios';

const url = "api.orivehrms.com";
const ip = "13.126.190.50:8085";

export const saveAdvanceSalary = async (formData) => {
    try{
        await axios.post(
            `https://${url}/advancesalery/create/advancesalery`,
            formData
          );
    } catch(error) {
        console.error("saveAdvanceSalary",error)
    }
}

export const deleteAdvanceSalary = async (id) => {
    try{
        await axios.delete(`https://${url}/advancesalery/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Advance Salary",error)
    }
};

export const loadAdvanceSalary = async () => {
    try {
       const result =  await axios.get(
            `https://${url}/advancesalery/get/advancesalery`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load Advance Salary", error)
    }
}

export const fetchCompanies = async () => {
    try {
        const response = await axios.get(
            "https://api.orivehrms.com/company/get/company"
          );
          return response.data
    } catch (error){
        console.error("Error fetching company data", error);
        return []
    }
}

export const fetchLocations = async () => {
    try {
        const response = await axios.get(
          "https://api.orivehrms.com/location/get/location"
        );
       return response.data 
      } catch (error) {
        console.error("Error fetching Advance Salary data", error);
      }
}

export const fetchEmployee = async () => {
    try {
      const response = await axios.get(
        "https://api.orivehrms.com/employee/get/employee"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching employee data", error);
      return [];
    }
  };