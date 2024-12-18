import React from "react";

const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "space-between", // Space between logo and centered items
      alignItems: "center",            // Vertically center items
      width: "100%",
      padding: "10px 0",              // Add some padding to navbar
      boxSizing: "border-box",        // Ensure padding doesn't affect layout width
      position: "fixed",              // Make navbar fixed at the top
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,                   // Ensure it stays on top of other content
    },
    navbarBrand: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      width: "100px",
      height: "50px",
      objectFit: "contain",
    },
    navbarNavWrapper: {
      flexGrow: 1,                    // This will make the list take up the available space
      display: "flex",
      justifyContent: "center",       // Center the nav items horizontally
    },
    navbarNav: {
      display: "flex",
      listStyle: "none",
      padding: 0,
      margin: 0,
      border:"solid 1px",
      borderRadius:"50px",
    },
    navItem: {
      marginRight: "20px",            // Space between the items
    },
    activeButton: {
      color: "#007bff",               // Active button color (blue)
      backgroundColor: "transparent", // Make background transparent
      border: "none",                 // No border
      cursor: "pointer",              // Cursor to show it's clickable
    },
    button: {
      color: "#333",                  // Normal button color
      backgroundColor: "transparent", // Make background transparent
      border: "none",                 // No border
      cursor: "pointer",              // Cursor to show it's clickable
    },
    section: {
      marginTop: "80px", // Adjust the margin-top for the section to accommodate the fixed navbar height
      marginBottom: "50px",
      padding: "20px",
      backgroundColor: "#f9f9f9",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px", // Space between items
      justifyContent: "space-between",
    },
    column: {
      flex: "1 1 calc(33% - 20px)", // Each column takes up 1/3 of the container width minus the gap
      marginBottom: "20px", // Space between rows
      boxSizing: "border-box",
      maxWidth: "calc(33% - 20px)", // Ensures each item doesn't overflow
    },
    contentBox: {
      border: "1px solid #ddd",
      padding: "15px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between", // Space out image and text
      height: "100%", // Make the box height flexible
    },
    header: {
      fontSize: "20px",
      marginBottom: "10px", // Space below heading
    },
    image: {
      width: "100%",
      height: "190px", // Fixed height for image
      objectFit: "cover",
      borderRadius: "5px",
      marginBottom: "15px", // Space between image and text
    },
    text: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "10px", // Space between description and price
    },
    price: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    rightContainer: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "300px", // Fixed width for the right container to avoid overflow
    },
    blueBox: {
      backgroundColor: "blue",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    confirmButton: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const handleButtonClick = (action) => {
    console.log(`${action} button clicked`);
  };

  // Fake data from JSON
  const roomsData = [
    { id: 1, name: "Room A", image: "image14.png", price: "300 PHP", description: "A comfortable room with modern amenities." },
    { id: 2, name: "Room B", image: "image14.png", price: "250 PHP", description: "A cozy room perfect for short stays." },
    { id: 3, name: "Room C", image: "/pic3.png", price: "350 PHP", description: "A spacious room with a stunning view." },
    { id: 4, name: "Room D", image: "/pic3.png", price: "400 PHP", description: "A luxurious room with premium amenities." },
    { id: 5, name: "Room E", image: "/pic3.png", price: "200 PHP", description: "An affordable room for budget travelers." },
    { id: 6, name: "Room F", image: "/pic3.png", price: "275 PHP", description: "A quiet room with all necessary amenities." },
    
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={styles.navbar}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="Albertos-logo.png" // Replace with your image URL
              alt="Logo"
              style={styles.logo}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto" style={styles.navbarNav}>
              <li className="nav-item" style={styles.navItem}>
                <button
                  className="nav-link active"
                  style={styles.activeButton}
                  onClick={() => handleButtonClick("Home")}
                >
                  Check in
                </button>
              </li>
              <li className="nav-item" style={styles.navItem}>
                <button
                  className="nav-link"
                  style={styles.button}
                  onClick={() => handleButtonClick("Features")}
                >
                  Check out
                </button>
              </li>
              <li className="nav-item" style={styles.navItem}>
                <button
                  className="nav-link"
                  style={styles.button}
                  onClick={() => handleButtonClick("Pricing")}
                >
                  Guest
                </button>
              </li>
              <li className="nav-item" style={styles.navItem}>
                <button
                  className="nav-link"
                  style={{ ...styles.button, color: "Blue", fontWeight: "bold" }}
                  onClick={() => handleButtonClick("Search")}
                >
                  Search
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Section with Rows and Columns */}
      <section style={styles.section}>
        <div className="container-fluid" style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
          <div style={styles.grid}>
            {roomsData.map((room) => (
              <div key={room.id} style={styles.column}>
                <div style={styles.contentBox}>
                  <img src={room.image} alt={room.name} style={styles.image} />
                  <h3 style={styles.header}>
                    {room.name} <span style={{ marginLeft: "8px" }} role="img" aria-label="icon">🛏️</span>
                  </h3>
                  <p style={styles.text}>{room.description}</p>
                  <p style={styles.price}>{room.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Booking Summary) */}
          <div className="col-md-4" style={styles.rightContainer}>
            <h1>Booking Summary</h1>
            <hr />
            <p><strong>Date:</strong> 20th Dec 2024</p>
            <p><strong>Person(s):</strong> 3</p>
            <p style={{ fontSize: "14px", color: "#777" }}><small>Notes: Kids below 3ft are free</small></p>
            <hr />
            <h1>Rooms</h1>
            <hr />
            <p>Room A</p>
            <p>Room B</p>
            <hr />
            <div style={styles.blueBox}>
              <strong>Total</strong>: $500
            </div>
            <hr />
            <button style={styles.confirmButton} onClick={() => handleButtonClick("Confirm")}>
              Confirm
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
