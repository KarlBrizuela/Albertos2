import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Include for Bootstrap JS functionality
import "./navbar.css";
import "./homepage.css";

function Homepage() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo Section */}
          <img
            src="/albertos_logo.png"
            alt="albertos"
            className="Albertos-logo"
          />

          {/* Hamburger for Mobile View */}
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

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            {/* Button */}
           <button type="button" className="bookbtn">Book Your Stay</button>
          </div>
        </div>
      </nav>

      {/* Carousel Section */}
      <div
        id="Home"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#Home"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#Home"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#Home"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./carousel3.jpg"
              className="d-block w-100 h-90"
              alt="Slide 1"
            />
            <div className="carousel-caption d-none d-md-block">
            <p>Book Swim Unwind</p>
            <h1>Your Relaxing Gateway <br></br>Awaits!</h1>
            <button type="button" className="startbtn">Get Start</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./carousel2.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Book Swim Unwind</p>
              <h1>A Slide of Paradise for<br></br>each Guest</h1>
             <button type="button" className="startbtn">Get Start</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./carousel1.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="carousel-caption d-none d-md-block">
            <p>Book Swim Unwind</p>
            <h1>A Peacefull Place For Family<br></br>and Friends</h1>
            <button type="button" className="startbtn">Get Start</button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#Home"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#Home"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Homepage;