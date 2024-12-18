// src/pages/Rooms.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
const Rooms = () => {
  
  const styles = {
    dashboard: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      flexDirection: 'column',  // Keep this for mobile-first design
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
    <div className="logo"><img src="Albertos-logo.png" alt="Logo" style={styles.logoImg} /></div>
    <div style={styles.headerIcons}>
      <i className="fas fa-bell notification" style={styles.headerIcon}></i>
      <i className="fas fa-user profile" style={styles.headerIcon}></i>
    </div>
  </header>
  <aside style={{ ...styles.navbar, backgroundColor: "white", top: "66px", left: "0" }}>
      <ul style={styles.navbarUl}>
                        <Link to="/Dashboard">
                          <li style={styles.navbarLi}>
                            <i className="fas fa-home" style={styles.navbarIcon} ></i> Dashboard
                          </li>
                        </Link>
                        <Link to="/BookingAdmin">
                          <li style={styles.navbarLi}>
                            <i className="fas fa-history"style={styles.navbarIcon} ></i> Booking
                          </li>
                        </Link>
                        <Link to="/Guest">
                          <li style={styles.navbarLi}>
                            <i className="fas fa-users" style={styles.navbarIcon} ></i> Guest
                          </li>
                        </Link>
                        <Link to="/Rooms">
                          <li style={{...styles.navbarLi, fontWeight:"bold", color:"Red", fontSize:"20px", whiteSpace:"nowrap"}}>
                            <i className="fas fa-list" style={styles.navbarIcon}> </i> Room
                          </li>
                        </Link>
                      
                      </ul>
    </aside>

  
    </>
  );
};

export default Rooms;
