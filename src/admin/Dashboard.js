import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, LineChart } from '@mui/x-charts';
import ReactCalendar from 'react-calendar'; // Import react-calendar
import 'react-calendar/dist/Calendar.css'; // Import react-calendar styles
import { color } from 'chart.js/helpers';

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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
      backgroundColor:"#ebf9ce"
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
    content: {
      marginTop: '66px',
      marginLeft: '280px',
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: '20px',
      backgroundColor:"#7ff6c2",
    },
    pieChart: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '10px',
      gridColumn: 'span 8',
      gridRow: 'span 3',
      "background": "linear-gradient(180deg, #40e89e, #7ff6c2, #12ca7c)"

    },
    lineChart: {
      gridColumn: 'span 8',
      gridRow: 'span 3',
      borderRadius: '10px',
      padding: '20px',
      "background": "linear-gradient(180deg, #40e89e, #7ff6c2, #12ca7c)",
      border: '1px solid #ddd',

    },
    calendar: {
      gridColumn: 'span 4',
      gridRow: 'span 3',
      borderRadius: '10px',
      padding: '20px',
      border: '1px solid #ddd',
      "background": "linear-gradient(180deg, #40e89e, #7ff6c2, #12ca7c)",
    },
    item: {
      "background": "linear-gradient(180deg, #40e89e, #7ff6c2, #12ca7c)",
      borderRadius: '10px',
      padding: '15px',
      border: '1px solid #ddd',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      height: '100%',
      position: 'relative',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '100%',
    },
    cardTitle: {
      margin: 0,
      fontSize: '18px',
    },
    cardDate: {
      fontSize: '14px',
      color: '#888',
    },
    buttonLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#f5f5f5',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
    },
    iconButton: {
      cursor: 'pointer',
      fontSize: '18px',
      color: '#888',
      position: 'absolute',
      top: '10px',
      right: '10px',
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
            <li style={{ ...styles.navbarLi, fontWeight: 'bold', color: '#02311F', fontSize: '20px' }}>
              <i className="fas fa-home" style={{ fontSize: '18px', }}></i> Dashboard
            </li>
          </Link>
          <Link to="/BookingAdmin">
            <li style={styles.navbarLi}>
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

      <main style={styles.content}>
        {/* Row 1 */}
        <div style={styles.pieChart}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'Series A' },
                  { id: 1, value: 15, label: 'Series B' },
                  { id: 2, value: 20, label: 'Series C' },
                ],
              },
            ]}
            width={650}
            height={400}
          />
        </div>

        <div style={{ ...styles.item, gridColumn: 'span 4' }}>
          <div style={styles.cardContent}>
            <p style={{ margin: 0 }}>Your message here</p>
            <h2 style={styles.cardTitle}>Heading Title</h2>
            <div style={styles.cardDate}>Date: {currentDate.toLocaleDateString()}</div>
          </div>
        </div>

        <div style={{ ...styles.item, gridColumn: 'span 4' }}>
          <div style={styles.cardContent}>
            <p style={{ margin: 0 }}>Total Rooms</p>
            <h2 style={styles.cardTitle}>150</h2>
          </div>
          <div style={styles.buttonLogo}>
            <i className="fas fa-plus-circle"></i>
            <span>Add Room</span>
          </div>
        </div>

        <div style={{ ...styles.item, gridColumn: 'span 4' }}>
          <div style={styles.cardContent}>
            <p style={{ margin: 0 }}>Details</p>
            <h2 style={styles.cardTitle}>More Information</h2>
          </div>
        </div>

        {/* Row 2 */}
        <div style={styles.lineChart}>
          <LineChart
            xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }]}
            series={[{ data: [10, 20, 15, 25, 30, 40] }]}
            width={650}
            height={400}
            grid={{ horizontalLines: true, verticalLines: true }}
          />
        </div>

        <div style={{...styles.calendar, border:'none'}}>
          <h3>Calendar</h3>
          <ReactCalendar 
            value={currentDate}
            onChange={(newDate) => setCurrentDate(newDate)}
          />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
