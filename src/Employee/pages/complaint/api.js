import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const url = "localhost:8080";
const ip = "13.126.190.50:8082";

const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
const username = usernameRec?usernameRec.toUpperCase():"";

export const saveComplaint = async (formData) => {
    try{
        await axios.post(
            `http://${url}/complaints/create/complaints`,
            formData
          );
    } catch(error) {
        console.error("saveComplaint",error)
    }
}

export const deleteProject = async (id) => {
    try{
        await axios.delete(`http://${url}/complaints/delete/${id}`)
    } catch(error) {
        console.error("Error deleting project",error)
    }
};

export const loadComplaint = async () => {
    try {
       const result =  await axios.get(
            `http://${url}/complaints/findcomplaints/${username}`,
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

