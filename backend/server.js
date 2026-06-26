const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const MaintenanceRequest = require("./models/MaintenanceRequest")
const Booking = require("./models/booking")
const User = require("./models/user")

const app = express()

mongoose
  .connect(
    "mongodb+srv://pvnandu30:%40Nandu123@mongodb.ydewyzg.mongodb.net/?appName=mongodb"
  )
.then(() => {
console.log("MongoDB Connected")
})
.catch((error) => {
console.log(error)
})

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
res.send("Backend is running")
})

app.get("/hello", (req, res) => {
res.send("Hello from backend")
})

app.get("/maintenance", async (req, res) => {
const requests = await MaintenanceRequest.find()

res.json(requests)
})

app.post("/maintenance", async (req, res) => {
const newRequest = new MaintenanceRequest(req.body)

await newRequest.save()

res.send("Request Added")
})

app.put("/maintenance/:id", async (req, res) => {
await MaintenanceRequest.findByIdAndUpdate(
req.params.id,
{
status: "Completed",
}
)

res.send("Updated")
})

app.delete("/maintenance/:id", async (req, res) => {
await MaintenanceRequest.findByIdAndDelete(
req.params.id
)

res.send("Deleted")
})

app.get("/bookings", async (req, res) => {
const bookings = await Booking.find()

res.json(bookings)
})

app.post("/bookings", async (req, res) => {
const existingBooking =
await Booking.findOne({
amenity: req.body.amenity,
date: req.body.date,
time: req.body.time,
})

if (existingBooking) {
return res.json({
success: false,
message: "Slot already booked",
})
}

const newBooking = new Booking(req.body)

await newBooking.save()

res.json({
success: true,
message: "Booking Added",
})
})

app.post("/register", async (req, res) => {
const newUser = new User(req.body)

await newUser.save()

res.send("User Registered")
})

app.post("/login", async (req, res) => {
const user = await User.findOne({
userid: req.body.userid,
password: req.body.password,
})

if (user) {
res.json({
success: true,
message: "Login Successful",
})
} else {
res.json({
success: false,
message: "Invalid Credentials",
})
}
})

app.listen(5000, () => {
console.log("Server started on port 5000")
})
