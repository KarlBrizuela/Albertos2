import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDaySelection = (day) => {
    // Toggle the selected day
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((d) => d !== day) // Remove if already selected
        : [...prevSelectedDays, day] // Add if not selected
    );
  };

  // Fake data for bookings (with names)
  const fakeBookings = [
    { name: 'John Doe', time: '10:00 AM', color: '#ffb3b3' },
    { name: 'Jane Smith', time: '11:00 AM', color: '#cce7ff' },
    { name: 'Alice Johnson', time: '1:00 PM', color: '#c2f7c9' },
    { name: 'Bob Williams', time: '2:00 PM', color: '#f2d5ff' },
    { name: 'Charlie Brown', time: '3:00 PM', color: '#ffecb3' },
    { name: 'Emily Davis', time: '4:00 PM', color: '#ffb3e6' },
  ];

  // Color scale (static for now)
  const defaultColor = "#02311f"; // Selected day color
  const selectedColor = "#116a44"; // Default color for unselected days

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
    headerIcons: {
      display: 'flex',
      gap: '15px',
    },
    headerIcon: {
      fontSize: '18px',
      cursor: 'pointer',
    },
    navbar: {
      width: '280px',
      backgroundColor: '#ebf9ce',
      color: '#d8f4a2',
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
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // Aligning content to the left side
      padding: '20px',
      backgroundColor: '#7ff6c2',
      marginLeft: '280px', // To give space for the sidebar
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#02311F',
      marginBottom: '10px',
    },
    subheading: {
      fontSize: '24px',
      color: '#02311F',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '18px',
      color: '#555',
      marginBottom: '20px',
    },
    container: {
      width: '100%',
      maxWidth: '800px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    dayButton: {
      padding: '10px 20px',
      margin: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: defaultColor, // Default color
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    hr: {
      width: '100%',
      maxWidth: '800px',
      border: '0',
      borderTop: '1px solid #ddd',
      margin: '20px 0',
    },
    addBookingButton: {
      padding: '12px 20px',
      backgroundColor: "#17d07f", // Example color for "Add Booking"
      color: 'white',
      fontSize: '18px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    bookingContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '10px',
    },
    fakeDataButton: {
      padding: '10px 20px',
      margin: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <>
      <header style={styles.header}>
        <div className="logo">
          <img src="Albertos-logo.png" alt="Logo" style={styles.logoImg} />
        </div>
        <div style={styles.headerIcons}>
          <i className="fas fa-bell notification" style={styles.headerIcon}></i>
          <i className="fas fa-user profile" style={styles.headerIcon}></i>
        </div>
      </header>

      <aside style={{ ...styles.navbar, backgroundColor: "white", top: "66px", left: "0" }}>
        <ul style={styles.navbarUl}>
          <Link to="/Dashboard">
            <li style={styles.navbarLi}>
              <i className="fas fa-home" style={styles.navbarIcon}></i> Dashboard
            </li>
          </Link>
          <Link to="/BookingAdmin">
            <li style={styles.navbarLi}>
              <i className="fas fa-history" style={styles.navbarIcon}></i> Booking
            </li>
          </Link>
          <Link to="/Guest">
            <li style={{ ...styles.navbarLi, fontWeight: "bold", color: "Red", fontSize: "20px", whiteSpace: "nowrap" }}>
              <i className="fas fa-users" style={styles.navbarIcon}></i> Guest
            </li>
          </Link>
          <Link to="/Rooms">
            <li style={styles.navbarLi}>
              <i className="fas fa-list" style={styles.navbarIcon}></i> Room
            </li>
          </Link>
        </ul>
      </aside>

      <main style={styles.main}>
        <h1 style={styles.heading}>Booking</h1>
        <h3 style={styles.subheading}>Schedule Timings</h3>
        <p style={styles.paragraph}>Day Duration</p>

        <div style={styles.container}>
          {/* Buttons for Days */}
          <div style={styles.bookingContainer}>
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <button
                key={day}
                style={{
                  ...styles.dayButton,
                  backgroundColor: selectedDays.includes(day) ? selectedColor : defaultColor, // Apply selected color
                }}
                onClick={() => handleDaySelection(day)}
              >
                {day}
              </button>
            ))}
          </div>

          <hr style={styles.hr} />

          {/* Fake Data Buttons */}
          <div style={styles.bookingContainer}>
            {fakeBookings.map((booking, index) => (
              <button
                key={index}
                style={{
                  ...styles.fakeDataButton,
                  backgroundColor: booking.color, // Each booking has a unique color
                }}
              >
                {booking.name} - {booking.time}
              </button>
            ))}
          </div>

          <hr style={styles.hr} />

          {/* Add Booking Button */}
          <button style={styles.addBookingButton}>
            Add Booking
          </button>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
