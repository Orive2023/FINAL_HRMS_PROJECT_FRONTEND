import axios from 'axios';

export const saveInterview = async (formData) => {
    try{
        await axios.post(
            "http://localhost:8080/interviews/scheduleInterview",
            formData
          );
    } catch(error) {
        console.error("saveInterview",error)
    }
}

export const deleteInterview = async (id) => {
    try{
        await axios.delete(`http://localhost:8080/interview/delete/${id}`)
    } catch(error) {
        console.error("Error deleting interview",error)
    }
};

export const loadInterview = async () => {
    try {
        const result = await axios.get(
            "http://localhost:8080/interviews/all",
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
        `http://localhost:8080/candidates/getAllCandidate`,
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
        "http://localhost:8080/users/getAll",
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
        "http://localhost:8080/talents/getAll",
        );
      return response.data; // Log the response data
    } catch (error) {
      console.error("Error fetching talent data", error);
      return []
    }
  };


