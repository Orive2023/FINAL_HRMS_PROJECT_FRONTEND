import axios from 'axios';

export const saveCandidate = async (formData) => {
    try{
        await axios.post(
            "https://api.orivehrms.com/candidates/create/candidates",
            formData,
            {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
          );
    } catch(error) {
        console.error("saveCandidates",error)
    }
}



export const loadCandidate = async (id) => {
    try {
       const result =  await axios.get(
       `https://api.orivehrms.com/candidates/getAllCandidate`,
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load Candidate", error)
    }
}
