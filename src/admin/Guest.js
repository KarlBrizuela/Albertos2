import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GuestAdmin = () => {
  // Sample guest data
  const [guests, setGuests] = useState([
    { id: '001', email: 'john@example.com', contact: '1234567890' },
    { id: '002', email: 'jane@example.com', contact: '2345678901' },
    { id: '003', email: 'alice@example.com', contact: '3456789012' },
    { id: '004', email: 'bob@example.com', contact: '4567890123' },
    { id: '005', email: 'charlie@example.com', contact: '5678901234' },
    { id: '006', email: 'dave@example.com', contact: '6789012345' },
    { id: '007', email: 'eve@example.com', contact: '7890123456' },
    { id: '008', email: 'frank@example.com', contact: '8901234567' },
    { id: '009', email: 'grace@example.com', contact: '9012345678' },
    { id: '010', email: 'hank@example.com', contact: '0123456789' },
    { id: '011', email: 'ira@example.com', contact: '1234567890' },
    { id: '012', email: 'jake@example.com', contact: '2345678901' },
    { id: '013', email: 'lisa@example.com', contact: '3456789012' },
    { id: '014', email: 'mike@example.com', contact: '4567890123' },
    { id: '015', email: 'nina@example.com', contact: '5678901234' },
    { id: '016', email: 'olivia@example.com', contact: '6789012345' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entitiesPerPage, setEntitiesPerPage] = useState(10);

  const filteredGuests = guests.filter(
    (guest) =>
      guest.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.id.includes(searchTerm) ||
      guest.contact.includes(searchTerm)
  );

  const indexOfLastGuest = currentPage * entitiesPerPage;
  const indexOfFirstGuest = indexOfLastGuest - entitiesPerPage;
  const currentGuests = filteredGuests.slice(indexOfFirstGuest, indexOfLastGuest);

  const totalPages = Math.ceil(filteredGuests.length / entitiesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntitiesChange = (e) => {
    setEntitiesPerPage(e.target.value);
    setCurrentPage(1); // Reset to the first page when entities per page changes
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when search term changes
  };

  const styles = {
    dashboard: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '66px',
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      zIndex: 1000,
      backgroundColor: "#ebf9ce",
    },
    logoImg: {
      height: 'auto',
      width: '40%',
      display: 'block',
    },
    navbar: {
      width: '280px',
      backgroundColor: '#ebf9ce',
      position: 'fixed',
      top: '66px',
      left: 0,
      height: 'calc(100% - 66px)',
      overflowY: 'auto',
    },
    navbarUl: {
      listStyle: 'none',
      padding: '20px',
    },
    navbarLi: {
      padding: '15px 20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      width: '100%',
      transition: 'background-color 0.3s',
      color: '#02311F',
    },
    content: {
      marginTop: '66px',
      marginLeft: '250px',
      padding: '40px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      width: 'calc(100% - 250px)',
      minHeight: 'calc(100vh - 66px)',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#333',
    },
    searchInput: {
      width: '300px',
      padding: '8px',
      marginRight: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    dropdown: {
      padding: '8px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginLeft: '10px',
    },
    tableContainer: {
      marginTop: '20px',
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#f1f1f1',
      padding: '10px',
      textAlign: 'left',
      fontWeight: 'bold',
      color: '#333',
      fontSize: '14px',
    },
    tableCell: {
      padding: '10px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
      fontSize: '14px',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    pageButton: {
      padding: '8px 15px',
      margin: '0 5px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      backgroundColor: '#ffffff',
      cursor: 'pointer',
      fontSize: '14px',
    },
    disabledButton: {
      padding: '8px 15px',
      margin: '0 5px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      backgroundColor: '#f1f1f1',
      cursor: 'not-allowed',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <div className="logo">
          <img src="Albertos-logo.png" alt="Logo" style={styles.logoImg} />
        </div>
      </header>

      <aside style={{ ...styles.navbar, backgroundColor: "white", top: "66px", left: "0" }}>
        <ul style={styles.navbarUl}>
          <Link to="/Dashboard">
            <li style={styles.navbarLi}>
              <i className="fas fa-home"></i> Dashboard
            </li>
          </Link>
          <Link to="/BookingAdmin">
            <li style={styles.navbarLi}>
              <i className="fas fa-history"></i> Booking
            </li>
          </Link>
          <Link to="/Guest">
            <li style={{ ...styles.navbarLi, fontWeight: "bold", color: "Red", fontSize: "20px", whiteSpace: "nowrap" }}>
              <i className="fas fa-users"></i> Guest
            </li>
          </Link>
          <Link to="/Rooms">
            <li style={styles.navbarLi}>
              <i className="fas fa-list"></i> Room
            </li>
          </Link>
        </ul>
      </aside>

      <main style={styles.content}>
        <h1 style={styles.heading}>Guest Admin</h1>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search by Tracking ID, Email, or Contact No."
            value={searchTerm}
            onChange={handleSearchChange}
            style={styles.searchInput}
          />
          <select value={entitiesPerPage} onChange={handleEntitiesChange} style={styles.dropdown}>
            {[10, 20, 30].map((num) => (
              <option key={num} value={num}>
                Show {num}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Tracking ID</th>
                <th style={styles.tableHeader}>Email</th>
                <th style={styles.tableHeader}>Contact No</th>
              </tr>
            </thead>
            <tbody>
              {currentGuests.map((guest) => (
                <tr key={guest.id}>
                  <td style={styles.tableCell}>{guest.id}</td>
                  <td style={styles.tableCell}>{guest.email}</td>
                  <td style={styles.tableCell}>{guest.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={styles.pagination}>
          <button
            style={currentPage === 1 ? styles.disabledButton : styles.pageButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              style={currentPage === index + 1 ? { ...styles.pageButton, backgroundColor: '#00796b', color: '#fff' } : styles.pageButton}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            style={currentPage === totalPages ? styles.disabledButton : styles.pageButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default GuestAdmin;
