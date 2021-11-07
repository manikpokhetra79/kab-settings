import React from 'react';
import Header from './Header';
const Settings = (props) => {
  return (
    <div>
      <Header user={props.user} />
    </div>
  );
};

export default Settings;
