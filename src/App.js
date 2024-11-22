import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from "./Homepage.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router basename=""> 
      
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>

    
  );
}


export default App;
