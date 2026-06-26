import { useState, useEffect } from "react"
import "../styles/OwnerDashboard.css"

function OwnerDashboard() {
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
    <div className="owner-page">

      <h1 className="owner-title">
        📊 Owner Dashboard
      </h1>

      <p className="owner-subtitle">
        Property statistics and activity overview
      </p>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>{requests.length}</h2>
          <p>Total Requests</p>
        </div>

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
          <p>Total Bookings</p>
        </div>

      </div>

      <h2 className="recent-title">
        Recent Requests
      </h2>

      <div className="request-grid">

        {requests.map((item) => (
          <div
            className="request-card"
            key={item._id}
          >

            <h3>{item.title}</h3>

            <span
              className={
                item.status === "Completed"
                  ? "status completed"
                  : "status pending"
              }
            >
              {item.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  )
}

export default OwnerDashboard