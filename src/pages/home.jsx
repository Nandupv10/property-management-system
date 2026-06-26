import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import "../styles/Home.css"

function Home() {
  const navigate = useNavigate()

  const [requests, setRequests] = useState([])
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const requestResponse = await fetch(
      "http://localhost:5000/maintenance"
    )

    const requestData =
      await requestResponse.json()

    setRequests(requestData)

    const bookingResponse = await fetch(
      "http://localhost:5000/bookings"
    )

    const bookingData =
      await bookingResponse.json()

    setBookings(bookingData)
  }

  const pendingCount = requests.filter(
    (item) => item.status === "Pending"
  ).length

  const completedCount = requests.filter(
    (item) => item.status === "Completed"
  ).length

  return (
    <div className="home">

      <div className="hero">
        <div className="hero-content">

          <h1>PROPERTY MANAGEMENT DASHBOARD</h1>

          

          <div className="hero-buttons">

            <button
              onClick={() =>
                navigate("/maintenance")
              }
            >
              Maintenance
            </button>

            <button
              onClick={() =>
                navigate("/bookings")
              }
            >
              View Bookings
            </button>

          </div>
        </div>
      </div>

      <div className="stats">

        <div className="stat-card">
          <h2>{pendingCount}</h2>
          <p>Pending Requests</p>
        </div>

        <div className="stat-card">
          <h2>{completedCount}</h2>
          <p>Completed Requests</p>
        </div>

        <div className="stat-card">
          <h2>{bookings.length}</h2>
          <p>Amenities Booked</p>
        </div>

        <div className="stat-card">
          <h2>{requests.length}</h2>
          <p>Total Requests</p>
        </div>

      </div>

      <h2 className="section-title">
        Quick Access
      </h2>

      <div className="cards">

        <div
          className="feature-card"
          onClick={() =>
            navigate("/maintenance")
          }
        >
          <h2>🔧 Maintenance</h2>
          <p>
            Raise and track maintenance requests
          </p>
        </div>

        <div
          className="feature-card"
          onClick={() =>
            navigate("/amenities")
          }
        >
          <h2>🏊 Amenities</h2>
          <p>
            Book facilities and amenities
          </p>
        </div>

        <div
          className="feature-card"
          onClick={() =>
            navigate("/bookings")
          }
        >
          <h2>📅 Bookings</h2>
          <p>View booking history</p>
        </div>

        <div
          className="feature-card"
          onClick={() =>
            navigate("/owner")
          }
        >
          <h2>📊 Analytics</h2>
          <p>
            Property insights and statistics
          </p>
        </div>

      </div>

    </div>
  )
}

export default Home