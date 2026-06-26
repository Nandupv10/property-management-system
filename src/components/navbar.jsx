import { Link, useNavigate } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem("loggedIn")
    navigate("/")
  }

  return (
    <nav className="navbar">

      <div className="logo">
        🏢 PropertyHub
      </div>

      <div className="nav-links">

        <Link to="/home">
          Dashboard
        </Link>

        <Link to="/maintenance">
          Maintenance
        </Link>

        <Link to="/amenities">
          Amenities
        </Link>

        <Link to="/bookings">
          Bookings
        </Link>

        <Link to="/owner">
          Analytics
        </Link>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </nav>
  )
}

export default Navbar