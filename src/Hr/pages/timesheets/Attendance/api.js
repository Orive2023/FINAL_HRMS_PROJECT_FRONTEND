import axios from 'axios';

export const saveAttendance = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8084/attendance/create/attendance",
            formData
          );
    } catch(error) {
        console.error("saveAttendance",error)
    }
}

export const deleteAttendance = async (id) => {
    try{
        await axios.delete(`http://localhost:8084/attendance/delete/${id}`)
    } catch(error) {
        console.error("Error deleting attendance",error)
    }
};

export const loadAttendance = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8084/attendance/get/attendance",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load attendance", error)
    }
}
export const fetchEmployee = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8084/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching employee data", error);
        return []
    }
}

