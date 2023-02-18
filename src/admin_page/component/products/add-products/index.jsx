import React, {useState} from "react";
import './style.scss';
// =========================================




const AddProducts = ({productsItem, index, onClose}) => {

    const [productsInfo, setProductsInfo] = useState({
        productsName:'',
        productsDescription:'',
        productsImg: null,
        productsPrise:0,
        categories:''
    })


    return <div className='P-products-modal'>



    </div>
}

export default AddProducts;