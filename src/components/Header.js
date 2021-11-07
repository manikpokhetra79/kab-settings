import React from 'react';

const Header = (props) => {
  return (
    <div className="settings-header d-flex justify-between">
      <div className="col">
        <h1 className="header-title">Settings</h1>
      </div>
      <div className="sh-right col d-flex align-center justify-between">
        <i className="fas fa-flag fa-2x pl-3"></i>
        <i className="fas fa-bell fa-2x"></i>
        <img
          style={{ width: '60px', height: '60px' }}
          src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74"
          alt="avatar"
          className="avatar"
        />
        <span className="color-1">{props.user.full}</span>
      </div>
    </div>
  );
};

export default Header;
