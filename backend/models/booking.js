const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
  amenity: String,
  date: String,
  time: String,
})

module.exports = mongoose.model(
  "Booking",
  bookingSchema
)