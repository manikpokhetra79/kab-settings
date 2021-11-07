import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DummyComponent from './DummyComponent';
import SidebarMenu from './SidebarMenu';
import Settings from './Settings';
import { Container, Row, Col } from 'react-bootstrap';
import { user } from '../util/user';
const App = () => {
  // dummy user details
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(user);
  }, []);
  let handleUserUpdate = () => {
    //  build logic to reset value
  };
  return (
    <>
      <Router>
        <div className="d-flex app">
          <div className="sidebarMenu">
            <SidebarMenu />
          </div>
          <div className="main-section rounded-3">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Settings user={userData} handleUpdate={handleUserUpdate} />
                }
              />
              <Route path="/dashboard" element={<DummyComponent />} />
              <Route path="/select-chapter" element={<DummyComponent />} />
              <Route path="/class" element={<DummyComponent />} />
              <Route path="/class-forum" element={<DummyComponent />} />
              <Route path="/progress" element={<DummyComponent />} />
              <Route path="/diary" element={<DummyComponent />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
