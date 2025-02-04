import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const GuestAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('htpp://localhost:3001/getUser'); // Adjust API path as needed
        setUsers(users.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const styles = {
    table: {
        width: '50%',
        margin: '20px auto',
        borderCollapse: 'collapse',
        
    },
    th: {
        backgroundColor: '#f4f4f4',
        border: '1px solid #ddd',
        padding: '10px',
        textAlign: 'center',
    },
    td: {
        border: '1px solid #ddd',
        padding: '10px',
        textAlign: 'center',
    },
    btn: {
        padding: '5px 10px',
        margin: '0 2px',
        cursor: 'pointer',
    },
    edit: {
        backgroundColor: '#ffc107',
        color: 'white',
        border: 'none',
    },
    delete: {
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
    },
    save: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
    },
    dashboard: {
        display: 'flex',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        flexDirection: 'column',
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
    },
    logoImg: {
        height: '49px',
        width: 'auto',
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
        width: "280px",
        backgroundColor: "#ffffff",
        color: "#000000",
        position: "fixed",
        top: "66px",
        left: 0,
        height: "calc(100% - 66px)",
        overflowY: "auto",
    },
    navbarUl: {
        listStyle: "none",
        padding: "20px",
    },
    navbarLi: {
        padding: "15px 20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "40px",
        width: "100%",
        transition: "background-color 0.3s",
    },
    navbarLiHover: {
        backgroundColor: "#EB001B",
        color: "#ffffff",
    },
    navbarIcon: {
        fontSize: "18px",
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
                                <i className="fas fa-list" style={styles.navbarIcon}></i> Room</li>
                        </Link>
                    </ul>
                </aside>



                <main style={{ marginTop: '100px', padding: '20px' }}>
      <div style={styles.table}>
        <h1 style={styles.tableh1}>Users Table</h1>
        <table border="1" style={styles.tabletable}>
          <thead>
            <tr>
              <th style={styles.th}>id</th>
              <th style={styles.th}>Email</th>
              <th  style={styles.th}>fullname</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map(user => {
              return <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.fullname}</td>
              </tr>
            })
           }
          </tbody>
        </table>
      </div>
      </main>
    </>
  );
};

export default GuestAdmin;
