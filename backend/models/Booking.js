const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  checkIn: { type: String, required: true },
  checkOut: { type: String, required: true },
  guests: {
    adults: { type: Number, required: true },
    kids: { type: Number, required: true },
  },
  room: { type: String, required: true },
  roomCost: { type: Number, required: true },
  guestCost: { type: Number, required: true },
  total: { type: Number, required: true },
  transactionId: { type: String, required: true },
  payerName:{ type: String, required: true },
  paymentStatus: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
