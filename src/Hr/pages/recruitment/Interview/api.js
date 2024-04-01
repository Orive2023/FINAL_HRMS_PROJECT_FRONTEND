import axios from 'axios';

export const saveInterview = async (formData) => {
    try{
        await axios.post(
            "https://api.orivehrms.com/interviews/scheduleInterview",
            formData
          );
    } catch(error) {
        console.error("saveInterview",error)
    }
}

export const deleteInterview = async (id) => {
    try{
        await axios.delete(`https://api.orivehrms.com/interview/delete/${id}`)
    } catch(error) {
        console.error("Error deleting interview",error)
    }
};

export const loadInterview = async () => {
    try {
        const result = await axios.get(
            "https://api.orivehrms.com/interviews/all",
            {
              validateStatus: () => {
                return true;
              },
            }
          );
          return result.data
    } catch (error) {
        console.error("Error load interview", error)
    }
}
export const fetchCandidate = async () => {
    try {
      const response = await axios.get(
        `https://api.orivehrms.com/candidates/getAllCandidate`,
        );
      return response.data; // Log the response data
    } catch (error) {
      console.error("Error fetching candidate data", error);
      return []
    }
  };
  export const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://api.orivehrms.com/users/getAll",
        );
      return response.data; // Log the response data
    } catch (error) {
      console.error("Error fetching user data", error);
      return []
    }
  };
  export const fetchTalent = async () => {
    try {
      const response = await axios.get(
        "https://api.orivehrms.com/talents/getAll",
        );
      return response.data; // Log the response data
    } catch (error) {
      console.error("Error fetching talent data", error);
      return []
    }
  };


