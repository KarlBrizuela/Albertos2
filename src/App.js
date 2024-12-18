import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Booking from './Booking';
import Admin from './admin/Admin';
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BookingAdmin from'./admin/BookingAdmin';
import Rooms from './admin/Rooms';
import Guest from './admin/Guest';
import Dashboard from './admin/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin/Admin" element={<Admin />} />
        <Route path="/BookingAdmin" element={<BookingAdmin />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Guest" element={<Guest />} />
        <Route path= "/Signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
