import { useState } from 'react';


const StateClients = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [clients, setClients] = useState([]);
    const [recDelete,setRecDelete] =useState("")
    const [formData, setFormData] = useState({
        clientId:"",
        clientName:"",
        contactNumber:"",
        address:"",
        contactDetails:"",
        clientPosition:"",
        productDetails:"",
        purchaseDate:"",
        productQuantities:"",
        Preferences:"",
        billingAddress:"",
        paymentMethod:"",
        billingContactInformation:"",
        communicationHistory:"",
        comments:"",
        status:""
    });

    return{
        formVisible,
        setFormVisible,
        formData,
        setFormData,
        toggle,
        setToggle,
        clients, 
        setClients,recDelete,setRecDelete
    }
}

export default StateClients;
