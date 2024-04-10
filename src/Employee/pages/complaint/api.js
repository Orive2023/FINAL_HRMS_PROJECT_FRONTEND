import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const url = "api.orivehrms.com";
const ip = "13.126.190.50:8082";

const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
// const username = decoded.username;
const username = decoded.username;

export const saveComplaint = async (formData) => {
    try{
        await axios.post(
            `https://${url}/complaints/create/complaints`,
            formData
          );
    } catch(error) {
        console.error("saveComplaint",error)
    }
}

export const deleteProject = async (id) => {
    try{
        await axios.delete(`https://${url}/complaints/delete/${id}`)
    } catch(error) {
        console.error("Error deleting project",error)
    }
};

export const loadComplaint = async () => {
    try {
       const result =  await axios.get(
            `https://${url}/complaints/findcomplaints/${username}`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load complaint", error)
    }
}

