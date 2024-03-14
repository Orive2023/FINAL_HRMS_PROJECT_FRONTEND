
import {useState} from 'react';

const BankState = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [addbank, setAddBank] = useState([]);
    const [open, setOpen] = useState(false);
    const [bankNameError, setBankNameError] = useState('');
    const [recDelete, setRecDelete] = useState("");
    const [accountNameError, setAccountNameError] = useState('');
    const [accountNumberError, setAccountNumberError] = useState('');
    const [branchNameError, setBranchNameError] = useState('');

    const [formData, setFormData] = useState({

      bankName: "",
      accountName: "",
      accountNumber: "",
      accountType: "",
      branchName: "",

    });


  return {
    formData,setFormData,formVisible,setFormVisible,toggle,setToggle,addbank,setAddBank, open, setOpen,  bankNameError, accountNumberError, setAccountNumberError,setBankNameError,accountNameError, setAccountNameError,branchNameError, setBranchNameError,recDelete, setRecDelete
  }
    
}

export default BankState;