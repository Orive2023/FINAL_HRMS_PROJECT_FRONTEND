import axios from "axios";

const url = "https://api.orivehrms.com"

export const saveAccountBalance = async (formData) => {
    try{
        await axios.post(
            `${url}/accountbalance/create/accountbalance`,
            formData
          );
    } catch(error) {
        console.error("saveAccountBalance",error)
    }
}

export const loadAccBalanceById = async (id) => {
  try {
    const result =  await axios.get(
         `${url}/accountbalance/get/${id}`,
         {
           validateStatus: () => {
             return true;
           },
         }
     
       );
       return result.data
 } catch (error) {
     console.error("Error load Account Balance", error)
 }
};




  export const loadAccountBalance = async () => {
    try {
       const result =  await axios.get(
            `${url}/accountbalance/get/accountbalance`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load Account Balance", error)
    }
}

export const fetchEmployee = async () => {
  try {
      const response = await axios.get(
          "https://api.orivehrms.com/employee/get/employee"
        );
        return response.data
  } catch (error){
      console.error("Error fetching employee data", error);
      return []
  }
}
export const fetchDepartment = async () => {
  try {
      const response = await axios.get(
          "https://api.orivehrms.com/department/get/department"
        );
        return response.data
  } catch (error){
      console.error("Error fetching department data", error);
      return []
  }
}

export const deleteAccountBalance = async (id) => {
    try{
        await axios.delete(`${url}/accountbalance/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Account Balance",error)
    }
};

export  const updateAccountBalance = async (formData,id) => {
  try {
    const result =  await axios.put(
      `https://api.orivehrms.com/accountbalance/update/${id}`,formData,
       );
       console.log(formData,id)
       return result.data
 } catch (error) {
     console.error("Error load company", error)
 }
 
      
};