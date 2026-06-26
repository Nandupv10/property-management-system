import { useState, useEffect } from "react"
import "../styles/Maintenance.css"

function Maintenance() {
  const [title, setTitle] = useState("")
  const [requests, setRequests] = useState([])

  useEffect(() => {
    loadRequests()
  }, [])

  async function loadRequests() {
    const response = await fetch("http://localhost:5000/maintenance")
    const data = await response.json()

    setRequests(data)
  }

  async function addRequest() {
    if (title.trim() === "") return

    const newRequest = {
      title: title,
      status: "Pending",
    }

    await fetch("http://localhost:5000/maintenance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRequest),
    })

    await loadRequests()

    setTitle("")
  }

  async function markCompleted(id) {
  await fetch(
    `http://localhost:5000/maintenance/${id}`,
    {
      method: "PUT",
    }
  )

  const updatedRequests = requests.map((item) =>
    item._id === id
      ? { ...item, status: "Completed" }
      : item
  )

  setRequests(updatedRequests)
}

async function deleteRequest(id) {
  await fetch(
    `http://localhost:5000/maintenance/${id}`,
    {
      method: "DELETE",
    }
  )

  await loadRequests()
}

return (
  <div className="maintenance-page">

    <h1 className="page-title">
      🔧 Maintenance Center
    </h1>

    <p className="page-subtitle">
      Manage maintenance requests and track issue status
    </p>

    <div className="add-request-box">
      <input
        type="text"
        placeholder="Enter Issue"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addRequest}>
        Add Request
      </button>
    </div>

    <div className="stats-row">
      <div className="stat-box">
        <h2>{requests.length}</h2>
        <p>Total Requests</p>
      </div>

      <div className="stat-box">
        <h2>
          {
            requests.filter(
              (item) =>
                item.status === "Pending"
            ).length
          }
        </h2>
        <p>Pending</p>
      </div>

      <div className="stat-box">
        <h2>
          {
            requests.filter(
              (item) =>
                item.status === "Completed"
            ).length
          }
        </h2>
        <p>Completed</p>
      </div>
    </div>

    <div className="request-container">
      {requests.map((item) => (
        <div className="card" key={item._id}>

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

          <div className="button-group">
            <button
              onClick={() =>
                markCompleted(item._id)
              }
            >
              Complete
            </button>

            <button
              onClick={() =>
                deleteRequest(item._id)
              }
            >
              Delete
            </button>
          </div>

        </div>
      ))}
    </div>

  </div>
)
}

export default Maintenance