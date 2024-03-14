import {useState} from 'react'

const StateLanding = () => {
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [recDelete,setRecDelete] =useState("");
    const [landing, setLanding] = useState([]);
    const [formData, setFormData] = useState({
       selectOne:"",
       name:"",
       designation:"",
      organisationName:"",
       email:"",
      phoneNumber:"",
       selectService:"",
       message:"",
       city:"",
        
      });
  return {
   recDelete,setRecDelete,isEmailValid,setIsEmailValid,landing,setLanding,toggle,setToggle,formVisible,setFormVisible,formData,setFormData
  }
}

export default StateLanding