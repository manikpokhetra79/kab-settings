import React, { useEffect, useState } from 'react';
import Header from './Header';
import dp from '../images/dp.png';
import { Link } from 'react-router-dom';
const Settings = (props) => {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [birthdate, setBirthDate] = useState('');
  let [mobile, setmobile] = useState(0);
  let [email, setEmail] = useState('');

  useEffect(() => {
    const { first, last, mobile, email, birthdate } = props.user;
    setFirstName(first);
    setLastName(last);
    setBirthDate(birthdate);
    setmobile(mobile);
    setEmail(email);
  }, [props.user]);

  // input change
  let handleInputChange = (field, value) => {
    if (field === 'firstName') {
      setFirstName(value);
    } else if (field === 'lastName') {
      setLastName(value);
    } else if (field === 'birthdate') {
      setBirthDate(value);
    } else if (field === 'mobile') {
      setmobile(value);
    } else if (field === 'email') {
      setEmail(value);
    }
  };

  let handleCancel = () => {
    props.handleUpdate();
  };
  // console.log(firstName, lastName, birthdate);
  return (
    <>
      <Header user={props.user} />
      {/* main body */}

      <div className="settings-main">
        {/* first row */}
        <div className="px-3 d-flex align-items-center">
          <div className="d-flex flex-column mx-3 justify-content-between">
            <img
              style={{ width: '70px', height: '70px' }}
              src={dp}
              alt="avatar"
              className="avatar"
            />
            <Link
              className="text-decoration-none my-1"
              to="/"
              style={{ color: '#53C2C5', fontSize: '14px' }}
            >
              Change Picture
            </Link>
          </div>
          <div className="d-flex flex-wrap">
            <div className="my-1">
              <label>First Name : </label>
              <input
                type="text"
                defaultValue={firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
              />
            </div>
            <div className="my-1">
              <label>Birthdate : </label>
              <input
                name="birthdate"
                type="date"
                defaultValue={birthdate}
                onChange={(e) => handleInputChange('birthdate', e.target.value)}
              />
            </div>
            <div className="my-1">
              <label>Last Name : </label>
              <input
                type="text"
                defaultValue={lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="d-flex flex-column my-2 row2">
          <div className="my-1 d-flex justify-content-between">
            <label>Mobile : </label>
            <div>
              <input type="number" defaultValue={mobile} />
            </div>
          </div>
          <div className="my-1 d-flex justify-content-between">
            <label>Email : </label>
            <div>
              <input type="email" defaultValue={email} />
            </div>
          </div>
          <div className="my-1 d-flex justify-content-between">
            <label>New Password : </label>
            <input type="password" defaultValue="" />
          </div>
          <div className="my-1 d-flex justify-content-between">
            <label>Confirm Password : </label>
            <input type="password" defaultValue="" />
          </div>
          <div className="my-1 d-flex justify-content-between">
            <label>Old Password : </label>
            <input type="password" defaultValue="" />
          </div>
        </div>
        {/* third row */}
        <div className="d-flex justify-content-center mb-3">
          <button className="btnApply button">Apply</button>
          <button className="btnCancel button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
