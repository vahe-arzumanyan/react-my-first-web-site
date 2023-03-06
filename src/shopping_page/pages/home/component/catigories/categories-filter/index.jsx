import React, {useState} from "react";
import "./style.scss";
import {useParams} from 'react-router-dom'
import CustomFilterCheckbox from "../../../custom-filter-checkbox";

const CategoriesFilter = () => {

    const [filterCheckedValue, setFilterCheckedValue] = useState(null)

    // ******************** checked clicked value ********************
    const handleCheckedClick = (e) => {
        setFilterCheckedValue(e.target.value)
    }

    const {id} = useParams

    return <div className='G-container'>
        <div className='P-categories-filter'>
            <p className='P-filter-price-title'>filter by price</p>
            <div>
                <CustomFilterCheckbox
                    onClick={handleCheckedClick}
                    type='radio'
                    number='1000'
                    info='All Price'
                    name='check'
                    value='1000'
                />
            </div>
        </div>
    </div>
}
export default CategoriesFilter;