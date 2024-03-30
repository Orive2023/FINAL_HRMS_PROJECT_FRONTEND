import axios from "axios";

const url = "http://localhost:8080";

export const saveExpenses = async (formData) => {
  try {
    await axios.post(`${url}/expence/create/expence`, formData, {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
      },
    });
  } catch (error) {
    console.error("saveDesignation", error);
  }
};

 

export const loadExpenses = async () => {
  try {
    const result = await axios.get(`${url}/expence/get/expence`, {
      validateStatus: () => {
        return true;
      },
    });
    return result.data;
  } catch (error) {
    console.error("Error load department", error);
  }
};

export const deleteExpenses = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/expence/delete/${id}`);
  } catch (error) {
    console.error("Error deleting expence", error);
  }
};
// export const updateExpenses = async (formData,id) => {
//   try {
//      const result =  await axios.put(
//           `http://localhost:8080/expence/update/${id}`,formData,
//         );
//         console.log(formData,id)
//         return result.data
//   } catch (error) {
//       console.error("Error load company", error)
//   }
// }
