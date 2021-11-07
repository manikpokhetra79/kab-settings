import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DummyComponent from './DummyComponent';
import SidebarMenu from './SidebarMenu';
import Settings from './Settings';
import { Container, Row, Col } from 'react-bootstrap';
const App = () => {
  const user = {
    first: 'Akanksha',
    last: 'Singh',
    full: 'Akanksha Singh',
    email: 'akankshasingh@gmail.com',
    phone: '1234567890',
  };
  return (
    <Container fluid>
      <Router>
        <Row className="d-flex">
          <Col className="sidebarMenu" lg={2}>
            <SidebarMenu />
          </Col>
          <Col className="main-section" lg={10}>
            <Routes>
              <Route exact path="/" element={<Settings user={user} />} />
              <Route path="/dashboard" />
              <Route path="/select-chapter" element={<DummyComponent />} />
              <Route path="/class" element={<DummyComponent />} />
              <Route path="/class-forum" element={<DummyComponent />} />
              <Route path="/progress" element={<DummyComponent />} />
              <Route path="/diary" element={<DummyComponent />} />
            </Routes>
          </Col>
        </Row>
      </Router>
    </Container>
  );
};

export default App;
