import React from 'react';
import './style.scss';

const Logout = ({onClose, logoutUser}) => {
    return <div className='P-logout-content G-center'>
        <div className='P-logout-bgColor G-center'></div>
       <div className='P-logout-modal G-center G-flex-column'>
           <p>are you sure you want to exit ?</p>
      <div className='G-justify-between P-logout-ask'>
          <button onClick={logoutUser}>yes</button>
          <button onClick={onClose}>no</button>
      </div>
       </div>
    </div>
}

export default Logout;