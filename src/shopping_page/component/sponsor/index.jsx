import React from "react";
import './style.scss';

const Sponsor = ({item}) => {
    return <div style={{backgroundImage:`url(${item.img})`}} className='G-image-contain P-sponsor-img'>

    </div>
}

export default Sponsor;