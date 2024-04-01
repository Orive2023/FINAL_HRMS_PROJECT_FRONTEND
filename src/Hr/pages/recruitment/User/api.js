import axios from 'axios';

export const saveUser = async (formData) => {
    try{
        await axios.post(
            "https://api.orivehrms.com/users/createUser",
            formData
          );
    } catch(error) {
        console.error("saveUser",error)
    }
}

export const deleteUser = async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/users/delete/${id}`)
    } catch(error) {
        console.error("Error deleting User",error)
    }
};

export const loadUser = async () => {
    try {
       const result =  await axios.get(
            "https://api.orivehrms.com/users/getAll",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load user", error)
    }
}