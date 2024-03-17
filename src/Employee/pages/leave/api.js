import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const url = "localhost:8082";
const ip = "12.126.190.50:8082";
const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = usernameRec?usernameRec.toUpperCase():"";

export const saveLeave = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8084/leaves/create/leaves",
            formData
          );
    } catch(error) {
        console.error("saveLeave",error)
    }
}

export const deleteLeave= async (id) => {
    try{
        await axios.delete(`http://localhost:8084/leaves/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Leave",error)
    }
};

export const loadLeave = async () => {
    try {
       const result =  await axios.get(
            `http://localhost:8084/leaves/employee/get/${username}`,
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
            "http://localhost:8082/employee/get/employee"
          );
          return response.data
    } catch (error){
        console.error("Error fetching employee data", error);
        return []
    }
}
