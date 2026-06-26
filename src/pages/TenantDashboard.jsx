import { useState } from "react"

function TenantDashboard() {

  const [message, setMessage] = useState("")

  async function getData() {
    const response = await fetch("http://localhost:5000/hello")

    const data = await response.text()

    setMessage(data)
  }
  return (
    <div>
      <h1>Tenant Dashboard</h1>
      

<h3>{message}</h3>

      <h2>Quick Actions</h2>

      <p>🔧 Create Maintenance Request</p>
      <p>🏊 Book Amenities</p>
      <p>📅 View My Bookings</p>

      <hr />

      <h2>My Requests</h2>

      <div>
        <h3>Broken Fan</h3>
        <p>Status: Pending</p>
      </div>

      <hr />

      <div>
        <h3>Leaking Tap</h3>
        <p>Status: Completed</p>
      </div>
    </div>
  )
}

export default TenantDashboard