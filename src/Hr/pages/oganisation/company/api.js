import axios from "axios";

export const saveCompany = async (formData) => {
  try {
    await axios.post(`https://api.orivehrms.com/company/create/company`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error("saveCompany", error);
  }
};

export const deleteCompany = async (id) => {
  try {
    console.log(id)
    await axios.delete(`https://api.orivehrms.com/company/delete/${id}`);
  } catch (error) {
    console.error("Error deleting company", error);
  }
};

export const loadCompanyById = async (id) => {
  try {
    const result = await axios.get(`https://api.orivehrms.com/company/get/${id}`, {
      validateStatus: () => {
        return true;
      },
    });
    return result.data;
  } catch (error) {
    console.error("error loading Company", error);
  }
};

export const loadCompany = async () => {
  try {
    const result = await axios.get(
      `https://api.orivehrms.com/company/get/company`,
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    return result.data;
    
  } catch (error) {
    console.error("Error load company", error);
  }
};

export const updateCompany = async (formData,id) => {
    try {
       const result =  await axios.put(
            `https://api.orivehrms.com/company/update/${id}`,formData,
          );
          console.log(formData,id)
          return result.data
    } catch (error) {
        console.error("Error load company", error)
    }
}


