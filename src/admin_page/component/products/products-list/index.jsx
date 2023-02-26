import React, {useState} from "react";
import './style.scss';
import DeleteCustomModal from "../../categories/delete-categories";
import AddProducts from "../add-products";

const ProductsList = ({index, productsItem}) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [openEditModal, setEditModal] = useState(false)

    const onCloseDeleteModal = () => {
        setOpenDeleteModal(!openDeleteModal)
    }

    const onCloseEditModal = () => {
        setEditModal(!openDeleteModal);

    }

    return <div className='G-flex G-flex-wrap'>
        <div className='G-center G-flex-column P-products-list'>

            {/* edit products / delete products*/}

            <div className='G-flex G-justify-between P-products-edit-delete'>
                <button>Edit</button>
                <button onClick={onCloseDeleteModal}>Delete</button>
            </div>
            <div style={{backgroundImage: `url(${productsItem.productsImg})`}} alt={productsItem.alt}
                 className='G-image-cover P-product-img'></div>
            <div className='G-center G-flex-column'>
                <p className='P-products-name'>Product Name : <span>{productsItem.productsName}</span></p>
                <p className='P-products-price'>Product Price : <span
                    className='Product-price-value'>{productsItem.productsPrise + "$"}</span></p>
                <p className='P-products-categories'>Product Categories : <span>{productsItem.categories}</span>
                </p>
            </div>

        </div>
        {openDeleteModal ? <DeleteCustomModal name="productsX" productsItem={productsItem} productsIndex={index}
                                              onClose={onCloseDeleteModal}/> : null}
        {openEditModal ?
            <AddProducts onClose={onCloseEditModal} productsItem={productsItem} productsIndex={index}/> : null}

    </div>
}

export default ProductsList


