import {useState} from 'react'

const StateJournal = () => {
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [journal, setJournal] = useState([]);
    const [recDelete,setRecDelete] =useState("")
    const [formData, setFormData] = useState({
      
       name:"",
       email:"",
       selectService:"",
       message:"",
        
      });
  return {
   recDelete,setRecDelete,isEmailValid,setIsEmailValid,toggle,setToggle,formVisible,setFormVisible,journal,setJournal,formData,setFormData
  }
}

export default StateJournal

