import axios from 'axios';

export const saveAttendance = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8080/attendance/create",
            formData
          );
    } catch(error) {
        console.error("saveAttendance",error)
    }
}

export const deleteAttendance = async (id) => {
    try{
        await axios.delete(`http://localhost:8080/attendance/delete/${id}`)
    } catch(error) {
        console.error("Error deleting attendance",error)
    }
};

export const loadAttendance = async () => {
    try {
       const result =  await axios.get(
            "http://localhost:8080/attendance/get/attendance",
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
            "http://localhost:8080/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching employee data", error);
        return []
    }
}
export const fetchShift = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8080/officeshifts/get/officeShifts",
            );
          return response.data
    } catch (error){
        console.error("Error fetching shift data", error);
        return []
    }
}


