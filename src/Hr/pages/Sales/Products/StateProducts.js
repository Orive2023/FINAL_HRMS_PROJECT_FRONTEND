import  { useState } from 'react';

const StateProducts = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [product, setProducts] = useState([]);
    const [recDelete, setRecDelete] = useState("");


    const [formData, setFormData] = useState({
        productPricePerUnit :"",
        noOfClients:"",
        grossRevenue:"",
        saleDate:"",
        returns:"",
        discounts:"",
        allowances:"",
        netRevenue:"",
        moneyAddedBankName:"",
        status:"",
        productName:"",
   
    })
    return {
        formVisible,
        setFormVisible,
        formData,
        setFormData,
        toggle,
        setToggle,
        product, 
        setProducts,
        recDelete,
    setRecDelete,
    }
}

export default StateProducts;

