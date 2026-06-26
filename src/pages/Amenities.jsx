import { useState, useEffect } from "react"
import "../styles/Amenities.css"

function Amenities() {
  const [bookings, setBookings] = useState([])
  const [date, setDate] = useState("")
  const [time, setTime] = useState("5 PM - 6 PM")

  const timeSlots = [
    "5 PM - 6 PM",
    "6 PM - 7 PM",
    "7 PM - 8 PM",
    "8 PM - 9 PM",
  ]

  useEffect(() => {
    loadBookings()
  }, [])

  async function loadBookings() {
    const response = await fetch(
      "http://localhost:5000/bookings"
    )

    const data = await response.json()

    setBookings(data)
  }

  async function bookAmenity(name) {
    if (!date) {
      alert("Select a date")
      return
    }

    const newBooking = {
      amenity: name,
      date: date,
      time: time,
    }

    const response = await fetch(
      "http://localhost:5000/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBooking),
      }
    )

    const result = await response.json()

    if (result.success === false) {
      alert("Slot already booked")
      return
    }

    alert("Booking Successful")

    loadBookings()
  }

  return (
    <div className="amenities-page">
      <h1 className="amenities-title">
        🏊 Amenities
      </h1>

      <p className="amenities-subtitle">
        Book facilities available in your property
      </p>

      <div className="amenity-card">
        <h3>Select Date</h3>

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        <h3>Select Time Slot</h3>

        <select
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
        >
          {timeSlots.map((slot) => (
            <option
              key={slot}
              value={slot}
            >
              {slot}
            </option>
          ))}
        </select>
      </div>

      <div className="amenities-grid">
        <div className="amenity-card">
          <h2>🏋️ Gym</h2>

          <p>
            Fully equipped fitness center
          </p>

          <button
            onClick={() =>
              bookAmenity("Gym")
            }
          >
            Book Gym
          </button>
        </div>

        <div className="amenity-card">
          <h2>🏊 Swimming Pool</h2>

          <p>
            Outdoor swimming pool access
          </p>

          <button
            onClick={() =>
              bookAmenity("Swimming Pool")
            }
          >
            Book Pool
          </button>
        </div>
      </div>

      <h2 className="booking-title">
        My Recent Bookings
      </h2>

      <div className="booking-grid">
        {bookings.map((item) => (
          <div
            className="booking-card"
            key={item._id}
          >
            <h3>{item.amenity}</h3>

            <p>📆 {item.date}</p>

            <p>⏰ {item.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Amenities