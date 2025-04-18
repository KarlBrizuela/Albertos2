import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom"; 
import "./booking.css";
import Homepage from "./Homepage";
import paypalbutton from "./paypalbutton";
import GodotGame from "./Godotgame";



function Booking() {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState({});
  const [currentButton, setCurrentButton] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isGuestModalOpen, setGuestModalOpen] = useState(false);
  const [guests, setGuests] = useState({ adults: 1, kids: 0 });
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingSummary, setBookingSummary] = useState(null);
  const [isPayPalVisible, setPayPalVisible] = useState(false);
  
  const axios = require('axios');
  
  const handlePaymentSuccessPaypal = (details) => {
    alert("Payment Successful! Transaction details: " + details.payer.name.given_name);
    // Optionally, you can store transaction details or redirect to another page
    const bookingData = {
      ...bookingSummary,
      transactionId: details.id, // PayPal transaction ID
      payerName: `${details.payer.name.given_name} ${details.payer.name.surname}`,
      payerEmail: details.payer.email_address,
    };
  };

  // Function to handle errors from PayPal payment
  const handlePaymentError = (err) => {
    console.error("Payment Error: ", err);
    alert("Payment failed. Please try again.");
  };

  const CalculateTotal = () => {
    // Example: Calculate the total cost
    return 500; // Replace with your actual calculation
  };



  const navigate = useNavigate(); // Initialize navigate

  const HandlePaymentSuccess = (details) => {
    alert("Payment Successful! Transaction details: " + details.payer.name.given_name);
    // Redirect to the homepage
    navigate("./Homepage");
  };






  const toggleCalendar = (button) => {
    setCurrentButton(button);
    setCalendarOpen(!isCalendarOpen);
  };

  const handleDateClick = (day) => {
    const selectedFullDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    if (selectedFullDate < new Date()) {
      alert("You cannot select a past date.");
      return;
    }

    setSelectedDate((prev) => ({
      ...prev,
      [currentButton]: selectedFullDate.toLocaleDateString(),
    }));
    setCalendarOpen(false);
  };

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    let calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(day);
    }

    return calendarDays;
  };

  const goToPreviousMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const incrementGuests = (type) => {
    setGuests((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrementGuests = (type) => {
    setGuests((prev) => ({ ...prev, [type]: Math.max(0, prev[type] - 1) }));
  };

  const calculateRoomCost = () => {
    const checkInDate = new Date(selectedDate?.["Check In"]);
    const checkOutDate = new Date(selectedDate?.["Check Out"]);
    const diffTime = checkOutDate - checkInDate;
    const numberOfNights = diffTime / (1000 * 3600 * 24); // Convert time difference to days
    return selectedRoom?.cost * numberOfNights || 0;
  };

  const calculateGuestCost = () => {
    const adultsCost = guests.adults * 150; // Assume ₱150 per adult per night
    const kidsCost = guests.kids * 100; // Assume ₱100 per kid per night
    return adultsCost + kidsCost;
  };

  const calculateTotal = () => {
    return calculateRoomCost() + calculateGuestCost();
  };

  

  const handleBooking = () => {
    setBookingSummary({
      checkIn: selectedDate?.["Check In"] || "Not Selected",
      checkOut: selectedDate?.["Check Out"] || "Not Selected",
      guests,
      room: selectedRoom?.name || "Not Selected",
      roomCost: calculateRoomCost(),
      guestCost: calculateGuestCost(),
      total: calculateTotal(),
    });
  };


  const HandlepaymentSuccess = async (details) => {
    alert("Payment Successful! Transaction details: " + details.payer.name.given_name);
  
    const bookingData = {
      ...bookingSummary,
      transactionId: details.id, // PayPal transaction ID
      payerName: details.payer.name.given_name,
      payerEmail: details.payer.email_address,
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
  
      if (response.ok) {
        alert("Booking saved successfully!");
        navigate("/Homepage");
      } else {
        alert("Failed to save booking. Please contact support.");
      }
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("An error occurred while saving the booking.");
    }
  };
  
 
  const handleTransactionComplete = async (transactionId, payerName) => {
    try {
      const response = await axios.post("http://localhost:5000/SaveTransaction", {
        transactionId,
        payerName,
        otherData: {
          // Include any additional data such as booking details or user ID
        },
      });
  
      alert("Transaction saved successfully!");
    } catch (error) {
      console.error("Error saving transaction:", error);
      alert("Failed to save transaction.");
    }
  };


  

  return (
    <>
      <div className="header_nav">
        <img src="albertos_logo.png" alt="Albertos Logo" className="logo" />
        <div className="Booking_Navbar">
          <div className="Nav_Booking">
            <button onClick={() => toggleCalendar("Check In")}>
              {selectedDate?.["Check In"] || "Check In"}
            </button>
            <button onClick={() => toggleCalendar("Check Out")}>
              {selectedDate?.["Check Out"] || "Check Out"}
            </button>
            <button onClick={() => setGuestModalOpen(true)}>
              Guests: {guests.adults} Adults, {guests.kids} Kids
            </button>
            <div className="Book">
              <button onClick={handleBooking}>Book</button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {isCalendarOpen && (
        <div className="calendar-modal">
          <div className="calendar-content">
            <div className="calendar-header">
              <button onClick={goToPreviousMonth}>{"<"}</button>
              <span>
                {currentDate.toLocaleString("default", { month: "long" })} {" "}
                {currentDate.getFullYear()}
              </span>
              <button onClick={goToNextMonth}>{">"}</button>
            </div>
            <div className="calendar-grid">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="calendar-header-day">
                  {day}
                </div>
              ))}
              {generateCalendar().map((day, index) =>
                day ? (
                  <button
                    key={index}
                    className={`calendar-day ${
                      new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        day
                      ) < new Date()
                        ? "disabled"
                        : ""
                    }`}
                    onClick={() => handleDateClick(day)}
                    disabled={
                      new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        day
                      ) < new Date()
                    }
                  >
                    {day}
                  </button>
                ) : (
                  <div key={index} className="empty-slot"></div>
                )
              )}
            </div>
            <button
              className="close-calendar"
              onClick={() => setCalendarOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Guest Modal */}
      {isGuestModalOpen && (
        <div className="guest-modal">
          <div className="guest-content">
            <h2>Guests</h2>
            <div className="guest-row">
              <span>Adults (18+):</span>
              <button onClick={() => decrementGuests("adults")}>-</button>
              <span>{guests.adults}</span>
              <button onClick={() => incrementGuests("adults")}>+</button>
            </div>
            <div className="guest-row">
              <span>Kids (0-17):</span>
              <button onClick={() => decrementGuests("kids")}>-</button>
              <span>{guests.kids}</span>
              <button onClick={() => incrementGuests("kids")}>+</button>
            </div>
            <button className="close-guest" onClick={() => setGuestModalOpen(false)}>
              Done
            </button>
          </div>
        </div>
      )}

      <hr />

      <div className="Booking_Content">
        <div className="Room_Content">
          <button  onClick={() => setSelectedRoom({ name: "ROOM A", cost: 300 })}>
            <img src="Room1,2.png" alt="Room A" />
            <h1>ROOM A</h1>
            <p>₱300 per night</p>
          </button>
          <button  onClick={() => setSelectedRoom({ name: "ROOM B", cost: 300 })}>
            <img src="Room1,2.png" alt="Room B" />
            <h1>ROOM B</h1>
            <p>₱300 per night</p>
          </button>
          <button  onClick={() => setSelectedRoom({ name: "ROOM C", cost: 200 })}>
            <img src="Room3-6.png" alt="Room C" />
            <h1>ROOM C</h1>
            <p>₱200 per night</p>
          </button>
          <button  onClick={() => setSelectedRoom({ name: "ROOM D", cost: 200 })}>
            <img src="Room3-6.png" alt="Room D" />
            <h1>ROOM D</h1>
            <p>₱200 per night</p>
          </button>
          <button  onClick={() => setSelectedRoom({ name: "ROOM E", cost: 200 })}>
            <img src="Room3-6.png" alt="Room E" />
            <h1>ROOM E</h1>
            <p>₱200 per night</p>
          </button>
          <button  onClick={() => setSelectedRoom({ name: "ROOM F", cost: 200 })}>
            <img src="Room3-6.png" alt="Room F" />
            <h1>ROOM F</h1>
            <p>₱200 per night</p>
          </button>
        </div>


        <PayPalScriptProvider options={{ "client-id": "AR7a5vo8EISrTIotceidq55MZHW4TEaQ6ZSSyMqtOtvizzwWDE-G71mAUGS5ANyg5AnIkf99q1_vy5Z1" }}>
      <div className="Booking_Summary">
        <div className="Summary_Content">
          <h1>Booking Summary</h1>
          {bookingSummary ? (
            <div>
              <p>Check In: {bookingSummary.checkIn}</p>
              <p>Check Out: {bookingSummary.checkOut}</p>
              <p>
                Guests: {bookingSummary.guests.adults} Adults,{" "}
                {bookingSummary.guests.kids} Kids
              </p>
              <p>Room: {bookingSummary.room}</p>
              <hr />
              <p>Room Cost: ₱{bookingSummary.roomCost}</p>
              <p>Guest Cost: ₱{bookingSummary.guestCost}</p>
              <hr />
              <p>Total: ₱{bookingSummary.total}</p>
            </div>
          ) : (
            <p>No booking details available.</p>
          )}

          {/* Button to show PayPal button */}
          <button onClick={() => setPayPalVisible(true)}>Proceed to Payment</button>

          {/* PayPal Buttons */}
          {isPayPalVisible && (
            <div className="PayPal_Button_Container">
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: bookingSummary.total.toString(),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    const transactionId = details.id; // Get the transaction ID
                    const payerName = `${details.payer.name.given_name} ${details.payer.name.surname}`; // Get payer's name
                
                    handlePaymentSuccessPaypal(details); // Notify the user about payment success
                    handleTransactionComplete(transactionId, payerName); // Pass both transactionId and payerName
                  });
                }}
                
                onError={(error) => {
                  handlePaymentError(error);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </PayPalScriptProvider>

      </div>

      <h1>godot game</h1>
      <GodotGame/>
    </>
  );
}

export default Booking;
