import axios from "axios";
import { jwtDecode } from "jwt-decode";

const url = "api.orivehrms.com";
const ip = "12.126.190.50:8082";
const token = localStorage.getItem("AuthToken");
const decoded = token?jwtDecode(String(token)):"";
const usernameRec = decoded===""?"":decoded.preferred_username;
// const username = decoded.username;
const username = decoded.username;

export const saveResignation = async (formData) => {
  try {
    await axios.post(`https://${url}/resignations/create/resignation`, formData);
  } catch (error) {
    console.error("saveResignation", error);
  }
};

export const deleteResignation = async (id) => {
  try {
    await axios.delete(`https://${url}/resignations/delete/${id}`);
  } catch (error) {
    console.error("Error deleting resignation", error);
  }
};

export const loadResignation = async () => {
  try {
    const result = await axios.get(
      `https://${url}/resignations/findresignation/${username}`,
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error load reignation", error);
  }
};

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
