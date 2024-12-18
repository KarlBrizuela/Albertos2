import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap'; // Now you can use Nav from react-bootstrap

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Admin Dashboard</h3>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Item>
          <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/rooms">Rooms</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/guests">Guests</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
