import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingAdmin = () => {
  const [bookings, setBookings] = useState([
    { id: 1, name: 'John Doe', time: '10:00 AM', color: '#ffb3b3', checkIn: '', checkOut: '', adults: 0, kids: 0 },
    { id: 2, name: 'Jane Smith', time: '11:00 AM', color: '#cce7ff', checkIn: '', checkOut: '', adults: 0, kids: 0 },
  ]);
  const [newBooking, setNewBooking] = useState({ name: '', time: '', color: '#ffffff', checkIn: '', checkOut: '', adults: 0, kids: 0 });
  const [editMode, setEditMode] = useState(null);

  const handleAddBooking = () => {
    if (newBooking.name.trim() && newBooking.time.trim() && newBooking.checkIn && newBooking.checkOut) {
      const newId = bookings.length > 0 ? bookings[bookings.length - 1].id + 1 : 1;
      setBookings([...bookings, { ...newBooking, id: newId }]);
      setNewBooking({ name: '', time: '', color: '#ffffff', checkIn: '', checkOut: '', adults: 0, kids: 0 });
    } else {
      alert('Please fill out all fields');
    }
  };

  const handleEditBooking = (id) => {
    const bookingToEdit = bookings.find((booking) => booking.id === id);
    setNewBooking(bookingToEdit);
    setEditMode(id);
  };

  const handleSaveEdit = () => {
    setBookings(bookings.map((booking) => (booking.id === editMode ? newBooking : booking)));
    setNewBooking({ name: '', time: '', color: '#ffffff', checkIn: '', checkOut: '', adults: 0, kids: 0 });
    setEditMode(null);
  };

  const handleDeleteBooking = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      setBookings(bookings.filter((booking) => booking.id !== id));
    }
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
      backgroundColor: '#ebf9ce',
      color: 'black',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      zIndex: 1000,
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
      backgroundColor: '#ffffff',
      color: '#000000',
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
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '20px',
      backgroundColor: '#7ff6c2',
      marginLeft: '280px',
      marginTop: '66px',
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
    bookingContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    bookingItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#f4f4f4',
      borderRadius: '5px',
    },
    form: {
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      margin: '5px',
      borderRadius: '5px',
      border: '1px solid #ddd',
    },
    button: {
      padding: '10px 20px',
      margin: '5px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
    addButton: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    editButton: {
      backgroundColor: '#ffc107',
      color: 'white',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
  };

  return (
    <>
      <header style={styles.header}>
        <div className="logo">
          <img src="albertos_logo.png" alt="Logo" style={styles.logoImg} />
        </div>
        <div style={styles.headerIcons}>
          <i className="fas fa-bell notification" style={styles.headerIcon}></i>
          <i className="fas fa-user profile" style={styles.headerIcon}></i>
        </div>
      </header>

       <aside style={styles.navbar}>
             <ul style={styles.navbarUl}>
               <Link to="/Dashboard">
                 <li style={styles.navbarLi}>
                   <i className="fas fa-home" style={{ fontSize: '18px', }}></i> Dashboard
                 </li>
               </Link>
               <Link to="/BookingAdmin">
                 <li style={{...styles.navbarLi, fontWeight: 'bold', color: 'red', fontSize: '20px' }}>
                   <i className="fas fa-history" style={{ fontSize: '18px' }}></i> Booking
                 </li>
               </Link>
               <Link to="/Guest">
                 <li style={styles.navbarLi}>
                   <i className="fas fa-users" style={{ fontSize: '18px' }}></i> Guest
                 </li>
               </Link>
               <Link to="/Rooms">
                 <li style={styles.navbarLi}>
                   <i className="fas fa-list" style={{ fontSize: '18px' }}></i> Room
                 </li>
               </Link>
             </ul>
           </aside>

      <main style={styles.main}>
        <h1 style={styles.heading}>Booking</h1>

        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            style={styles.input}
            type="text"
            placeholder="Name"
            value={newBooking.name}
            onChange={(e) => setNewBooking({ ...newBooking, name: e.target.value })}
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Time"
            value={newBooking.time}
            onChange={(e) => setNewBooking({ ...newBooking, time: e.target.value })}
          />
          <input
            style={styles.input}
            type="color"
            value={newBooking.color}
            onChange={(e) => setNewBooking({ ...newBooking, color: e.target.value })}
          />
          <input
            style={styles.input}
            type="date"
            placeholder="Check-in"
            value={newBooking.checkIn}
            onChange={(e) => setNewBooking({ ...newBooking, checkIn: e.target.value })}
          />
          <input
            style={styles.input}
            type="date"
            placeholder="Check-out"
            value={newBooking.checkOut}
            onChange={(e) => setNewBooking({ ...newBooking, checkOut: e.target.value })}
          />
          <input
            style={styles.input}
            type="number"
            placeholder="Adults"
            value={newBooking.adults}
            onChange={(e) => setNewBooking({ ...newBooking, adults: parseInt(e.target.value, 10) })}
          />
          <input
            style={styles.input}
            type="number"
            placeholder="Kids"
            value={newBooking.kids}
            onChange={(e) => setNewBooking({ ...newBooking, kids: parseInt(e.target.value, 10) })}
          />
          {editMode ? (
            <button style={{ ...styles.button, ...styles.editButton }} onClick={handleSaveEdit}>Save</button>
          ) : (
            <button style={{ ...styles.button, ...styles.addButton }} onClick={handleAddBooking}>Add Booking</button>
          )}
        </form>

        <div style={styles.bookingContainer}>
          {bookings.map((booking) => (
            <div key={booking.id} style={styles.bookingItem}>
              <div>
                <strong>{booking.name}</strong> - {booking.time} | Check-in: {booking.checkIn} | Check-out: {booking.checkOut} | Adults: {booking.adults} | Kids: {booking.kids}
              </div>
              <div>
                <button style={{ ...styles.button, ...styles.editButton }} onClick={() => handleEditBooking(booking.id)}>Edit</button>
                <button style={{ ...styles.button, ...styles.deleteButton }} onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default BookingAdmin;
