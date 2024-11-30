import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Include for Bootstrap JS functionality
import "./navbar.css";
import "./homepage.css";

function Homepage() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    {/* Logo on the left */}
    <a className="navbar-brand" href="#">
      <img src="Albertos-logo.png" alt="Logo" />
    </a>
    {/* Toggle button for hamburger menu */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/* Navbar items, centered when expanded */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="#Home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
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
        {/* 6th item is a button */}
        <li className="nav-item">
          <button className="btn btn-primary">Sign Up</button>
        </li>
      </ul>
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
              src="./carouselnew3.jpg"
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
              src="./carouselnew2.jpg"
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
      
      {/*ABOUT PAGE*/}
      <div id="about" className="container py-5">
  <div className="row d-flex align-items-center flex-column-reverse flex-lg-row">
    <div className="col-lg-6">
      <img
        src="pool_about.jpg"
        alt="Attractions"
        className="content-img"
      />
    </div>
    <div className="about_text col-lg-6">
      <h2>About Alberto's Place</h2>
      <br/>
      <h4>Discover the best affordable &<br/>Family-Friendly resort for your Family<br/></h4>
      <br/>
      <p>
      Providing a welcoming escape where you can unwind and enjoy<br/>
      refereshing, comforatble environment. we are committed to offering a <br/>
      balance of family-friendly fun and peaceful relaxationn with amenities<br/>
      designed for comfort<br/><br/>
      Be your go to destination if you're seeking a unique blend of relaxation<br/>
      and family fun, creating memorable experience.
      </p>
    </div>
  </div>
</div>
       {/*mission and vision*/}
       <div className="Mission">
        <h2>Mission</h2>
        <br/>
        <p>"to Provide a welcoming escape where guest can unwind and enjoy refereshing, comfortable environment.<br/>
        We're committed to offering a balance of family-friendly fun and peaceful relaxation, with Amenities<br/>
        designed for comfort"</p>
        <br/>
        <br/>
        <h2>Vision</h2>
         <p>"To be your go to destination if you're seeking unique blend of relaxation and family fun, creating<br/>
         memorable experiences"</p>
       </div>

       {/*about albertos*/}
       <div className="about_albertos">
        <h2>About us</h2>
        <br/>
        <p>
        At Alberto's we believe that a great getaway should offer the best of both worldds: the freedom to connect<br/>
        with others and the privacy to relax on your own terms.Our resort provides a mix of private<br/>
        accomodations and shred spaces, designed to help you unwind, recharge, and enjoy a memorable<br/>
        stay. Whether you're looking for a peaceful retreat or a place to meet new friends, Albertos's offers a<br/>
        welcoming environment for every type of traveler.
        </p>
       </div>

      
    </>
  );
}

export default Homepage;