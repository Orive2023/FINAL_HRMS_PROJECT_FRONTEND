import axios from 'axios';

export const saveAttendance = async (formData) => {
    try{
        await axios.post(
            "https://api.orivehrms.com/attendance/create",
            formData
          );
    } catch(error) {
        console.error("saveAttendance",error)
    }
}

export const deleteAttendance = async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/attendance/delete/${id}`)
    } catch(error) {
        console.error("Error deleting attendance",error)
    }
};

export const loadAttendance = async () => {
    try {
       const result =  await axios.get(
            "https://api.orivehrms.com/attendance/get/attendance",
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
            "https://api.orivehrms.com/employee/get/employee"
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
            "https://api.orivehrms.com/officeshifts/get/officeShifts",
            );
          return response.data
    } catch (error){
        console.error("Error fetching shift data", error);
        return []
    }
}


