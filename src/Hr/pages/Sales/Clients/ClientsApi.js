import axios from "axios";

export const saveClients = async (formData) => {
  try {
    await axios.post(
      "http://localhost:8096/client/create/Client",

      formData
    );
  } catch (error) {
    console.error("saveClient", error);
  }
};

export const deleteClients = async (id) => {
  try {
    await axios.delete(`http://localhost:8096/client/delete/${id}`);
  } catch (error) {
    console.error("Error deleting Client", error);
  }
};

export const loadClients = async () => {
  try {
    const result = await axios.get(
      "http://localhost:8096/client/get/Client",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error load client", error);
  }
};




