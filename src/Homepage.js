import React, { useState, useEffect , useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Include for Bootstrap JS functionality
import "./navbar.css";
import "./homepage.css";
import axios from "axios"; // Ensure axios is imported after installing it
import emailjs from '@emailjs/browser';

function Homepage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); 
  const [showModal, setShowModal] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login request
      const response = await axios.post('http://localhost:5000/login',{ email, password });
    
      // Store token in localStorage
      localStorage.setItem('token', response.data.token);
    
      // Fetch user details with the token
      const userResponse = await axios.get('http://localhost:5000/getUser', {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });
    
      // Set user data in state
      setUser(userResponse.data);
    
      alert('Login successful');
      setShowModal(false);
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials');
    }
    
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setShowModal(true);
    window.location.href = '/';
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);



  // Check for existing user data in localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Retrieve user data from localStorage
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user data
    }
  }, []); // Run only once on mount

  // this code saves the User data
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
    } else {
      localStorage.removeItem('user'); // Remove user data if user is logged out
    }
  }, [user]); // Run whenever user state changes

  const formRef = useRef(null); // <-- This is where you declare the formRef

  // Initialize EmailJS with your user ID
  useEffect(() => {
    emailjs.init("LFqNWvGmc8v45Mbs1"); // Replace with your actual user ID
  }, []); // Empty dependency array ensures this runs once

  const CLIENT_ID = '683237718331-6eaq4cagkj309up4vmfig4lv1k4t9q0m.apps.googleusercontent.com';
  const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

  // Handle EmailJS form submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs.sendForm("service_wzpd69m", "template_c7d7axr", formRef.current)
        .then((response) => {
          console.log("Success:", response);
          alert("Message sent successfully!");
          formRef.current.reset(); // Reset the form after successful submission
        })
        .catch((error) => {
          console.log("Error:", error);
          alert("Failed to send message. Please try again.");
        });
    }
  };



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
          <a className="nav-link" href="#services">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
        {/* 6th item is a button */}
        <li className="nav-item">
          <button className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop1">Log in</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div
        className="modal fade"
        id="staticBackdrop1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
         data-bs-backdrop="false"
      >
        <div className="modal-dialog d-flex justify-content-center">
          <div className="modal-content w-75">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Sign in
              </h5>
              <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
            </div>
            <div className="modal-body p-4">
            <form onSubmit={handleLogin}>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">Email address</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <p>Don't Have an <a href="SignUp">Account</a></p>
                      <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>

            {/* Logout Button */}
            {user && (
              <button onClick={handleLogout} className="btn btn-danger mt-4">
                Logout
              </button>
            )}
            </div>
          </div>
        </div>
      </div>
  
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
            <div className="carousel-caption  d-md-block">
            <p>Book Swim Unwind</p>
            <h1>Your Relaxing Gateway <br></br>Awaits!</h1>
            <a href="/booking">
            <button type="button" className="startbtn">Get Start</button></a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./carouselnew2.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption  d-md-block">
              <p>Book Swim Unwind</p>
              <h1>A Slide of Paradise for<br></br>each Guest</h1>
              <a href="/booking">
             <button type="button" className="startbtn">Get Start</button></a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./carousel1.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="carousel-caption  d-md-block">
            <p>Book Swim Unwind</p>
            <h1>A Peacefull Place For Family<br></br>and Friends</h1>
            <a href="/booking">
            <button type="button" className="startbtn">Get Start</button></a>
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

       <div class="choose_albertos">
        <h3>Why Choose Albertos's</h3>
        <div class="boxes">
            <div class="box">
                <h2>Private and Public Spaces</h2>
                <p>Choose from a variety of private rooms or enjoy shared areas<br/>
                where you can meet others and relax.</p>
            </div>
            <div class="box">
                <h2>Affordable Getaway</h2>
                <p>Our goal is to offer peace without the luxury price.</p>
            </div>
            <div class="box">
                <h2>Friendly Atmosphere</h2>
                <p>Our team is here to make sure your stay is as comfortable and enjoyable as possible. Expect a welcoming environment and warm hospitality.</p>
            </div>
        </div>
    </div>
    

  
{/*offers*/}


  <div id="services" className="services-container">
    <div className="Services">
      <h1>services</h1>
      <p>services</p>
      <h5>what we offer for you</h5>
    </div>
  </div>

  <div class="grid-container">
    <div class="grid-item">
      <img src="Bedroom.png" alt=""></img>
      <h3>Bedrooms</h3>
      <p>Double Deck Beds, Bedrooms With air<br/>
     Conditioning All with Toilet and shower, All<br/>
   Rooms Are safe and secur ed with Locks, <br/>
   Sound Proofing, and Fresh Lines</p>
    </div>
    <div class="grid-item">
      <img src="ERoom.png" alt=""></img>
      <h3>Entertainment Room</h3>
    <p>Equipped With Split-type Air-Conditioning,<br/>
    Offers A Cool, Comfortable Atmosphere<br/>
    Cozy, Soundproof Space, Large Glass<br/>
   Windows and Doors. With push Seating.</p>
    </div>
    <div class="grid-item">
      <img src="Kitchen.png" alt=""></img>
      <h3>Kitchen</h3>
    <p>Clean And Dirty Kitchen Area, Clean Kitchen<br/>
    With Back, Clean Sink For Dirty<br/>
   Reusable Dished, with Gasoline Ready To<br/>
  Use And Few Kitchen Equipment</p>
    </div>
    <div class="grid-item">
      <img src="showerRoom.png" alt=""></img>
      <h3>Shower Room</h3>
    <p>Refresh Yourself in Our Shower Room<br/>
    Design For Convenience And Relaxation.<br/>
   Located Near The pool, Offer A Refresh<br/>
  Pre-or Post-Swim Rinse. Provide.</p>
    </div>
    <div class="grid-item">
      <img src="Parking.png" alt=""></img>
      <h3>Parking</h3>
    <p>Parking Area Accomodates 2 cars or 4 <br/>
      Motorcycle,Providing flexible option for<br/>
    Our Guest.It Ensure A smooth transition<br/>
  Between Parking and The Resort.
</p>
    </div>
    <div class="grid-item">
      <img src="wifi.png" alt=""></img>
      <h3>Wifi</h3>
    <p>Parking Area Accomodates 2 cars or 4 <br/>
      Motorcycle,Providing flexible option for<br/>
    Our Guest.It Ensure A smooth transition<br/>
  Between Parking and The Resort.
</p>
    </div>
    
  </div>

  <div class="services-containers">
    <div class="services-room">
      <img src="Room1_home.png" alt="Double Deck Bedroom" />
      <div class="room-text">
        <h2>Double Deck Bedrooms</h2>
        <p>
          Perfect for families or groups, our double-deck bedrooms offer a cozy<br/>
          and efficient space with bunk beds designed for comfort and<br/>
          convenience. Enjoy a relaxed stay with essentials provided, ideal for<br/>
          budget-friendly accommodations.
        </p>
      </div>
    </div>
  
    <div class="services-room alternate">
      <div class="room-text">
        <h2>Master Bedrooms</h2>
        <p>
          Experience a restful night's sleep in our master bedrooms. Designed<br/>
          with simplicity and comfort in mind, these rooms feature spacious beds<br/>
          and essential amenities, providing a private, comfortable retreat<br/>
          during your stay.
        </p>
      </div>
      <img src="Room2_home.png" alt="Master Bedroom" />
    </div>
  </div>
  <div id="gallery" className="Gallery-container">
    <div className="Gallery">
      <h1>Gallery</h1>
      <p>Gallery</p>
      <h5>Best shared photos</h5>
    </div>
  </div>


   {/*Gallery*/}
    
   <div className="gallerypic">
    <div class="gallery-item">
      <img src="Pic1.jpg" alt="Image 1"></img>
    </div>
    <div class="gallery-item">
      <img src="Pic2.jpg" alt="Image 2"></img>
    </div>
    <div class="gallery-item">
      <img src="pic3.png" alt="Image 3"></img>
    </div>
    <div class="gallery-item">
      <img src="pic4.jpg" alt="Image 4"></img>
    </div>
    <div class="gallery-item">
      <img src="pic5.jpg" alt="Image 5"></img>
    </div>
    <div class="gallery-item">
      <img src="pic6.jpg" alt="Image 6"></img>
    </div>
    <div class="gallery-item">
      <img src="pic7.jpg" alt="Image 7"></img>
    </div>
    <div class="gallery-item">
      <img src="pic8.jpg" alt="Image 8"></img>
    </div>
    <div class="gallery-item">
      <img src="pic9.jpg" alt="Image 9"></img>
    </div>
    <div class="gallery-item">
      <img src="pic10.jpg" alt="Image 10"></img>
    </div>
    <div class="gallery-item">
      <img src="pic11.jpg" alt="Image 11"></img>
    </div>
    <div class="gallery-item">
      <img src="pic12.jpg" alt="Image 12"></img>
    </div>
  </div>


  <div className="Destination-container">
    <div className="Destination">
      <h1>DESTINATION</h1>
      <p>Destination</p>
      <h5>What are you waiting for?Travel now</h5>
    </div>
  </div>

  <div className="Location">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.190271851963!2d121.05163437487606!3d14.764234985741796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0205d3903b7%3A0xe7e87aeef6b298b1!2sSally%20Lugawan%20%26%20Store!5e1!3m2!1sen!2sus!4v1733668087243!5m2!1sen!2sus"></iframe>
  </div>

  <div id="contact" className="Contact-container">
    <div className="Contact">
      <h1>CONTACT</h1>
      <p>Contact</p>
      <h5>Get in touch with our team</h5>
    </div>
  </div>

  
  <div class="contact-container">
  
    <div class="contact-left">
      <h2>Get in Touch</h2>
      <p>
        call us<br>
       </br>09486096986
       <br></br>
       <br></br>
       visit us<br></br>
       102 villa imleda hidalgo street Area D<br></br>
       Camarin caloocan city, philippines.
       <br></br>
       <br></br>
       Email us<br></br>
       karl.brizuela01@gmail.com
      </p>
    </div>

    
    <div class="contact-right">
      <form ref={formRef} onSubmit={handleEmailSubmit}>
        <div class="form-group" method="POST" action="/send-email">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="user_name" placeholder="Enter your name" required></input>
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" name="user_email" placeholder="Enter your email" required></input>
        </div>
        <div class="form-group">
          <label for="phone">Your Phone</label>
          <input type="tel" id="phone" name="user_phone" placeholder="Enter your phone number" required></input>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your message here" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
  <footer class="footer">
    <div class="footer-container">
      
      <div class="footer-section about">
        <h3>About</h3>
        <p>
          Providing a welcoming escape where you can unwind and enjoy refreshing,
          comfortable environment. We are committed to offering a balance of
          family-friendly fun and peaceful relaxation, with amenities designed for
          comfort.
        </p>
        <p>
          Be your go-to destination if you're seeking a unique blend of relaxation
          and family fun, creating memorable experiences.
        </p>
      </div>

      
      <div class="footer-section contact">
        <h3>Contact</h3>
        <p>102 Villa Imelda Hidalgo Street Area D<br/>Camarin Caloocan City, Philippines</p>
        <p>Jhon.doe@gmail.com</p>
        <p>+63 912 345 6789</p>
      </div>

      
      <div class="footer-section links">
        <h3>Links</h3>
        <ul>
          <li><a href="#">About Hotel</a></li>
          <li><a href="#">Our Rooms</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Get Directions</a></li>
        </ul>
      </div>

     
      <div class="footer-section signup">
        <h3>Sign Up</h3>
        <p>Sign up for our news, deals and special offers.</p>
        <form>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <p>
        Copyright © 2024 by Alberto's Resort. All Rights Reserved.
      </p>
      <div className="logo-footer">
      <img src="footer-logo.png"></img>
      </div>
      <div class="social-icons">
        <a href="#"><img src="Facebook.png" alt="Facebook"></img></a>
        <a href="#"><img src="Instagram.png" alt="Instagram"></img></a>
        <a href="#"><img src="Group.png" alt="Twitter"></img></a>
      </div>
    </div>
  </footer>
    </>
   
  
  );
  

}

export default Homepage;