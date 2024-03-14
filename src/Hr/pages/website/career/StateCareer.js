import {useState} from 'react'

const StateCareer = () => {
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [career, setCareer] = useState([]);
    const [recDelete,setRecDelete] =useState("")
    const [formData, setFormData] = useState({
      name:"",
      email:"",
      jobRole:"",
        
      });
  return {
    recDelete,setRecDelete,isEmailValid,setIsEmailValid,toggle,setToggle,formVisible,setFormVisible,career,setCareer,formData,setFormData
  }
}

export default StateCareer