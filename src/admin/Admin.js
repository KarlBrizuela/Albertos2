// src/App.js
import { Link } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import BookingAdmin from './BookingAdmin';
import Rooms from './Rooms';
import Guest from './Guest';
import Message from './Message';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Admin = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Sidebar />
          <Col xs={9} className="p-4">
            <Routes>
             
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/Guest" element={<Guest />} />
              <Route path="/message" element={<Message />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default Admin;
