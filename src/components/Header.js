import React from 'react';

import headerbell from '../images/headerbell.png';
import headerflag from '../images/headerflag.png';
import dp from '../images/dp.png';
const Header = (props) => {
  return (
    <div className="d-flex flex-row justify-content-between p-4 my-2">
      <div>
        <p className="header-title">Settings</p>
      </div>
      <div>
        <img
          style={{ width: '40px' }}
          className="m-2"
          src={headerflag}
          alt="headerflag"
        />
        <img
          style={{ width: '30px' }}
          className="m-2"
          src={headerbell}
          alt="headerbell"
        />
        <img
          style={{ width: '60px', height: '60px' }}
          src={dp}
          alt="avatar"
          className="avatar"
        />
        <span className="mx-3 username">{props.user.full}</span>
      </div>
    </div>
  );
};

export default Header;
