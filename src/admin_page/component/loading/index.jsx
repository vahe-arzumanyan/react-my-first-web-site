import React from "react";
import './style.scss';

const Loading = () => {
    return <div className='G-flex'>
        <p className='P-loading-title'>Loading </p>
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
}

export default Loading;