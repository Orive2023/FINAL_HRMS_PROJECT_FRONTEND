import axios from "axios";

const url = "http://localhost:8083"

export const savePerformances = async (formData) => {
    try{
        await axios.post(
            `${url}/performanceappraisal/create/performanceappraisal`,
            formData
          );
    } catch(error) {
        console.error("savePerformances",error)
    }
}

export const loadPerformances = async () => {
  try {
     const result =  await axios.get(
          `${url}/performanceappraisal/get/performanceappraisal`,
          {
            validateStatus: () => {
              return true;
            },
          }
      
        );
        return result.data
  } catch (error) {
      console.error("Error load performances", error)
  }
}

export const deleteAppraisal = async (id) => {
  try{
      await axios.delete(`${url}/performanceappraisal/delete/${id}`)
  } catch(error) {
      console.error("Error deleting performances",error)
  }
};
export const fetchEmployee = async () => {
  try {
      const response = await axios.get(
          "http://localhost:8082/employee/get/employee"
        );
        return response.data
  } catch (error){
      console.error("Error fetching employee data", error);
      return []
  }
}