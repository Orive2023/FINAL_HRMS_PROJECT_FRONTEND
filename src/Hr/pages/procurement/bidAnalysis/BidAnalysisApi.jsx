import axios from "axios";

const url = "http://localhost:8094";

export const saveBid = async (formData) => {
  try {
    await axios.post(`${url}/bidAnalysis/create/bidAnalysis`, formData, {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
      },
    });
  } catch (error) {
    console.error("saveBid", error);
  }
};

export const loadAllBid = async () => {
  try {
    const result = await axios.get(`${url}/bidAnalysis/get/bidAnalysis`, {
      validateStatus: () => {
        return true;
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error load bid", error);
  }
};

export const deleteBid = async (id) => {
  try {
    await axios.delete(`${url}/bidAnalysis/delete/${id}`);
  } catch (error) {
    console.error("Error deleting bid", error);
  }
};
