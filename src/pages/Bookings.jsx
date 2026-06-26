import { useState, useEffect } from "react"
import "../styles/Bookings.css"

function Bookings() {
  const [bookings, setBookings] = useState([])

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

  return (
    <div className="bookings-page">

      <h1 className="bookings-title">
        📅 My Bookings
      </h1>

      <p className="bookings-subtitle">
        View all your amenity reservations
      </p>

      <div className="booking-stat">
        <h2>{bookings.length}</h2>
        <p>Total Bookings</p>
      </div>

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

export default Bookings