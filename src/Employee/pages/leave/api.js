import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const url = "api.orivehrms.com";
const ip = "12.126.190.50:8082";
const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = decoded.username;

export const saveLeave = async (formData) => {
    try{
        await axios.post(
            "https://api.orivehrms.com/leaves/create/leaves",
            formData
          );
    } catch(error) {
        console.error("saveLeave",error)
    }
}

export const deleteLeave= async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/leaves/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Leave",error)
    }
};

export const loadLeave = async () => {
    try {
       const result =  await axios.get(
            `https://api.orivehrms.com/leaves/employee/get/${username}`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load leave", error)
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
